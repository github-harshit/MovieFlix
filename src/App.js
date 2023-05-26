import React from "react";
 import MovieList  from "./MovieList";
  import Navbar1 from "./Navbar1";
  import {movies as moviesData} from "./MovieData"
class  App extends React.Component{ 
  constructor(){
    super(); 
    this.state = {
       movies : moviesData, 
       cartCount : 0
     


    }
}

handleIncStars = (movie)=>{
  const {movies}  = this.state
  const mindex = movies.indexOf(movie);
 
   if(movies[mindex].stars===5){
      return; 
   } 
  movies[mindex].stars += 0.5
  this.setState(
     {
         movies : movies
     }
  )

}
handleDecStars = (movie)=>{
  const {movies}= this.state; 
  const mindex = movies.indexOf(movie); 
  if(movies[mindex].stars===0){
      return ; 
  }
  movies[mindex].stars -=0.5; 
  this.setState({
      movies: movies
  })
}
handleFav = (movie) =>{
 const {movies}= this.state; 
 const mindex = movies.indexOf(movie); 
 movies[mindex].fav = !movies[mindex].fav; 
 this.setState({
      movies : movies
 })


  
}
handeCart =(movie)=>{
 const {movies}= this.state; 
   let  {cartCount} = this.state;
 const mindex = movies.indexOf(movie); 
 movies[mindex].cart = !movies[mindex].cart; 
  if(movies[mindex].cart){
    cartCount +=1;
  }else{
     cartCount -=1;
  }
     
 this.setState({
      movies : movies,
      cartCount :  cartCount
      
 })
 

  
}
  render(){
   

    return (
      <> 
  
           <Navbar1  cartCount={this.state.cartCount}/>
           <MovieList movies={this.state.movies} addStars ={this.handleIncStars} subtractStars = {this.handleDecStars} addFav = {this.handleFav} addToCart = {this.handeCart}/>
      </>
  
    )
     
  }
  
  
    
  
}

export default App;
