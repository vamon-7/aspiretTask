import Card from "./card.vue";

export interface NavItem {
    name: string;
    iconUrl: string;
}

export interface Transactions {
    icon: string;
    bg: string;
    name: string,
    date: string,
    amount: number,
    info: string,
}

export interface Card {
    id: number;
    number: string;
    name: string;
    last4: string;
    expiry: string;
    cvv: number
    isFreezed?: boolean
}