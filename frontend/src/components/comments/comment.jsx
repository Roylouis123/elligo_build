import React, { useState } from "react";
import { addComment, addReply } from "../../redux/counterSlice"; // Import addReply
import { useDispatch, useSelector } from "react-redux";
import { get, map } from "lodash";

const Comment = () => {
  const [newComment, setNewComment] = useState("");
  const [newReply, setNewReply] = useState("");

  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => state.Docs);
  const comments = get(counterReducer, "comments", []);
  const auth = get(counterReducer, "authUsers.attributes.email");

  const removeBeforeAtSymbol = (input) => {
    if (typeof input === "string") {
      const atIndex = input.indexOf("@");
      return input.substring(atIndex + 1);
    }
    return input; // return the original input if it's not a string
  };

  const handleSubmit = () => {
    const name = removeBeforeAtSymbol(auth);
    console.log(name, "name");

    const commentData = {
      id: Math.random(), // generate a random id, replace this with your own id logic
      author: {
        name: name,
        avatar:
          "https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj", // replace with the actual avatar url
      },
      comment: newComment,
      replies: [],
    };

    dispatch(addComment(commentData));
    setNewComment("");
  };

  // Handle reply submit
  const handleReplySubmit = (commentId) => {
    const replyData = {
      author: {
        name: removeBeforeAtSymbol(auth),
        avatar:
          "https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj", // replace with the actual avatar url
      },
      comment: newReply,
    };

    // Dispatch an action to add the reply to the specific comment
    dispatch(addReply({ commentId, reply: replyData }));
    setNewReply("");
  };

  
  return (
    <div
      className="bg-white shadow rounded-lg p-4"
      style={{ height: "48vh", overflow: "auto" }}
    >
      {/* Input component for adding new comments */}
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {map(comments, (comment) => (
        <div key={comment.id} className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-6 w-6 rounded-full"
                src={get(comment, "author.avatar")}
                alt=""
              />
            </div>
            <div>
              <div className="text-sm font-medium text-black">
                {get(comment, "author.name")}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {get(comment, "comment")}
              </p>
            </div>
          </div>

          {/* Reply component */}
          {map(get(comment, "replies", []), (reply) => (
            <div key={reply.id} className="flex items-start space-x-4 ml-6">
              <div className="flex-shrink-0">
                <img
                  className="h-6 w-6 rounded-full"
                  src={get(reply, "author.avatar")}
                  alt=""
                />
              </div>
              <div>
                <div className="text-sm font-medium text-black">
                  {get(reply, "author.name")}
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  {get(reply, "comment")}
                </p>
              </div>
            </div>
          ))}

          {/* Input component for replies */}
          <div className="ml-6 mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
              type="text"
              placeholder="Write a reply..."
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => handleReplySubmit(comment.id)}
            >
              Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
