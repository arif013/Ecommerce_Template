// import  {  useTransition } from 'react'
import { descFormatter, titleFormatter } from '../lib/formatter'
// import { ThemeContext } from '../App'; // Import context
// import { useShoppingCart } from '../context/ShoppingCartContext';
import { useDispatch } from 'react-redux'
import { addToCart } from '../store'
import LoadingButton from './LoadingButton'
import { useState } from 'react'
import ProductDetails from '../pages/ProductDetails'


export interface Product {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string
}


function Card(item: Product) {
    // const [isLoading, setIsLoading] = useState(false)
    const [showProduct, setShowProduct] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const dispatch = useDispatch()
    const handleCartAdd = (state: any) => {
        dispatch(addToCart(state))
    }
    
    const handleProductClick = (item:Product)=>{
        // console.log(item)
        setSelectedProduct(item)
        setShowProduct(true)
    }

    return (
        <div className='' >
            <div className='p-[10px] flex flex-col justify-between' >
                <div onClick={()=>handleProductClick(item)}>
                <div className='flex justify-center items-center px-[20px] py-[20px]'>
                    <img src={item.image} className=' max-h-[150px]' alt="" />
                </div>
                <div className='flex flex-col justify-between h-[180px]'>
                    <p className='text-[20px] font-semibold'>{titleFormatter(item.title)}...</p>
                    <p>{descFormatter(item.description)}...</p>
                    <p> <span className='text-green-800 font-bold'>{item.price} </span>INR</p>
                    <div className='h-[50px]'>
                        {/* <LoadingButton
                        onClick={async()=>{
                            await new Promise((resolve) => {
                                setTimeout(resolve,1000)
                                handleCartAdd({...item})
                            })
                            }}
                            className='items-left text-white bg-black p-[10px] w-full' > +ADD TO CART
                            </LoadingButton> */}

                </div>
                        <LoadingButton
                            onClick={async () => {
                                await new Promise((resolve) => setTimeout(resolve, 1000));
                                handleCartAdd(item)
                            }}
                            // isLoading={isLoading} // Pass loading state to the button
                            text="+ ADD TO CART"
                        />
                    </div>

                </div>
            </div>
            {/* Only render ProductDetails when selectedProduct is set */}
            { selectedProduct && <ProductDetails 
            {...selectedProduct}
            showProduct={showProduct}
            onClose={()=>setShowProduct(false)}
            item={item}
            />}
        </div>
    )
}

export default Card