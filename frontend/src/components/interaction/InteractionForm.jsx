import { useNavigate } from "react-router-dom";
import SentimentSelector from "./SentimentSelector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearChat } from "../../redux/chatSlice";
import {
  resetForm,
  populateFromAI,
  updateField,
} from "../../redux/interactionSlice";

export default function InteractionForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const interaction = useSelector((state) => state.interaction);
  const saveInteraction = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/interactions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interaction),
      });

      if (!response.ok) {
        throw new Error("Failed to save interaction");
      }

      const data = await response.json();

      if (data.success) {
        alert("Interaction Saved Successfully!");

        dispatch(resetForm());
        dispatch(clearChat());

        console.log("Before reset:", interaction);

        // Check Redux state after a short delay
        setTimeout(() => {
          console.log("Reset dispatched");
        }, 100);
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  console.log(interaction);
  const startVoiceRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onstart = () => {
      alert("🎤 Listening...");
    };

    recognition.onresult = async (event) => {
      try {
        const transcript = event.results[0][0].transcript;

        console.log("Transcript:", transcript);

        const response = await fetch("http://127.0.0.1:8000/ai/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: transcript,
          }),
        });

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const data = await response.json();

        console.log(data);

        dispatch(populateFromAI(data));
      } catch (err) {
        console.error("Voice AI Error:", err);
      }
    };
    recognition.onerror = () => {
      alert("Voice recognition failed.");
    };
  };
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
      <h2 className="text-2xl font-semibold mb-6">Interaction Details</h2>

      {/* HCP + Type */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-sm font-medium mb-2">HCP Name</label>

          <input
            value={interaction.hcpName}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "hcpName",
                  value: e.target.value,
                }),
              )
            }
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            iNTERACTION TYPE
            {interaction.aiFilledFields.includes("interaction type") && (
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"></span>
            )}
          </label>

          <select
            value={interaction.interactionType}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "interactionType",
                  value: e.target.value,
                }),
              )
            }
            className="w-full rounded-lg border border-gray-300 p-3"
          >
            <option>Meeting</option>
            <option>Call</option>
            <option>Email</option>
            <option>Conference</option>
          </select>
        </div>
      </div>

      {/* Date & Time */}

      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>

          <input
            type="date"
            value={interaction.date || ""}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "date",
                  value: e.target.value,
                }),
              )
            }
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Time</label>

          <input
            type="time"
            value={interaction.time || ""}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "time",
                  value: e.target.value,
                }),
              )
            }
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>
      </div>

      {/* Attendees */}

      <div className="mb-5">
        <label className="block text-sm font-medium mb-2">Attendees</label>

        <input
          placeholder="Enter attendees"
          className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

      {/* Topics */}

      <div className="mb-5">
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          Topics Discussed
          {interaction.aiFilledFields.includes("topics") && (
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"></span>
          )}
        </label>

        <textarea
          rows={4}
          value={interaction.topics}
          onChange={(e) =>
            dispatch(
              updateField({
                field: "topics",
                value: e.target.value,
              }),
            )
          }
          className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

      {/* Voice Button */}

      <button
        onClick={startVoiceRecognition}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg"
      >
        🎤 Summarize Voice Note
      </button>

      {/* Materials */}

      <div className="mb-5">
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          MATERIALS SHARED
          {interaction.aiFilledFields.includes("voice button") && (
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"></span>
          )}
        </label>

        <input
          value={interaction.materials.join(", ")}
          onChange={(e) =>
            dispatch(
              updateField({
                field: "materials",
                value: e.target.value.split(",").map((item) => item.trim()),
              }),
            )
          }
          className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

      {/* Samples */}

      <div className="mb-5">
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          SAMPLES DISTRIBUTED
          {interaction.aiFilledFields.includes("samples") && (
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"></span>
          )}
        </label>

        <input
          value={interaction.samples.join(", ")}
          onChange={(e) =>
            dispatch(
              updateField({
                field: "samples",
                value: e.target.value.split(",").map((item) => item.trim()),
              }),
            )
          }
          className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

      {/* Sentiment */}

      <SentimentSelector sentiment={interaction.sentiment} />

      {/* Outcome */}

      <div className="mt-6">
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          OUTCOMES
          {interaction.aiFilledFields.includes("outcomes") && (
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"></span>
          )}
        </label>

        <textarea
          rows={3}
          value={interaction.outcomes}
          onChange={(e) =>
            dispatch(
              updateField({
                field: "outcomes",
                value: e.target.value,
              }),
            )
          }
          className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

      {/* Follow Up */}

      <div className="mt-6">
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          FOLLOW UP ACTIONS
          {interaction.aiFilledFields.includes("followUp") && (
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"></span>
          )}
        </label>

        <textarea
          rows={3}
          value={interaction.followUp}
          onChange={(e) =>
            dispatch(
              updateField({
                field: "followUp",
                value: e.target.value,
              }),
            )
          }
          className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

      {/* Save */}

      <div className="mt-8 flex justify-end gap-4">
        <button
          onClick={() => navigate("/search")}
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          🔍 Search Interaction
        </button>

        <button
          onClick={saveInteraction}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          💾 Save Interaction
        </button>
      </div>
    </div>
  );
}
