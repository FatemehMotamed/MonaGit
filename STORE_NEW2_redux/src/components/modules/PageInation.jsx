import trash from "../../assets/images/trash.svg"
import { decrease, increase, zeroBoxCounter } from '../../servises/PaginationsHelper'
import { useDispatch, useSelector } from 'react-redux'


function PageInation({ product }) {

    const state = useSelector((state) => state.products)
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => decrease(product, state, dispatch)}>-</button>
            <span className='text-green-600 font-bold'>{product.paginate}</span>
            <button onClick={() => increase(product, state, dispatch)}>+</button>
            <button onClick={() => zeroBoxCounter(product, state, dispatch)}>
                <img src={trash} alt="" className='w-5' />
            </button>
        </>
    )
}


export default PageInation