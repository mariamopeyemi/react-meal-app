import React from 'react';
import styled from 'styled-components';
import MealsImg from '../../Assets/meals.jpg';
import {AiOutlineShoppingCart} from 'react-icons/ai';


const Header = (props) => {
  return (
    <div>
        <>
        <MyHeader>
            <h1>Mariam Meals</h1>
            
            <CartButton>
                <span ><AiOutlineShoppingCart /> </span>
                <span className='carty'>Your Cart</span>
                <span className='badge'>7</span>
            </CartButton>
           
        </MyHeader>
        <ImgCard>
            {/* <img src='https://unsplash.com/photos/Qa29U4Crvn4' alt='food-menu' /> */}
            <img src={MealsImg} alt='Meal' />
        </ImgCard>
        </>
    </div>
  )
}

export default Header
const MyHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 10%; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`

const ImgCard = styled.div`
width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
  background-color: brown;

  .img{
    width: 110%;
    height: 100%;
    object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`

const CartButton = styled.button`

  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

.button:hover,
.button:active {
  background-color: #2c0d00;
}
.carty{
    padding: 5px;
}
.badge {
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
}

.button:hover .badge,
.button:active .badge {
  background-color: #92320c;
}

.bump {
  animation: bump 300ms ease-out;
}

@keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
`