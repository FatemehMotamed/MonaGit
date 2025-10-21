# db/db_connection.py
import pymysql
class DBConnection:
    def __init__(self):
        self.host = "localhost"
        self.user = "root"
        self.password = "root"
        self.database = "bookstore"
        self.conn = None

    def connect(self):
        self.conn = pymysql.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database,
            charset="utf8mb4"
        )
        return self.conn

    def execute(self, query, params=None):
        conn = self.connect()
        with conn.cursor() as cursor:
            cursor.execute(query, params or ())
            conn.commit()
            return cursor

    def fetchall(self, query, params=None):
        with self.execute(query, params) as cursor:
            return cursor.fetchall()

    def fetchone(self, query, params=None):
        with self.execute(query, params) as cursor:
            return cursor.fetchone()
