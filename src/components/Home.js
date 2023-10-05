import Carausel from './Carausel';
import Footer from './Footer';
import Header from './Header';
import HeaderHero from '../images/headerHero.jpeg'
import Banner from '../images/banner.jpeg'

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative h-128 w-full bg-[#feffcb] flex items-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="capitalize text-6xl font-extrabold leading-tight">
              The best <br></br>
              <span className="logo-text-second">Restaurants</span>
              <br></br> in your home
            </h1>
            <p className="py-5 text-lg text-slate-500">
              Get ready for a scrumptious adventure filled with unbeatable
              offers<br></br> on your favourite foods and restaurants.
            </p>
          </div>
          <img className="w-2/6" src={HeaderHero} alt="Delivery Boy" />
        </div>
      </div>
      <Carausel />
      <div className="max-w-7xl mx-auto py-8">
        <p>hello</p>
        <img className="" src={Banner} alt={Banner} />
      </div>
      <Footer />
    </>
  );
};
export default Home;
