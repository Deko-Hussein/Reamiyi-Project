
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function ServiceList({ serverList }) {
    const [text] = useTypewriter({
        words: [serverList.text || "Loading..."], // Fallback text
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1500,
    });

    return (
        <div className="sm:flex flex-col md:flex-row mt-10 mx-auto max-w-screen-xl items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
                <h1 className="text-md font-semibold whitespace-break-spaces">
                    {text}
                    <span className="text-lime-500 text-2xl">
                        <Cursor />
                    </span>
                </h1>
                <p className="text-gray-500 text-sm pt-2 whitespace-pre-line">{serverList.infor}</p>
                <Link to={serverList.Link}>
                    <button className="bg-lime-400 text-white rounded-lg px-6 py-2 mt-8">
                        {serverList.Btn}
                    </button>
                </Link>
            </div>
            <div className="md:w-80">
                <img
                    className="w-full h-auto rounded-lg shadow-lg"
                    src={serverList.image}
                    alt={serverList.imageAlt || "Service image"}
                />
            </div>
        </div>
    );
}

export default ServiceList;
