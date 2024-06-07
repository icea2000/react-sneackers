import Card from "../components/Card/Card"

export default function Home (
    {searchValue,
    onChangeSearchInput,
    setSearchValue,
    items,
    onAddCart,
    onCartRemove,
    onAddFavorite,
    cartItems,
    isLoading})

    {
      
      const renderCards = () => {
        const filtredItems = items.filter( item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(10)] : filtredItems).map((obj, index) => (
                 <Card 
                 key = {index}
                 name = {!isLoading && obj.name} 
                 price = {!isLoading && obj.price} 
                 imageUrl = {!isLoading && obj.imageUrl}
                 onPlus = {onAddCart} 
                 onMinus = {onCartRemove}
                 onFavorite = {onAddFavorite}
                 id = {!isLoading && obj.id}
                 productId = {!isLoading && obj.id}
                 cartItems={cartItems}
                 loading = {isLoading}
                />
               ))
              }
      

        return (
        <div className='content p-40'>
          <div className='d-flex align-center justify-between mb-40'>
            <h1>{searchValue ? `Поиск по : "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className='search-block'>
              <img width={17} height={17} src='\img\search3.png' alt='search'></img>
              <input onChange={onChangeSearchInput}   value={searchValue} placeholder='Поиск...'></input>
              {searchValue && <img width={15} height={15} onClick={() => setSearchValue('')} className='clear' src='/img/remove.svg' alt='removeSearch'></img>}
            </div>
          </div>
          <div className='d-flex flex-wrap'>
            {
              renderCards()
            }
          </div>
        </div>
    )
}

//export default Home;