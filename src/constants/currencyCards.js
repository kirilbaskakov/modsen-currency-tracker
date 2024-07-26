import AustralianDollar from '../assets/Australian Dollar Icon.svg';
import Bitcoin from '../assets/Bitcoin Icon.svg';
import Bovespa from '../assets/Bovespa Icon.svg';
import CanadianDollar from '../assets/Canadian Dollar Icon.svg';
import Dollar from '../assets/Dollar Icon.svg';
import Euro from '../assets/Euro Icon.svg';
import IFIX from '../assets/IFIX.svg';
import Libra from '../assets/Libra Icon.svg';
import PesoArgentino from '../assets/Peso Argentino Icon.svg';
import Won from '../assets/Won Icon.svg';
import Yen from '../assets/Yen Icon.svg';

export const currencies = [
  'Commercial Dollar',
  'Yen',
  'Won',
  'Euro',
  'Bitcoin',
  'Argentinian Peso',
  'Canadian Dollar'
];

export default [
  {
    title: 'Stocks',
    cards: [
      {
        icon: Bovespa,
        title: 'Bovespa Index',
        subtitle: '0.15%'
      },
      {
        icon: IFIX,
        title: 'IFIX',
        subtitle: '0.15%'
      }
    ]
  },
  {
    title: 'Quotes',
    cards: [
      { icon: Dollar, title: 'Commercial Dollar', subtitle: 'R$ 5,13' },
      { icon: PesoArgentino, title: 'Argentine Peso', subtitle: 'R$ 0,02' },
      { icon: CanadianDollar, title: 'Canadian Dollar', subtitle: 'R$ 3,78' },
      { icon: Yen, title: 'Yen', subtitle: 'R$ 0,03' },
      {
        icon: AustralianDollar,
        title: 'Australian Dollar',
        subtitle: 'R$ 3,48'
      },
      { icon: Won, title: 'Won', subtitle: 'R$ 0,74' },
      { icon: Euro, title: 'Euro', subtitle: 'R$ 5,43' },
      { icon: Bitcoin, title: 'Bitcoin', subtitle: 'R$ 122.148,71' },
      { icon: Libra, title: 'Libra', subtitle: 'R$ 6,16' }
    ]
  }
];
