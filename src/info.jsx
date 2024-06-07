
export const info = (title, description) => {
  return (
    <div classname = "cartEmpty d-flex align-center justify-center flex-column flex">
        <img
            className = 'mb-20' 
            width = "120px"
            height = "120px"
            src = "/img/empty-cart.png"
            alt = "empty"
        />
        <h2>{title}</h2>
        <p className='opacity-6'>{description}</p>
        <button className='greenBtn' onClick={onClick}>
            <img src="/img/arrow.png" alt="Arrow"/>
            Вернуться назад
        </button>
     </div>
  )
}
