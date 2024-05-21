import logo from '../assets/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
    return (
        <header className=' absolute w-full px-6 pt-8 font-Barlow'>
            <div className='flex h-6 place-content-between m-auto sm:h-14 items-center'>
            <img src={logo} alt="" />
            <Navbar/>
            </div>
           
        </header>
    )
}

