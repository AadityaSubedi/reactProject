import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk'; // thunk is a middle-ware, here, we use it to run async code


//async function
async function getApiData(dispatch)
{
    try
    {
        
    var apiData = await fetch("https://run.mocky.io/v3/291c5c08-af6d-42ac-bfae-65e575938138");
    
    var jsonData = await apiData.json();
    dispatch ({type: "InitStoreWithAsyncData", payload:{apiResponse: [jsonData]} })

    } 

    catch(error){
        alert(error);
    }   
    




}




// }
//To enable the redux-dev-tool *optional*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//create the store
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));



//action creater to get the async data
const InitStoreWithAsyncData = () => {
    return  (dispatch)=>
    {
       

        //async code 

        getApiData(dispatch);
        // .then(resolvedJsonData=>{
        //     resolvedApiResponse = resolvedJsonData;
        //     console.log(resolvedApiResponse);
        // });
       
       // dispatching
        
    }
}
      
    // {type : "InitStoreWithAsyncData"}

// redefine the state of the redux, including the data fetched from server
store.dispatch (InitStoreWithAsyncData());