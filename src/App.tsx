import React, { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Display from './components/display/Display';


function App() {
  let [Expression, setExpression] = useState('');

  
  return (
    <div className="App">
      <header>Calculator</header>
      <div className='calculator'>
        <Display Expression={Expression} setExpression={setExpression}/>
        <div className='keyboard'>
          <Button value={'sqrt'} />
          <Button value={'%'} />
          <Button value={'-<'} />
          <Button value={'C'} />
          <Button value={'*'} />
          <Button value={'7'} />
          <Button value={'8'} />
          <Button value={'9'} />
          <Button value={`+`} />
          <Button value={'4'} />
          <Button value={'5'} />
          <Button value={'6'} />
          <Button value={`-`} />
          <Button value={'1'} />
          <Button value={'2'} />
          <Button value={'3'} />
          <Button value={`/`} />
          <Button value={'0'} />
          <Button value={'.'} />
          <Button value={'='} />
          <Button value={'('} />
          <Button value={')'} />
        </div>
      </div>
    </div>
  );
}

export default App;
