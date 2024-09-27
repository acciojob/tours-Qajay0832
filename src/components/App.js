import React, { useState,useEffect } from "react";
import tours from './tours.JSON';
import ShowTours from "./showTours";

const App = () => {
  console.log(tours);
  const [tour, setTour] = useState(tours);
  const [refresh,setRefresh]=useState(false);
  const deleteTours=(index)=>{
    setTour((tour)=>tour.filter((_, i) => i !== index))
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setTour(tours)
        setLoading(false);
      }, 1000); // Simulate a 1 second loading time
    };
    fetchData();
  }, []);
  useEffect(()=>{if(tour.length==0){
      setRefresh(true)
  }
  },[tour]);
  const refreshTours=()=>{
    setTour(tours);
    setRefresh(false);
  }
  if(loading){
    return <div>Loading tour data...</div> 
  }
  if(refresh){
    return <div><p>No tours left</p><button onClick={refreshTours}>Refresh</button></div>
  }
  
    return(
      <main id="main">
        {(tour.length!=0)&&tour.map((e,index)=><ShowTours name={e.name} key={e.id} info={e.info} price={e.price} image={e.image} onDelete={()=>deleteTours(index)}/>)}

      </main>
    )
}
export default App;
