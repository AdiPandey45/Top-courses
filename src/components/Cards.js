import { useState } from 'react';
import Card from './Card'

const Cards=({courses,category})=>{

    
    const [likedCourse,setLikedCourses]=useState([]);

      //returns you a list of all courses received from the api response
   
      
    const getCourses=()=>{
        if(category === 'All'){
            let allCourses=[];
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                }) 
            }
        )
          return allCourses;
        }

        else{
            return courses[category]
        }
    }
       

return(
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map((course)=>{
               return <Card key={course.id} course={course} likedCourse={likedCourse} setLikedCourses={setLikedCourses}/>
            })
        }
    </div>
)
}

export default Cards;