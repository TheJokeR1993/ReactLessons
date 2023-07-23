import { useState } from "react"
import './school-item.css'
const SchoolItem=({arr})=>{

    const [change,setChange]=useState(true)
    const [newArr,setNewArr]=useState(arr)
    const isChange=()=>{
        change
        ? setNewArr(arr.filter((item,index)=>index<5))
        :setNewArr(arr)
        setChange(!change)
    }
    return <div className="school-item">
        <div>
            <h2>Same School</h2>
            <button onClick={()=>isChange()}>{change?'Close':'Open'}</button>
        </div>
        <div>
             {newArr.map((item,ind)=><div key={ind}>{item}</div>)}
        </div>
       
    </div>
}
export default SchoolItem