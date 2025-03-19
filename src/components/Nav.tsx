import { Link } from "react-router-dom";
import cartImg from "../assets/icons/cart.svg"
import useCartlist from "../hooks/useCartlist";

export default function Nav() {
    const cartList = useCartlist()
    // const numCart = cartList
    const numCarts = cartList.carts.length
    return (
        <>
            <div className="flex justify-between h-[50px] bg-black text-white items-center sticky top-0 shadow-2xl px-[30px] z-20">
                <p>Logo</p>
                <ul className="flex gap-[15px]">
                    <button><Link to='/'>Home</Link></button>
                    <li>Products</li>
                </ul>
                <ul className="flex gap-[20px]">
                    <li>Login/Signup</li>
                    <button>
                        <Link to='/cart'>
                            <img src={cartImg} alt="cart" className="h-[25px] w-[30px] filter invert" />
                            <div className="rounded-[20px] bg-red-700 d-flex justify-center items-center w-[1.5rem] h-[1.5rem] absolute top-0 right-[25px] translate-x-1/3	translate-y-1/4	">{numCarts}</div>
                        </Link>
                    </button>
                </ul>
            </div>
        </>
    )
}