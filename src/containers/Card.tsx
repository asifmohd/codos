import Card from '../components/Card';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ searchText, items}: StoreState) {
    return {
        searchText,
        items
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MedicineAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementMedicine()),
        onDecrement: () => dispatch(actions.decrementMedicine()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);