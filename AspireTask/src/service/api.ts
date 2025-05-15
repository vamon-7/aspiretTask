import { Card, NavItem, Transactions } from "../components/type";
import fileStorage from '../assets/file-storage.svg';
import flight from '../assets/flights.svg';
import megaphone from '../assets/megaphone.svg';

const cards: Card[] = [
  { id: 1, number: '2345 8765 7865 2020', name: "Mark Henry", last4: "2020", expiry: "12/20", cvv: 567,isFreezed:false },
  { id: 2, number: '2345 8765 4556 9087', name: "Jane Doe", last4: "9087", expiry: "11/24", cvv: 988, isFreezed:false },
  { id: 3, number: '2345 8765 6512 1987', name: "John Smith", last4: "1987", expiry: "06/25", cvv: 654, isFreezed:false }
]

export const getNavItem = (): Promise<NavItem[]> => Promise.resolve(
  [
    {
      name: 'Home',
      iconUrl: ''
    },
    {
      name: 'Cards',
      iconUrl: ''
    },
    {
      name: 'Payments',
      iconUrl: ''
    },
    {
      name: 'Credit',
      iconUrl: ''
    }
  ]
)

export const getTransactions = (): Promise<Transactions[]> => Promise.resolve([
  {
    icon: fileStorage,
    bg: '#009DFF1A',
    name: 'Hamleys',
    date: '20 May 2020',
    amount: 150,
    info: 'Refund on debit card',
  },
  {
    icon: flight,
    bg: '#00D6B51A',
    name: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    info: 'Charged to debit card',
  },
  {
    icon: megaphone,
    bg: '#F251951A',
    name: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    info: 'Charged to debit card',
  },
  {
    icon: fileStorage,
    bg: '#009DFF1A',
    name: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    info: 'Charged to debit card',
  },
])

export const getCards = (): Promise<Card[]> => Promise.resolve(cards)

export const addCard = (card: Card): Promise<Card[]> => new Promise((res, rej) => {
  try {
   cards.push(card)
   res(cards)
  } catch (e) {
    rej(e)
  }
})

export const freezeCard = (i:number): Promise<Card[]> => new Promise((res, rej) => {
  try {
    cards[i].isFreezed = ! cards[i].isFreezed 
   res(cards)
  } catch (e) {
    rej(e)
  }
})





