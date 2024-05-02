import './NewHome.css';
import FaQ from './HomeComponents/FaQ';
import OurCommitment from './HomeComponents/OurCommitment';
import TextYoutube from './HomeComponents/TextYoutube';
import WhyInvest from './HomeComponents/WhyInvest';
// import NewHeroSection from './HomeComponents/NewHeroSection';
import First from './HomeComponents/First';
import Second from './HomeComponents/Second'
import Signupstep from "./HomeComponents/Signupstep"
import Interstgraph from "./HomeComponents/Interstgraph"

function App() {
    return (
        <div className="new-home">
            <First />
            <Second />
            <Signupstep />
            <Interstgraph />
            {/* <NewHeroSection /> */}
            <TextYoutube />
            <OurCommitment />
            <WhyInvest />
            <FaQ />
        </div>
    );
}

export default App;