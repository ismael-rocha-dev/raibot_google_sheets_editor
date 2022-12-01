import authorize from "../../../config/googleSheetsAPI/authorize.js";
import getSpreadsheetValuesProvider from "../../../providers/getSpreadsheetValuesProvider.js";
import updateSpreadsheetValuesProvider from "../../../providers/updateSpreadsheetValuesProvider.js";
import getMonthName from "../../../utils/getMonthName.js";
import Reunion from "../models/Reunion.js";

export default async function saveReunionService(
  spreadsheetId = "",
  reunion = new Reunion()
) {
  const client = await authorize();

  const month = getMonthName();

  const cells = await getSpreadsheetValuesProvider(
    client,
    spreadsheetId,
    month
  );

  for (const member of reunion.members) {
    const memberNameColumn = cells[1].indexOf(member.name);
    const todayDayNumber = new Date().getDate();
  }

  console.log(reunion);
}
