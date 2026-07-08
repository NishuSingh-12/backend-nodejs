import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const id = crypto.randomUUID();
    const extension = path.extname(file.originalname);
    file.id = id;
    cb(null, `${id}${extension}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024 * 1024, // 2 GB
  },
});
// const upload = multer({ dest: "uploads/" });

app.post(
  "/upload",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "bg", maxCount: 1 },
  ]),
  (req, res) => {
    console.log("Upload compeleted");
    res.json({ files: req.files, body: req.body });
  },
);

// app.post("/upload", upload.single("profilePic"), (req, res) => {
//   res.json(req.file);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
