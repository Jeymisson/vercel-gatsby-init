import { NowRequest, NowResponse } from '@now/node';

export default (_req: NowRequest, res: NowResponse) => {
  const products = {id: 1, name: 'Blouse', description: 'Samll Blouse'};
  const data = {'products': products};
  throw Error('Test error!!')
  res.status(200).send(data);
};
