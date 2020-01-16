import { Draw } from '@lucky-number/models';

export const DRAWS: Array<Draw> = [
  {
    id: '222',
    date: new Date('2020-01-10'),
    result: null,
    played: [],
    suggested: []
  },
  {
    id: '123',
    date: new Date('2020-01-05'),
    result: {
      id: '1',
      mains: [1, 2, 3, 4, 5],
      lucky: [6, 7]
    },
    played: [
      {
        id: '1',
        mains: [1, 2, 3, 4, 5],
        lucky: [6, 7]
      }
    ],
    suggested: [
      {
        id: '1',
        mains: [1, 2, 3, 4, 5],
        lucky: [6, 7]
      },
      {
        id: '2',
        mains: [1, 2, 3, 4, 8],
        lucky: [5, 7]
      },
      {
        id: '3',
        mains: [1, 2, 13, 14, 18],
        lucky: [5, 7]
      }
    ]
  },
  {
    id: '21',
    date: new Date('2020-01-01'),
    result: {
      id: '1',
      mains: [1, 2, 3, 4, 5],
      lucky: [6, 7]
    },
    played: [
      {
        id: '2',
        mains: [1, 2, 3, 4, 8],
        lucky: [5, 7]
      }
    ],
    suggested: [
      {
        id: '1',
        mains: [1, 2, 3, 4, 5],
        lucky: [6, 7]
      },
      {
        id: '2',
        mains: [1, 2, 3, 4, 8],
        lucky: [4, 8]
      },
      {
        id: '3',
        mains: [1, 2, 13, 14, 18],
        lucky: [1, 11]
      }
    ]
  },
  {
    id: '1111',
    date: new Date('2019-12-25'),
    result: {
      id: '1',
      mains: [1, 2, 3, 4, 5],
      lucky: [6, 7]
    },
    played: [
      {
        id: '3',
        mains: [1, 2, 13, 14, 18],
        lucky: [5, 7]
      }
    ],
    suggested: [
      {
        id: '1',
        mains: [1, 2, 3, 4, 5],
        lucky: [6, 7]
      },
      {
        id: '2',
        mains: [1, 2, 3, 4, 8],
        lucky: [2, 9]
      },
      {
        id: '3',
        mains: [1, 2, 13, 14, 18],
        lucky: [9, 10]
      }
    ]
  }
];
