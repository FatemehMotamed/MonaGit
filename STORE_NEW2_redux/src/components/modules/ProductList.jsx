import React from 'react'
import Box from './Box'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';

function ProductList() {


    const state = useSelector((state) => state.products)

    return (
        <>
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


        </>
    )
}

export default ProductList