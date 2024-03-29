import UserInfo from "./UserInfo";
import "./Comment.css";

import CommentWrapper from "./CommentWrapper";
import "./CommentWrapper.css"

const Comment = (props) => {
  
   
  return (
    <div className="Comment">
      
      <UserInfo author={props.author} />
      <CommentWrapper text={props.text} date={ props.date}/>
      
       
      </div>
      
    
  );
};
export default Comment;
