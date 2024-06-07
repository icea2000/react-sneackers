import {Link} from 'react-router-dom'
import { useCart } from '../hooks/useCart'

function Header (props) {
    const {totalSum} = useCart();
    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to = '/'>
            <div  className='d-flex align-center'>
                <img width={40} height={40} src='/img/logo.jpg' alt='logo'></img>
                <div>
                    <h3 className='text-uppercase'>React sneakers</h3>
                    <p className='opacity-5'>Магазин лучших кроссовок</p>
                </div>
            </div>
            </Link>
            <ul className='d-flex'>
                <li className='mr-30  cu-p' onClick={props.onClickCart}>
                    <img width={30} height={30} src='/img/cart2.png' alt='cart'/>
                    <span>{totalSum}</span>
                </li>
                <li>
                    <Link to = "/favorites">
                        <img width={30} height={30} src='/img/favorite.png' alt='user'/>
                    </Link>
                </li>
                <li>
                    <img width={30} height={30} src='/img/user.png' alt='user'/>
                </li>
            </ul>
        </header>
    );
}

export default Header;