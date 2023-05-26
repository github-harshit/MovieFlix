
function  MovieCard(props){
    
    
 
       
    // deconstructing the props.movies object for states of movies     
    const { title, plot, price, rating, stars, fav, cart, poster } =props.movies

    // deconstructing the props object for various functions 
    const {  movies, addStars, subtractStars, addFav, addToCart } = props
        return (
            <>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={poster}></img>
                    </div>
                    
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot"> {plot}  </div>
                        <div className="price">{price} </div>

                        <div className="footer">
                            <div className="rating">{rating} </div>
                            <div className="star-dis">
                                 <img src="https://cdn-icons-png.flaticon.com/128/56/56889.png" alt="decrease" className="str-btn" onClick={()=>{subtractStars(movies)}} ></img>
                                <img 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" alt="stars"></img>
                                <img src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase" className="str-btn" onClick={()=>{addStars(movies)}}></img>
                                 <span>{stars} </span>
                            </div>
                            {fav ? <button className="unfavourite-btn" onClick={()=>{addFav(movies)}}>Unfavourite</button> : <button className="favourite-btn" onClick={()=>{addFav(movies)}}> Favourite</button> }
                            
                            {cart ? <button className="remove-cart" onClick={()=>{addToCart(movies)}}>Remove From Cart </button> : <button className="cart-btn" onClick={()=>{addToCart(movies)}} >Add to cart </button>  }
                           
                           
                        </div>
                    </div>

                </div>
            </div>
            </>
        )
     }

export default MovieCard; 