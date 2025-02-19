import {FcLike, FcLikePlaceholder,FcLikePlaceholderclassName} from "react-icons/fc"
import {toast} from 'react-toastify'

const Card=({course,likedCourse,setLikedCourses})=>{
     
const clickHandler=()=>{
    if(likedCourse.includes(course.id)){
        setLikedCourses((liked) => 
            liked.filter((cid)=> (cid != course.id))
        );
        toast.warning("Like Removed"); 
    }

    else{
        if(likedCourse.length===0){
            setLikedCourses([course.id]);
        }
        else{
            setLikedCourses((prev)=> [...prev,course.id]);
        }

        toast.success("Liked Sucessfully")
    }
}

return(
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
        <div className="relative">
            <img src={course.image.url}></img>
            <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-11px] grid place-items-center">
                <button onClick={clickHandler}>
                   {
                    likedCourse.includes(course.id) ? (<FcLike fontSize="1.7rem"/>) : 
                    (<FcLikePlaceholder fontSize="1.7rem"/>)
                }

                </button>
            </div>
            </div>
            
        
        <div className="p-4">
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className="mt-2 text-white">{course.description.substr(0,170)}...</p>
        </div>
    </div>
)
}

export default Card;

