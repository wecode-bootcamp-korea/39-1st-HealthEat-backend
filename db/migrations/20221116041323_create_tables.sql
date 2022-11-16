-- migrate:up
CREATE TABLE users
(
    `id`          INT             NOT NULL    AUTO_INCREMENT, 
    `name`        VARCHAR(45)     NOT NULL, 
    `phone`       VARCHAR(45)     NOT NULL, 
    `email`       VARCHAR(50)     NOT NULL, 
    `password`    VARCHAR(200)    NOT NULL, 
    `created_at`  TIMESTAMP       NOT NULL		DEFAULT CURRENT_TIMESTAMP, 
    `updated_at`  TIMESTAMP       NULL		    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
     PRIMARY KEY (id),
     UNIQUE KEY `unique_users` (`email`)
);

CREATE TABLE products
(
    `id`             INT               NOT NULL    AUTO_INCREMENT, 
    `category_id`    INT               NOT NULL, 
    `brand_id`       INT               NOT NULL, 
    `name`           VARCHAR(45)       NOT NULL, 
    `information`    varchar(300)      NULL, 
    `thumbnail`      VARCHAR(1000)     NOT NULL, 
    `target_id`      INT               NOT NULL, 
    `price`          DECIMAL(8, 2)     NOT NULL, 
    `made_from`      VARCHAR(45)       NOT NULL, 
    `expiry_date`    VARCHAR(45)       NOT NULL, 
    `stock`          INT               NOT NULL, 
    `discount_rate`  DECIMAL(8, 2)     NULL, 
     PRIMARY KEY (id)
);

CREATE TABLE orders
(
    `id`             INT             NOT NULL    AUTO_INCREMENT, 
    `user_id`        INT             NOT NULL, 
    `price_total`    INT             NOT NULL, 
    `order_comment`  VARCHAR(100)    NULL, 
    `receiver`       VARCHAR(45)     NOT NULL, 
    `address`        VARCHAR(45)     NOT NULL, 
    `created_at`     TIMESTAMP       NOT NULL 	DEFAULT CURRENT_TIMESTAMP, 
    `updated_at`     TIMESTAMP       NULL 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `order_number`   INT             NOT NULL, 
    `order_status`   VARCHAR(45)     NOT NULL, 
     PRIMARY KEY (id)
);

CREATE TABLE carts
(
    `id`          INT               NOT NULL    AUTO_INCREMENT, 
    `user_id`     INT               NOT NULL, 
    `product_id`  INT               NOT NULL, 
    `quantity`    INT               NOT NULL, 
    `price`       DECIMAL(8, 2)     NOT NULL, 
    `created_at`  TIMESTAMP         NOT NULL 		DEFAULT CURRENT_TIMESTAMP, 
    `updated_at`  TIMESTAMP         NULL 		    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
     PRIMARY KEY (id),
     UNIQUE KEY `unique_carts` (`user_id`, `product_id`)
);

CREATE TABLE categories
(
    `id`    INT            NOT NULL    AUTO_INCREMENT, 
    `name`  VARCHAR(45)    NULL, 
     PRIMARY KEY (id)
);

CREATE TABLE reviews
(
    `id`          INT            NOT NULL    AUTO_INCREMENT, 
    `user_id`     INT            NOT NULL, 
    `product_id`  INT            NOT NULL, 
    `comment`     VARCHAR(45)    NOT NULL, 
    `star_point`  INT            NOT NULL, 
    `created_at`  TIMESTAMP      NOT NULL 		DEFAULT CURRENT_TIMESTAMP, 
    `updated_at`  TIMESTAMP      NULL 		    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
     PRIMARY KEY (id)
);

CREATE TABLE likes
(
    `id`          INT    NOT NULL    AUTO_INCREMENT, 
    `product_id`  INT    NOT NULL, 
    `user_id`     INT    NOT NULL, 
     PRIMARY KEY (id),
     UNIQUE KEY `unique_likes` (`product_id`, `user_id`)
);

CREATE TABLE order_items
(
    `id`          INT    NOT NULL    AUTO_INCREMENT, 
    `product_id`  INT    NOT NULL, 
    `order_id`    INT    NOT NULL, 
    `quantity`    INT    NOT NULL, 
     PRIMARY KEY (id)
);

CREATE TABLE brands
(
    `id`    INT            NOT NULL    AUTO_INCREMENT, 
    `name`  VARCHAR(45)    NOT NULL, 
     PRIMARY KEY (id)
);

CREATE TABLE targets
(
    `id`    INT            NOT NULL    AUTO_INCREMENT, 
    `name`  VARCHAR(45)    NOT NULL, 
     PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE users;
DROP TABLE products;
DROP TABLE orders;
DROP TABLE carts;
DROP TABLE categories;
DROP TABLE reviews;
DROP TABLE likes;
DROP TABLE order_items;
DROP TABLE brands;
DROP TABLE targets;
