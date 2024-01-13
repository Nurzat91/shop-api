import express from 'express';
import productsRouter from "./routers/products";
import fileDb from "./fileDb";

const app = express();
const port = 8000;

app.use(express.json());//обработка json запроса.
app.use('/products', productsRouter);

const run = async () => {
  await fileDb.init(); //сначала идет инициализация базы данных, а потом запускается сервер. app.listen

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
};
void run();