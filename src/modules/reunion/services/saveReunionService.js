import authorize from '../../../config/googleSheetsAPI/authorize.js';
import getSpreadsheetValuesProvider from '../../../providers/getSpreadsheetValuesProvider.js';
import updateSpreadsheetValuesProvider from '../../../providers/updateSpreadsheetValuesProvider.js';

export default async function saveReunionService({ spreadsheetId, reunion }) {
  const client = await authorize();

  // Criar serviço de salvar os dados na planilha
}
