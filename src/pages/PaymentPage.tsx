import { useState } from "react";
import { useLocation } from "react-router-dom";
import PassengerForm from "../components/PassengerForm";
import ContactForm from "../components/ContactForm";
import PayForm from "../components/PayForm";
import Modal from "../components/Modal";

const PaymentPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedChairCount = parseInt(
    queryParams.get("selectedChairCount") || "0",
    10
  );

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      setModalOpen(true);
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 10000));
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log("modalOpen", modalOpen);

  return (
    <>
      {!modalOpen ? (
        <div className="bg-zinc-800 min-h-screen grid place-items-center">
          <form className="flex" onSubmit={handleSubmit}>
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
                  <div className="flex flex-col gap-4" key={index}>
                    {index > 0 && (
                      <div className="border-[0.5px] border-gray-300 mb-4"></div>
                    )}
                    <h3 className="font-bold ">{index + 1}.Yolcu Bilgileri</h3>
                    <PassengerForm key={index} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-black text-white flex flex-col gap-10 px-12 py-7 rounded-lg mt-14 ml-6 h-[500px]">
                <h1 className="font-bold text-center text-xl text-[#A2C2D9]">
                  Ödeme Bilgileri
                </h1>
                <PayForm />
              </div>
            </div>
          </form>

          {loading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-70">
              <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-500 h-16 w-16"></div>
            </div>
          )}
        </div>
      ) : (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <p>Ödeme başarılı! Modal içeriğinizi buraya ekleyin.</p>
        </Modal>
      )}
    </>
  );
};

export default PaymentPage;
