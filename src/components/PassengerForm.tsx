export interface PassengerFormData {
  firstName: string;
  lastName: string;
  tcKimlikNo: string;
}

const PassengerForm = () => {
  return (
    <div className="flex flex-col gap-5 w-[800px]">
      <div className="flex gap-5">
        <div className="w-1/2">
          <label>Ad:</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3 w-full"
            type="text"
            id="firstName"
            placeholder="Adınız"
            required
          />
        </div>
        <div className="w-1/2">
          <label>Soyad:</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3 w-full"
            type="text"
            id="lastName"
            placeholder="Soyadınız"
            required
          />
        </div>
      </div>
      <div className="w-1/2">
        <label>TC Kimlik No:</label>
        <input
          className="text-black rounded p-2 shadow-white mt-3 w-full"
          type="text"
          id="tcKimlikNo"
          placeholder="TC Kimlik No"
          maxLength={11}
          required
        />
      </div>
    </div>
  );
};

export default PassengerForm;
