import AustralianDollarIcon from '../assets/Australian Dollar Icon.svg';
import BitcoinIcon from '../assets/Bitcoin Icon.svg';
import BovespaIcon from '../assets/Bovespa Icon.svg';
import CanadianDollarIcon from '../assets/Canadian Dollar Icon.svg';
import DollarIcon from '../assets/Dollar Icon.svg';
import EuroIcon from '../assets/Euro Icon.svg';
import IFIXIcon from '../assets/IFIX.svg';
import PesoArgentinoIcon from '../assets/Peso Argentino Icon.svg';
import WonIcon from '../assets/Won Icon.svg';
import YenIcon from '../assets/Yen Icon.svg';

export const currencies = {
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

export const stocks = [
  {
    icon: BovespaIcon,
    title: 'Bovespa Index',
    exchangable: false,
    subtitle: '0.15%'
  },
  {
    icon: IFIXIcon,
    title: 'IFIX',
    exchangable: false,
    subtitle: '0.15%'
  }
];
