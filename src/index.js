import  numeral from 'numeral';
import './index.css';

const value = numeral(1000).format('$0,0.00');
console.log(`I would pay ${value} dollars`); // eslint-disable-line no-console


