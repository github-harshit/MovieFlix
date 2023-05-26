
import MovieCard  from "./MovieCard"

function  MovieList(props) {
   
    
    
      const {  movies, addStars, subtractStars, addFav, addToCart } = props
         

         return (
          // looping over and passing individula movie and event handler functions to movie card component
            <>
            
             {movies.map((movie)=> <MovieCard movies={movie} addStars ={addStars} subtractStars = {subtractStars} addFav = {addFav} addToCart = {addToCart}/> )}
             
            </>
         )
    } 

 export default MovieList