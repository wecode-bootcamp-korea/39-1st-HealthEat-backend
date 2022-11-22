-- migrate:up
ALTER TABLE categories ADD category_icon VARCHAR(1000) NOT NULL;

-- migrate:down

