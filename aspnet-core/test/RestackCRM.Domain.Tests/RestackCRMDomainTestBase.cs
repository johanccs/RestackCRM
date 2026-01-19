using Volo.Abp.Modularity;

namespace RestackCRM;

/* Inherit from this class for your domain layer tests. */
public abstract class RestackCRMDomainTestBase<TStartupModule> : RestackCRMTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
