import ReplyPage from "../components/ReplyPage";
import replies from "../data/replies";

export default function Tired() {
  return <ReplyPage data={replies.tired} />;
}