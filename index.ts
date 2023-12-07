import express from 'express';
import usersRouter from './src/routes/users';
import initDB from './src/db/users';

const app = express();
const PORT = process.env.PORT || 4050;

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


app.use(express.json());
app.use('/users', usersRouter);

app.listen(PORT, () => {
  initDB()
  console.log(`Server is running on port ${PORT}`);
});
