//action are just object but in the file of action there is a function thatreturns the function as object
//this function is known as action creater

export const actionCreator=(value)=>{
    return {
        type:"increment",//every action object have a type property that describe the action to perform on state
        payload:value,//it is the property which holds the data by which we have to change the state
        //whenever dispatcher dispatches the action it will provide a value that is catches by the action creator argument value and assigned to the payload
    }
}



export const actionsubCreator=()=>
{
    return {
        type : "decrement",
    }
}