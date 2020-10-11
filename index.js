import express from "express";
import cors from "cors";
import "dotenv/config";

import routes from "./routes";

const app = express();

// Third-Party middleware
app.use(cors());

// Built-In middleware
app.use(express.json());

// Routes
app.use("/animes", routes.anime);
app.use("/mangas", routes.manga);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
