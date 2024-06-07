import { useState,useEffect, useContext } from 'react';
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'
import { AppContext } from '../../App';

function Card ({name, imageUrl, price, id, productId, onPlus, onMinus, onFavorite, cartItems =[], favoritePage=false, loading}) {
    const [isAdded, setIsAdded] = useState (false);
    
    const plusImageBtn = isAdded ? 'img/choice.png' : 'img/plus1.png'
    const inCart = cartItems.some(item => item.productId === id);

    const [isFavorite, setIsFavorite] = useState ();
    const state = useContext (AppContext);
      
    
    

    useEffect(() => {
        //isFavorite = favoritePage
        favoritePage && setIsFavorite(favoritePage)
        setIsAdded(inCart);
        checkIsFavorite();
    }, [cartItems, id]);
    

    const checkIsFavorite = () => {
     
        if (state.favoriteItems.some(obj => obj.productId === id)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }

    const handleOnClickPlus = () => {
        setIsAdded (!isAdded);    
        if (!isAdded && !inCart) {
            onPlus({name, imageUrl, price, id, productId});
        } else {
            console.log("id",id,productId)
            onMinus({name, imageUrl, price, id, productId});
        }
    }

    const handleOnClickFavorite = () => {
        setIsFavorite (!isFavorite);    
        onFavorite({name, imageUrl,price, id}, isFavorite);
    }
    return (
        loading ? MyLoader() :
            <div className={styles.card}>
                <div className={styles.favorite}>
                    <img onClick={handleOnClickFavorite} width={15} height={15} src= {isFavorite ? '/img/heart1.png' : '/img/favorite.png'} alt='heart'></img>
                </div>
                <img width={133} height={112} src={imageUrl} alt='sn1'></img>
                <h5>{name}</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена</span>
                        <b>{price}</b>
                    </div>
                    
                        <img className={styles.plus} onClick={handleOnClickPlus} width={18} height={18} src={ plusImageBtn }  alt='plus'></img>
                    
                </div>
            </div>
        );
}

const MyLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={220}
      height={300}
      viewBox="0 0 140 265"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="137" height="155" /> 
      <rect x="0" y="164" rx="5" ry="5" width="100" height="15" /> 
      <rect x="-7" y="187" rx="5" ry="5" width="100" height="15" /> 
      <rect x="2" y="210" rx="5" ry="5" width="80" height="25" /> 
      <rect x="105" y="205" rx="11" ry="11" width="32" height="32" />
    </ContentLoader>
  )
  
export default Card;