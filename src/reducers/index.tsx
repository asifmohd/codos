import { SearchTextChanged, MedicineAction } from '../actions';
import { StoreState } from '../types/index';
import { SEARCH_TEXT_CHANGED, INCREMENT_MEDICINE, DECREMENT_MEDICINE } from '../constants/index';

export function search(state: StoreState, action: SearchTextChanged): StoreState {
    switch (action.type) {
        case SEARCH_TEXT_CHANGED:
        return { ...state, items: [] };
        default:
        return state;
    }
}

export function medicine(state: StoreState, action: MedicineAction): StoreState {
    switch (action.type) {
        case INCREMENT_MEDICINE:
        return { ...state, items: [] };
        case DECREMENT_MEDICINE:
        return { ...state, items: [] };
        default:
        return state;
    }
}