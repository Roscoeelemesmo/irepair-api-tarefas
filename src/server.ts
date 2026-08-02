import express from 'express';
import cors from 'cors';
import { taskRoutes } from './routes/taskRoutes.ts';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});