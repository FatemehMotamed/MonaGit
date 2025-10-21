
# db/book_model.py
from .base_model import BaseModel

class BookModel(BaseModel):
    table_name = "books"

    def get_books_with_relations(self):
        query = """
        SELECT b.id, b.title, b.image_path, a.name as author, p.name as publisher, c.name as category, b.description
        FROM books b
        LEFT JOIN authors a ON b.author_id=a.id
        LEFT JOIN publishers p ON b.publisher_id=p.id
        LEFT JOIN categories c ON b.category_id=c.id
        """
        return self.fetchall(query)
