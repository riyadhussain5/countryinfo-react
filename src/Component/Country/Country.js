import React from 'react';
import { Link } from 'react-router-dom';
import'./Country.css';
const Country = (props) => {
const{name,population,flag,alpha3Code} = props.country;
const style =  {
  height:"80px",
  width:"100px"
}
    return (
        <div className='boxing'>
         
      
       
       <h3>Country Name:  <br/>{name} </h3>
       <h4>Total Population:<br/> {population}</h4>
       <img style={style} src={flag}/><br/>
       <Link to={`/Details/${name}`}>
       <button className="primary">See Details-{alpha3Code}</button>
       </Link>
       
          
          
        </div>
    );
};

export default Country;