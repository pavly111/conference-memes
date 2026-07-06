import ReplyPage from "../components/ReplyPage";
import replies from "../data/replies";

export default function Busy() {
  return <ReplyPage data={replies.busy} />;
}