BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Patient] (
    [id] NVARCHAR(1000) NOT NULL,
    [photo] NVARCHAR(1000),
    [fullName] NVARCHAR(1000) NOT NULL,
    [phone] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000),
    [dateOfVisit] DATETIME2 NOT NULL CONSTRAINT [Patient_dateOfVisit_df] DEFAULT CURRENT_TIMESTAMP,
    [doctor] NVARCHAR(1000) NOT NULL,
    [injury] NVARCHAR(1000) NOT NULL,
    [age] INT NOT NULL,
    [sex] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Patient_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH