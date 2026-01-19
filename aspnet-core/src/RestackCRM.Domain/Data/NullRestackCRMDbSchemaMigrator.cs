using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace RestackCRM.Data;

/* This is used if database provider does't define
 * IRestackCRMDbSchemaMigrator implementation.
 */
public class NullRestackCRMDbSchemaMigrator : IRestackCRMDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
