# ui/admin_view.py
import tkinter as tk
from tkinter import ttk, filedialog, messagebox
from .base_window import BaseWindow
from db.book_model import BookModel
from db.author_model import AuthorModel
from db.publisher_model import PublisherModel
from db.category_model import CategoryModel
import shutil, os

class AdminView(BaseWindow):
    def __init__(self, master):
        super().__init__(master, "مدیریت کتاب‌ها")
        self.book_model = BookModel()
        self.author_model = AuthorModel()
        self.publisher_model = PublisherModel()
        self.category_model = CategoryModel()

        # بخش جستجو
        search_frame = tk.Frame(self.frame)
        search_frame.pack(pady=5, fill="x")
        tk.Label(search_frame, text="جستجو: ").pack(side="left")
        self.search_var = tk.StringVar()
        tk.Entry(search_frame, textvariable=self.search_var).pack(side="left", expand=True, fill="x")
        tk.Button(search_frame, text="🔍", command=self.search_books).pack(side="left", padx=5)
        tk.Button(search_frame, text="➕ افزودن کتاب", command=self.add_book_form).pack(side="left")

        # جدول Treeview
        columns = ("id", "title", "author", "publisher", "category", "action")
        self.tree = ttk.Treeview(self.frame, columns=columns, show="headings", height=15)
        for col in columns:
            self.tree.heading(col, text=col)
            if col == "action":
                self.tree.column(col, width=70, anchor="center")
            else:
                self.tree.column(col, width=120)
        self.tree.pack(fill="both", expand=True)
        self.tree.bind("<Double-1>", self.edit_book_form)

        self.load_books()

    def load_books(self, filter_text=""):
        for i in self.tree.get_children():
            self.tree.delete(i)
        books = self.book_model.get_books_with_relations()
        for b in books:
            if filter_text.lower() in b[1].lower():
                self.tree.insert("", "end", values=(b[0], b[1], b[3], b[4], b[5], "🗑"))

    def search_books(self):
        self.load_books(self.search_var.get())

    def add_book_form(self):
        self.book_form_window(title="افزودن کتاب")

    def edit_book_form(self, event):
        selected = self.tree.selection()
        if not selected:
            return

        col = self.tree.identify_column(event.x)
        if col == "#6":  # ستون "action" => حذف
            book_id = self.tree.item(selected[0])["values"][0]
            self.delete_book(book_id)
        else:
            book_id = self.tree.item(selected[0])["values"][0]
            book = self.book_model.get(book_id)
            self.book_form_window(title="ویرایش کتاب", book=book)

    def delete_book(self, book_id):
        if messagebox.askyesno("حذف کتاب", "آیا مطمئن هستید؟"):
            # گرفتن مسیر تصویر قبل از حذف
            book = self.book_model.get(book_id)
            image_path = book[5] if book and len(book) > 5 else None

            # حذف از دیتابیس
            self.book_model.execute("DELETE FROM books WHERE id=%s", (book_id,))
            
            # حذف تصویر در صورت وجود
            if image_path and os.path.isfile(image_path):
                try:
                    os.remove(image_path)
                except Exception as e:
                    print(f"خطا در حذف تصویر: {e}")

            self.load_books()
            messagebox.showinfo("حذف", "کتاب و تصویرش حذف شد.")

    def book_form_window(self, title, book=None):
        win = tk.Toplevel(self.master)
        win.title(title)

        tk.Label(win, text="عنوان:").grid(row=0, column=0)
        title_var = tk.StringVar(value=book[1] if book else "")
        tk.Entry(win, textvariable=title_var).grid(row=0, column=1)

        tk.Label(win, text="نویسنده:").grid(row=1, column=0)
        author_cb = ttk.Combobox(win, values=[a[1] for a in self.author_model.all()])
        author_cb.grid(row=1, column=1)
        if book:
            author_cb.set(self.author_model.get(book[2])[1])

        tk.Label(win, text="ناشر:").grid(row=2, column=0)
        publisher_cb = ttk.Combobox(win, values=[p[1] for p in self.publisher_model.all()])
        publisher_cb.grid(row=2, column=1)
        if book:
            publisher_cb.set(self.publisher_model.get(book[3])[1])

        tk.Label(win, text="دسته:").grid(row=3, column=0)
        cat_cb = ttk.Combobox(win, values=[c[1] for c in self.category_model.all()])
        cat_cb.grid(row=3, column=1)
        if book:
            cat_cb.set(self.category_model.get(book[4])[1])

        tk.Label(win, text="توضیحات:").grid(row=4, column=0)
        desc_var = tk.StringVar(value=book[6] if book else "")
        tk.Entry(win, textvariable=desc_var).grid(row=4, column=1)

        img_path_var = tk.StringVar(value=book[5] if book else "")
        tk.Button(win, text="انتخاب تصویر", command=lambda: self.select_image(img_path_var)).grid(row=5, column=0)
        tk.Label(win, textvariable=img_path_var).grid(row=5, column=1)

        def save():
            if not title_var.get():
                messagebox.showerror("خطا", "عنوان کتاب الزامی است")
                return

            # مسیر نهایی تصویر
            final_img_path = img_path_var.get()
            if os.path.isfile(final_img_path):
                new_path = os.path.join("images", os.path.basename(final_img_path))
                # فقط اگر مسیر مبدأ و مقصد متفاوت باشند، کپی انجام شود
                if os.path.abspath(final_img_path) != os.path.abspath(new_path):
                    shutil.copy(final_img_path, new_path)
                final_img_path = new_path

            # گرفتن آیدی‌ها
            author_id = self.author_model.fetchone("SELECT id FROM authors WHERE name=%s", (author_cb.get(),))[0]
            pub_id = self.publisher_model.fetchone("SELECT id FROM publishers WHERE name=%s", (publisher_cb.get(),))[0]
            cat_id = self.category_model.fetchone("SELECT id FROM categories WHERE name=%s", (cat_cb.get(),))[0]

            if book:
                self.book_model.execute("""
                UPDATE books SET title=%s, author_id=%s, publisher_id=%s, category_id=%s, image_path=%s, description=%s
                WHERE id=%s
                """, (title_var.get(), author_id, pub_id, cat_id, final_img_path, desc_var.get(), book[0]))
            else:
                self.book_model.execute("""
                INSERT INTO books (title, author_id, publisher_id, category_id, image_path, description)
                VALUES (%s,%s,%s,%s,%s,%s)
                """, (title_var.get(), author_id, pub_id, cat_id, final_img_path, desc_var.get()))

            self.load_books()
            win.destroy()

        tk.Button(win, text="ذخیره", command=save).grid(row=6, column=0, columnspan=2)

    def select_image(self, var):
        file_path = filedialog.askopenfilename(filetypes=[("Image files", "*.jpg;*.png")])
        if file_path:
            var.set(file_path)
