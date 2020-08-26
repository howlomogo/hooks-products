import React from 'react'

function Filters(props) {
  return (
    <div className='filters-box'>
      <form className='container my-4' onSubmit={props.handleSubmit}>
        <div className='form-group row align-items-center'>
          <label className='col-4 mb-0 small'>Product Name:</label>
          <div className='col-8'>
            <input id='productName'
              onChange={props.handleChange}
              value={props.filterValues.productName}
              type='text'
              className='form-control form-control-sm'
              placeholder='Enter product name'
            />
          </div>
        </div>

        <hr />
        <div className='form-group row'>
          <div className='col-6'>
            <label className='mb-0 small'>Min Price:</label>
            <input id='priceMin'
              onChange={props.handleChange}
              value={props.filterValues.priceMin}
              type='number'
              className='form-control form-control-sm'
              placeholder='Min Price'
            />
          </div>

          <div className='col-6'>
            <label className='mb-0 small'>Max Price:</label>
            <input id='priceMax'
              onChange={props.handleChange}
              value={props.filterValues.priceMax}
              type='number'
              className='form-control form-control-sm'
              placeholder='Max Price'
            />
          </div>
        </div>
        <hr />

        <div className='form-group row align-items-center'>
          <label className='col-4 mb-0 small'>Department:</label>
          <div className='col-8'>
            <select id='department' className='form-control form-control-sm' onChange={props.handleChange}>
              <option value=''>Show All</option>
              {props.filterOptions.departmentOptions.map((department, index) => (
                <option key={index} value={department}>{department}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='form-group row align-items-center'>
          <label className='col-4 mb-0 small'>Color:</label>
          <div className='col-8'>
            <select id='color' className='form-control form-control-sm' onChange={props.handleChange}>
              <option value=''>Show All</option>
              {props.filterOptions.colorOptions.map((color, index) => (
                <option key={index} value={color}>{color}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='form-group row align-items-center'>
          <label className='col-4 mb-0 small'>Material:</label>
          <div className='col-8'>
            <select id='productMaterial' className='form-control form-control-sm' onChange={props.handleChange}>
              <option value=''>Show All</option>
              {props.filterOptions.materialOptions.map((material, index) => (
                <option key={index} value={material}>{material}</option>
              ))}
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
