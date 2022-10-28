/*
  Warnings:

  - Added the required column `address` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "address" TEXT NOT NULL;
