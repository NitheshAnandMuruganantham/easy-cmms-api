import {
  AppConfigurationClient,
  AppConfigurationClientOptions,
} from '@azure/app-configuration';
import { EnvironmentCredential, TokenCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { URI } from 'vscode-uri';

export declare type Options = {
  appConfigConnectionString?: string;

  appConfigOptions?: AppConfigurationClientOptions;

  endpoint?: string;

  tokenCredential?: TokenCredential;

  labelFilter?: string;

  includeKeyVaultSecrets?: boolean;

  ignore?: string[];

  ignoreIfDefined?: string[];
};

export const envAppConfiguration = async (options: Options) => {
  let appConfig: AppConfigurationClient;

  if (options.tokenCredential && options.endpoint) {
    appConfig = new AppConfigurationClient(
      options.endpoint,
      options.tokenCredential,
      options.appConfigOptions,
    );
  } else if (options.appConfigConnectionString) {
    appConfig = new AppConfigurationClient(
      options.appConfigConnectionString,
      options.appConfigOptions,
    );
  } else {
    throw 'Invalid arguments';
  }

  const settings = appConfig.listConfigurationSettings({
    labelFilter: options.labelFilter,
  });

  const keyVaultValues: { key: string; uri: URI }[] = [];

  let setting = await settings.next();
  while (setting.done === false) {
    if (setting.value) {
      if (
        !(options.ignore && options.ignore.indexOf(setting.value.key) !== -1)
      ) {
        if (
          !(
            options.ignoreIfDefined &&
            options.ignoreIfDefined.indexOf(setting.value.key) !== -1 &&
            process.env[setting.value.key]
          )
        ) {
          if (
            options.includeKeyVaultSecrets === true &&
            setting.value.contentType ===
              'application/vnd.microsoft.appconfig.keyvaultref+json;charset=utf-8' &&
            setting.value.value
          ) {
            const uri = URI.parse(JSON.parse(setting.value.value).uri);
            keyVaultValues.push({ key: setting.value.key, uri });
          }
          if (
            options.includeKeyVaultSecrets === false &&
            setting.value.contentType ===
              'application/vnd.microsoft.appconfig.keyvaultref+json;charset=utf-8'
          ) {
          } else {
            process.env[setting.value.key] = setting.value.value;
          }
        }
      }
    }
    setting = await settings.next();
  }

  if (options.includeKeyVaultSecrets && keyVaultValues.length > 0) {
    const credential = new EnvironmentCredential();

    while (keyVaultValues.length != 0) {
      const val = keyVaultValues.pop();
      if (val) {
        const client = new SecretClient(
          val.uri.scheme + '://' + val.uri.authority,
          options.tokenCredential ? options.tokenCredential : credential,
        );
        process.env[val.key] = (
          await client.getSecret(val.uri.path.split('/').pop() as string)
        ).value;
      }
    }
  }
};
