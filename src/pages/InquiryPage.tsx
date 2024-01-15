import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { filterBuses } from "../redux/slices/busesSlice";
import TripDetailsCard from "../components/TripDetailsCard";

const InquiryPage = () => {
  const state = useSelector((store: RootState) => store.buses);
  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const departure: string | null = searchParams.get("departure");
  const destination: string | null = searchParams.get("destination");
  const date: string | null = searchParams.get("date");

  useEffect(() => {
    if (departure && destination && date) {
      dispatch(filterBuses({ departure, destination, date }));
    }
  }, [dispatch, departure, destination, date]);

  return (
    <>
      {state.isLoading && <Loading />}
      <div>
        <h1 className="text-3xl m-7 text-center">
          {state.filteredBuses.length > 0
            ? `${state.filteredBuses.length} Adet Sefer Bulundu.`
            : "Sefer Bulunamadı."}
        </h1>
        {state.filteredBuses.length > 0 && (
          <div>
            <h2 className="text-2xl  text-center">
              {state.filteredBuses[0].date} Tarihindeki Otobüs seferleri
            </h2>

            {state.filteredBuses.map((bus) => (
              <div className="flex flex-col justify-center items-center  gap-10 mx-24 text-black ">
                <TripDetailsCard bus={bus} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default InquiryPage;

