import Footer from "./Footer"
import Header from "./Header"
function CelServer(){
    return<>  
    <Header/>
       <div className="flex justify-between">
        <div>
        <p className="text-md px-10 pt-10">
        Ceelka wuxuu noqdaa isha ugu muhiimsan ee dadka reer miyiga iyo xoolo- <br /> 
        dhaqatada ay ku tiirsan yihiin marka ay helaan biyo nadiif ah oo la isticmaali karo. <br />
        </p>
       <div>
            <h1 className="text-2xl font-semibold px-10 pt-2">Muhiimadda uu ceel-ku leeyahay:</h1>
        <ol class="list-decimal text-md px-10 pt-2">
            <li className="text-2xl font-semibold">Biyo joogto ah oo la heli karo:</li>
            <ul className="list-disc ">
                <li className="whitespace-pr">Ceelasha waxay bixiyaan ilo biyo joogto ah, taas oo aad muhiim u ah <br />
                gaar ahaan xilliyada abaarta iyo qalaylka. Ceelku wuxuu noqdaa meesha<br /> 
                kaliya ee laga heli karo biyo marka roob la'aan dhacdo.

                </li>
            </ul>

            <li className="text-2xl font-semibold pt-4">Cabitaanka iyo nolosha xoolaha:</li>
            <ul className="list-disc">
                <li className="whitespace-pr">Xoolo-dhaqatada miyiga waxay ku tiirsan yihiin ceelasha si ay u <br />
                waraabiyaan xoolahooda. Biyaha ceelka ayaa ah kuwo muhiim ah oo la<br /> 
                hubo in ay caafimaad qabaan, gaar ahaan marka ceelku yahay mid <br />
                qotodheer oo biyaha laga helo ay nadiif yihiin.

                </li>
            </ul>
     </ol>
     </div> 
        </div>
  
     
       <div className="w-80 mt-10  mr-20 rounded-lg"> 
         <img className="h-80 w-80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7jHY9e1n4hK051gqRwBRbwbpX_RtYfoidg&s" alt="" />
        </div>
        </div>

        <Footer/>
    </>
}
export default CelServer