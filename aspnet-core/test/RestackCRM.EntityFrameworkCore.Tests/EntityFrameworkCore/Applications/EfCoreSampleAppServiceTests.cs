using RestackCRM.Samples;
using Xunit;

namespace RestackCRM.EntityFrameworkCore.Applications;

[Collection(RestackCRMTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<RestackCRMEntityFrameworkCoreTestModule>
{

}
