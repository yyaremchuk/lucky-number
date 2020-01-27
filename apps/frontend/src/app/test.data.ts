import { Draw } from '@lucky-number/models';

export const DRAWS: Array<Draw> = [
  {
    _id: '222',
    date: new Date('2020-01-10'),
    result: null,
    played: [],
    suggested: []
  },
  {
    _id: '123',
    date: new Date('2020-01-05'),
    result: '1.2.3.4.5.6.7',
    played: ['1.2.3.4.5.6.7', '1.2.3.4.5.6.7'],
    suggested: ['1.2.3.4.5.6.7']
  }
];
