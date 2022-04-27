import React from 'react'
import styled from "styled-components";
import veg from '../veg.png'

function Mainbar() {
  return (
    <Nav>
        <div>
          <p className='font'> What<br></br> would you like to <br></br>  order today</p>
          <img src={veg}/>
        </div>
      <Mtitle>
        <p>Our Job is to filling your tummy with delicious <br></br> food with fast and free delivery</p>
      </Mtitle>
      <Button>Free Delivery</Button>
    </Nav>
  )
}


const Nav = styled.div`
div {
  display:flex;
  justify-content:space-between;
   .font{
     font-size:60px;
      position:relative;
      top:80px;
    }
}

img{
  width:35%;
}
`

const Mtitle = styled.div`
     position:relative;
     bottom:180px;
     line-height:20px;
     color:#7A7A7A;
     display:grid;
`
const Button = styled.div`
      position:relative;
     bottom:160px;
     background: #3DA448;
     border-radius:30px;
     padding: 11px 15px;
     width:100px;
     color:white;
`
export default Mainbar