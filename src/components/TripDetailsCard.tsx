import { IoIosArrowForward } from "react-icons/io";
import { LuArmchair } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { Bus } from "../redux/slices/busesSlice";

interface BusPopupProps {
  bus: Bus;
}

const TripDetailsCard:React.FC<BusPopupProps> = ({ bus }) => {
  const location = useLocation();

  // tripdetail sayfasına gidildiğinde Link'i devre dışı bırak
  const isTripDetailPage = location.pathname.includes("/tripDetail");

  return (
    <div
      key={bus.id}
      className="flex justify-between items-center border rounded-lg bg-white p-4 w-full mt-10"
    >
      <div className="flex flex-col">
        <img
          src={bus.logo}
          alt={`Logo for ${bus.departure} to ${bus.destination}`}
          className="h-24 w-48 img-fluid"
        />
        <div className="flex items-center gap-1">
          <p>
            {bus.departure.charAt(0).toUpperCase() + bus.departure.slice(1)}
          </p>
          <IoIosArrowForward />
          <p>
            {bus.destination.charAt(0).toUpperCase() + bus.destination.slice(1)}
          </p>
        </div>
      </div>
      <div className="flex  items-center gap-2">
        <LuArmchair className="text-2xl" />
        <span>2+2</span>
      </div>

      <div className="flex flex-col">
        <span>{bus.departureTime}</span>
        <span>{bus.travelTime}</span>
        Boş Koltuk Sayısı:{bus.emptySeats}
      </div>

      <div className="flex gap-6 justify-center items-center">
        <p className="font-bold">Fiyat:{bus.price}</p>
        {/* isTripDetailPage true ise Link'i devre dışı bırak */}
        {isTripDetailPage ? "" : (
          <Link to={`/tripDetail/${bus.id}`}
            className="bg-green-700 text-white p-2 border rounded-md hover:bg-green-600"
          >
            Koltuk Seç
          </Link>
        )}
      </div>
    </div>
  );
};

export default TripDetailsCard;
