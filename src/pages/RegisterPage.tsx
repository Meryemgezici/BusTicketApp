import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSubmit =  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

     createUserWithEmailAndPassword(
        auth as Auth,
        email,
        password
      ).then(()=>{
        toast.success("Hesabınız oluşturuldu.");
        navigate("/");       
      })
      .catch((err)=>{
        toast.error(`Üzgünüz, bir hata oluştu. ${err.message}`);       
      })
    
  };

  return (
    <div className="bg-zinc-800 h-[100vh] grid place-items-center">
      <div className="bg-black text-white flex flex-col gap-10 py-16 px-32 rounded-lg">
        <div className="flex justify-center">
        <img
            className="h-[80px] w-[150px] img-fluid border rounded-br-xl rounded-tr-2xl"
            src="https://media.licdn.com/dms/image/D560BAQElAsWg_eQQKA/company-logo_100_100/0/1682450696382/lojiperyazilim_logo?e=1713398400&v=beta&t=WL60rncw3s4wGWei53kSJZg9Q2hJu1e0kYHmTlfSQXg"
          />
        </div>
        <h1 className="font-bold text-center text-xl">Lütfen kayıt olunuz</h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <div className="w-1/2">
              <label>Ad:</label>
              <input
                className="text-black rounded p-2 shadow-white mt-3 w-full"
                type="text"
                id="firstName" 
                required
              />
            </div>
            <div className="w-1/2">
              <label>Soyad:</label>
              <input
                className="text-black rounded p-2 shadow-white mt-3 w-full"
                type="text"
                id="lastName" 
                required
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <label>Cinsiyet:</label>
              <select
                className="text-black rounded p-2 shadow-white mt-3 w-full"
                id="gender"
                required
              >
                <option value="male">Erkek</option>
                <option value="female">Kadın</option>
                <option value="other">Diğer</option>
              </select>
            </div>
            <div className="w-1/2">
              <label>Doğum Tarihi:</label>
              <input
                className="text-black rounded p-2 shadow-white mt-3 w-full"
                type="date"
                id="birthDate"
                required
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <label>Email:</label>
              <input
                className="text-black rounded p-2 shadow-white mt-3 w-full"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="w-1/2">
              <label>Şifre:</label>
              <input
                className="text-black rounded p-2 shadow-white mt-3 w-full"
                type="password"
                id="password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-white text-black mt-10 rounded-full p-1 font-bold transition-all hover:bg-gray-300"
          >
            Kayıt Ol
          </button>

          <p className="text-gray-500 mt-5 text-center">
            <span>Zaten bir hesabınız var mı?</span>
            <Link to="/" className="mx-3 text-blue-500 disabled:bg-gray-700">
              Giriş Yap
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
