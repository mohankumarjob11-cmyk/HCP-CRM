import InteractionForm from "../components/interaction/InteractionForm";
import AIAssistant from "../components/ai/AIAssistant";

export default function LogInteraction() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Log HCP Interaction</h1>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <InteractionForm />
        </div>

        <div className="col-span-4">
          <AIAssistant />
        </div>
      </div>
    </div>
  );
}
