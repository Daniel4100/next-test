// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const remoteID = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.status(200).json({ remoteID });
}
