using Volo.Abp.Settings;

namespace RestackCRM.Settings;

public class RestackCRMSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(RestackCRMSettings.MySetting1));
    }
}
