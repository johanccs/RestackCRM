using Xunit;

namespace RestackCRM.EntityFrameworkCore;

[CollectionDefinition(RestackCRMTestConsts.CollectionDefinitionName)]
public class RestackCRMEntityFrameworkCoreCollection : ICollectionFixture<RestackCRMEntityFrameworkCoreFixture>
{

}
