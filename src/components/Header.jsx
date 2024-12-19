import { useState } from "react" ;


const Header = (props)=>{

    const[number, setNumber]=useState(0);
    const handleNumber = (e) =>{
const value = e.target.value;
setNumber(value);
}
console.log(props,"props");
return(
    <>
<h2>{props.tittle}</h2>
<h3>{number}</h3>
<label htmlFor="">Number</label>
<input type="text" name="firstName" onChange={handleNumber}/>
</>
)
}

export default Header