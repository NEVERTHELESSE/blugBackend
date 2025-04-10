import { postModel } from "../models/postModel.js";
export async function addComment(req, res) {
  const id = req.params.id;
  const comment = req.body;
  const addToComment = await postModel.findByIdAndUpdate(
    id,
    {
      $push: { comments: comment },
    },
    { new: true }
  );
  res.send(addToComment);
  // res.send(comment);
}
