import express, { Application } from 'express';

const app: Application = express();

import authRoutes from './routes/auth';

// Settings
app.set('port', 3000);

// Routes
app.use(authRoutes);

export default app;
