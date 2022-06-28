import { useRouter } from "next/router";
import topic from "../../data/topic.json";
export default function Topic() {
  const router = useRouter();
  const id = router.query.id;
  const data = topic[id];
  return <>/sub2/topic.js {data}</>;
}
