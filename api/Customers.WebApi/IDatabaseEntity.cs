namespace Customers.WebApi
{
    public interface IDatabaseEntity
    {
        int Id { get; }
        List<KeyValuePair<IDatabaseEntity, IDatabaseEntity>> GetOneRelations(IDatabaseEntity newVal);
        List<KeyValuePair<object, object>> GetManyRelations(IDatabaseEntity newVal);
    }
}
