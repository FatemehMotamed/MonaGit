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
// import BoxSwiperSlider from '../servises/SliderHelper';

function ProductList() {

    const { state } = useContext(ProductContext)

    return (
        <>
            {/* {
                BoxSwiperSlider(state.data)
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
                state.data.map(product =>
                    <Box key={product.id} product={product} />)
            }  */}

        </>
    )
}

export default ProductList