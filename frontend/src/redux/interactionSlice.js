import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hcpName: "",
  interactionType: "Meeting",
  date: "",
  time: "",
  attendees: [],
  topics: "",
  materials: [],
  samples: [],
  sentiment: "",
  outcomes: "",
  followUp: "",
  aiFilledFields: [],
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,

  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },

    populateFromAI: (state, action) => {
      const data = action.payload;

      if (data.doctor_name) {
        state.hcpName = data.doctor_name;
        state.aiFilledFields.push("hcpName");
      }

      if (data.interaction_type) {
        state.interactionType = data.interaction_type;
        state.aiFilledFields.push("interactionType");
      }
      if (data.date) {
        state.date = data.date;
        state.aiFilledFields.push("date");
      }

      if (data.time) {
        state.time = data.time;
        state.aiFilledFields.push("time");
      }

      if (data.topics) {
        state.topics = data.topics;
        state.aiFilledFields.push("topics");
      }

      if (data.materials) {
        state.materials = data.materials;
        state.aiFilledFields.push("materials");
      }

      if (data.samples) {
        state.samples = data.samples;
        state.aiFilledFields.push("samples");
      }

      if (data.sentiment) {
        state.sentiment = data.sentiment;
        state.aiFilledFields.push("sentiment");
      }

      if (data.outcomes) {
        state.outcomes = data.outcomes;
        state.aiFilledFields.push("outcomes");
      }

      if (data.follow_up) {
        state.followUp = data.follow_up;
        state.aiFilledFields.push("followUp");
      }
    },

    // ⭐ New reducer
    resetForm: () => initialState,
  },
});

export const { updateField, populateFromAI, resetForm } =
  interactionSlice.actions;

export default interactionSlice.reducer;
