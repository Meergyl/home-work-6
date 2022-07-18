import "./App.css";
import Comment from "./components/Comment";
import { comment } from "./data";

function App() {
  return (
    <div>
      <Comment
        author={comment.author}
        text={comment.text}
        date={comment.date}
      />
    </div>
  );
}

export default App;
