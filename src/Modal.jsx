import { GrFormClose } from "react-icons/gr";

export default function Modal({ children, active, onClose }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
      <div className="bg-white rounded p-5 shadow/25 w-2xs relative">
        {children}
        <button className="absolute top-5 right-5 cursor-pointer hover:*:opacity-50" onClick={onClose}>
          <GrFormClose />
        </button>
      </div>
    </div>
  );
}