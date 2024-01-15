import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/homepage");
        toast.success("Hesabınıza giriş yapıldı.");
      })
      .catch(() => {
        toast.error(`Lütfen bilgilerinizi doğru giriniz.`);
      });
  };

  return (
    <div className="bg-zinc-800 h-[100vh] grid place-items-center">
      <div className="bg-black text-white  flex flex-col gap-10 py-16 px-32 rounded-lg ">
        <div className="flex justify-center">
          <img
            className="h-[80px] w-[150px] img-fluid border rounded-br-xl rounded-tr-2xl"
            src="https://media.licdn.com/dms/image/D560BAQElAsWg_eQQKA/company-logo_100_100/0/1682450696382/lojiperyazilim_logo?e=1713398400&v=beta&t=WL60rncw3s4wGWei53kSJZg9Q2hJu1e0kYHmTlfSQXg"
          />
        </div>
        <h1 className="font-bold text-center text-xl">Lütfen giriş yapınız</h1>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3"
            type="email"
            id="email"
            required
          />

          <label className="mt-5">Şifre</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3"
            type="password"
            id="password"
            required
          />

          <button
            type="submit"
            className="bg-white text-black mt-10 rounded-full p-1 font-bold transition-all hover:bg-gray-300 "
          >
            Giriş Yap
          </button>

          <p className="text-gray-500 mt-5">
            <span>Hesabınız Yok mu?</span>
            <Link
              to="/register"
              className="mx-3 text-blue-500 disabled:bg-gray-700"
            >
              Kayıt Ol
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
