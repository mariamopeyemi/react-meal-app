import React from 'react'
import styled from 'styled-components';
import MealForm from './MealForm';
// import Input from '../Helpers/Input';

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;
  return (
    <MealLi>
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
        </div>
        <div>
            < MealForm />
            {/* <form>
                <input
                //  type='text'
                    id= 'amount_'
                    type= 'number'
                    min= '1'
                    max= '5'
                    step= '1'
                    defaultValue= '1'
                />
                <button>+ Add</button>
            </form> */}
        </div>
    </MealLi>
  )
}

export default MealItem

const MealLi = styled.li`

  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

> h3 {
  margin: 0 0 0.25rem 0;
}

.description {
  font-style: italic;
}

.price {
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
}
`