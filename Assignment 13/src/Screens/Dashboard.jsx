import React from 'react'
import Cards from '../Components/Card';
import { ProductData } from '../Components/Data';

const Dashboard = () => {
  return (
    <div style={{background:" #fffbf6" }} >
      <h1 style={{textAlign:"center" ,fontSize:"50px",fontFamily:"cursive"}}>Welcome to Product Home Page</h1>
      {ProductData.map((e,i)=>{
        return(
          <div key={i} style={{ display: "inline-block",margin:18 }}>
          <Cards 
          id={e.id}
          title={e.title}
          desc={e.description}
          img={e.image}
          />
          </div>
        );
      })}
    </div>
  )
}

export default Dashboard
