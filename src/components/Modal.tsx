import React from "react";
import { Link } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center modal-overlay bg-gray-500 bg-opacity-50 text-black">
          <div className="flex flex-col gap-7 modal border border-gray-300 bg-white p-4 rounded-md ">
            <p className="text-xl bg-green-300 p-3 rounded-md">
              Ödeme Başarılı bir şekilde gerçekleştirildi.
            </p>
            <Link
              to={"/homepage"}
              className="border rounded-md bg-[#EEFFFF] p-2 text-xl hover:bg-[#B4F2FF] text-center"
              onClick={onClose}
            >
              HomePage Sayfasını Dön
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
