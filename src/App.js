
import { apiUrl,filterData } from './components/data';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filter from './components/Filter';
import { toast } from 'react-toastify';

function App() {

  const [courses,setCourses]=useState('')

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        console.log(output);
        setCourses(output.data);

      }

      catch{
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[])

  return ( 
  <div>
    <Navbar/>

    <Filter filterdata={filterData}/>
 <Cards courses={courses}/>
  </div>
  );
}

export default App;
