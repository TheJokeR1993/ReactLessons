import { NavLink } from "react-router-dom"

const Navigation =()=>{
    return <div className="nav">
    <NavLink to={''}>todo</NavLink>
    <NavLink to={'/school'}>school</NavLink>
    </div>
}
export default Navigation