import { useDispatch } from "react-redux";
import LoadingButton from "../components/LoadingButton";
import { addToCart } from "../store";
// import LoadingButtonComp from "../components/LoadingButtonComp";
import { Product } from "../components/Card";
import cancelIcon from "../assets/icons/cancel.svg"
import { AnimatePresence, motion } from "framer-motion";

interface ProductDetailsProps {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    showProduct: boolean;
    onClose: () => void;
    item: Product
}


function ProductDetails({ id, title, description, price, image, category, showProduct, onClose, item }: ProductDetailsProps) {
    console.log(title, showProduct)
    const dispatch = useDispatch()
    const handleCartAdd = (state: any) => {
        dispatch(addToCart(state))
    }
    return (
        // <>

        //     {
        //         showProduct && (
        //             // <div className=" opacity-[30px] brightness-[30px] backdrop-blur-md">
        //                 <div className="flex gap-[20px]  h-full fixed top-0 right-0  text-black z-10 bg-opacity-70 ">
        //                     <button className="mx-[10px]" onClick={onClose}>Close</button>
        //                     <div className="w-[55vw] flex flex-col justify-center items-center bg-white px-[30px] rounded-l-[20px]">
        //                         <img src={image} alt={title} className="flex justify-center relative w-[200px]" />
        //                         <div className="items-start">
        //                             <h2 className="text-[24px] font-bold">{title}</h2>
        //                             <p className="text-[18px]">{description}</p>
        //                             <p className="font-bold text-green-700">{price} INR</p>
        //                             <p>Category: {category}</p>

        //                         </div>
        //                         <LoadingButton
        //                             onClick={async () => {
        //                                 await new Promise((resolve) => setTimeout(resolve, 1000));
        //                                 handleCartAdd(item)
        //                             }}
        //                             // isLoading={isLoading} // Pass loading state to the button
        //                             text="+ ADD TO CART"
        //                         />

        //                     </div>
        //                 </div>
        //             // </div>
        //         )
        //     }
        // </>

        <>
            <AnimatePresence>

                    {showProduct && (
                        <motion.div
                            className="fixed inset-0 bg-opacity-80 backdrop-blur-md z-10 flex justify-end"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 90, damping: 15 }}
                        >
                            {/* <div  "> */}
                            <button className="px-[30px] pt-[50px] text-gray-500 hover:text-gray-800" onClick={onClose}>
                                <img src={cancelIcon} alt="icon" className="h-[50px] border-2 rounded-[30px] p-2" />
                            </button>
                            <div className="w-[65vw] flex flex-col justify-center items-center bg-white px-[30px] rounded-l-[20px] relative">
                                <img src={image} alt={title} className="w-[200px] mb-4" />
                                <div className="text-left">
                                    <h2 className="text-[24px] font-bold">{title}</h2>
                                    <p className="text-[18px]">{description}</p>
                                    <p className="font-bold text-green-700">{price} INR</p>
                                    <p>Category: {category}</p>
                                </div>
                                <LoadingButton
                                    onClick={async () => {
                                        await new Promise((resolve) => setTimeout(resolve, 1000));
                                        handleCartAdd(item);
                                    }}
                                    text="+ ADD TO CART"
                                />
                            </div>
                            {/* </div> */}
                        </motion.div>
                    )}

            </AnimatePresence>
        </>

    );
}

export default ProductDetails