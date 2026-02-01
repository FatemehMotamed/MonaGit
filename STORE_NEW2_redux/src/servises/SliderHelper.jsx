import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Box from '../components/modules/Box';
import { clickCategory } from './HomePageHelper';
import rightIcon from '../assets/images/rightIcon.svg'

const boxSwiperSlider = (userList = []) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true}}
            // scrollbar={{ draggable: true }}
            breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                // 1024: { slidesPerView: 3 },
                // 1450: { slidesPerView: 4 },
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

const categorySwiperSlider = (list = [], setCategoryName, input, state, dispatch) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1450: { slidesPerView: 4 },
            }}
        >
            {
                list.map(item =>
                    <SwiperSlide key={item} className='cursor-pointer' onClick={() => clickCategory(item, setCategoryName, input, state, dispatch)}>
                        <div className='flex gap-4'>
                            <h3 className='text-[#8f8f8f]'>{item}</h3>
                            <img src={rightIcon} alt="" className='w-4 text-[#8f8f8f]' />
                        </div>
                    </SwiperSlide>
                )
            }

        </Swiper>
    );
};
export { boxSwiperSlider, categorySwiperSlider }