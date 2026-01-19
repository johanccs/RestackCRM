using RestackCRM.Samples;
using Xunit;

namespace RestackCRM.EntityFrameworkCore.Domains;

[Collection(RestackCRMTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<RestackCRMEntityFrameworkCoreTestModule>
{

}
