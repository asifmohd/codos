import * as React from 'react';
import { Card } from '../components/Card';
import '../App.css';
import { MedicineCollectionProp } from '../types';

export class MedicinesCollection extends React.Component<MedicineCollectionProp, {}> {
  public rows: object[];

  constructor(props: MedicineCollectionProp) {
    super(props);
    this.rows = [];
  }

  render() {
    this.rows = [];
    this.props.items.forEach(element => {
      let incrementFunc: () => void = () => { this.props.update(element.id, 1); };
      let decrementFunc: () => void = () => { this.props.update(element.id, -1); };
      this.rows.push(
        <Card 
          key={element.id}
          cart_count={element.cart_count} 
          mrp={element.mrp} 
          display_string={element.display_string} 
          onIncrement={incrementFunc} 
          onDecrement={decrementFunc}
        />
      );
    });

    return (
      <div className="MedicinesCollection">
          {this.rows}
      </div>
    );
  }
}

export default MedicinesCollection;