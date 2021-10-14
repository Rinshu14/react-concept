//action are just object but in the file of action there is a function thatreturns the function as object
//this function is known as action creater

export const actionCreator=()=>{
    return {
        type:"increment",//every action object have a type property that describe the action to perform on state
    }
}
export const actionsubCreator=()=>
{
    return {
        type : "decrement",
    }
}