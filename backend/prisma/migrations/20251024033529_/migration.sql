/*
  Warnings:

  - You are about to drop the column `umur` on the `siswa` table. All the data in the column will be lost.
  - Added the required column `alamat` to the `Siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jurusan` to the `Siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tglLahir` to the `Siswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `siswa` DROP COLUMN `umur`,
    ADD COLUMN `alamat` VARCHAR(191) NOT NULL,
    ADD COLUMN `jurusan` VARCHAR(191) NOT NULL,
    ADD COLUMN `tglLahir` DATETIME(3) NOT NULL;
