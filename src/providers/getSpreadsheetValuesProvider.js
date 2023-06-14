import { google } from "googleapis";
import AppError from "../config/server/errors/AppError.js";
/**
 * Batch gets cell values from a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} _ranges The mock sheet range.
 * @return {Promise<any[][] | null | undefined>} spreadsheet information
 */
export default async function getSpreadsheetValuesProvider(
  client,
  spreadsheetId,
  range
) {
  const googleSheetsService = google.sheets({ version: "v4", auth: client });

  try {
    const response = await googleSheetsService.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return response.data.values;
  } catch (error) {
    throw new AppError(error.message, 400, "getSpreadsheetValuesProvider");
  }
}
