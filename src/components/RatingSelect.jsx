import { useState } from 'react'

//* Changes made to be able to simplify Rating Selelct.
//* Added selected to props, so both select and selected are passed in from FeedbackForm which are
//* sent as select={setRating} selected={rating.
//* Eliminates local state 
function RatingSelect({ select, selected }) {
  //* const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    //*setSelected(+e.currentTarget.value) }
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
    {Array.from({ length: 10 }, (_, i) => (
      <li key={`rating-${i + 1}`}> {/* make key start from 1 */}
        <input
          type='radio'
          id={`num${i + 1}`}
          name='rating'
          value={i + 1}
          onChange={handleChange}
          checked={selected === i + 1}
        />
        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
      </li>
    ))}
  </ul>
  )
}

export default RatingSelect
/*
Using arrow functions and Array.from()

// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]

*/

/* Replaced by Array.from
   <ul className='rating'>
      <li>
        <input
          type='radio'
          id='num1'
          name='rating'
          value='1'
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          id='num2'
          name='rating'
          value='2'
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          id='num3'
          name='rating'
          value='3'
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          id='num4'
          name='rating'
          value='4'
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          id='num5'
          name='rating'
          value='5'
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          id='num6'
          name='rating'
          value='6'
          onChange={handleChange}
          checked={selected === 6}
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          id='num7'
          name='rating'
          value='7'
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          id='num8'
          name='rating'
          value='8'
          onChange={handleChange}
          checked={selected === 8}
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          id='num9'
          name='rating'
          value='9'
          onChange={handleChange}
          checked={selected === 9}
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          id='num10'
          name='rating'
          value='10'
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>

*/