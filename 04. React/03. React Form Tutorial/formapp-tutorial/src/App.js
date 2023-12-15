import './App.css';
import {useState} from 'react';

function App() {

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event){
  //     // console.log(event.target.value);
  //     setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({firstName:"" , lastName:"", email:"", comments:"", isVisible:false, mode:"", favCar:""});

  // console.log(formData);
  // console.log(formData.email);

  function changeHandler(event){

    const {name, value, type, checked} = event.target;

    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(event){ 
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" 
        placeholder="First Name" 
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />

        <br/>

        <input type="text" 
        placeholder="Last Name" 
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />

        <br/>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br/>

        <textarea
          placeholder='Enter your message'
          onChange={changeHandler}
          name="comments"
          value={formData.message}
        />

        <br/>

        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I Visible?</label>

        <br/>

        <fieldset>
          <legend>Mode:</legend>
          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Online-Mode"
          id='Online-Mode'
          checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor='Online-Mode'>Online-Mode</label>

          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline-Mode"
            id='Offline-Mode'
            checked={formData.mode === "Offline-Mode"}
          />
        <label htmlFor='Offline-Mode'>Offline-Mode</label>
        </fieldset>

        <label htmlFor='favCar'>Select your fav car </label>
        <select 
          name='favCar' 
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="RR">RR</option>
          <option value="Benz">Benz</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
        </select>       

        <br/>

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
