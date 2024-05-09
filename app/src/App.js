import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  
  const getCategory = async () => {
    try {
      const response = await axios.get("https:\\www.themealdb.com/api/json/v1/1/list.php?c=list");
      setCat(response.data.meals);
    } catch (error) {
      console.error('Error fetching recipe categories:', error.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    console.log(cat);
    console.log(cat.strCategory);
  }, [cat]);

  return (
    <div>
      <div className='header'>
          <div id="ico">
            <img height={"50px"} width={"50px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdmSFYv9V70x-YUPBVrK9_o_HgVpfZqlzTCGuEFZJVA&s" alt='sd'></img>
          </div>
      </div>  
      <div className='main'>
        <div className='container-cat'>
          <div className='categories'>
            <div className='elements'>
               
            </div>
            <div className='elements'>
              {cat.strCategory}
            </div>
            <div className='elements'>
                {cat.strCategory}
            </div>
            <div className='elements'>
              
            </div>
            <div className='elements'>
              
            </div>
          </div>
          <div className='categories'>
            <div className='elements'>
              {}
              {/* {data.map((meal) => (
                <div key={meal.strMeal}>{meal.strMeal}</div>
              ))} */}
            </div>
            <div className='elements'>
              
            </div>
            <div className='elements'>
              
            </div>
            <div className='elements'>
              
            </div>
            <div className='elements'>
              
            </div>
          </div>
          <div id='categories-3'>
            <div className='elements'>
              {}
              {/* {data.map((meal) => (
                <div key={meal.strMeal}>{meal.strMeal}</div>
              ))} */}
            </div>
            <div className='elements'>
              
            </div>
            <div className='elements'>
              
            </div>
          </div>
        </div>
        <div id="category-req">
          <h1>what would you consider for the meal?</h1>
        </div>
        

      </div>
    </div>
  );
};

export default App;