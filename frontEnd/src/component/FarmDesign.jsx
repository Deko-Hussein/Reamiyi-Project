function FarmDesign({farmList}){
    return <>
       
      <div className="mt-10 shadow-green-500 border-lime-400 border-2 w-44 h-54  rounded-lg shadow-lg">
        <img className=" w-80" src={farmList.Image} alt="" />   
         <h1 className=" text-black rounded-lg px-2 mt-8">{farmList. TextFarm}</h1>
        <div className="flex items-center">
            <h2 className="text-black rounded-lg px-6 py-2 mt-8">{farmList.price}</h2>
        <button className="bg-lime-400 text-white rounded-lg px-6 py-2 mt-8"> {farmList.Btn}</button> 
        </div>
        </div>   

    </>
}
export default FarmDesign