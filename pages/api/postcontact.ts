import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

const postContact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json(req.body);
  } else {
    res.status(200).json(["Invalid Details"]);
  }
};

export default postContact;
