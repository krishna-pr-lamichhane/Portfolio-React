import mail from '../assets/gmail-logo-1.webp';
import instagram from '../assets/insta.png';
import facebook from '../assets/fb.png';

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center mt-20 pt-15 px-4 mb-20" id='contactme'>

      <div className="text-center">
        <p className="text-gray-600 text-lg">Get in Touch</p>
        <h1 className="text-5xl font-bold text-black mt-2">Contact Me</h1>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

        <a href="mailto:lamichhane2060@gmail.com"
          className="flex flex-col items-center p-6 rounded-3xl border border-black/20 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-black text-2xl font-bold">
            <img src={mail} alt="Email" width={30}/>
          </div>
          <span className="mt-3 text-xl font-semibold">Email</span>
          <span className="text-gray-600 text-sm">lamichhane2060@gmail.com</span>
        </a>

        <a
          href="https://www.instagram.com/chris_na____lamichhane/"
          target="_blank"
          className="flex flex-col items-center p-6 rounded-3xl border border-black/20 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-black text-2xl">
            <img src={instagram} alt="Instagram" width={30}/>
          </div>
          <span className="mt-3 text-xl font-semibold">Instagram</span>
          <span className="text-gray-600 text-sm">@chris_na____lamichhane</span>
        </a>

        <a
          href="https://www.facebook.com/krishna.lamichhane.208304"
          target="_blank"
          className="flex flex-col items-center p-6 rounded-3xl border border-black/20 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-black text-2xl">
            <img src={facebook} alt="Facebook" width={30}/>
          </div>
          <span className="mt-3 text-xl font-semibold">Facebook</span>
          <span className="text-gray-600 text-sm">Krishna Lamichhane</span>
        </a>

      </div>
    </div>
  );
};
export default Contact;