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

const checkImageAccess = async (imagePath: string) => {
  try {
    await fs.promises.access(imagePath, fs.constants.R_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const sendImageResponse = (
  res: NextApiResponse,
  imagePath: string,
  contentType: string
) => {
  res.setHeader('Content-Type', contentType);
  const stream = fs.createReadStream(imagePath);
  stream.pipe(res);

  // Optionally, you can listen for the 'close' event to clean up the stream when the response is closed.
  res.on('close', () => {
    stream.destroy();
  });
};

const handleErrors = (res: NextApiResponse, error: any) => {
  if (error.code === 'ENOENT') {
    res.status(404).json({ error: 'Image not found' });
  } else {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const Server = async (req: NextApiRequest, res: NextApiResponse) => {
  const param = req.query.param as string[] | undefined;

  if (!param || param.length !== 2) {
    return res.status(400).json({ error: 'Invalid image path' });
  }

  const [folderName, fileName] = param;

  const baseDirectory = path.join(process.cwd(), 'public/images', folderName);
  const imagePath = path.join(baseDirectory, fileName);

  const hasAccess = await checkImageAccess(imagePath);

  if (hasAccess) {
    const ext = path.extname(fileName).toLowerCase();
    const contentType = imageExtensions[ext];

    if (!contentType) {
      res.status(415).json({ error: 'Unsupported image format' });
    } else {
      sendImageResponse(res, imagePath, contentType);
    }
  } else {
    handleErrors(res, { code: 'ENOENT' });
  }
};

export default Server;
