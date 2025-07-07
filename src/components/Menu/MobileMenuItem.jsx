import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function MobileMenuItem({ item, onBack }) {
  const [openSub, setOpenSub] = useState(false);

  if (openSub) {
    return (
      <div>
        <button
          onClick={() => setOpenSub(false)}
          className="text-sm text-red-600 flex items-center gap-2 mb-4"
        >
          <ChevronLeft className="w-4 h-4" /> Go Back
        </button>
        <h2 className="text-lg font-bold mb-2">{item.label}</h2>
        <ul className="space-y-2">
          {item.children.map((child, index) => (
            <li key={index} className="text-gray-800">
              {child}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <button
      onClick={() => setOpenSub(true)}
      className="flex justify-between items-center w-full text-red-600 font-semibold"
    >
      <span>{item.label}</span>
      <ChevronRight className="w-4 h-4" />
    </button>
  );
}
