import React from 'react';

const MealForm = (props) => {
  return (
    <form>
        <input className='input'
                placeholder='Amount'
                    id= 'amount_'
                    type= 'number'
                    min= '1'
                    max= '5'
                    step= '1'
                    defaultValue= '1'
                />
        <button>+ Add</button>
    </form>
  )
}

export default MealForm

