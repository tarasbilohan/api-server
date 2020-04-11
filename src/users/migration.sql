-- --------------------------------------------------------------------------------
-- Create table `users`
-- --------------------------------------------------------------------------------

CREATE TABLE `users` (
    `id` Int(10) UNSIGNED AUTO_INCREMENT NOT NULL,
    `email` VarChar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
    `first_name` VarChar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
    `last_name` VarChar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
    `created_at` DateTime NULL,
    `updated_at` DateTime NULL,
    `deleted_at` DateTime NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `country_email_unique` UNIQUE(`email`)
)
CHARACTER SET = utf8
COLLATE = utf8_unicode_ci
ENGINE = InnoDB
AUTO_INCREMENT = 0;

-- --------------------------------------------------------------------------------
-- Populate table `users`
-- --------------------------------------------------------------------------------



