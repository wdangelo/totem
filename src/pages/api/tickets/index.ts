import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
    id: string
  ticket: string
}

const initialNumber = 1

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ id: '1', ticket: 'CX00' + initialNumber })
}