import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');
  const [name, setName] = useState('Himank');

  // Variation - 1 : for every render
  // useEffect(() => {
  //   console.log('useEffect hook called');
  // })

  // Variation - 2 : for first render
  // useEffect(() => {
  //   console.log('useEffect hook called');
  // }, []);

  // Variation - 3 : whenever dependenncy changes and for first render
  // useEffect(() => {
  //   console.log('Change Observed')
  // }, [name]); // here it will be called only when text changes.   

  // Variation - 4 : for cleanup or to handle unmounting of component
  useEffect(() => {
    console.log('Listener Added');
    return () => {
      console.log('Listener Removed');
    }
  }, [text]);
  // first, render will be called, then listener Added will be printed, then when we change the text, then listener Removed will be printed and then again listener Added will be printed.

  function changeHandler(event){
    setText(event.target.value);  
    console.log(text);
  }

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;

// Difference between useEffect and useSate :-
// useState is used to update the state of the component
// useEffect is used to perform side effects in the component.
// Side effects are anything that affects something outside the scope of the component, like an API call, change in DOM, add or remove element, http request, title change, add or remove listener etc.
// useEffect is called after every render, by default.

// useState - jiske dvara hum kisi variable ki state ko update krte hai. eg - text change, etc.
// useEffect - agar component ke render hone ke baad koi task krna ho to useEffect hook ka use krte hai, us task to hum useEffect ke andar define karte hai(usi ko side effect bolte hai). Jiske dvara hum kisi side effect ko perform krte hai. eg - API call, change in DOM, add or remove element, http request, title change, add or remove listener etc.