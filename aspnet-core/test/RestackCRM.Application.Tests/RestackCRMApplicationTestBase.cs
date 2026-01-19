using Volo.Abp.Modularity;

namespace RestackCRM;

public abstract class RestackCRMApplicationTestBase<TStartupModule> : RestackCRMTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
