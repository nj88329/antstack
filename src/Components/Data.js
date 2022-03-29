import React, { useEffect, useState } from 'react';
import store from '../store';
import { useSelector,useDispatch } from 'react-redux';
import addproduct from '../actions';

const Data = (props) => {
//     const items=useSelector((state)=>
//     state.items
//   )


const [cart, setCart]=useState(0);

const [fav, setFav]=useState([]);

const items=useSelector((state)=>{
    return{
      ...state
    }
  })
  
  const dispatch=useDispatch();
  const value=(product)=> dispatch(addproduct(product))
  //  const remove=(product)=> dispatch(removeProduct(product));
  
  
  // const remove=(product)=> dispatch(addproduct(product))
  store.subscribe(()=>{
    console.log('Updated')
    console.log('store',store.getState())
  })
    console.log('store',store.getState())

return(
      <>
        <div style={{display:'flex',margin:'20px'}}>
        
       {  props.product.map((mov,i)=>{
            return(
                 <div className="card" value={mov.numReviews}  style={{width: '300px', border:'20px', borderStyle:'double',marginLeft:'20%'}} key={i}>
                    <img className="card-img-top" src={mov.imageUrl} style={{height:'200px',width:'200px',marginLeft:'2%'}}/>
                    <div className="card-body">
                        <h5 className="card-title" > Price : {mov.numReviews}</h5>
                    

                        <button style={{height:'20px',width:'90px',backgroundColor:'red'}} value={mov.numReviews} onClick={(e)=>value(mov)}>Add Product</button>
                        <button style={{height:'20px',width:'90px',backgroundColor:'red'}} value={mov.numReviews} >Remove</button>
                        {/* {
                        items.map((item,id)=>{
                            if(item.title===props.product.title){
                                <button style={{height:'20px',width:'90px',backgroundColor:'red'}} value={mov.numReviews} onClick={(e)=>value(mov)}>Add Product</button>
                                return item;
                            }
                        })
                        }   */}
                            <p className="card-text"></p>
                        <a href="#" className="btn btn-primary"></a>
                    </div>
                </div>
                )})
       } 
       
        </div>
    </>
    )
}

export default Data;
