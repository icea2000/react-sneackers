function Card () {
    return (
            <div className='card'>
                <div className='favorite'>
                    <img width={15} height={15} src='/img/favorite.png' alt='heart'></img>
                </div>
                <img width={133} height={112} src='/img/product/sn1.jpeg' alt='sn1'></img>
                <h5>Мужские кроссовки Nike Blazer</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена</span>
                        <b>12 900</b>
                    </div>
                    <button className='button'>
                        <img width={20} height={20} src='img/plus1.png' alt='plus'></img>
                    </button>
                </div>
            </div>
        );
}
export default Card;