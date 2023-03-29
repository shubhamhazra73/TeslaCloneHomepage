import React , {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Menu';
function Header() {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  return (
   <Container>
     <a href="">
      <img src="/images/logo.svg" alt="" />
     </a>

     <Menu>
     <a href="#">Model S</a>
     <a href="#">Model 3</a>
     <a href="#">Model X</a>
     <a href="#">Model Y</a>

     </Menu>

     <RightMenu>
      <a href="#"><b>Shop</b> </a>
      <a href="#"> <b>Account</b></a>
      <CustomMenu onClick={() => setBurgerStatus(true) }/>
     </RightMenu>
     <BurgerNav show={BurgerStatus}>
      <CloseWrapper>
      <CustomClose onClick={() =>setBurgerStatus(false)}/>
      </CloseWrapper>
      <li><a href="#">Existing Inventory</a></li><hr />
      <li><a href="#"> Inventory</a></li><hr />
      <li><a href="#">Trade-in</a></li><hr />
      <li><a href="#">Cyber Truck</a></li><hr />
      <li><a href="#">Roadster</a></li><hr />
      <li><a href="#">Demo Drive</a></li><hr />
      <li><a href="#">Insurance</a></li><hr />
      <li><a href="#">Semi</a></li><hr />
      <li><a href="#">Charging</a></li><hr />
      <li><a href="#">Commercial Energy</a></li><hr />
      <li><a href="#">Utilities</a></li><hr />
      <li><a href="#">Find Us</a></li><hr />
      <li><a href="#">Support</a></li><hr />
      <li><a href="#">Investor Relations</a></li><hr />
     </BurgerNav>
   </Container>

  )
}

export default Header
const Container = styled.div`
min-height : 60px;
position : fixed;
display:flex;
align-items:center;
justify-content : space-between;
padding:0 20px;
top : 0;
left : 0;
right : 0;
z-index : 1;
`

const Menu = styled.div`
display : flex;
align-items:center;
flex : 1;
justify-content : center;

a{
  font-weight: 600;
  text-transform : uppercase;
  padding : 0 10px;
  flex-wrap : no-wrap;

}

@media(max-width : 768px){
  display : none;
}

`

const RightMenu = styled.div`
display : flex;
align-items : center;

a{
  font-weight: 600;
  text-transform : uppercase;
  margin-right:12px;
  flex-wrap : no-wrap;

}
`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`

const BurgerNav = styled.div`
position : fixed;
top : 0;
bottom : 0;
right : 0;
background : white;
width : 300px;
z-index : 16;
list-style : none;
padding : 20px;
display : flex;
flex-direction : column;
text-align : start;
transform : ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition : transform 0.2s ;

li{
  padding : 15px 0;
  border-bottom : 2px solid rgba(0,0,0,-2);

  a{
    font-weight : 600;
  }
}

`

const CustomClose = styled(CloseIcon)`
cursor : pointer;
`

const CloseWrapper = styled.div`
display : flex;
justify-content : flex-end;

`

