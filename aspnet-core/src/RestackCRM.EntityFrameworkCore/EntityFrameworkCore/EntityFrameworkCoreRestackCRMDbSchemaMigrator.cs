using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RestackCRM.Data;
using Volo.Abp.DependencyInjection;

namespace RestackCRM.EntityFrameworkCore;

public class EntityFrameworkCoreRestackCRMDbSchemaMigrator
    : IRestackCRMDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreRestackCRMDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the RestackCRMDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<RestackCRMDbContext>()
            .Database
            .MigrateAsync();
    }
}
