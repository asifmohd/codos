import * as React from 'react';

export interface AddToCartProps {
    cart_count: number;
    onDecrement: () => void;
    onIncrement: () => void;
}

export class AddToCart extends React.Component<AddToCartProps, {}> {

    constructor(props: AddToCartProps) {
        super(props);
    }

    render() {
        if (this.props.cart_count === 0) {
            return (
                <span className="AddToCart">
                    <button onClick={this.props.onIncrement}>Add To Cart</button>
                </span>
            );
        } else {
            return (
                <span>
                    <button onClick={this.props.onDecrement}>-</button>
                    <span>
                        {this.props.cart_count}
                    </span>
                    <button onClick={this.props.onIncrement}>+</button>
                </span>
            );
        }
    }
}

export default AddToCart;