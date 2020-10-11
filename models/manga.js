import mongoose from "mongoose";

const mangaSchema = mongoose.Schema({
  title: {
    type: String
  },
  synopsis: {
    type: String
  }
});

export default mongoose.model("Manga", mangaSchema);
