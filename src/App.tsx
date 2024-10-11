import './App.css'
import BannerSlider from './Components/Banner';
import Header from './Components/Header';
import FeaturesSection from './Components/Blessingplan';
import Promises from './Components/Promise';
import  Testimonials from './Components/Testimonies';
import Footer from './Components/Footer';
import PrayerMeetings from './Components/Meetings';
import LatestSongs from './Components/songs';
function App() {
  

  return (
    <>
      <div>
        <Header />
        <BannerSlider />
        <LatestSongs />
        <Promises />
        <FeaturesSection />
        <Testimonials />
        <PrayerMeetings />
        <Footer />
        
      </div>
    </>
  )
}

export default App
