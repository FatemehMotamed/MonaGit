# db/base_model.py
from .db_connection import DBConnection

class BaseModel(DBConnection):
    table_name = ""

    def all(self):
        return self.fetchall(f"SELECT * FROM {self.table_name}")

    def get(self, record_id):
        return self.fetchone(f"SELECT * FROM {self.table_name} WHERE id=%s", (record_id,))
