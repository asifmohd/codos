import * as React from 'react';
import '../App.css';
import { Drug } from '../types/index';

export interface Props {
    drug: Drug;
    onIncrement: () => void;
    onDecrement: () => void;
}

export class Card extends React.Component<Props, object> {
    render() {
        const { drug, onIncrement, onDecrement } = this.props;
        return (
        <div className = "Card">
            <div className="Info">
                <p>{drug.display_string}</p>
                <p>₹ {drug.mrp}</p>
                <p>
                    <span>
                        In Cart: {drug.cart_count} {'   '}
                        <button onClick = {onDecrement}>-</button>
                        <button onClick = {onIncrement}>+</button>
                    </span>
                </p>
            </div>
        </div>
        );
    }
}

export default Card;