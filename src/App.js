import {useSelector,useDispatch} from "react-redux"
import {actionCreator,actionsubCreator} from "./redux/action"

let App=()=> {
let state=useSelector((state)=>{//it is a hook that takes a argument can use all the state of store and can manipulate them 
//what ever we return from this function get returned by the useSelector also
// here we can do anything with state but can't update it
return state;
})
 let dispatch=useDispatch();//it is a hook that returns the funtion to dispatch the action

  return (
    <div>
    <h4>Hiii</h4>
     <button onClick={()=>{
       dispatch(actionCreator());//when this event get dispatch this went to store that gives it to reducer reducer accept that in action argument that cahnges in state that will reflect in store and due to provider it refelect in all its child and because the change in state all childs will rerender with new state
     }}>+</button>
     <p>{state}</p>
     <button onClick={()=>{
       dispatch(actionsubCreator());
     }}>-</button>
     </div>
         
  );
}

export default App;
