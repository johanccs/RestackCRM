using Volo.Abp.Modularity;

namespace RestackCRM;

[DependsOn(
    typeof(RestackCRMDomainModule),
    typeof(RestackCRMTestBaseModule)
)]
public class RestackCRMDomainTestModule : AbpModule
{

}
