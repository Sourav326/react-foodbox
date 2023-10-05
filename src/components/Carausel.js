
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import product1 from "../images/product1.avif"
const Carausel = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    return(
        <>
        <div className="mx-auto w-full max-w-screen-xl py-16">
            <h2 className="text-3xl font-semibold capitalize">Best foods for you</h2>
         <Carousel responsive={responsive} className="py-8">
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
            <div className="w-40">
                <img className="rounded-full" src={product1} alt={product1}/>
            </div>
           
        </Carousel>
        </div>
        </>
    )
}

export default Carausel