DROP TABLE IF EXISTS group_by_id

CREATE TABLE group_by_id (
	group_id INT,
	group_name TEXT,
	is_public BOOLEAN,
	PRIMARY KEY ((group_id), group_name)
) WITH CLUSTERING ORDER BY (group_name DESC)

INSERT INTO "group_by_id" (group_id, group_name, is_public) VALUES (1, 'Gera grupe', true);
INSERT INTO "group_by_id" (group_id, group_name, is_public) VALUES (2, 'Ne tokia gera grupe', true);
INSERT INTO "group_by_id" (group_id, group_name, is_public) VALUES (3, 'Geriausia privati grupe', false);