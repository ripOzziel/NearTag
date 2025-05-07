CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(25) NOT NULL,
    phone_number VARCHAR (13) not NULL,
    email VARCHAR(30) NOT NULL,
    password_u VARCHAR(10) NOT NULL,
    device_id UUID,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP,
    FOREIGN KEY (device_id) REFERENCES devices(id_device) ON DELETE SET NULL
);
CREATE TABLE devices (
    id_device UUID PRIMARY KEY DEFAULT,
    name_device VARCHAR(20) NOT NULL,
    status_d VARCHAR (10) not NULL,
    update_date TIMESTAMP
);


CREATE TABLE locations (
    id_device UUID,
    longitude DOUBLE PRECISION NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    date_l TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_device) REFERENCES devices(id_device) ON DELETE SET NULL
);

CREATE TABLE device_configuration (
    id_device UUID ,
    device_name VARCHAR(25) NOT NULL,
    mac_address VARCHAR(20) NOT NULL,
    channel INTEGER NOT NULL,
    FOREIGN KEY (id_device) REFERENCES devices(id_device) ON DELETE SET NULL
);

CREATE TABLE connection (
    id_usuario UUID NOT NULL,
    name_usuario_invitado VARCHAR NOT NULL,
    id_device UUID NOT NULL,
    type_connection VARCHAR(10) CHECK (type_connection IN ('direct', 'hint')),
    FOREIGN KEY (id_usuario) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (id_device) REFERENCES devices(id_device) ON DELETE CASCADE
);

CREATE TABLE record (
    id_device VARCHAR NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    date_r TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
