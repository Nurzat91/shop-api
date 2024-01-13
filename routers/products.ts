import {Router} from 'express';
import crypto from 'crypto';
import fileDb from "../fileDb";
import {ProductWithoutId} from "../types";

const productsRouter = Router();

// const products: Product[] = [];

productsRouter.get('/', async (req, res) => {
  const products = await fileDb.getItems();
  res.send(products);
});

productsRouter.get('/:id', async (req, res) => {
  const products = await fileDb.getItems();//получение всех товаров.
  const product = products.find(p => p.id === req.params.id);
  //надо будет проверку написать, если по id не нашли, надо будет возвращать 404
  res.send(product);
});

productsRouter.post('/', async (req, res) => {
  // console.log(req.body);
  const product: ProductWithoutId = {
    //при получение данных, только  req.body нельзя использовать, надо обьязательно указать Н: req.body.title,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  };

  const newProduct = await fileDb.addItem(product);
  // res.send('Created new product id=' + newProduct.id);
  res.send(newProduct);
});

export default productsRouter;