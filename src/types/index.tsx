import * as React from 'react';

export interface StoreState {
    searchText: string;
    items: Drug[];
}

export interface Drug {
    display_string: string;
    mrp: number;
}

export interface SearchBarProps {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    text: string;
}