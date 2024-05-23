function Drawer () {
    return (
    <div style={{display:'none'}} className='overlay'>
        <div className='drawer flex'>
            <h2 className='mb-30 d-flex justify-between'>Корзина
                <img className='cu-p' width={25} height={25} src='/img/remove.svg' alt='remove'></img>
            </h2>
            <div className='items'>
                <div className='cartItem d-flex align-center mb-3'>
                    <div style={{backgroundImage: 'url(/img/product/sn1.jpeg)'}} className='cartItemImg flex'>
                    </div>
          
                    <div className='mr-20'>
                        <p className='mb-5'>Мужские кроссовки Nike Blazer</p>
                        <b>12 999</b>
                    </div> 
                    <img className='removeBtn' width={25} height={25} src='/img/remove.svg' alt='remove'></img>
                </div>
              
                <div className='cartItem d-flex align-center mb-3'>
                    <div style={{backgroundImage: 'url(/img/product/sn1.jpeg)'}} className='cartItemImg flex'>
                    </div>
            
                    <div className='mr-20'>
                        <p className='mb-5'>Мужские кроссовки Nike Blazer</p>
                        <b>12 999</b>
                    </div> 
                    <img className='removeBtn' width={25} height={25} src='/img/remove.svg' alt='remove'></img>
                </div>

                <div className='cartItem d-flex align-center mb-3'>
                    <div style={{backgroundImage: 'url(/img/product/sn1.jpeg)'}} className='cartItemImg flex'>
                    </div>
            
                    <div className='mr-20'>
                        <p className='mb-5'>Мужские кроссовки Nike Blazer</p>
                        <b>12 999</b>
                    </div> 
                    <img className='removeBtn' width={25} height={25} src='/img/remove.svg' alt='remove'></img>
                </div>

                <div className='cartItem d-flex align-center mb-3'>
                    <div style={{backgroundImage: 'url(/img/product/sn1.jpeg)'}} className='cartItemImg flex'>
                    </div>
            
                    <div className='mr-20'>
                        <p className='mb-5'>Мужские кроссовки Nike Blazer</p>
                        <b>12 999</b>
                    </div> 
                    <img className='removeBtn' width={25} height={25} src='/img/remove.svg' alt='remove'></img>
                </div>
            </div>
            <div className='cartTotalBlock mt-15'>
                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498</b>
                    </li>
                    <li> 
                        <span>Налог:</span>
                        <div></div>
                        <b>2 149</b>
                    </li>
                </ul>
                <button className='greenBtn'>Оформить заказ</button>
            </div>
        </div>
    </div>    
        
    );
}

export default Drawer;