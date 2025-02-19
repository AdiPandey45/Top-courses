
import { apiUrl,filterData } from './components/data';
import './App.css';
import Spinner from './components/spinner'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filter from './components/Filter';
import { toast } from 'react-toastify';

function App() {

  const [courses,setCourses]=useState('');
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

 
    const fetchData=async ()=>{
      setLoading(true);
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        console.log(output);
        setCourses(output.data);

      }

      catch{
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    
    useEffect(()=>{
      fetchData();
    },[])
  

  return ( 
  <div className='min-h-screen flex flex-col bg-bgDark2'>
    <div>
    <Navbar/>
      </div>

      <div className='bg-bgDark2'>
      <div>
      <Filter filterdata={filterData} category={category} setCategory={setCategory}/>
      </div>
    

      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
      {
        loading ? (<Spinner/>)  : (<Cards courses={courses} category={category}/>) 
      }
      </div>
      </div>
 
  </div>
  );
}

export default App;
