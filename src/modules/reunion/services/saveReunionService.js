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

  const todayDayNumber = new Date().getDate();

  const cells = await getSpreadsheetValuesProvider(
    client,
    spreadsheetId,
    month
  );

  for (const member of reunion.members) {
    const columnIndex = cells[1].indexOf(member.name);

    const lineIndex = cells.findIndex(
      (line_) => line_[0] === String(todayDayNumber)
    );

    if (columnIndex !== -1 && lineIndex !== -1) {
      if (
        cells[lineIndex][columnIndex] === "" ||
        cells[lineIndex][columnIndex] === undefined
      ) {
        cells[lineIndex][columnIndex] = `${reunion.description}`;
      } else {
        cells[lineIndex][columnIndex] += ` + ${reunion.description}`;
      }
      cells[lineIndex][columnIndex - 1] = `=${
        cells[lineIndex][columnIndex - 1]
      } + ${member.totalMinutes}`;
    }
  }

  await updateSpreadsheetValuesProvider(
    client,
    spreadsheetId,
    month,
    "USER_ENTERED",
    cells
  );
}
