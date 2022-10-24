import express from 'express';
import saveReunionController from '../../modules/reunion/controllers/saveReunionController.js';

const app = express();

app.use(express.json());

app.post('/', saveReunionController);


export default app;
