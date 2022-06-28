import topics from "../../../data/topic.json";
export default function handler(req, res) {
  const id = Number(req.query.id);
  const data = topics.filter((e) => e.id === id);
  res.status(200).json(data[0]);
}
