import * as React from 'react';
import '../App.css';
import { Drug } from '../types/index';
import { AddToCart } from './AddToCart';

export interface CardProps {
    drug: Drug;
    onIncrement: () => void;
    onDecrement: () => void;
}

export class Card extends React.Component<CardProps, object> {
    render() {
        const { drug, onIncrement, onDecrement } = this.props;
        return (
        <div className="Card">
            <div className="Info">
                <p>{drug.display_string}</p>
                <p>₹ {drug.mrp}</p>
                <p>
                    <AddToCart 
                        cart_count={drug.cart_count} 
                        onIncrement={onIncrement} 
                        onDecrement={onDecrement} 
                    />
                </p>
            </div>
        </div>
        );
    }
}

export default Card;