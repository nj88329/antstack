// import {combineReducers} from 'redux';
// import { ActionTypes } from "../constants/action-types";

// import {cartval} from './cartVal';

const initialState = {
    items:[],
    amount:0,    
}

function reducers(state=initialState, action){
    if(action.type==='ADD_PRODUCT') 
    {
          return  {
           ...state,
           items:[action.product,...state.items],
           amount:state.amount+action.product.numReviews
       }
    }
    //  else if(action.type===' REMOVE_PRODUCT') 
    //  {
    //     const newarr= state.items.filter((product)=>{
    //     return action.product.title!==product.title
    //   })
    //      return{
    //         ...state,
    //         items:newarr,
    //         amount:state.amount-action.product.numReviews
    //      }
    //  }
}
// const reducers = combineReducers({
//     total : cartval
// });
export default reducers;