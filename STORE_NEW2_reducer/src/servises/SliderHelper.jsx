import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Box from '../components/Box';

export const boxSwiperSlider = (userList = []) => {


    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: userList.length > 2 ? 3 : userList.length },
                // 1024: { slidesPerView: 3 },
                1450: { slidesPerView: 4 },
            }}
        >
            {
                userList.map(product =>

                    <SwiperSlide key={product.id}>
                        <Box product={product} />
                    </SwiperSlide>

                )
            }

        </Swiper>
    );
};