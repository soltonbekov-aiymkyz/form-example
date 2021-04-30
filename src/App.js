// import {useState} from "react"
// function App() {
//   const [firstName, setFirstName] = useState("first Name")
//   const [lastName, setLastName] = useState("last Name")
//   const [Number, setNumber] = useState("date of birth")
//   const [address, setAddress] = useState("address")
//   const [password, setPassword] = useState("password")
//   const [languages, setLanguages] = useState("languages")
//   const [dateOfBirth, setDateOfBirth] = useState("date of birth")
//   const [zip, setZip] = useState("zip")
//   const [email, setEmail] = useState("email")
//   const [radio, setRadio] = useState("radio")

//   const [checkbox, setCheckbox] = useState("checkbox")

//   const [education, setEducation] = useState("education")
//   return (
//     <div className="App">
//       {firstName}
//       <input type="text" placeholder="firstName"  onChange={({ target }) => setFirstName(target.value)} />
//       {lastName}
//       <input type="text"  value={lastName} onChange={({ target }) => setLastName(target.value)} />
//       {dateOfBirth}
//       <input type="date"   onChange={({ target }) => setNumber(target.value)} />
//       {languages}
//       <input type="languages" onChange={({ target }) => setNumber(target.value)} />
//       {password}
//       <input type="password" onChange={({ target }) => setNumber(target.value)} />
//       {address}
//       <input type="address" value={address} onChange={({ target }) => setNumber(target.value)} />
//       {radio}
//       <input type="radio" onChange={({ target }) => setNumber(target.value)} />
//       {email}
//       <input type="email" placeholder="@email" onChange={({ target }) => setNumber(target.value)} />
//       {zip}
//       <input type="number" placeholder="zip" onChange={({ target }) => setNumber(target.value)} />
//       {checkbox}
//       <input type="checkbox" onChange={({ target }) => setCheckbox(target.value)} />
//    <div>
//       {education}
//       univer
//       <input type="radio"             onChange={({ target }) => setNumber(target.value)} />
//       school
//       <input type="radio"           onChange={({ target }) => setNumber(target.value)} />
// </div>
// <ul>
//   <li>{firstName}</li>
//   <li>{lastName}</li>
//   <li>{dateOfBirth}</li>
//   <li>{languages}</li>
//   <li>{password}</li>
//   <li>{address}</li>
//   <li>{email}</li>
// <li>{zip}</li>
// </ul>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// function App() {
//   function formSubmitCallback(event) {
//     const data = {
//       firstName: event.target.form[0].value,
//       // ...
//     }
//     event.preventDefault();
//   }
//   return (
//     <form className="App">
//       <div>
//         <label for="firstName">First name</label>
//         <input type="text"
//           name="firstName"
//           id="firstName" />
//       </div>
//       <div>
//         <label for="lastName">Last name</label>
//         <input type="text"
//           name="lastName"
//           id="lastName" />
//       </div>
//       <div>
//         <label for="email">Email</label>
//         <input type="email"
//           name="email"
//           id="email" />
//       </div>
//       <div>
//         <label for="phone">Phone</label>
//         <input type="tel"
//           name="phone"
//           id="phone" />
//       </div>
//       <div>
//         <label for="dateOfBirth">Date of birth</label>
//         <input type="date"
//           name="dateOfBirth"
//           id="dateOfBirth" />
//       </div>
//       <div>
//         <label for="gender">Gender</label>
//         <select name="gender"
//           id="gender">
//           <option>- Select -</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>
//       <div>
//         <label>Education</label>
//         <div>
//           <label for="school">
//             <input type="radio"
//               name="education"
//               id="school"
//               value="school" /> School
//           </label>
//         </div>
//         <div>
//           <label for="university">
//             <input type="radio"
//               name="education"
//               id="university"
//               value="university" /> University
//           </label>
//         </div>
//       </div>
//       <div>
//         <label>Languages</label>
//         <div>
//           <label for="english">
//             <input type="checkbox"
//               name="language"
//               id="english"
//               value="english" /> English
//           </label>
//         </div>
//         <div>
//           <label for="kyrgyz">
//             <input type="checkbox"
//               name="language"
//               id="kyrgyz"
//               value="kyrgyz" /> Kyrgyz
//           </label>
//         </div>
//         <div>
//           <label for="russian">
//             <input type="checkbox"
//               name="language"
//               id="russian"
//               value="russian" /> Russian
//           </label>
//         </div>
//       </div>
//       <div>
//         <label for="address">Address</label>
//         <input type="text"
//           name="address"
//           id="address" />
//       </div>
//       <div>
//         <label for="city">City</label>
//         <input type="text"
//           name="city"
//           id="city" />
//       </div>
//       <div>
//         <label for="zip">ZIP</label>
//         <input type="number"
//           name="zip"
//           id="zip" />
//       </div>
//       <div>
//         <button type="submit" onClick={formSubmitCallback}>Submit</button>
//       </div>
//     </form>
//   );
// }
// export default App;













import { useState } from "react";
import axios from "axios";

function App() {
  function formSubmitCallback(event) {
    const data = new FormData(event.target);
    const user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      gender: data.get('gender'),
      firstName: data.get('email'),
      firstName: data.get('phone'),
      // ...
    }
    console.log(user);
    // event.preventDefault();
  

  axios.post("https://form-example-c288a-default-rtdb.firebaseio.com/default.json",{
       user
      })
      event.preventDefault();
  }
    
    
  return (
    <form className="App" onSubmit={formSubmitCallback}>
      <div>
        <label for="firstName">First name</label>
        <input type="text"
          name="firstName"
          id="firstName"
          required />
          <span className="error" >First name is required</span>
      </div>
      <div>
        <label for="lastName">Last name</label>
        <input type="text"
          name="lastName"
          id="lastName"
          required />
           <span className="error" >Last name is required</span>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email"
          name="email"
          id="email" />
          <span className="error" >Email  is required</span>
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="tel"
          name="phone"
          id="phone"
          minlength="10"
          maxlength="10"
          required />
           <span className="error" >Phone  is required</span>
      </div>
      <div>
        <label for="dateOfBirth">Date of birth</label>
        <input type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          required />
           <span className="error" >Date Of Birth  is required</span>
      </div>
      <div>
        <label for="gender">Gender</label>
        <select name="gender"
          required
          id="gender">
          <option value="">- Select -</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>



        
      </div>
      <div>
        <label>Education</label>
        <div>
          <label for="school">
            <input type="radio"
              name="education"
              id="school"
              value="school"
              required /> School
          </label>
        </div>
        <div>
          <label for="university">
            <input type="radio"
              name="education"
              id="university"
              value="university"
              required /> University
          </label>
        </div>
      </div>
      <div>
        <label>Languages</label>
        <div>
          <label for="english">
            <input type="checkbox"
              name="language"
              id="english"
              value="english" /> English
          </label>
        </div>
        <div>
          <label for="kyrgyz">
            <input type="checkbox"
              name="language"
              id="kyrgyz"
              value="kyrgyz" /> Kyrgyz
          </label>
        </div>
        <div>
          <label for="russian">
            <input type="checkbox"
              name="language"
              id="russian"
              value="russian" /> Russian
          </label>
        </div>
      </div>
      <div>
        <label for="address">Address</label>
        <input type="text"
          name="address"
          id="address"
          required />
      </div>
      <div>
        <label for="city">City</label>
        <input type="text"
          name="city"
          id="city"
          required />
           <span className="error" >City  is required</span>
      </div>
      <div>
        <label for="zip">ZIP</label>
        <input type="number"
          name="zip"
          id="zip"
          min="720000"
          max="740000"
          required />
           <span className="error" >ZIP  is required</span>
      </div>
      <div>
        <button>Submit</button>
      </div>
</form>
  );
}
export default App;
