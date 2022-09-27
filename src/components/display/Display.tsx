import React, { ChangeEvent, useCallback, useEffect } from "react"
import val from './Display.module.css'



const Display:React.FC<any> = ({Expression,setExpression}) => {

    const setExpressionCallback = useCallback((exp:any)=>{
        setExpression(exp)
    },[Expression]) 

    useEffect(() => {
        const onKeypress = (e: any) => {
          switch(e.keyCode) {
            case 13: 
            setExpressionCallback('');
            break;
            case 61: 
            setExpressionCallback('');
            break;
          }

        console.log(e);
        };
      
        document.addEventListener('keydown', onKeypress);
          return () => {
          document.removeEventListener('keypress', onKeypress);
        };
      }, []);

      useEffect(()=> {
        
        setExpression(Expression)
      })

    return (<input value={Expression} className={val.input}
         onChange={event => setExpression(event.target.value)} autoFocus></input>)

}

export default Display;