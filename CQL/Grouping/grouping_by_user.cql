DROP TABLE IF EXISTS grouping_by_user

CREATE TABLE grouping_by_user (
	grouping_id INT,
	group_id INT,
	user_id INT,
	PRIMARY KEY((user_id), grouping_id)
) WITH CLUSTERING ORDER BY (grouping_id DESC)

INSERT INTO grouping_by_user (grouping_id, group_id, user_id) VALUES (1, 1, 1)
INSERT INTO grouping_by_user (grouping_id, group_id, user_id) VALUES (2, 1, 2)
INSERT INTO grouping_by_user (grouping_id, group_id, user_id) VALUES (3, 1, 3)
INSERT INTO grouping_by_user (grouping_id, group_id, user_id) VALUES (4, 1, 5)
INSERT INTO grouping_by_user (grouping_id, group_id, user_id) VALUES (5, 2, 4)
INSERT INTO grouping_by_user (grouping_id, group_id, user_id) VALUES (6, 3, 4)