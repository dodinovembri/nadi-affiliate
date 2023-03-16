```sql
CREATE TABLE `prospective_customer`(
	`id` varchar(36) DEFAULT (UUID()) PRIMARY KEY,
	`status` tinyint NOT NULL,
	`created_at` datetime NOT NULL,
	`modified_at` datetime NULL,
	`creator_id` varchar(36) NULL,
	`modifier_id` varchar(36) NULL,
	`customer_type_id` varchar(36) null,
	`name` varchar(256) null,
	`phone_number` varchar(15) null,
	`address` varchar(256) null
)
```