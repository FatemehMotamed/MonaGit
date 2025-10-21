# ui/base_window.py
import tkinter as tk

class BaseWindow:
    def __init__(self, master, title):
        self.master = master
        self.master.title(title)
        self.frame = tk.Frame(master, padx=10, pady=10)
        self.frame.pack()
