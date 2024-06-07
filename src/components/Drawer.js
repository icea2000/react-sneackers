import { useContext } from "react";
import { AppContext } from "../App";
import {useCart} from "../hooks/useCart.js"

function Drawer ({onClose, onRemove, items = [], opened}) {
    const {totalSum} = useCart();

    const handelOnRemove = (obj) => {
        onRemove(obj)
    }

    const {cartItems} = useContext(AppContext);
    //console.log("cartItems -", cartItems)
    
    return (
        
    <div className='overlay'>
        <div className='drawer flex'>   
            <h2 className='mb-30 d-flex justify-between'>Корзина
                <img onClick={onClose} className='cu-p' width={25} height={25} src='/img/remove.svg' alt='remove'></img>
            </h2>
            
            {cartItems.length>0 ? (
                <>
            <div className='items'>
                {items.map ((obj, index) => (

                <div className='cartItem d-flex align-center mb-3'>
                    <div style={{backgroundImage: `url(${obj.imageUrl})`}} className='cartItemImg flex' key={index}>
                    </div>
          
                    <div className='mr-20'>
                        <p className='mb-5'>{obj.name}</p>
                        <b>{obj.price}</b>
                    </div> 
                    <img className='removeBtn' onClick={() => (handelOnRemove (obj) )} width={25} height={25} src='/img/remove.svg' alt='remove' key={'remove' + obj.id}></img>
                </div>
                ))}
                
            </div>
            <div className='cartTotalBlock mt-15'>
                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>{totalSum}</b>
                    </li>
                    <li> 
                        <span>Налог:</span>
                        <div></div>
                        <b>2 149</b>
                    </li>
                </ul>
                <center>
                    <button className='greenBtn'>Оформить заказ</button>
                </center>
            </div> </>) : (<div>Text</div>) }
        </div>
    </div>    
    );
}

export default Drawer;