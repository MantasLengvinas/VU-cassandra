USE "Chat";
DROP TABLE IF EXISTS user_by_phone;
CREATE TABLE IF NOT EXISTS user_by_phone(
    user_id int,
    username text,
    email text,
    phone text,
    PRIMARY KEY(phone, user_id)
) WITH CLUSTERING ORDER BY(user_id ASC);

INSERT INTO user_by_phone (user_id, username, email, phone) VALUES (1, 'Gustas', 'gustas@gustas.com', '+37000000000');
INSERT INTO user_by_phone (user_id, username, email, phone) VALUES (2, 'Gst', 'gst@gst.com', '+37000000001');
INSERT INTO user_by_phone (user_id, username, email, phone) VALUES (3, 'Mantas', 'Mantas@Mantas.com', '+37000000002');
INSERT INTO user_by_phone (user_id, username, email, phone) VALUES (4, 'Mnts', 'mnts@mnts.com', '+37000000003');
INSERT INTO user_by_phone (user_id, username, email, phone) VALUES (5, 'Mnts', 'kitsmnts@mnts.com', '+37000000004');
INSERT INTO user_by_phone (user_id, username, email, phone) VALUES (6, 'Mntss', 'kitsmnts@mnts.com', '+37000000004');