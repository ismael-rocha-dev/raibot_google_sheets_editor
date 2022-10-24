import { join } from 'path';

export const CREDENTIALS_PATH = join(process.cwd(), 'credentials.json');
export const TOKEN_PATH = join(process.cwd(), 'token.json');
export const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];




