import { authenticate } from '@google-cloud/local-auth';
import loadSavedCredentialsIfExists from './loadSavedCredentialsIfExists.js';
import { CREDENTIALS_PATH, SCOPES } from './configVariables.js';

import saveCredentials from './saveCredentials.js';

export default async function authorize() {
  let client = await loadSavedCredentialsIfExists();

  if (client) {
    return client;
  }

  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });

  if (client.credentials) {
    await saveCredentials(client);
  }

  return client;
}
