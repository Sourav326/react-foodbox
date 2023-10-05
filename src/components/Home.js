import Carausel from './Carausel';
import HeaderHero from '../images/headerHero.jpeg'
import Banner from '../images/banner.jpeg'

const Home = () => {
  return (
    <>
      <div className="relative h-128 w-full bg-[#feffcb] flex items-center px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-col lg:flex-row">
          <div>
            <h1 className="capitalize text-4xl lg:text-6xl font-extrabold leading-tight text-center lg:text-left">
              The best <br></br>
              <span className="logo-text-second">Restaurants</span>
              <br></br> in your home
            </h1>
            <p className="py-5 text-lg text-slate-500 text-center lg:text-left">
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
    </>
  );
};
export default Home;
