import { Link, useLocation } from "react-router-dom";

import {
  FaHome,
  FaRobot,
  FaSearch,
  FaEdit,
  FaHistory,
  FaCalendarAlt,
  FaChartBar,
  FaUserMd,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "AI Assistant",
      path: "/assistant",
      icon: <FaRobot />,
    },
    {
      name: "Log Interaction",
      path: "/interaction",
      icon: <FaEdit />,
    },
    {
      name: "Search Interaction",
      path: "/search",
      icon: <FaSearch />,
    },
    {
      name: "Interaction History",
      path: "/history",
      icon: <FaHistory />,
    },
    {
      name: "Follow Ups",
      path: "/followups",
      icon: <FaCalendarAlt />,
    },
    {
      name: "HCP Management",
      path: "/hcp",
      icon: <FaUserMd />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartBar />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">AI HCP CRM</h1>
        <p className="text-sm text-gray-400 mt-1">AI Sales Assistant</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-6">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-6 py-4 transition-all ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-5 text-center text-gray-400 text-sm">
        AI-First CRM <br />
        Version 1.0
      </div>
    </div>
  );
}
