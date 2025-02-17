import {FcLike} from "react-icons/fc"

const Card=({course})=>{
return(
    <div>
        <div>
            <img src={course.image.url}></img>
            <div>
                <button>
                    <FcLike fontSize="1.76rem"/>

                </button>
            </div>
        </div>
        <div>
            <p>{course.title}</p>
            <p></p>
        </div>
    </div>
)
}

export default Card;

