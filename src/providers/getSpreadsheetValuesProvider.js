import { google } from 'googleapis';
/**
 * Batch gets cell values from a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} _ranges The mock sheet range.
 * @return {obj} spreadsheet information
 */
export default async function getSpreadsheetValuesProvider(
  { client, spreadsheetId, range },
) {
  const googleSheetsService = google.sheets({ version: 'v4', auth: client });

  const response = await googleSheetsService.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  return response.data.values;
}
