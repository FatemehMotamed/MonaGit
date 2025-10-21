CREATE DATABASE IF NOT EXISTS library CHARACTER SET utf8mb4;
USE library;

CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE publishers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INT,
    publisher_id INT,
    category_id INT,
    image_path VARCHAR(255),
    description TEXT,
    FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE SET NULL,
    FOREIGN KEY (publisher_id) REFERENCES publishers(id) ON DELETE SET NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- داده نمونه
INSERT INTO authors (name) VALUES ('J.K. Rowling'), ('George R.R. Martin'), ('J.R.R. Tolkien');
INSERT INTO publishers (name) VALUES ('Bloomsbury'), ('Bantam Books'), ('HarperCollins');
INSERT INTO categories (name) VALUES ('Fantasy'), ('Science Fiction'), ('Mystery');

INSERT INTO books (title, author_id, publisher_id, category_id, image_path, description)
VALUES
('Harry Potter and the Philosopher''s Stone', 1, 1, 1, 'images/hp1.jpg', 'The first book in Harry Potter series.'),
('A Game of Thrones', 2, 2, 1, 'images/got1.jpg', 'The first book in A Song of Ice and Fire series.'),
('The Lord of the Rings', 3, 3, 1, 'images/lotr.jpg', 'Epic fantasy adventure.');
