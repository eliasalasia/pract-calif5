import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'

export const Main = () => {
    return (
        <section>
            <picture>
                <source media='(max-width:639px)' srcSet={imgMobile} />
                <source media='(max-width:640px)' srcSet={imgDesktop} />
                <img src={imgMobile} alt="background header" />
            </picture>
            <p className='absolute font-Fraunces  text-[40px] uppercase tracking-[6.25px] text-White text-center w-[327px] top-[144px] left-0 right-0 mx-auto sm:w-[600px] '>We are creatives</p>
            <img className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px]' src={arrow} alt="" />
        </section>
        
    )
}