import * as React from 'react';

export interface StoreState {
    searchText: string;
    items: Drug[];
}

export interface Drug {
    display_string: string;
    mrp: number;
    cart_count: number;
    id: number;
}

export interface SearchBarProps {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    text: string;
}

export interface MedicineCollectionProp {
  items: Drug[],
  update: (id: number, val: number) => void;
}
