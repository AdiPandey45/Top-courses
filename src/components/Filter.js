import { filterData } from "./data"

const Filter=()=>{
return(
    <div>
        {
            filterData.map((data)=>{
             return   <button>
                    {data.title}
                </button>
            })
        }
    </div>
)
};

export default Filter;