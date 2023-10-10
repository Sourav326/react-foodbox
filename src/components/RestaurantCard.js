
import{RESTRO_URL} from "../utils/constants"
import { Link } from "react-router-dom";

const RestaurantCard = (props,index) => {
    const data = props.item
    return(
        <>
        <div className="rounded-lg shadow-md hover:shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden group ">
            <img src={RESTRO_URL+data?.cloudinaryImageId} alt="" className='w-full h-52 rounded-t-lg transition ease-linear delay-70 group-hover:-translate-y-1 group-hover:scale-105  group-hover:duration-400' />
            <div className='p-4 flex flex-col gap-3'>
                <div className='text-lg font-bold hover:text-lime-600'><Link to="/restaurant">{data?.name}</Link></div>
                <div className='text-sm text-slate-400 font-normal'>{data?.cuisines.join(', ')}</div>
                <div className='text-sm text-slate-400 font-bold'>{data?.costForTwo}</div>
            </div>
        </div>
        </>
    )
}

export default RestaurantCard