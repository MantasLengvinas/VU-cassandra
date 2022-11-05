USE "Chat";
DROP TABLE IF EXISTS message_by_author;
CREATE TABLE IF NOT EXISTS message_by_author(
    message_id int,
    chatroom_id int,
    author_id int,
    content text,
    sent timestamp,
    PRIMARY KEY(author_id, message_id)
) WITH CLUSTERING ORDER BY(message_id ASC);

INSERT INTO message_by_author (message_id, chatroom_id, author_id, content, sent) VALUES (1, 1, 1, 'Labas, kolega', '2022-11-05 13:00:00');
INSERT INTO message_by_author (message_id, chatroom_id, author_id, content, sent) VALUES (2, 1, 2, 'Pametesi iki oro uosto?', '2022-11-05 13:05:00');
INSERT INTO message_by_author (message_id, chatroom_id, author_id, content, sent) VALUES (3, 1, 3, 'Sesk, man pakeliui', '2022-11-05 13:15:00');
INSERT INTO message_by_author (message_id, chatroom_id, author_id, content, sent) VALUES (4, 2, 1, 'Aciu, nebloga masina', '2022-11-05 13:25:00');
INSERT INTO message_by_author (message_id, chatroom_id, author_id, content, sent) VALUES (5, 2, 1, 'Nusprendei isbandyti laime musu kraste?', '2022-11-05 13:45:00');
INSERT INTO message_by_author (message_id, chatroom_id, author_id, content, sent) VALUES (6, 3, 4, 'Po zenklo i desine suk, parodysiu kur uzsakymus imt', '2022-11-05 13:55:00');
INSERT INTO message_by_author (message_id, chatroom_id, author_id, content, sent) VALUES (7, 4, 4, 'Na o as isvaziuoju', '2022-11-05 14:10:00');
INSERT INTO message_by_author (message_id, chatroom_id, author_id, content, sent) VALUES (8, 1, 5, 'O tau gal geriau pasiseks, sutaupysi pinigu, firma savo ikursi', '2022-11-06 12:00:00');
