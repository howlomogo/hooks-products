import React, { useState } from 'react'

function Filters() {

  const [ filterValues, setFilterValues ] = useState({
    productName: '',
    department: '',
    color: '',
    priceMin: 0,
    priceMax: 1000,
    material: ''
  })

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <div className='filters-box'>
      <form className='container my-4' onSubmit={handleSubmit}>
        <div class='form-group row align-items-center'>
          <label className='col-4 mb-0 small'>Product Name:</label>
          <div className='col-8'>
            <input type='text' class='form-control form-control-sm' placeholder='Enter product name' />
          </div>
        </div>

        <hr />
        <div class='form-group row'>
          <div className='col-6'>
            <label className='mb-0 small'>Min Price:</label>
            <input type='text' class='form-control form-control-sm' placeholder='Min Price' />
          </div>

          <div className='col-6'>
            <label className='mb-0 small'>Max Price:</label>
            <input type='text' class='form-control form-control-sm' placeholder='Max Price' />
          </div>
        </div>
        <hr />

        <div className='form-group row align-items-center'>
          <label className='col-4 mb-0 small'>Department:</label>
          <div className='col-8'>
            <select className='form-control form-control-sm' onChange={handleChange}>
              <option value='grapefruit'>Grapefruit</option>
              <option value='lime'>Lime</option>
              <option value='coconut'>Coconut</option>
              <option value='mango'>Mango</option>
            </select>
          </div>
        </div>

        <div className='form-group row align-items-center'>
          <label className='col-4 mb-0 small'>Color:</label>
          <div className='col-8'>
            <select className='form-control form-control-sm' onChange={handleChange}>
              <option value='grapefruit'>Grapefruit</option>
              <option value='lime'>Lime</option>
              <option value='coconut'>Coconut</option>
              <option value='mango'>Mango</option>
            </select>
          </div>
        </div>

        <div className='form-group row align-items-center'>
          <label className='col-4 mb-0 small'>Material:</label>
          <div className='col-8'>
            <select className='form-control form-control-sm' onChange={handleChange}>
              <option value='grapefruit'>Grapefruit</option>
              <option value='lime'>Lime</option>
              <option value='coconut'>Coconut</option>
              <option value='mango'>Mango</option>
            </select>
          </div>
        </div>
        <hr />

        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Filters
