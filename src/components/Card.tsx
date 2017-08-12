import * as React from 'react';
import '../App.css';
import { AddToCart } from './AddToCart';

export interface CardProps {
    cart_count: number;
    mrp: number;
    display_string: string;
    onIncrement: () => void;
    onDecrement: () => void;
}

export class Card extends React.Component<CardProps, object> {
    render() {
        return (
        <div className="Card">
            <div className="Info">
                <p>{this.props.display_string}</p>
                <p>₹ {this.props.mrp}</p>
                <p>
                    <AddToCart 
                        cart_count={this.props.cart_count} 
                        onIncrement={this.props.onIncrement} 
                        onDecrement={this.props.onDecrement} 
                    />
                </p>
            </div>
        </div>
        );
    }

    // minor optimization to prevent rendering of cards which have not changed
    shouldComponentUpdate(nextProps: CardProps, nextState: object) {
        if (this.props.cart_count === nextProps.cart_count) {
            return false;
        }
        return true;
    }
}

export default Card;