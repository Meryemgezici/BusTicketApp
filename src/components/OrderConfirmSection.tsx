import React from "react";
import MaxSeatWarningModal from "./MaxSeatWarningModal";
import { Link } from "react-router-dom";

interface OrderConfirmSectionProps {
  selectedChairCount: number;
  price: string;
  maxSeatWarningOpen: boolean;
  onCloseModal: () => void;
}

const OrderConfirmSection: React.FC<OrderConfirmSectionProps> = ({
  selectedChairCount,
  price,
  maxSeatWarningOpen,
  onCloseModal,
}) => {
  return (
    <div className="flex items-center gap-32">
      <p>En fazla 5 koltuk seçebilirsiniz</p>
      <p className="text-xl">
        Toplam Tutar:{" "}
        <span className="font-bold text-2xl">
          {parseFloat(price) * selectedChairCount}TL
        </span>
      </p>
      <Link
        to={
          selectedChairCount > 0
            ? `/payment?selectedChairCount=${selectedChairCount}`
            : "#"
        }
        className={`bg-green-700 text-white p-2 border rounded-md hover:bg-green-600 ${
          selectedChairCount > 0 ? "" : "cursor-not-allowed"
        }`}
      >
        Onayla ve Devam et
      </Link>
      {selectedChairCount > 5 && (
        <MaxSeatWarningModal
          isModalOpen={maxSeatWarningOpen}
          onClose={onCloseModal}
        />
      )}
    </div>
  );
};

export default OrderConfirmSection;
