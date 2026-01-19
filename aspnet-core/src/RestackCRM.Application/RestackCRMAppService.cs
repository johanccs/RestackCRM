using System;
using System.Collections.Generic;
using System.Text;
using RestackCRM.Localization;
using Volo.Abp.Application.Services;

namespace RestackCRM;

/* Inherit your application services from this class.
 */
public abstract class RestackCRMAppService : ApplicationService
{
    protected RestackCRMAppService()
    {
        LocalizationResource = typeof(RestackCRMResource);
    }
}
