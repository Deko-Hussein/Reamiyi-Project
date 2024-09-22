import Farm from "../component/Farm"
import Footer from "../component/Footer"
import Header from "../component/Header"
import ShowCase from "../component/ShowCase"
// import SideNav from "../component/SideNav"

function Home(){
    return<>
        <Header />
        {/* <SideNav/> */}
        <ShowCase/>
            <Farm/>
        <Footer/>
        
    </>
}
export default Home