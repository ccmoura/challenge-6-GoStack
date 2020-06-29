import path from 'path';
import multer from 'multer';

const tmp = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmp,

  storage: multer.diskStorage({
    destination: tmp,
    filename: (request, file, callback) => {
      const filename = `${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
