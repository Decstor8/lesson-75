import express, { Request, Response, NextFunction } from "express";
const Vigenere = require("caesar-salad").Vigenere;
const app = express();
const port = 8000;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.post('/encode/', (req: Request, res: Response) => {

  if (!req.body.message) {
    return res.status(400).send({ error: 'Ошибка сообщения..' });
  };

  const encode = Vigenere.Cipher(req.body.password).crypt(req.body.message);
  res.send({ encode: encode });
});

app.post('/decode/', (req: Request, res: Response) => {

  if (!req.body.message) {
    return res.status(400).send({ error: 'Ошибка сообщения..' });
  };
  
  const decode = Vigenere.Decipher(req.body.password).crypt(req.body.message);
  res.send({ decode: decode });
});

app.listen(port, () => {
  console.log(`Сервер стартовал на http://localhost:${port}`);
});
