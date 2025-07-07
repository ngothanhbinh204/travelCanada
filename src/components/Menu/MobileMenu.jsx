import { useState, useEffect } from "react";

import { Menu } from "lucide-react";
import { ChevronRight } from "lucide-react";
import MenuLevel1 from "./MenuLevel1";
import MenuLevel2 from "./MenuLevel2";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/Button";
// import { menuItems } from "../../data/menuItems";

import MobileMenuHeader from "./MobileMenuHeader";

import MobileMenuItem from "./MobileMenuItem";

export default function MobileMenu() {
  const [view, setView] = useState("level1");
  const [selectedLevel1, setSelectedLevel1] = useState(null);

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="" size="icon" className="text-white border-white">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          aria-describedby={undefined}
          side="left"
          className="w-full max-w-full"
        >
          <SheetTitle className="hidden">Menu</SheetTitle>

          <MobileMenuHeader
            showBack={view === "level2"}
            onBack={() => setView("level1")}
          />
          {view === "level1" && menu.length > 0 && (
            <MenuLevel1
              items={menu}
              onSelect={(item) => {
                setSelectedLevel1(item);
                setView("level2");
              }}
            />
          )}

          {view === "level2" && selectedLevel1 && (
            <MenuLevel2
              data={selectedLevel1}
              onBack={() => setView("level1")}
            />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
