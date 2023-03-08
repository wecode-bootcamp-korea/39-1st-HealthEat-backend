-- migrate:up
ALTER TABLE users ADD refresh_token text NOT NULL;


-- migrate:down

