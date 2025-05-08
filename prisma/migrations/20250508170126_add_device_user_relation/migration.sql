-- CreateTable
CREATE TABLE "Device" (
    "id_device" TEXT NOT NULL,
    "name_device" TEXT NOT NULL,
    "status_d" TEXT NOT NULL,
    "update_date" TIMESTAMP(3),
    "userId" TEXT,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id_device")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_u" TEXT NOT NULL,
    "device_id" TEXT,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locations" (
    "id" SERIAL NOT NULL,
    "id_device" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "date_l" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceConfiguration" (
    "id" SERIAL NOT NULL,
    "id_device" TEXT NOT NULL,
    "device_name" TEXT NOT NULL,
    "mac_address" TEXT NOT NULL,
    "channel" INTEGER NOT NULL,

    CONSTRAINT "DeviceConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" SERIAL NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "name_usuario_invitado" TEXT NOT NULL,
    "id_device" TEXT NOT NULL,
    "type_connection" TEXT NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "id_device" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "date_r" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_device_id_key" ON "User"("device_id");

-- CreateIndex
CREATE UNIQUE INDEX "DeviceConfiguration_id_device_key" ON "DeviceConfiguration"("id_device");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_id_device_fkey" FOREIGN KEY ("id_device") REFERENCES "Device"("id_device") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceConfiguration" ADD CONSTRAINT "DeviceConfiguration_id_device_fkey" FOREIGN KEY ("id_device") REFERENCES "Device"("id_device") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_id_device_fkey" FOREIGN KEY ("id_device") REFERENCES "Device"("id_device") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_id_device_fkey" FOREIGN KEY ("id_device") REFERENCES "Device"("id_device") ON DELETE CASCADE ON UPDATE CASCADE;
