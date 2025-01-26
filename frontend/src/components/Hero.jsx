import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Autoplay, Pagination} from 'swiper/modules'

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
        <div className='md:w-1/2 w-full text-center'>
            <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>Hotels with pools</h1>
            <p className='py-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis sapiente eligendi
                 consequuntur laboriosam. Debitis, earum magnam libero odit omnis suscipit veritatis eligendi 
                 nostrum nam inventore porro beatae culpa error?</p>
        </div>
        <div className='md:w-1/2 w-full mx-auto'>
        <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
        clickable: true,
    }}
    autoplay={{
        delay: 1500,
        disableOnInteraction: false,
    }}
    breakpoints={{
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    }}
    modules={[Pagination, Autoplay]}
    className='mySwiper'
>
    <SwiperSlide>
        <img src='' alt='' className='w-full lg:h-[420px] sm:h-96 h-80' />
    </SwiperSlide>
    <SwiperSlide>
        <img src='' alt='' className='w-full lg:h-[420px] sm:h-96 h-80' />
    </SwiperSlide>
    <SwiperSlide>
        <img src='' alt='' className='w-full lg:h-[420px] sm:h-96 h-80' />
    </SwiperSlide>
    <SwiperSlide>
        <img src='' alt='' className='w-full lg:h-[420px] sm:h-96 h-80' />
    </SwiperSlide>
</Swiper>

        </div>
        
    </div>
  )
}
export default Hero