import ReplyPage from "../components/ReplyPage";
import replies from "../data/replies";

export default function Friends() {
  return <ReplyPage data={replies.friends} />;
}