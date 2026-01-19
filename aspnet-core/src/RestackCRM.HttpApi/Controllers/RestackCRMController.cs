using RestackCRM.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace RestackCRM.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class RestackCRMController : AbpControllerBase
{
    protected RestackCRMController()
    {
        LocalizationResource = typeof(RestackCRMResource);
    }
}
