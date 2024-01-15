export interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvvCode: string;
  agreementCheckbox: boolean;
}

const PayForm = () => {
  return (
    <div className="flex flex-col gap-5 w-[500px] h-[100px]">
      <div className="w-full">
        <label>Kart Numarası:</label>
        <input
          className="text-black rounded p-2 shadow-white mt-3 w-full"
          type="text"
          id="cardNumber"
          placeholder="Kart Numaranız"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={16}
          minLength={16}
          required
        />
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <label>Son Kullanım Tarihi:</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3 w-full"
            type="text"
            id="expiryDate"
            placeholder="MM/YY"
            inputMode="numeric"
            pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
            required
          />
        </div>
        <div className="w-1/2">
          <label>CVV Kodu:</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3 w-full"
            type="tel"
            id="cvvCode"
            placeholder="CVV"
            pattern="^[0-9]{3}$"
            required
          />
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <input
          type="checkbox"
          id="agreementCheckbox"
          className="mr-2"
          required
        />
        <label htmlFor="agreementCheckbox" className="text-white">
          <span className="font-bold">Ön Bilgilendirme Formu</span>'nu,{" "}
          <span className="font-bold">Mesafeli Satış Sözleşmesi</span>'ni okudum
          ve onaylıyorum. Kişisel verilerin işlenmesine ilişkin{" "}
          <span className="font-bold">Aydınlatma Metni</span>’ni ve{" "}
          <span className="font-bold">Çerez Politikası Metni</span>'ni okudum.
          Kullanım Koşulları’nı kabul ediyorum.
        </label>
      </div>
      <button className="bg-green-700 text-white p-2 border rounded-md hover:bg-green-600">
        Ödemeyi Tamamla
      </button>
    </div>
  );
};

export default PayForm;
