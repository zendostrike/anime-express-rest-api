import mongoose from "mongoose";

const animeSchema = mongoose.Schema({
  title: {
    type: String
  },
  synopsis: {
    type: String
  }
});

export default mongoose.model("Anime", animeSchema);
