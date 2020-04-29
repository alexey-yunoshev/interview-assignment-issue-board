    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR NOT NULL
    );

    CREATE TABLE bugs (
        id VARCHAR PRIMARY KEY,
        title VARCHAR NOT NULL,
        assignee_id INTEGER REFERENCES users(id)
    );
