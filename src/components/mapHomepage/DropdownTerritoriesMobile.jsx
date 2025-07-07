import { useEffect, useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "../ui/Button";

const DropdownTerritoriesMobile = ({
  territories,
  selectedTerritory,
  onSelect,
  onClose,
}) => {
  const [localSelectedId, setLocalSelectedId] = useState(null);

  // Cập nhật khi selectedTerritory từ cha thay đổi
  useEffect(() => {
    setLocalSelectedId(selectedTerritory ? selectedTerritory.id : null);
  }, [selectedTerritory]);

  const handleSelect = (value) => {
    const territory = territories.find((t) => t.id === value);
    if (territory) {
      setLocalSelectedId(territory.id);
      onSelect && onSelect(territory);
    }
  };

  const handleBack = () => {
    setLocalSelectedId(null);
    onClose && onClose();
  };

  return (
    <div className="absolute top-4 left-4 z-40 w-64 max-w-full lg:hidden">
      {/* Nếu chưa chọn lãnh thổ: hiển thị Select */}
      <Select.Root onValueChange={handleSelect}>
        <Select.Trigger
          className="inline-flex w-full items-center justify-between px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-sm text-gray-700"
          aria-label="Lãnh thổ"
        >
          <Select.Value placeholder="Chọn lãnh thổ" />
          <Select.Icon className="ml-2">
            <ChevronDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="bg-white border rounded-md shadow-lg max-h-60 overflow-auto z-50">
            <Select.Viewport className="p-1">
              {territories.map((territory) => (
                <Select.Item
                  key={territory.id}
                  value={territory.id}
                  className="flex items-center px-4 py-2 cursor-pointer select-none hover:bg-primary hover:text-white rounded"
                >
                  <Select.ItemText>{territory.name}</Select.ItemText>
                  <Select.ItemIndicator className="ml-auto">
                    <Check />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      {localSelectedId && (
        <Button
          onClick={handleBack}
          variant="main"
          className="text-base font-semibold underline text-sm bg-yellow-400"
        >
          Back
        </Button>
      )}
    </div>
  );
};

export default DropdownTerritoriesMobile;
