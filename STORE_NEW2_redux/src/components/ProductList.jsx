import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Box from './Box'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
// import BoxSwiperSlider from '../servises/SliderHelper';

function ProductList() {

    // const { state } = useContext(ProductContext)

    // const dispatch = useDispatch()
        const state = useSelector((state) => state.products)

    return (
        <>
            {/* {
                BoxSwiperSlider(state.products.data)
            } */}


            
            <Swiper

                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={
                    {
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1450: { slidesPerView: 4 },

                    }
                }
            >
                {
                    state.data.map(product =>
                        <SwiperSlide key={product.id}>

                            <Box product={product} />
                        </SwiperSlide>
                    )
                }


            </Swiper>



            {/* {
                state.products.data.map(product =>
                    <Box key={product.id} product={product} />)
            }  */}

        </>
    )
}

export default ProductList