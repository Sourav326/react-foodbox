import RestaurantCard from "./RestaurantCard";
import Restaurants from "../utils/Restaurants";
import RestroCarausel from "./RestroCarausel";
import offer2 from "../images/hero-thumb.png"
import { useState } from "react";

import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';

const Restaurant = () => {
  const [filterRestaurant,setFilterRestaurant] = useState(Restaurants)

  const handleFilter = (filterValue) => {
    if(filterValue === 'top'){
      const topRestro = Restaurants.filter(restaurant => restaurant.avgRating > 4)
      setFilterRestaurant(topRestro);
    } else if(filterValue === 'all'){
      const allRestro = Restaurants
      setFilterRestaurant(allRestro);
    } else {
      const setor15Restro = Restaurants.filter(restaurant => restaurant.areaName.toLowerCase().includes(filterValue.toLowerCase()));
      setFilterRestaurant(setor15Restro);
    }
  }

  //Filter the Restro with search value
  const [searchText, setSearchtext] = useState("")
  const handleSearch = () => {
    const searchRestro = Restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
    if(searchRestro.length > 0){
      setFilterRestaurant(searchRestro)
    } else {
      setFilterRestaurant([])
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
        <div className="grid grid-cols-4 lg:grid-cols-10 py-3">
            <div className="flex justify-left gap-1 items-center hover:bg-lime-600 py-2 px-3 hover:text-white cursor-pointer rounded-lg" onClick={() => handleFilter('all')}>
                <FoodBankOutlinedIcon />
                <span className="capitalize">All</span>
          </div>
            <div className="flex justify-left gap-1 items-center hover:bg-lime-600 py-2 px-3 hover:text-white cursor-pointer rounded-lg " onClick={() => handleFilter('top')}>
                <FastfoodOutlinedIcon />
                <span className="capitalize">Top </span>
          </div>
            <div className="col-span-2 flex justify-left gap-1 items-center hover:bg-lime-600 py-2 px-3 hover:text-white cursor-pointer rounded-lg " onClick={() => handleFilter('sector 15')}>
                <WhereToVoteOutlinedIcon />
                <span className="capitalize">Sector 15</span>
          </div>
          <div className="col-start-1 lg:col-start-6 col-span-7 flex gap-3 pt-6 lg:pt-0">
            <input type="search" name="search" className="p-2 border rounded w-full" value={searchText} onChange={(e) => {
              setSearchtext(e.target.value)
            }} />
            <button className="py-2 px-4 border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white rounded-md" onClick={handleSearch}>Search</button>
          </div>
        </div>
            {
                filterRestaurant.length == 0 && (
                    <h1 className="text-center text-3xl font-semibold capitalize pb-3 text-slate-500 py-6">No Restaurants Available</h1>
                )
            }
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
