import * as React from 'react';
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
        <div className = "card">
            <div className="info">
                <p>{drug.display_string}</p>
                <p>Rs. {drug.mrp}</p>
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