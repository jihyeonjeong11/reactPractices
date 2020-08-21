import React, { useReducer } from 'react';
import CardContent from './CardContent';
import { findByLabelText } from '@testing-library/react';
import subContext from './context/subContext';
import initialState from './context/initialState';




function Cards(props) {
    const [state, dispatch] = useReducer(subContext, initialState);
    const goodArr = props.goodArr;
    let clickSub=(subscribed, goodsNo)=>!subscribed ? dispatch({type: 'addSub', payload:goodsNo}) : dispatch({type: 'removeSub', payload:goodsNo})
    return (
        <div className="container-fluid d-flex justify-content-center">
             <div className="row">
            {goodArr.map((item,index) => {
                const subscribed = !!state.subArr.filter((no) => no === item.goodsNo).length;
               // let clickSub=!subscribed ? dispatch({type: 'addSub', payload:item.goodsNo}) : dispatch({type: 'removeSub', payload:item.goodsNo})
                return (
                   
                    <div className="col-md-4">

                          <CardContent item={item} index={index} subscribed={subscribed} clickSub={clickSub} />
                    </div>
                
                )
            })}
            </div>
           
        </div>
    )
}

export default Cards;