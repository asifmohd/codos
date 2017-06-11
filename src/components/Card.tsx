import * as React from 'react';

export interface Props {
    name: string;
    price: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export class Card extends React.Component<Props, object> {
    render() {
        const { name, price = 0.0, onIncrement, onDecrement } = this.props;
        return (
        <div className = "card">
            <div className="info">
                {name + ' for Rs. ' +  price}
            </div>
            <div>
                <button onClick = {onDecrement}>-</button>
                <button onClick = {onIncrement}>+</button>
            </div>
        </div>
        );
    }
}

export default Card;