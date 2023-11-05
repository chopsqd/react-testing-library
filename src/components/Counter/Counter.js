import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/selectors/getCounterValue/getCounterValue";
import {decrement, increment} from "../../store/reducers/counterReducer/counterReducer";

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <button data-testid="increment-btn" onClick={onIncrement}>+</button>
            <button data-testid="decrement-btn" onClick={onDecrement}>-</button>
        </div>
    );
};

export default Counter;