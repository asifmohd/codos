import * as React from 'react';
import * as Comp from '../components/Card';
import { MedicineCollectionProp } from '../types';

export class MedicinesCollection extends React.Component<MedicineCollectionProp, null> {
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
        <Comp.Card key={element.display_string}drug={element}onIncrement={incrementFunc} onDecrement={decrementFunc}/>
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