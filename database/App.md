```sql
CREATE TABLE `app`(
	`id` varchar(36) DEFAULT (UUID()) PRIMARY KEY,
	`status` tinyint NOT NULL,
	`created_at` datetime NOT NULL,
	`modified_at` datetime NULL,
	`creator_id` varchar(36) NULL,
	`modifier_id` varchar(36) NULL,
	`app_type_id` varchar(36) null,
	`name` varchar(256) null,
	`image` varchar(256) null,
	`url` varchar(256) null
)
```