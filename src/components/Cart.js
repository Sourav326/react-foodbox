import { useDispatch, useSelector } from "react-redux";
import productImage from "../images/pizza1.jpeg";
import { clearCart,removeItem } from "../redux/slices/cartSlice";
import CloseIcon from '@mui/icons-material/Close';
const Cart = () => {
    // subscribing to the cart using a selector
  const cartItems = useSelector((store)=> store.cart.items);

  const dispatch  = useDispatch();
  const handleClearCart = () => {
    // Dispatch an action
    dispatch(clearCart())
  }
  const handleRemoveItem = () => {
    // Dispatch an action
    dispatch(removeItem())
  }
    return(
        <>
        <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8 border-b">
            <h2 className="text-3xl font-semibold capitalize pb-3">Shopping Cart</h2>
            <p className="capitalize text-stone-400">you have {cartItems.length} items in your cart</p>
            <div className="flex flex-col py-8 gap-6"> 
                {
                    cartItems.length == 0 && (
                        <h1 className="text-center text-3xl font-semibold capitalize pb-3 text-slate-500">Cart is empty</h1>
                    )
                } 
                {
                    
                    cartItems.map((item) =>(

                        <div className="flex justify-between items-center p-3 rounded-lg shadow-[0_.5rem_1rem_5px_rgba(0,0,0,.15)] border-0 bg-white">
                            <div className="flex gap-2 w-96">
                                <img className="" src={productImage} alt={productImage} width="100px"/>
                                <div className="flex flex-col justify-between">
                                    <h2 className="text-md font-bold hover:text-lime-600">{item.name}</h2>
                                    <p className="text-sm capitalize text-slate-500">{item.description}</p>
                                </div>
                            </div>
                            <span className="font-bold">2</span>
                            <span className="font-bold">₹{item.price}</span>
                            <span onClick={() => handleRemoveItem()} className="font-bold text-red-500 hover:text-red-800 hover:cursor-pointer"><CloseIcon /></span>
                        </div>
                    )) 
                }
            </div>
                {
                    cartItems.length > 0 && (
                        <button className="py-2 px-4 border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white rounded-md" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                    )
                } 
            
        </div>
        </>
    )
}

export default Cart;