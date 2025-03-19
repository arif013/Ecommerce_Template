import { useSelector } from "react-redux"

const useCartlist = ()=>{
    const cartList = useSelector((state : any) => state)
    return cartList
}

export default useCartlist
