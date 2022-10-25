using System.Reflection;

namespace Customers.WebApi.Models
{
	public class BaseModel
	{
		public ObjectState ObjectState { get; set; } = ObjectState.Unchanged;
		
    }
}
