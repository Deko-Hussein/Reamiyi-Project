import FarmInfor from "./FarmData"
import FarmDesign from "./FarmDesign"
import FarmKind from "./FarmKinds"

function FarmSav(){
    return<div className="grid grid-cols-3 ml-20">

        {
            FarmInfor.map((item)=>{
                return<>
                <FarmDesign farmList={item}/>
                {/* <FarmKind farmKind={item}/> */}
\                </>

            })
        }
    </div>
}
export default FarmSav