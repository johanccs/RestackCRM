using System.Threading.Tasks;

namespace RestackCRM.Data;

public interface IRestackCRMDbSchemaMigrator
{
    Task MigrateAsync();
}
