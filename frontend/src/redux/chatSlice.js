import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loading: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    clearChat: (state) => {
      state.messages = [];
      state.loading = false;
    },
  },
});

export const { addMessage, setLoading, clearChat } = chatSlice.actions;

export default chatSlice.reducer;
