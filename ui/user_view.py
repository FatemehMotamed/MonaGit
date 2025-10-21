# ui/user_view.py
import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk
from .base_window import BaseWindow
from .book_single_view import BookSingleView
from db.book_model import BookModel

class UserView(BaseWindow):
    def __init__(self, master):
        super().__init__(master, "لیست کتاب‌ها")
        self.book_model = BookModel()
        books = self.book_model.get_books_with_relations()
        for idx, book in enumerate(books):
            img = Image.open(book[2])
            img = img.resize((100,150))
            photo = ImageTk.PhotoImage(img)
            btn = tk.Button(self.frame, image=photo, text=book[1], compound="top",
                            command=lambda b=book: self.show_book(b))
            btn.image = photo
            btn.grid(row=idx//5, column=idx%5, padx=5, pady=5)

    def show_book(self, book):
        new_win = tk.Toplevel(self.master)
        BookSingleView(new_win, book)
