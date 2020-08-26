import React, { useState, useEffect } from 'react';
import './App.css';

import dataGenerator from './Helpers/dataGenerator'

// Components
import Navbar from './components/Navbar'
import Filters from './components/Filters'

function App() {
  const [ productsList, setProductsList ] = useState([])
  const [ filteredList, setFilteredList] = useState([])

  // ComponentDidMount
  useEffect(() => {
    setProductsList(dataGenerator(50,100))
  }, [])

  const [ filterValues, setFilterValues ] = useState({
    productName: '',
    department: '',
    color: '',
    priceMin: 0,
    priceMax: 0,
    productMaterial: ''
  })

  const [ filterOptions, setFilterOptions ] = useState({
    departmentOptions: [],
    colorOptions: [],
    materialOptions: []
  })

  const handleChange = (e) => {
    // TODO - This can be optimised
    setFilterValues({
      ...filterValues,
      [e.target.id]: e.target.id.includes('price') ? Number(e.target.value).toFixed(0) : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Filter the product list based on filter input values
    const tempFilteredList = productsList.filter(product => {
      for (var key in filterValues) {
        if (filterValues[key] !== '') {
          switch(key) {
            case 'priceMax' :
              // Only need to check price once so do it on priceMin key
              break;
            case 'priceMin' :
              return Number(product.price) <= Number(filterValues['priceMax']) && Number(product.price) >= Number(filterValues['priceMin'])
            case 'productName':
              return product[key].toLowerCase().includes(filterValues[key].toLowerCase())
            default:
              return product[key] === filterValues[key]
          }
        }
      }
      return true
    })

    setFilteredList(tempFilteredList)
  }

  // When productsList is updated
  useEffect(() => {
    // Set the filteredList to be the productsList if it changes
    setFilteredList(productsList)

    console.log('productsList changed')
    let maxPrice = 0
    let departmentOptionsTemp = []
    let colorOptionsTemp = []
    let materialOptionsTemp = []

    productsList.forEach(product => {
      // Find and set max price as max product price
      maxPrice = Number(product.price) > Number(maxPrice) ? product.price : maxPrice

      // Find and store all dropdown options for use in the filters
      if (!departmentOptionsTemp.includes(product.department)) {
        departmentOptionsTemp.push(product.department)
      }
      if (!colorOptionsTemp.includes(product.color)) {
        colorOptionsTemp.push(product.color)
      }
      if (!materialOptionsTemp.includes(product.productMaterial)) {
        materialOptionsTemp.push(product.productMaterial)
      }
    })

    setFilterOptions({
      ...filterOptions,
      departmentOptions: departmentOptionsTemp,
      colorOptions: colorOptionsTemp,
      materialOptions: materialOptionsTemp
    })

    setFilterValues({
      ...filterValues,
      priceMax: Number(maxPrice).toFixed(0)
    })
  }, [productsList])

  return (
    <React.Fragment>
      <Navbar />
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-3'>
            <Filters
              productsList={productsList}
              handleSubmit={handleSubmit}
              filterValues={filterValues}
              filterOptions={filterOptions}
              handleChange={handleChange}
            />
          </div>
          <div className='col-9'>
              <div className='product-container'>
                {filteredList.map((product, index) => (
                    <div key={index} className='card product-item'>
                      <img className='card-img-top' src='https://dummyimage.com/320x180/eee/aaa' alt='Card cap' />
                      <div className='card-body'>
                        <h5 className='card-title'>
                          {product.productName}
                        </h5>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='small mb-1'><strong>Department:</strong> {product.department}</p>
                            <p className='small mb-1'><strong>Colour:</strong> {product.color}</p>
                            <p className='small mb-1'><strong>Price:</strong> {product.price}</p>
                          </div>
                          <div className='col-6'>
                            <p className='small mb-1'><strong>Adjective:</strong> {product.productAdjective}</p>
                            <p className='small mb-1'><strong>Material:</strong> {product.productMaterial}</p>
                            <p className='small mb-1'><strong>Product:</strong> {product.product}</p>
                          </div>
                          <div className='col-12'>
                            <hr />
                            <p className='small mb-1'><strong>Description:</strong> {product.productDescription}</p>
                          </div>

                        </div>
                        <hr />
                        <a href='#' className='btn btn-primary'>Add To Cart</a>
                      </div>
                    </div>
                ))}
                </div>
              </div>
            </div>
        <hr />

      </div>
    </React.Fragment>
  )
}

export default App;
