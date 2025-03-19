import { useContext } from 'react'
import Card from '../components/Card'
import { ThemeContext } from '../App'

interface Product {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string
}


function HomePage() {
    const allData = useContext<Product[] | null>(ThemeContext) ?? []
    return (
        // <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-[20px]'>

            {
                allData.map((item, index) => (
                    <div className=' '>

                        <Card key={index} {...item} />
                    </div>

                ))
            }
        </div>
    )
}

export default HomePage