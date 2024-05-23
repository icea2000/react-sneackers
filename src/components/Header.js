function Header () {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img width={40} height={40} src='/img/logo.jpg' alt='logo'></img>
                <div>
                    <h3 className='text-uppercase'>React sneakers</h3>
                    <p className='opacity-5'>Магазин лучших кроссовок</p>
                </div>
            </div>
        
            <ul className='d-flex'>
                <li className='mr-30 '>
                    <img width={30} height={30} src='/img/cart2.png' alt='cart'/>
                    <span>1205</span>
                </li>
                <li>
                    <img width={30} height={30} src='/img/user.png' alt='user'/>
                </li>
            </ul>
        </header>
    );
}

export default Header;