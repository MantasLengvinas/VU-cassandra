DROP TABLE IF EXISTS chatroom

CREATE TABLE chatroom (
	chatroom_id INT,
	chatroom_name TEXT,
	group_id INT,
	topic TEXT,
	text_only BOOLEAN,
	PRIMARY KEY((chatroom_id), chatroom_name)
) WITH CLUSTERING ORDER BY (chatroom_name DESC)

INSERT INTO chatroom (chatroom_id, chatroom_name, group_id, topic, text_only) VALUES (1, 'Laboratoriniai', 1, 'Analize', false)
INSERT INTO chatroom (chatroom_id, chatroom_name, group_id, topic, text_only) VALUES (2, 'Atsiskaitymai', 1, 'Pasitarimas', false)
INSERT INTO chatroom (chatroom_id, chatroom_name, group_id, topic, text_only) VALUES (3, 'Pokalbiai', 2, 'Juokuciai', true)
INSERT INTO chatroom (chatroom_id, chatroom_name, group_id, topic, text_only) VALUES (4, 'Automobiliai', 3, 'Servizai', true)