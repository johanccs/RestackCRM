using Volo.Abp.Modularity;

namespace RestackCRM;

[DependsOn(
    typeof(RestackCRMApplicationModule),
    typeof(RestackCRMDomainTestModule)
)]
public class RestackCRMApplicationTestModule : AbpModule
{

}
