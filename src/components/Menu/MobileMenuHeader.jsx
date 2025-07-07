import { SheetClose } from "../ui/sheet";
import { ChevronLeft, X } from "lucide-react";

export default function MobileMenuHeader({ showBack = false, onBack }) {
  return (
    <div className="relative bg-primary h-18 w-full shadow-[-1px_4px_8px_rgba(0,0,0,0.25)] flex items-center justify-between px-4 text-white">
      {showBack ? (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-md font-medium"
        >
          <ChevronLeft
            strokeWidth={3}
            size={20}
            className="w-5 h-5 text-white"
          />
          Go Back
        </button>
      ) : (
        <div></div>
      )}

      <SheetClose className="text-white hover:opacity-80">
        <X className="w-8 h-8" />
      </SheetClose>
    </div>
  );
}
