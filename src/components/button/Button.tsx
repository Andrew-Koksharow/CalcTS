import React from "react"
import val from './Button.module.css'

type Props = {
    value: string;
}

const Button:React.FC<Props> = ({value}) => {
return(
    <button className={val.button}>{value}</button>
)
}

export default Button;