import  Information from "./Data"
import ServiceList from "./ServiceList"

function ServerKeyd(){
    return<div className="grid grid-cols-1 mx-10 bg-no-repeat">
        {
            Information.map((item)=>{
                return<>
                 <ServiceList serverList={item}  /> 
                 {/* <FarmList farmList={item}/> */}
         
         </>   })
        }
    </div>
}

export default ServerKeyd