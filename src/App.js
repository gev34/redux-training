import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editUser, selectName } from "./features/currentUser/currentUserSlice";


function App() {

  const name = useSelector(selectName);
  const dispatch = useDispatch();



  return (
    <div className="App">
      <input value = {name} type="text" onChange={(e) => {
        dispatch(editUser(e.target.value))
      }}/>
       <p>{name}</p>
    </div>
  );
}

export default App;
