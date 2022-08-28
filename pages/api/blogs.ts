// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

interface blogData {
  title: string;
  content: string;
  author: string;
  slug: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let data: string[] = await fs.promises.readdir("blogdata");
    let myFile: string;
    let allBlogs: blogData[] = [];

    for (let i = 0; i < 5; i++) {
      const item = data[i];
      myFile = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
      allBlogs.push(JSON.parse(myFile));
    }

    res.status(200).json(allBlogs);
  } catch (err) {
    console.log(err);
  }
}
