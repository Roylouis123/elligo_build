import { createSlice } from "@reduxjs/toolkit";
import { find } from "lodash"; 

const initialState = {
  authUser: {},
  value: [],
  singleData: {},
  comments: [],
};

export const counterSlice = createSlice({
  name: "Docs",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.authUser = action.payload;
    },
    setDocuments: (state, action) => {
      state.value = action.payload;
    },
    getDocumentById: (state, action) => {
      state.singleData = action.payload;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    // New reducer for adding a reply
    addReply: (state, action) => {
      const comment = find(state.comments, { id: action.payload.commentId });
      if (comment) {
        comment.replies.push(action.payload.reply);
      }
    },
    logout: (state) => {
      Object.assign(state, initialState); // reset the state to initial state
    }
  },
});

export const { setDocuments, getDocumentById, authUser, addComment, addReply,logout } = counterSlice.actions;

export default counterSlice.reducer;