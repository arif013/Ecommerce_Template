import { useDispatch } from "react-redux"
import useCartlist from "../hooks/useCartlist"
import { titleFormatter } from "../lib/formatter"
import { removeFromCart } from "../store"
import dltImg from "../assets/icons/delete.svg"


function Cart() {
    const dispatch = useDispatch()
    const cart = useCartlist()
    const cartItems = cart.carts
    // console.log(cartItems)
    const cartIds = cartItems.map((item:any) => item.id)
    // console.log(cartIds)
    const onDeleteItem = (id: string)=>{
        dispatch(removeFromCart(id))
    }
    return (
        <div className="px-[30px] py-[40px]">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cartItems.map((item: any, index: number) => (
                        // <ItemCard key={item.id} title={item.title} description={item.description} />
                        <div className="border p-4 rounded shadow-md" key={index}>
                            <h2 className="text-xl font-bold mb-2">{titleFormatter(item.title)}...</h2>
                            <div className="flex flex-row justify-between">
                                <p>{item.price}</p>
                                <img src={item.image} className="h-[40px]" alt="img" />
                            </div>
                            <button onClick={() => onDeleteItem(item.id)}>
                                <img src={dltImg} className="h-[20px]" alt="" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart