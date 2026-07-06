import ReplyPage from "../components/ReplyPage";
import replies from "../data/replies";

export default function Boring() {
  return <ReplyPage data={replies.boring} />;
}