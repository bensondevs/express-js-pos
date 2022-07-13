/*
  Warnings:

  - You are about to drop the column `email_token` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailToken]` on the table `Token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastUpdateAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Token` DROP FOREIGN KEY `Token_user_id_fkey`;

-- DropIndex
DROP INDEX `Token_email_token_key` ON `Token`;

-- AlterTable
ALTER TABLE `Token` DROP COLUMN `email_token`,
    DROP COLUMN `user_id`,
    ADD COLUMN `emailToken` VARCHAR(191) NULL,
    ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `created_at`,
    DROP COLUMN `last_updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `lastUpdateAt` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Token_emailToken_key` ON `Token`(`emailToken`);

-- AddForeignKey
ALTER TABLE `Token` ADD CONSTRAINT `Token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
