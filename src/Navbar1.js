import React from 'react';
 import style from  "./NavbarCSS.module.css"

class Navbar1 extends React.Component{
    render(){
        return (
           <>
          <div className={style.Nav}>
           <div className={style.Title}>Movie-Flix</div>
           <div className={style.CartContainer}>
               <img className={style.CartIcon} alt="CartIcon" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" ></img>
                <span className={style.CartCount} color="orange" show="false" > {this.props.cartCount} </span>
           </div>
          </div>
           </>
        )
    }
}

export default Navbar1; 