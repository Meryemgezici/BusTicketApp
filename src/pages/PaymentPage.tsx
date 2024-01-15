import { useLocation } from "react-router-dom";
import PassengerForm, { PassengerFormData } from "../components/PassengerForm";
import ContactForm, { ContactFormData } from "../components/ContactForm";
import PayForm, { PaymentFormData } from "../components/PayForm";

interface FormData {
  contactInfo: ContactFormData[];
  passengerInfo: PassengerFormData[];
  paymentInfo: PaymentFormData[];
}

const PaymentPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedChairCount = parseInt(
    queryParams.get("selectedChairCount") || "0",
    10
  );

  return (
    <div className="bg-zinc-800 min-h-screen grid place-items-center">
      <form className="flex">
        <div className="flex flex-col">
          <div className="bg-black text-white flex flex-col gap-10 px-12 py-7 rounded-lg mt-14">
            <h1 className="font-bold text-center text-xl text-[#A2C2D9]">
              İletişim Bilgileri
            </h1>
            <ContactForm />
          </div>
          <div className="bg-black text-white flex flex-col gap-10 px-12 py-7 rounded-lg my-6">
            <h1 className="font-bold text-center text-xl text-[#A2C2D9]">
              Gidiş Yolcu Bilgileri
            </h1>
            {Array.from({ length: selectedChairCount }, (_, index) => (
              <div className="flex flex-col gap-4">
                {index > length && (
                  <div className="border-[0.5px] border-gray-300 mb-4"></div>
                )}
                <h3 className="font-bold ">{index + 1}.Yolcu Bilgileri</h3>
                <PassengerForm key={index} />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black text-white flex flex-col gap-10 px-12 py-7 rounded-lg mt-14 ml-6 h-[500px]">
          <h1 className="font-bold text-center text-xl text-[#A2C2D9]">
            Ödeme Bilgileri
          </h1>
          <PayForm />
          
        </div>
        
      </form>
    </div>
  );
};

export default PaymentPage;
