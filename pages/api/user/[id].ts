// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../util/db';
import parseSnapshot from '../../../util/db/user/parseSnapshot';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { id } = req.query;
    const data = await db.ref(`/${id}`).once('value');
    const parsedData = await parseSnapshot(data);

    res.status(200).json(parsedData);
}
