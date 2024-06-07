import Card from "../components/Card/Card"
import { AppContext } from "../App"
import { useContext } from "react"

export default function Favorite (
    {searchValue,
    onChangeSearchInput,
    setSearchValue,
    items,
    onAddCart,
    onAddFavorite,
    onCartRemove
    //cartItems,
    //favoriteItems=[]
})
    {

      const state = useContext(AppContext);   
        return (
        <div className='content p-40'>
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Закладки</h1>
            
          </div>
          <div className='d-flex flex-wrap'>
            {state.favoriteItems.map((obj, index)=> (
           <Card 
           key = {index}
           name = {obj.name} 
           price = {obj.price} 
           imageUrl = {obj.imageUrl}
           onPlus = {onAddCart} 
           onMinus={onCartRemove}
           onFavorite = {onAddFavorite}
           id = {obj.id}
           cartItems = {state.cartItems}
           favoritePage = {true}
          />
         ))}
          </div>
        </div>
    )
}

//export default Home;