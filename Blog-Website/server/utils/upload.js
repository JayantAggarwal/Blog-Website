import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: 'mongodb://jayant1234:jayant1234@ac-b1hvnkf-shard-00-00.gfxjtot.mongodb.net:27017,ac-b1hvnkf-shard-00-01.gfxjtot.mongodb.net:27017,ac-b1hvnkf-shard-00-02.gfxjtot.mongodb.net:27017/?ssl=true&replicaSet=atlas-13h41w-shard-0&authSource=admin&retryWrites=true&w=majority',
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 