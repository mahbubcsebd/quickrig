// Dropdown Menu Component
const DropdownMenu = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-10" onClick={onClose} />
      <div className="absolute right-0 top-8 z-20 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.onClick();
              onClose();
            }}
            className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default DropdownMenu;
