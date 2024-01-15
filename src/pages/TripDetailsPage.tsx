import { RootState } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TripDetailsCard from "../components/TripDetailsCard";
import Chairs from "../components/Chairs";
import Loading from "../components/Loading";

interface Bus {
  id: number;
}

const TripDetailsPage = () => {
  const { id } = useParams();
  const state = useSelector((store: RootState) => store.buses);

  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const numericId = parseInt(id, 10);

  useEffect(() => {
    const selectedBusArray = state.buses.filter((bus) => bus.id === numericId);
    const updatedSelectedBus =
      selectedBusArray.length > 0 ? selectedBusArray[0] : null;
    setSelectedBus(updatedSelectedBus);
  }, [state.buses, numericId]);


  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-black">
      {state.isLoading && <Loading />}
      <div className="flex flex-col w-[1300px]">
        <div className="flex flex-col justify-center items-center  gap-10 mx-24 text-black">
          {selectedBus && <TripDetailsCard bus={selectedBus} />}
        </div>
        <div className="mx-24 bg-[#FCFDFE] border rounded-lg p-4">
          <div className="flex items-center gap-3  text-black ">
            <img
              src="https://static.thenounproject.com/png/661611-200.png"
              alt=""
              className="transform scale-x-[-1] h-9  bg-[#B6D8F5] rounded-lg"
            />
            <p>Erkek-Dolu</p>

            <img
              src="https://static.thenounproject.com/png/661611-200.png"
              alt=""
              className="transform scale-x-[-1] h-9  bg-[#F5B6CE] rounded-lg"
            />
            <p>Kadın-Dolu</p>

            <img
              src="https://static.thenounproject.com/png/661611-200.png"
              alt=""
              className="transform scale-x-[-1] h-9  bg-white rounded-lg"
            />
            <p>Boş Koltuk</p>

            <img
              src="https://static.thenounproject.com/png/661611-200.png"
              alt=""
              className="transform scale-x-[-1] h-9  bg-[#A7E0C0] rounded-lg"
            />
            <p>Seçili Koltuk</p>
          </div>
          {/* bus */}
          {selectedBus && <Chairs price={selectedBus.price} />}
        </div>
      </div>
    </div>
  );
};

export default TripDetailsPage;
