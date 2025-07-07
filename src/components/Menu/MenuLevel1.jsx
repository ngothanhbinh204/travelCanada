import ChevronRight from "../icons/ChevronRight";
export default function MenuLevel1({ items, onSelect }) {
  return (
    <div className="space-y-4 px-9 py-8">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onSelect(item)}
          className="flex justify-between items-center text-primary font-semibold cursor-pointer pb-2"
        >
          <span className="break-words text-[20px] leading-tight lg:text-[22px] text-primary w-full font-bold last:mb-0">
            {item.label}
          </span>
          {item.children?.length > 0 && (
            <span className="text-xl">
              <ChevronRight className="text-primary text-xl"></ChevronRight>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
