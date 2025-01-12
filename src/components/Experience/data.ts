interface IData {
  job: string;
  place: string;
  startDate: string;
  endDate: string;
  subtitle: string;
  description: string;
}

const data: IData[] = [
  {
    job: 'Frontend Developer',
    place: 'Company A',
    startDate: '2020-01-01',
    endDate: '2020-12-31',
    subtitle: 'Description',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis vel nunc lacinia auctor. Ut auctor, nunc id lacinia luctus, neque sapien fermentum turpis, nec consectetur elit arcu id libero. Nullam nec turpis vel nunc lacinia auctor. Ut auctor, nunc id lacinia luctus, neque sapien fermentum turpis, nec consectetur elit arcu id libero.',
  },
  {
    job: 'Backend Developer',
    place: 'Company B',
    startDate: '2019-01-01',
    endDate: '2019-12-31',
    subtitle: 'Description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tur',
  },
];

export { data };
