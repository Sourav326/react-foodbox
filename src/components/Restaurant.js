import RestaurantCard from "./RestaurantCard";
import Restaurants from "../utils/Restaurants";
import RestroCarausel from "./RestroCarausel";
import offer from "../images/familyLandingBannerImg.svg"
import offer2 from "../images/hero-thumb.png"
import offer3 from "../images/pizza.png"
import { useState } from "react";

import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import FilterCard from "./FilterCard";

const Restaurant = () => {
  const [filterRestaurant,setFilterRestaurant] = useState(Restaurants)

  const [active,setActive] = useState('all')
  const handleFilter = (filterValue) => {
    if(filterValue === 'top'){
      const topRestro = Restaurants.filter(restaurant => restaurant.avgRating > 4)
      setFilterRestaurant(topRestro);
    } else{
      const allRestro = Restaurants
      setFilterRestaurant(allRestro);
    }
  }
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8 border-b">
            <h1 className="text-3xl font-semibold capitalize">Best offers for you </h1>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-24 py-10 lg:pb-10">
                <div className="flex flex-col justify-center lg:w-96 px-2">
                    <img className="w-full drop-shadow-[0px_5px_20px_red]" src={offer2} alt={offer2} />
                </div>
                <RestroCarausel />
            </div>
        <h2 className="text-3xl font-semibold capitalize pb-3">
        Restaurants with online food delivery
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-12 py-3">
            <div className="flex gap-1 items-center hover:bg-lime-600 py-2 px-3 hover:text-white cursor-pointer rounded-lg" onClick={() => handleFilter('all')}>
                <FoodBankOutlinedIcon />
                <span className="capitalize">All</span>
          </div>
            <div className="flex gap-1 items-center hover:bg-lime-600 py-2 px-3 hover:text-white cursor-pointer rounded-lg " onClick={() => handleFilter('top')}>
                <LocalPizzaOutlinedIcon />
                <span className="capitalize">Top</span>
          </div>
          <input type="search" name="search" className="col-span-8 border rounded-md p-2 col-end-12" />
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-6">
            {filterRestaurant.map((item, index) => (
              <RestaurantCard item={item} key={index} />
            ))}
          </div>
      </div>
    </>
  );
};

export default Restaurant;
