import eu from '../../assets/eu.jpg'

interface IData {
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  country: string;
  countryIcon: string;
  state: string;
  city: string;
  phone: string;
  image: string;
}

const data: IData = {
  title: 'Júlio Nunes',
  description: 'A Frontend Developer',
  email: 'julio.nt753@gmail.com',
  github: 'https://github.com/julio-nt',
  linkedin: '',
  country: 'Brazil',
  countryIcon: 'twemoji:flag-brazil',
  state: 'Bahia',
  city: 'Eunápolis',
  phone: '+55 73 98863-5873',
  image: 'https://hiperideal.vtexassets.com/arquivos/ids/167660/27502.jpg?v=636615816147030000',
};

export { data };
