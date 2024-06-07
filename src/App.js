import React, { useEffect, useState } from 'react'
import './App.scss';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Favorite from './pages/Favorite.jsx'



/*const arr = [{"name":'Мужские кроссовки Nike Blazer', "price":12900, "imageUrl":'/img/product/sn1.jpeg'},
            {"name":'Мужские кроссовки Adidas Blazer1', "price":15900, "imageUrl":'/img/product/sn2.jpg'},
            {"name":'Мужские кроссовки Nike Blazer', "price":12900, "imageUrl":'/img/product/sn1.jpeg'},
            {"name":'Мужские кроссовки Adidas Blazer1', "price":15900, "imageUrl":'/img/product/sn2.jpg'},
            {"name":'Мужские кроссовки Nike Blazer', "price":12900, "imageUrl":'/img/product/sn1.jpeg'},
            {"name":'Мужские кроссовки Adidas Blazer1', "price":15900, "imageUrl":'/img/product/sn2.jpg'},
            {"name":'Мужские кроссовки Nike Blazer', "price":12900, "imageUrl":'/img/product/sn1.jpeg'},
            {"name":'Мужские кроссовки Adidas Blazer1', "price":15900, "imageUrl":'/img/product/sn2.jpg'},
            {"name":'Мужские кроссовки Nike Blazer', "price":12900, "imageUrl":'/img/product/sn1.jpeg'},
            {"name":'Мужские кроссовки Adidas Blazer1', "price":15900, "imageUrl":'/img/product/sn2.jpg'},
            {"name":'Мужские кроссовки Nike Blazer', "price":12900, "imageUrl":'/img/product/sn1.jpeg'},
            {"name":'Мужские кроссовки Adidas Blazer1', "price":15900, "imageUrl":'/img/product/sn2.jpg'},
            
]
*/

 export const AppContext = React.createContext({})

function App() {

  const [items, setItems] = useState([])
  const [cartOpened, setCartOpened] = useState (false);
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState ('');
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const onChangeSearchInput = (event) => {
    setSearchValue( event.target.value );
  }

  const onAddFavorite = (obj, isFavorite) => {
    if (!isFavorite) {
      setFavoriteItems( prev => ([...prev, obj]));
    } else {
      setFavoriteItems( prev => prev.filter((item => item.id !== obj.id)))
    }
   /* if (!isFavorite) {
      axios.post('https://66520f75813d78e6d6d48158.mockapi.io/api/favorites', obj);  
      setFavoriteItems( prev => ([...prev, obj]));
    } else {
      axios.delete(`https://66520f75813d78e6d6d48158.mockapi.io/api/favorites/:id_p`, obj);  
      setFavoriteItems( prev => ([...prev, obj]));
    }
    */
  }

  const onAddCart = (obj) => {
    axios.post('http://localhost:4444/cart', obj).then((res) => {
     obj.productId = res.data.productId;
     
    });  
    setCartItems( prev => ([...prev, obj]));
  }

  const onCartRemove = async (obj) => {
    //console.log("closedell ", obj)
    //const findedCartItem = cartItems.find( item =>  item.id === obj.id)

    
    await axios.delete(`http://localhost:4444/cart/${obj.productId}` );  
    setCartItems ( prev => prev.filter(item => item.productId !== obj.productId ))
    //console.log("cart - ", cartItems)
  }

  useEffect( () => {
    setIsLoading(true);
    async function fetchData() {
      //const cartsResponse = await axios.get('https://66520f75813d78e6d6d48158.mockapi.io/api/cart');
      //const itemsResponse = await axios.get('https://66520f75813d78e6d6d48158.mockapi.io/api/items');
      const itemsResponse = await axios.get('http://localhost:4444/products/getAll');
      const cartsResponse = await axios.get('http://localhost:4444/cart/getAll');

      setCartItems(cartsResponse.data);
      setItems(itemsResponse.data);
      setIsLoading(false);
      //console.log("items - ", itemsResponse.data)
      //console.log("cart - ", cartsResponse.data)

    }
    fetchData();
  },[]);
  
  
  
    return (
    <AppContext.Provider value = {{items, cartItems, setCartItems, favoriteItems}} >
      <BrowserRouter>
    <div className="wrapper clear">
           
      <Header onClickCart = {() => setCartOpened (true)}/>
      {cartOpened && <Drawer onClose = {() => 
        setCartOpened(false)
      } 
        items = {cartItems} 
        onRemove = {onCartRemove}
        opened = {cartOpened}/> } 
        <Routes>
         <Route path='/favorites' element = {
            
            <Favorite
            searchValue = {searchValue}
            onChangeSearchInput = {onChangeSearchInput}
            setSearchValue = {setSearchValue}
            items = {items}
            onAddCart = {onAddCart}
            onCartRemove = {onCartRemove}
            onAddFavorite = {onAddFavorite}
            cartItems = {cartItems}
            favoriteItems = {favoriteItems}
            />
         }>
        </Route> 
        
        <Route path="/" element = {
            <Home 
            searchValue = {searchValue}
            onChangeSearchInput = {onChangeSearchInput}
            setSearchValue = {setSearchValue}
            items = {items}
            onAddCart = {onAddCart}
            onCartRemove = {onCartRemove}
            onAddFavorite = {onAddFavorite}
            cartItems = {cartItems}
            isLoading = {isLoading}
              /> }>

        </Route>
        
        </Routes> 
        
        
 </div>
 </BrowserRouter>
 </AppContext.Provider>
  );
}

export default App;
