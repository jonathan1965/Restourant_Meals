import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi' 
import styled from "styled-components";
import * as React from 'react'


function category() {
  return (
      <React.Fragment>
    <Nav>
        <Log>
                <h1><span>M</span>eals</h1>
        </Log>

     <List>
            <div>
                <FaPizzaSlice/>
                <h4 className='Col'>Italian</h4> 
            </div>
            <div>
                <FaHamburger/>
                <h4>American</h4>
            </div>
            <div>
                <GiNoodles/>
                <h4>Japanese</h4>
            </div>
            <div>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </div>
     </List>
      <Form>
          <input type="text" name="" placeholder='Type...'/>
          <input type="Submit" name="" Value='Search'/>

      </Form>
      
    </Nav>
     
    
    </React.Fragment>
  )
}

const Nav = styled.div`
display: flex;
justify-content:space-between;
margin:1.5rem 0rem;

span{
    background: #3DA448;
    color:white;
    border-radius:50px;
    padding:11px;
    margin-left:
}
`

const List = styled.div`
display: flex;
justify-content:flex-start;
gap:60px;
margin-top:10px;

div {
    display:flex;
    gap:8px;
    font-size:17px;
}

div:first-child  {
    color:#3DA448;
    
}

.Col{
    color:#3DA448;
    }
`

const Log = styled.div`
margin-top:5px ;
`

const Form = styled.div`
  input {
      position:relative;
      display:inline-block;
      box-sizing:border-box;
      font-size:16px;
  }

  input[type="text"] {
     background:#CECECE;
     width: 240px;
     height:40px;
     border:none;
     outline:none;
     padding:0 25px;
     border-radius:25px 0 0 25px;
  }

  input[type="submit"] {
     background:#3DA448;
     color:white;
     border-radius: 0 25px 25px 0;
     width:140px;
     height:40px;
     border:none;
     outline:none;
     cursor:pointer;
    
  }
`
export default category