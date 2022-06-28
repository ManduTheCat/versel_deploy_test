import topics from "../../../data/topic.json";
export default function handler(req, res) {
  res.status(200).json(topics);
}
