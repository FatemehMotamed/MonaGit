# main.py
import tkinter as tk
from ui.user_view import UserView
from ui.admin_view import AdminView

root = tk.Tk()
root.title("Library App")

def open_user_view():
    user_win = tk.Toplevel(root)
    UserView(user_win)

def open_admin_view():
    admin_win = tk.Toplevel(root)
    AdminView(admin_win)

tk.Button(root, text="📚 بخش کاربر", command=open_user_view, font=("Arial", 14)).pack(pady=10)
tk.Button(root, text="⚙️ بخش ادمین", command=open_admin_view, font=("Arial", 14)).pack(pady=10)

root.mainloop()
