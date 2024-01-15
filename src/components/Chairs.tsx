import { RootState } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import { TbSteeringWheel } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { updateChairs } from "../redux/slices/chairsSlice";
import MaxSeatWarningModal from "./MaxSeatWarningModal";
import ChairPopup from "./ChairPopup";
import { Link } from "react-router-dom";
import OrderConfirmSection from "./OrderConfirmSection";

interface ChairsProps {
  price: string;
}

const Chairs: React.FC<ChairsProps> = ({ price }) => {
  const imageUrl: string =
    "https://static.thenounproject.com/png/661611-200.png";
  const stateChairs = useSelector((store: RootState) => store.chairs);
  const [selectedChair, setSelectedChair] = useState<number | null>(null);
  const [selectedChairCount, setSelectedChairCount] = useState<number>(0);
  const dispatch = useDispatch();
  const [maxSeatWarningOpen, setMaxSeatWarningOpen] = useState<boolean>(false);

  const handleChairClick = (index: number) => {
    setSelectedChair(index);

    if (
      stateChairs.chairs[index].color === "#A7E0C0" &&
      selectedChair === index
    ) {
      const updatedChairs = [...stateChairs.chairs];
      updatedChairs[index] = {
        ...updatedChairs[index],
        color: "white",
      };
      dispatch(updateChairs(updatedChairs));
      if (selectedChairCount > 0) {
        setSelectedChairCount(selectedChairCount - 1);
      }
      setSelectedChair(null);
    }
  };

  const handleGenderClick = (id: number, gender: string) => {
    if (selectedChairCount !== 5) {
      // Diğer işlemler
      const updatedChairs = stateChairs.chairs.map(
        (chair: RootState["chairs"]["data"][0]) =>
          chair.id === id
            ? {
                ...chair,
                gender: gender,
                color: "#A7E0C0",
              }
            : chair
      );

      dispatch(updateChairs(updatedChairs));
      setSelectedChair(null);
    } else {
      // 5 koltuktan fazlasını seçtiğinde uyarı modalını aç
      setMaxSeatWarningOpen(true);
    }
    setSelectedChairCount(selectedChairCount + 1);
  
    console.log(selectedChairCount); // veya başka işlemler
  };
  
  const closeModal = () => {
    setSelectedChair(null);
    setMaxSeatWarningOpen(false);
    setSelectedChairCount(5);
  };

  const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chairsChunks = chunkArray(stateChairs.chairs, 14);

  return (
    <>
      <div className="flex items-center  border rounded-br-full rounded-tr-full rounded-tl-[300px] rounded-bl-[300px] m-10 h-80 w-[1000px] bg-[#F5F7FA]">
        <div className="flex flex-col gap-24">
          {stateChairs.isLoading && <Loading />}
          <div className="flex gap-28">
            <div className="flex flex-col">
              {chairsChunks.slice(0, 14).map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="flex relative">
                  {chunk.map((chair, index) => (
                    <div key={index} className="relative">
                      <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        className={`transform scale-x-[-1] h-9 rounded-lg m-2 cursor-pointer ${
                          selectedChair === index + chunkIndex * 14
                            ? "border border-blue-500"
                            : ""
                        }`}
                        style={{
                          backgroundColor: chair.color,
                        }}
                        onClick={() =>
                          handleChairClick(index + chunkIndex * 14)
                        }
                      />

                      <ChairPopup
                        key={index}
                        chair={chair}
                        chunkIndex={chunkIndex}
                        selectedChair={selectedChair}
                        handleGenderClick={handleGenderClick}
                        index={index}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <div className="border-l-2 border-solid h-20"></div>
              <TbSteeringWheel className="text-[#D7DDDB] text-3xl" />
            </div>
          </div>
        </div>
      </div>

      <OrderConfirmSection
        selectedChairCount={selectedChairCount}
        price={price}
        maxSeatWarningOpen={maxSeatWarningOpen}
        onCloseModal={closeModal}
      />
    </>
  );
};

export default Chairs;
