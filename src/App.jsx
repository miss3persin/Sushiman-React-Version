import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PopularFoods from './components/PopularFoods';
import Trending from './components/Trending';
import Subscription from './components/Subsciption';
import Footer from './components/Footer';
import './App.css';

// import images as relative image path won't work with vite/vercel.
// import check from './assets/check.svg'
// import star from './assets/star.svg'
// import sushi12 from './assets/sushi-12.png'
// import sushi11 from './assets/sushi-11.png'
// import sushi10 from './assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  
  // init AOS animation
  AOS.init({
      duration: 1000,
      offset: 100,
  });

  return (
    <>
      <Header/>
      <Hero/>
      <AboutUs/>
      <PopularFoods/>
      <Trending/>
      <Subscription/>
      <Footer/>
    </>
  )
}

export default App
