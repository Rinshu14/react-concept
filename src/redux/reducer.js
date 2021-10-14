//here we not imported the action directly given because 
//when ever we dispatch action it went to store that have a reducer as parameter so that store give that action to this reduser
let reducer=(state=2,action)=>//this reducer function takes 2 argument first one is state that is actually a state and its default value 
{//second argument is action that is a object 
    switch(action.type)//we applied a switch case on value of type property of action object
    {
        case "increment":
            return state+1;
        
            case "decrement":
            return state-1;
            
            default:
                return state;
    }
}
export default reducer;