import fs from "fs/promises";
import { google } from "googleapis";
import { TOKEN_PATH } from "./configVariables.js";

export default async function loadSavedCredentialsIfExists() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (error) {
    return null;
  }
}
