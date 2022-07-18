import { dateFormat } from "../helpers/general";

const CommentWrapper = (props) => {
  return (
    <div className="CommentWrapper">
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{dateFormat(props.date)}</div>
    </div>
  );
};
export default CommentWrapper;
