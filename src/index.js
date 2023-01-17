import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author ='Abraham' timeAgo = 'Today at 3:00PM' commentText = 'Nice Content'/>
      <CommentDetail author = 'Emmanuel' timeAgo = 'Today at 6:00PM' commentText = 'Inspiring'/>
      <CommentDetail author = 'John' timeAgo = 'Yesterday at 3:00PM' commentText = 'Wooow This is Awesome'/>
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
