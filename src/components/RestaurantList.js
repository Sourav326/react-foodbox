import RestaurantCard from "./RestaurantCard";
import Restaurants from "../utils/Restaurants"

const RestaurantList = () => {
  const limit = 9;

  // Use slice to limit the number of records
  const limitedRestaurants = Restaurants.slice(0, limit);
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8 border-y">
        <h2 className="text-3xl font-semibold capitalize pb-3">
          Top Restaurants near you
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-6">
            {
              limitedRestaurants.map((item,index) => (
                <RestaurantCard item={item} key={index} />
            ))
            }
          </div>
      </div>
    </>
  );
};

export default RestaurantList;
