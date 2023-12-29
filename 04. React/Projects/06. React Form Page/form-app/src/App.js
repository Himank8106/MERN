import React, { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prev => ({
      ...prev, [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    alert("Form Saved Successfully\n\n"+"Name - "+formData.firstName+" "+formData.lastName+"\n"+"Email - "+formData.email+"\n"+"Country - "+formData.country+"\n"+"Address - "+formData.streetAddress+", "+formData.city+", "+formData.state+"\n"+"Postal Code - "+formData.postalCode+"\n"+"Email for receiving comments: "+(formData.comments?"Yes":"No")+"\n"+"Email for receiving comments: "+(formData.candidates?"Yes":"No")+"\n"+"Email for receiving comments: "+(formData.offers?"Yes":"No")+"\n"+"Notifications for - "+formData.pushNotifications);
    console.log("Printing the form data:")
    console.log( formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotifications: "",
    })
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <h1 className="text-2xl font-bold text-gray-900 text-center">REACT FORM</h1>

      <form onSubmit={submitHandler} className="space-y-2">
        <div className="mt-5">
          <label htmlFor="firstName" className="text-gray-900 leading-6 text-sm font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={changeHandler}
            className="w-full border mt-1 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
            id="firstName"
          />
        </div>
        
        <div className="mt-5">
          <label htmlFor="lastName" className="text-gray-900 leading-6 text-sm font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={changeHandler}
            className="w-full border mt-1 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
            id="lastName"
          />
        </div>
        
        <div className="mt-5">
          <label htmlFor="email" className="text-gray-900 leading-6 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={changeHandler}
            className="w-full border mt-1 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
            id="email"
          />
        </div>
        
        <div className="mt-5">
          <label htmlFor="country" className="text-gray-900 leading-6 text-sm font-medium">Country</label>
          <select
            name="country"
            id="country"
            placeholder="country"
            className="w-full border mt-1 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
            value={formData.country}
            onChange={changeHandler}
          >
            <option value="Not Selected" selected> Select Country </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="UAE">UAE</option>
          </select>
        </div>
        
        <div className="mt-5">
          <label htmlFor="streetAddress" className="text-gray-900 leading-6 text-sm font-medium">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="w-full border mt-1 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
            id="streetAddress"
          />
        </div>
        
        <div className="mt-5">
          <label htmlFor="city" className="text-gray-900 leading-6 text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={changeHandler}
            className="w-full border mt-1 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
            id="city"
          />
        </div>
        
        <div className="mt-5">
          <label htmlFor="state" className="text-gray-900 leading-6 text-sm font-medium">State</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={changeHandler}
            className="w-full border mt-1 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
            id="state"
          />
        </div>
        
        <div className="mt-5">
          <label htmlFor="postalCode" className="text-gray-900 leading-6 text-sm font-medium">Postal Code</label>
          <input
            type="number"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={changeHandler}
            className="w-full border mt-1 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
            id="postalCode"
          />
        </div>
       
        <br/>
        
        <fieldset className="mb-10">
          <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>

          <div className="mt-4 space-y-2">
            <div className="flex">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                checked={formData.comments}
                onChange={changeHandler}
                className="h-4 w-4 mt-1 rounded"
              />
              <div className="flex flex-col ml-3">
                <label htmlFor="comments" className="text-sm font-semibold leading-6 text-gray-900">Comments</label>
                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>

            <div className="flex">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                checked={formData.candidates}
                onChange={changeHandler}
                className="h-4 w-4 mt-1 rounded"
              />
              <div className="flex flex-col ml-3">
                <label htmlFor="candidates" className="text-sm font-semibold leading-6 text-gray-900">Candidates</label>
                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="flex">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                checked={formData.offers}
                onChange={changeHandler}
                className="h-4 w-4 mt-1 rounded"
              />
              <div className="flex flex-col ml-3">
                <label htmlFor="offers" className="text-gray-900 leading-6 text-sm font-medium">Offers</label>
                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>

        <br/>

        <fieldset className="mt-10">
          <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
          <p className="text-gray-500">These are delivered via SMS to your mobile phone.</p>

          <div className="mt-4 space-y-2 mb-5">
            <div className="flex gap-x-4">
              <input
                type="radio"
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
              />
              <label htmlFor="pushEverything" className="text-gray-900 leading-6 text-sm font-medium">Everything</label>
            </div>
            
            <div className="flex gap-x-4">
              <input
                type="radio"
                id="pushEmail"
                name="pushNotifications"
                value="Same as email"
                onChange={changeHandler}
              />
              <label htmlFor="pushEmail" className="text-gray-900 leading-6 text-sm font-medium">Same as Email </label>
            </div>

            <div className="flex gap-x-4">
              <input
                type="radio"
                id="pushNothing"
                name="pushNotifications"
                value="No Push Notifications"
                onChange={changeHandler}
              />
              <label htmlFor="pushNothing" className="text-gray-900 leading-6 text-sm font-medium">No Push Notifications</label>
            </div>
          </div>
        </fieldset>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
          Save
        </button>

      </form>
    </div>
  );
};

export default App;
