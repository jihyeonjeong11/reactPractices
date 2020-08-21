import React, {useReducer} from 'react';
import './card-style.css';
import subContext from './context/subContext';
import initialState from './context/initialState';
const Card = props => {
   
    const item = props.item;
    const index = props.index;
    const subscribed = props.subscribed;
    const clickSub = props.clickSub;
    return (
        <div className='card text-center'>
            <div className='overflow'>
                <img src={item.thumbnail} alt={`image${index}`} className='card-img-top' />
                <div style={{marginTop: 15}} />
                <button onClick={()=>clickSub(subscribed,item.goodsNo)}>{subscribed ? 'subscribed' : 'not subscribed'}</button>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{item.goodsNm}</h4>
                <p className='card-text text-secondary'>{item.goodsNo}</p>
                <a href='#' onClick={()=>console.log(props)} className='btn btn-outline-success'>go anywhere</a>
   
            </div>
        </div>
    )
};

export default Card;