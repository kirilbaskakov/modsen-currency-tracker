import AustralianDollarIcon from '../assets/Australian Dollar Icon.svg';
import BitcoinIcon from '../assets/Bitcoin Icon.svg';
import BovespaIcon from '../assets/Bovespa Icon.svg';
import CanadianDollarIcon from '../assets/Canadian Dollar Icon.svg';
import DollarIcon from '../assets/Dollar Icon.svg';
import EuroIcon from '../assets/Euro Icon.svg';
import IFIXIcon from '../assets/IFIX.svg';
import LibraIcon from '../assets/Libra Icon.svg';
import PesoArgentinoIcon from '../assets/Peso Argentino Icon.svg';
import WonIcon from '../assets/Won Icon.svg';
import YenIcon from '../assets/Yen Icon.svg';

export const currencyInfo = {
  'Commercial Dollar': {
    icon: DollarIcon,
    code: 'USD'
  },
  'Argentine Peso': {
    icon: PesoArgentinoIcon,
    code: 'ARS'
  },
  'Canadian Dollar': {
    icon: CanadianDollarIcon,
    code: 'CAD'
  },
  Yen: {
    icon: YenIcon,
    code: 'JPY'
  },
  'Australian Dollar': {
    icon: AustralianDollarIcon,
    code: 'AUD'
  },
  Won: {
    icon: WonIcon,
    code: 'KRW'
  },
  Euro: {
    icon: EuroIcon,
    code: 'EUR'
  },
  Bitcoin: {
    icon: BitcoinIcon,
    code: 'BTC'
  }
};

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
        icon: BovespaIcon,
        title: 'Bovespa Index',
        subtitle: '0.15%'
      },
      {
        icon: IFIXIcon,
        title: 'IFIX',
        subtitle: '0.15%'
      }
    ]
  },
  {
    title: 'Quotes',
    cards: [
      { icon: DollarIcon, title: 'Commercial Dollar', subtitle: 'R$ 5,13' },
      { icon: PesoArgentinoIcon, title: 'Argentine Peso', subtitle: 'R$ 0,02' },
      {
        icon: CanadianDollarIcon,
        title: 'Canadian Dollar',
        subtitle: 'R$ 3,78'
      },
      { icon: YenIcon, title: 'Yen', subtitle: 'R$ 0,03' },
      {
        icon: AustralianDollarIcon,
        title: 'Australian Dollar',
        subtitle: 'R$ 3,48'
      },
      { icon: WonIcon, title: 'Won', subtitle: 'R$ 0,74' },
      { icon: EuroIcon, title: 'Euro', subtitle: 'R$ 5,43' },
      { icon: BitcoinIcon, title: 'Bitcoin', subtitle: 'R$ 122.148,71' },
      { icon: LibraIcon, title: 'Libra', subtitle: 'R$ 6,16' }
    ]
  }
];
