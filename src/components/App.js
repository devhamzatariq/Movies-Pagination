import React, { useState, useEffect } from "react";
import Movies from "./movies";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Movies />
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import * as Actions from "../store/actions";

// function App() {
//   const dispatch = useDispatch();
//   const [homenamee, sethomeNamee] = useState("tariq");
//   const [profilenamee, setprofileNamee] = useState("tariq Mehmood");

//   const homename = useSelector(state => state.home.homeName);
//   const profilename = useSelector(state => state.profile.profileName);
//   return (
//     <div className="App">
//       <h1>Home Name : {homename}</h1>
//       <button onClick={() => dispatch(Actions.changeName(homenamee))}>
//         Change Name from Home Reducer
//       </button>

//       <h1>Profile Name : {profilename}</h1>
//       <button onClick={() => dispatch(Actions.changeProfileName(profilenamee))}>
//         Change Name from Profile Reducer
//       </button>
//     </div>
//   );
// }

// export default App;
