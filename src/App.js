
import { useState } from 'react';
import './App.css';

const App = () => {
   const [valueA,setValueA] =useState();
   const [valueB,setValueB] =useState();
   const [result,setResult] =useState();
   const [error, setError] = useState(false);
   const [errorMsg, setErrorMsg] = useState('');
   const [show, setShow] = useState(false);
  //  const [operations,setOperations] = useState();

  //  const handleClick = (e) => {
  //    e.preventDefault();
  //       if(operations==='+'){
  //         setResult(parseInt (valueA) + parseInt (valueB));
  //       }

  //  }
  const validate = (e) => {
    if (!valueA || valueA === '') {
      setError(true);
      setErrorMsg('Num1 Cannot Be Empty');
      return false;
    }
    if (isNaN(valueA)) {
      setError(true);
      setErrorMsg('Num 1 cannot Be  integer');
      return false;
    }
    if (!valueB || valueB === '') {
      setError(true);
      setErrorMsg('Num 2  cannot Be Empty');
      return false;
    }
    if (isNaN(valueB)) {
      setError(true);
      setErrorMsg('Num 2 should be an integer');
      return false;
    }
    if (e.target.classList.contains('divide') && +valueB === 0) {
      setError(true);
      setErrorMsg('Cannot divide by zero');
      return false;
    }
    return true;
  };

 



  const handleClick = (e) => {
    e.preventDefault();
    const res = validate(e);
    if (res) {
      setError(false);
      setErrorMsg('');
      if (e.target.classList.contains('plus')) {
        setResult(+valueA + +valueB);
      } 
      else if (e.target.classList.contains('minus')) {
        setResult(parseFloat(valueA) - parseFloat(valueB));
      } 
      else if (e.target.classList.contains('multiply')) {
        setResult(+valueA * +valueB);
      }
       else {
        setResult(parseFloat(valueA) / parseFloat(valueB));
      }
    }
    setShow(true);
  };

  return (
    <div className='main'>
      <div className='data'>
         <h2 className='heading'> React Calculator</h2>
         
         <input type ='text'  placeholder= 'Num 1' className='input'
            value={valueA} onChange={(e)=>setValueA(e.target.value)}
         /><br/>
         <input type ='text' placeholder='Num 2'  className='input1'
            value={valueB} onChange={(e)=>setValueB(e.target.value)}
         /><br/>
     
          <button className='plus' onClick={(e) => handleClick(e)}>+</button> 
          <button className='minus' onClick={(e) => handleClick(e)}>-</button> 
          <button className='multiply' onClick={(e) => handleClick(e)}>*</button> 
          <button className='divide' onClick={(e) => handleClick(e)}>/</button> 
      </div>
      {show && (
        <div className="result">
          <h3 className={`status ${error ? 'error' : ''}`}>
            {`${ error ? 'Error!' : ''}`}</h3>
            <p className='success'>{`${ error ? '' : 'Success!'}`}</p>
          <p className="message">{error ? errorMsg : `Result : ${result}`}</p>
        </div>
      )}
    </div>
  );
};
        
  

export default App;
