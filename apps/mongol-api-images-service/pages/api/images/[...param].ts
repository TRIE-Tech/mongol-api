import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

// Define supported image extensions and their content types
const imageExtensions: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
};

const Server = (req: NextApiRequest, res: NextApiResponse) => {
  const param = req.query.param as string[] | undefined;

  if (!param || param.length !== 2) {
    return res.status(400).json({ error: 'Invalid image path' });
  }

  const [folderName, fileName] = param;

  const baseDirectory = path.join(process.cwd(), 'public/images', folderName);
  const imagePath = path.join(baseDirectory, fileName);

  fs.promises
    .access(imagePath, fs.constants.R_OK)
    .then(() => {
      const ext = path.extname(fileName).toLowerCase();
      const contentType = imageExtensions[ext];

      if (!contentType) {
        res.status(415).json({ error: 'Unsupported image format' });
      } else {
        res.setHeader('Content-Type', contentType);

        fs.createReadStream(imagePath).pipe(res);
      }
    })
    .catch(() => {
      res.status(404).json({ error: 'Image not found' });
    });
};

export default Server;
