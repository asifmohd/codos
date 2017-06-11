import * as React from 'react';
import * as abc from '../components/Card';
import { Drug } from '../types';

export class MedicinesCollection extends React.Component<{items: Drug[]}, null> {
  public rows: object[];

  constructor(props: {items: Drug[]}) {
    super(props);
    this.rows = [];
  }

  render() {
    this.rows = [];
    this.props.items.forEach(element => {
      let obj = element as Drug;
      this.rows.push(
        <abc.Card key={obj.display_string} name={obj.display_string} price={obj.mrp} />
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