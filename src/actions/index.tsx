import * as constants from '../constants';

export interface SearchTextChanged {
    type: constants.SEARCH_TEXT_CHANGED;
}

export interface IncrementMedicine {
    type: constants.INCREMENT_MEDICINE;
}

export interface DecrementMedicine {
    type: constants.DECREMENT_MEDICINE;
}

export type MedicineAction = IncrementMedicine | DecrementMedicine;

export function searchTextChanged(): SearchTextChanged {
    return {
        type: constants.SEARCH_TEXT_CHANGED
    };
}

export function incrementMedicine(): IncrementMedicine {
    return {
        type: constants.INCREMENT_MEDICINE
    };
}

export function decrementMedicine(): DecrementMedicine {
    return {
        type: constants.DECREMENT_MEDICINE
    };
}