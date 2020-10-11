import { Router } from "express";

const router = Router();

const animes = [
  {
    id: 1,
    name: "Nanatsu no taizai"
  },
  {
    id: 2,
    name: "Dragon ball z"
  },
  {
    id: 3,
    name: "Sailor moon"
  }
];

router.get("/", (req, res) => {
  return res.send(animes);
});

router.get("/:animeId", (req, res) => {
  return res.send(`Return anime with ID ${req.params.animeId}`);
});

export default router;
