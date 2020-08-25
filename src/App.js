import React, { useState, useEffect } from 'react';
import './App.css';
import faker from 'faker'

import dataGenerator from './Helpers/dataGenerator'

// Components
import Navbar from './components/Navbar'
import Filters from './components/Filters'

function App() {

  const [ inputValue, setInputValue ] = useState('')
  const [ todoList, setTodoList ] = useState([])
  const [ productsList, setProductsList ] = useState([])

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleBtnClick = () => {
    setTodoList(todoList.concat(inputValue))
    setInputValue('')
  }

  const removeItem = (index) => {
    const newList = [...todoList]
    newList.splice(index, 1)
    setTodoList(newList)
  }


  // ComponentDidMount
  useEffect(() => {
    setProductsList(dataGenerator(50,100))
  }, [])

  console.log('--productsList', productsList)


  return (
    <React.Fragment>
      <Navbar />
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-3'>
            <Filters />
          </div>
          <div className='col-9'>
              <div className='product-container'>
                {productsList.map((product, index) => (
                    <div key={index} className='card product-item'>
                      <img className='card-img-top' src='https://dummyimage.com/320x180/eee/aaa' alt='Card image cap' />
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
