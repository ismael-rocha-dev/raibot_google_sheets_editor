import saveReunionService from "../services/saveReunionService.js";

export default async function saveReunionController(request, response) {
  const { spreadsheetId, reunion } = request.body;

  console.log(spreadsheetId);

  await saveReunionService({ spreadsheetId, reunion });

  return response.status(200).json({ message: "Reunião salva com sucesso!" });
}
