import { FaWindowClose } from "react-icons/fa";
interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const MaxSeatWarningModal: React.FC<ModalProps> = ({
  isModalOpen,
  onClose,
}) => {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center modal-overlay bg-gray-500 bg-opacity-50">
          <div className="flex flex-col gap-7 modal border border-gray-300 bg-white p-4 rounded-md ">
            <div className="flex justify-end">
              <FaWindowClose
                onClick={onClose}
                className="close-button text-3xl cursor-pointer"
              />
            </div>

            <p className="text-xl">En fazla 5 koltuk seçebilirsiniz.</p>
            <button
              className="border rounded-md bg-[#EEFFFF] p-2 text-xl hover:bg-[#B4F2FF]"
              onClick={onClose}
            >
              Tamam
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MaxSeatWarningModal;
