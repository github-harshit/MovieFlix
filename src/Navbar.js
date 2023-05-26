import React from "react"
 import styled from "styled-components"
 const Nav = styled.div`
 width : 100%; 
 height: 70px; 
 background: linear-gradient(170deg, #1bc059, #0d47a1); 
 display : flex; 
 justify-content: space-between; 
 `
 const Title  =  styled.div`
         font-size : 20px; 
         color : #fff; 
         font-weight : 600; 
         font-family : "Montserrat, sans-serif"; 
         text-transform : uppercase; 
         margin-left : 20px;  
 `
 const CartContainer = styled.div`
            position : relative;
            cursor : pointor;
    `

    const CartIcon = styled.img`
            height: 48px;
            margin-right: 20px;
    `
    const CartCount = styled.span` 
            background: ${(props)=>props.color}; 
            border-radius : 50%;
            padding : 4px 8px;
            position : absolute;
            right: 10px;
            top: -5px;
            font-size : 12px;
            visibility = ${(props)=> props.show ? "visible" : "hidden"}; 
    `
class Navbar extends React.Component{
     render(){
         return (
            <>
           <Nav>
            <Title>Movie-Flix</Title>
            <CartContainer>
                <CartIcon alt="CartIcon" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" ></CartIcon>
                 <CartCount color="orange" show="false" > 0 </CartCount>
            </CartContainer>
           </Nav>
            </>
         )
     }
}

 export default Navbar; 