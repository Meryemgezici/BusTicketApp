import React from "react";

interface ContactFormData {
  email: string;
  phoneNumber: string;
}

interface ContactFormProps {
  onContactInfoChange: (data: ContactFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onContactInfoChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onContactInfoChange({
      ...contactInfo, // Replace 'contactInfo' with 'prevData'
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-5 w-[800px]">
      <div className="flex gap-5">
        <div className="w-1/2">
          <label>Email:</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3 w-full"
            type="email"
            id="email"
            placeholder="Örneğin: epostanız@gmail.com"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-1/2">
          <label>Telefon Numarası:</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3 w-full"
            type="tel"
            id="phoneNumber"
            placeholder="Örnek: 532-111-2233"
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
