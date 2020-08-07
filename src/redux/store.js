import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';


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

//middle-ware
const logger = (store)=>{
    return next=>{
        return action =>{
            // Passing action to the reducer 
            console.log(action);
           const result = next(action);
           return result; 
        }
    }


}
//To enable the redux-dev-tool *optional*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//create the store
export const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));



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


store.dispatch (InitStoreWithAsyncData());