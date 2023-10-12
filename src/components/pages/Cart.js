import { useDispatch, useSelector } from "react-redux";
import { clearCart,removeItem } from "../../redux/slices/cartSlice";
import CloseIcon from '@mui/icons-material/Close';

import toast from 'react-hot-toast';
const Cart = () => {
    // subscribing to the cart using a selector
  const cartItems = useSelector((store)=> store.cart.items);

  const dispatch  = useDispatch();
  const handleClearCart = () => {
    // Dispatch an action
    dispatch(clearCart())
    toast.success("All items removed from cart",{
        duration: 2000,
        position: 'top-center',
      
        // Styling
        style: {
            backgroundColor:'#FFE76B',
            color:"red",
            fontWeight:600
        }
      });
  }
  const handleRemoveItem = (item) => {
    // Dispatch an action
    dispatch(removeItem(item))
    toast.success(item.name+" Removed from cart",{
        duration: 2000,
        position: 'top-center',
      
        // Styling
        style: {
            backgroundColor:'#FFE76B',
            color:"red",
            fontWeight:600
        }
      });
  }
  const total = useSelector((store)=> store.cart.total);
  const shipping = useSelector((store)=> store.cart.shipping_fee);
  

    return(
        <>
        <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8 border-b">
            <h2 className="text-3xl font-semibold capitalize pb-3">Shopping Cart</h2>
            <p className="capitalize text-stone-400">you have {cartItems.length} items in your cart</p>
            {
                        cartItems.length == 0 && (
                            <h1 className="text-center text-3xl font-semibold capitalize pb-3 text-slate-500">Cart is empty</h1>
                        )
                    } 

{
                    cartItems.length > 0 && (
                        <button className="py-2 mt-2 px-4 border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white rounded-md" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                    )
                } 
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 py-6">
                <div className="flex flex-col py-8 gap-6 col-span-2"> 
                    {
                        
                        cartItems.map((item,index) =>(

                            <div key={index} className="flex flex-col lg:flex-row justify-between items-center p-3 rounded-lg shadow-[0_.5rem_1rem_5px_rgba(0,0,0,.15)] border-0 bg-white">
                                <div className="flex gap-2 w-full lg:w-[60rem]">
                                    <img className="" src={item.image} alt={item.image} width="100px"/>
                                    <div className="flex flex-col justify-between">
                                        <h2 className="text-md font-bold hover:text-lime-600">{item.name}</h2>
                                        <p className="text-sm capitalize text-slate-500">{item.description}</p>
                                    </div>
                                </div>
                                <div className="flex pt-3 lg:pt-0 justify-between lg:justify-around w-full">
                                    <span className="font-bold">₹{item.price}</span>
                                    <span onClick={() => handleRemoveItem(item)} className="flex items-center font-bold text-red-500 hover:text-red-800 hover:cursor-pointer">Remove <CloseIcon /></span>
                                </div>
                            </div>
                        )) 
                    }
                </div>
                {
                    cartItems.length > 0 && (
                <div className="py-8 ">
                <h2 className="text-2xl font-semibold capitalize pb-3 border-b">Summary</h2>
                <div className="flex flex-col py-10">
                    <div className="pb-6 flex justify-between font-semibold">
                        <p className="uppercase text-lg">items {cartItems.length}</p>
                        <p>₹{total}</p>
                    </div>
                    <div className="pb-6 flex justify-between font-semibold">
                        <p className="uppercase text-lg">shipping</p>
                        <p>₹{shipping}</p>
                    </div>
                    <div className="pb-6 flex justify-between font-semibold">
                        <p className="uppercase text-lg font-bold">Total</p>
                        <p>₹{shipping+total}</p>
                    </div>
                    <button className="py-3 px-8 bg-lime-600 text-white">Checkout</button>
                </div>
                </div>
                 )
                } 
            </div>
        </div>
        </>
    )
}

export default Cart;