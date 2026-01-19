using RestackCRM.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace RestackCRM.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(RestackCRMEntityFrameworkCoreModule),
    typeof(RestackCRMApplicationContractsModule)
    )]
public class RestackCRMDbMigratorModule : AbpModule
{
}
