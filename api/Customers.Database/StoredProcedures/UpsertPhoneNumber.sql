CREATE PROCEDURE [dbo].[UpsertPhoneNumber]
	@id int = 0,
	@number NVARCHAR(15),
	@address int
AS
	
	IF (@id = 0)
	BEGIN
		INSERT INTO dbo.PhoneNumbers([Number], [AddressId])
		VALUES (@number, @address);
	END
	ELSE
	BEGIN
		UPDATE dbo.PhoneNumbers
		SET
			[Number] = @number
		where [Id] = @id;

	END