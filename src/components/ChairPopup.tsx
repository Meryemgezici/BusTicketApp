import React from "react";
import { Chair } from "../redux/slices/chairsSlice";

interface ChairPopupProps {
  index: number;
  chair: Chair;
  chunkIndex: number;
  selectedChair: number | null;
  handleGenderClick: (id: number, gender: string) => void;
}

const ChairPopup: React.FC<ChairPopupProps> = ({
  index,
  chair,
  chunkIndex,
  selectedChair,
  handleGenderClick,
}) => {
  return (
    <>
      {chair.color !== "#A7E0C0" && (
        <>
          {chair.occupancyStatus !== "full" && (
            <>
              {chunkIndex === 1 && <div className="mt-24"></div>}
              {selectedChair === index + chunkIndex * 14 && (
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md w-34 ${
                    chunkIndex === 1 ? "bottom-[150px]" : "bottom-16"
                  }`}
                >
                  <div className="flex items-center gap-2 h-20">
                    <div
                      className="cursor-pointer bg-[#e4e9e6] p-1 rounded-lg"
                      onClick={() => handleGenderClick(chair.id, "male")}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3375/3375518.png"
                        alt=""
                        className="h-11"
                      />
                      <span className="text-[#729BD2]">Erkek</span>
                    </div>

                    <div
                      className="cursor-pointer bg-[#e4e9e6] p-1 rounded-lg"
                      onClick={() => handleGenderClick(chair.id, "female")}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/4406/4406924.png"
                        alt=""
                        className="h-11 "
                      />
                      <span className="text-[#D588C6]">Kadın</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border border-t-0 border-l-0 border-r-0 border-b-2 border-blue-500 rotate-45"></div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ChairPopup;
