// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from "../../util/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const databaseRef = db.ref().child("1");
  await databaseRef.set({
    "songs": [{
      "name": "Acurrucar",
      "artist": "Ed Maverick",
      "tabs": "https://www.cifraclub.com/ed-maverick/acurrucar/",
      "notes": "Capo 1",
      "songURI": "1xYBeQ5u8uaJ3oBWktjGyJ"
    }, {
      "name": "Fuentes de Ortiz",
      "artist": "Ed Maverick",
      "tabs": "https://www.cifraclub.com/ed-maverick/fuentes-de-ortiz/",
      "notes": "Capo 1",
      "songURI": "0akyEssGRVHstqCSWXusJL"
    }, {
      "name": "Vámonos a Marte",
      "artist": "Kevin Kaarl",
      "tabs": "https://www.cifraclub.com.br/kevin-kaarl/vamonos-a-marte/",
      "notes": "Capo 0",
      "songURI": "2TzkIzgzIHhewMxyh1u4hh"
    }, {
      "name": "San Lucas",
      "artist": "Kevin Kaarl",
      "tabs": "https://www.cifraclub.com/ed-maverick/acurrucar/",
      "notes": "Capo 0",
      "songURI": "https://open.spotify.com/track/75UMtPC77vqKRwfSuYuNPO"
    }],
    "metadata": {
      "tutorial": false
    }
  })
  res.status(203).json({});
}
