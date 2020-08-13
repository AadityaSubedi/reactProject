import logo1 from '../Assets/logo.png';
import logo2 from '../Assets/ioelogo.jpg';


const initialState = {
    logo: [logo1, logo2],
    nav: [
        {text:"Home", to : "/"},
        {text:"Profile", to : "/profile/0"},
        {text:"tab", to : "/tab"},
        {text:"tab2", to : "/tab"}
    ],

    apiResponse:  [],
};

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case "InitStoreWithAsyncData":
            return{
               ...state,
               apiResponse: action.payload.apiResponse,


            }
                    
        default:
            return state
        }

};
export default reducer;
