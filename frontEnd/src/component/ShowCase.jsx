
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function ShowCase() {
  const [text] = useTypewriter({
    words: ["Kusoo dhawada Miyiga Somaliya"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div className="sm:flex flex-col md:flex-row mt-10 mx-auto max-w-screen-xl items-center space-y-4 md:space-y-0 md:space-x-8">
      <div className="text-center md:text-left md:w-1/2 px-16">
        <h1 className="text-3xl font-bold mb-4">
          {text}
          <span className="text-lime-500 text-3xl">
            <Cursor />
          </span>
        </h1>
        <p className="text-gray-600 text-base mb-4">
          Miyiga Soomaaliya waa degaan dabiici ah oo aad u <br />
          ballaaran, oo leh taariikh iyo dhaqan qani ah. <br />
          Waxaa loo yaqaan dhulka xoolo-dhaqatada iyo <br />
          beeralayda, halkaas oo dadku ku tiirsan yihiin xoolaha <br />
          sida geela, lo’da, iyo adhiga, iyo sidoo.....
        </p>
        <Link to="/Faahfahin">
          <button className="bg-lime-400 text-white rounded-lg px-6 py-2 transition duration-200 hover:bg-lime-500">
            Faahfaahin
          </button>
        </Link>
      </div>
      <div className="md:w-96">
        <img 
          className="w-full h-auto rounded-lg shadow-lg" 
          src="https://i.pinimg.com/236x/53/25/14/532514b82b4ba53f4a354f638dbfa353.jpg" 
          alt="Somali scenery" 
        />
      </div>
    </div>
  );
}

export default ShowCase;
