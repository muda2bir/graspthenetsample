// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

interface blogData {
  title: string;
  content: string;
  author: string;
  slug: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ Error: "No Such Blog Found!!" });
    } else {
      let parsedData: blogData = JSON.parse(data);
      res.status(200).json(parsedData);
    }
  });
}
