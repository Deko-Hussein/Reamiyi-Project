
import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Part3 extends React.Component {
  render() {
    return (
        <>   
             <Header/>

      <div className="max-w-6xl mx-auto p-6">
        <div className="sm:flex  mb-20">
       <div>
         <p className="sm:text-md sm:px-10 sm:py-20">
        Beeraha Soomaaliya waxay ka mid yihiin ilaha ugu muhiimsan ee dhaqaalaha <br /> 
        iyo nolol maalmeedka dadka Soomaaliyeed. Soomaaliya waxay leedahay dhul ballaaran oo <br />
            ku habboon beeraha, gaar ahaan gobollada koonfureed sida Shabeellaha Hoose, <br />
         Shabeellaha Dhexe, Jubbooyinka, iyo Baay. Dhulkaas waxaa ku yaal wabiyada Jubba iyo Shabeelle,
          kuwaas oo biyo siiya beeraha oo ay ka baxaan dalagyada kala duwan.
        </p>
         </div>
       <div className="sm:w-80 sm:mt-10 rounded-lg"> 
          <img  src="https://www.daljir.com/wp-content/uploads/2019/07/dharoor-650x650.jpg" alt="" />
         </div>
         </div>
                <h2 className="text-4xl font-bold text-center mb-8"> Dalagyada Ugu Caansan ee Soomaaliya </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://images.pexels.com/photos/2288692/pexels-photo-2288692.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="premier bank somalia"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Qare </h3>
              <p className="text-gray-600 mb-4">
              Soomaaliya ayaa caan ku ah soo saarista Qaraha, gaar ahaan gobolka Shabeellaha Hoose..
              </p>
              <a
                href="Premier"
                className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
              Wax kabaro
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://images.pexels.com/photos/802783/pexels-photo-802783.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Customer Testimonials"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Moos</h3>
              <p className="text-gray-600 mb-4">
              Soomaaliya ayaa caan ku ah soo saarista mooska, gaar ahaan gobolka Shabeellaha Hoose..
              </p>
              <a
                href="/Sombank"
                className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
              Wax kabaro
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1YGicmSNcpHSDogIoNObI-9K1GSQw2GKZEh-1MsMbt10DWTXza_7sZD_3Pbap5mSEHg&usqp=CAU"
              alt="FAQs"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Sisin</h3>
              <p className="text-gray-600 mb-4">
              Sisin: Waxaa si weyn looga beeraa Shabeellaha iyo Jubbooyinka
              </p>
              <a
                href="/Amal"
                className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
              Wax kabaro
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              className="rounded-t-lg w-full h-48 object-cover" src="https://images.pexels.com/photos/5648582/pexels-photo-5648582.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Contact Us"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2"> Sabuul</h3>
              <p className="text-gray-600 mb-4">
              Waa mid ka mid ah dalagyada ugu badan ee Soomaaliya laga beero, gaar ahaan gobollada koonfureed..
              </p>
              <a  href="#" className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">  Wax kabaro</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
}

export default Part3