import express, { Express, Request, Response } from 'express';
import { Http2ServerRequest } from 'http2';
import route from './routes/index';

const app: Express = express();
const port: number = 3000;
app.use('/api/images', express.static('images'));

app.get('/', (req: Request, res: Response) => {
  res.send(`Main`);
});

app.use('/api', route);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
