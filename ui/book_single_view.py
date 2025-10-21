# ui/book_single_view.py
import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk
from .base_window import BaseWindow

class BookSingleView(BaseWindow):
    def __init__(self, master, book):
        super().__init__(master, book[1])
        img = Image.open(book[2]).resize((200,300))
        photo = ImageTk.PhotoImage(img)
        tk.Label(self.frame, image=photo).pack()
        tk.Label(self.frame, text=f"عنوان: {book[1]}").pack()
        tk.Label(self.frame, text=f"نویسنده: {book[3]}").pack()
        tk.Label(self.frame, text=f"ناشر: {book[4]}").pack()
        tk.Label(self.frame, text=f"دسته‌بندی: {book[5]}").pack()
        tk.Label(self.frame, text=f"توضیحات: {book[6]}").pack()
        self.frame.image = photo
