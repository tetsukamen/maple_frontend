import { Values } from 'src/app/core/models/fields';

const apiVersions: Values<string> = {
  v1: 'v1',
  // v2: 'v2'
}

const apiBaseUrls: Values<string> = {
  [apiVersions.v1]: 'http://localhost:3000/',
  // [apiVersions.v2]: 'api/v2'
}

export const environment = {
  production: false,
  apiVersions: apiVersions,
  defaultApiVersions: apiVersions.v1,
  apiBaseUrls: apiBaseUrls,
};
