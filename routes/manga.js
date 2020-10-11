import { Router } from "express";

const router = Router();

const mangas = [
  {
    id: 1,
    name: "Gantz"
  },
  {
    id: 2,
    name: "Kimi ni iru machi"
  },
  {
    id: 3,
    name: "Prison School"
  }
];

router.get("/", (req, res) => {
  return res.send(mangas);
});

router.get("/:mangaId", (req, res) => {
  return res.send(`Return manga with ID ${req.params.mangaId}`);
});

export default router;
