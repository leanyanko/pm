CREATE TABLE documents (
    document_id SERIAL PRIMARY KEY,
    investor_id INTEGER NOT NULL,
    full_filename VARCHAR(50),
    FOREIGN KEY (investor_id) REFERENCES investors(ID)
)