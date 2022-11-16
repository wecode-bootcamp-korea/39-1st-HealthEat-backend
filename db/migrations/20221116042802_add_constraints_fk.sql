-- migrate:up
-- order(주문)
ALTER TABLE orders
    ADD CONSTRAINT FK_order_user_id_users_id FOREIGN KEY (user_id)
        REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
-- carts(장바구니)
ALTER TABLE carts
    ADD CONSTRAINT FK_carts_user_id_users_id FOREIGN KEY (user_id)
        REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE carts
    ADD CONSTRAINT FK_carts_product_id_products_id FOREIGN KEY (product_id)
        REFERENCES products (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- categories
ALTER TABLE products
    ADD CONSTRAINT FK_products_category_id_products_id FOREIGN KEY (category_id)
        REFERENCES categories (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- reviews
ALTER TABLE reviews
    ADD CONSTRAINT FK_reviews_user_id_users_id FOREIGN KEY (user_id)
        REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE reviews
    ADD CONSTRAINT FK_reviews_product_id_products_id FOREIGN KEY (product_id)
        REFERENCES products (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- likes
ALTER TABLE likes
    ADD CONSTRAINT FK_likes_user_id_users_id FOREIGN KEY (user_id)
        REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE likes
    ADD CONSTRAINT FK_likes_product_id_products_id FOREIGN KEY (product_id)
        REFERENCES products (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- order_items
ALTER TABLE order_items
    ADD CONSTRAINT FK_order_items_order_id_orders_id FOREIGN KEY (order_id)
        REFERENCES orders (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE order_items
    ADD CONSTRAINT FK_order_items_product_id_products_id FOREIGN KEY (product_id)
        REFERENCES products (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- brands
ALTER TABLE products
    ADD CONSTRAINT FK_products_brand_id_products_id FOREIGN KEY (brand_id)
        REFERENCES brands (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- targets
ALTER TABLE products
    ADD CONSTRAINT FK_products_target_id_products_id FOREIGN KEY (target_id)
        REFERENCES targets (id) ON DELETE RESTRICT ON UPDATE RESTRICT;


