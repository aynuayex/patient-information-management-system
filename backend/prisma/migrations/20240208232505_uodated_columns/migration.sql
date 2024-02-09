/*
  Warnings:

  - You are about to drop the column `photo` on the `Patient` table. All the data in the column will be lost.
  - Made the column `email` on table `Patient` required. This step will fail if there are existing NULL values in that column.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Patient] ALTER COLUMN [email] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Patient] ALTER COLUMN [age] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Patient] DROP COLUMN [photo];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
