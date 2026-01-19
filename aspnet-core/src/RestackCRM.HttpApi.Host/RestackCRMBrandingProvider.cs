using Microsoft.Extensions.Localization;
using RestackCRM.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace RestackCRM;

[Dependency(ReplaceServices = true)]
public class RestackCRMBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<RestackCRMResource> _localizer;

    public RestackCRMBrandingProvider(IStringLocalizer<RestackCRMResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
