import { useEffect, useState } from "react";

export default function SearchInteraction() {
  const [doctor, setDoctor] = useState("");
  const [records, setRecords] = useState([]);

  const search = async () => {
    let url = "http://127.0.0.1:8000/interactions/";

    if (doctor !== "") {
      url += `?doctor_name=${doctor}`;
    }

    const response = await fetch(url);

    const data = await response.json();

    setRecords(data);
  };

  useEffect(() => {
    SearchInteraction();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Search Interaction</h1>

      <div className="flex gap-3 mb-6">
        <input
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          placeholder="Search Doctor..."
          className="border rounded-lg p-3 flex-1"
        />

        <button
          onClick={search}
          className="bg-blue-600 text-white px-6 rounded-lg"
        >
          Search
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Doctor</th>
            <th>Type</th>
            <th>Date</th>
            <th>Sentiment</th>
          </tr>
        </thead>

        <tbody>
          {records.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">{item.hcp_name}</td>
              <td>{item.interaction_type}</td>
              <td>{item.date}</td>
              <td>{item.sentiment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
