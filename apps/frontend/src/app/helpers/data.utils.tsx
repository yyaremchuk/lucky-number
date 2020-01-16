import { v4 as uuid } from 'uuid';

import { Combination } from '@lucky-number/models';

function getRandomData(count: number): Array<Combination> {
  const results: Array<Combination> = [];

  for (let i = 0; i < count; i++) {
    results.push({
      mains: getRandomSetNew(50, 5),
      id: uuid(),
      lucky: getRandomSetNew(12, 2)
    });
  }

  return results;
}

function getRandomSetNew(max: number, amount: number): number[] {
  const result: number[] = [];
  const data: number[] = [];

  for (let i = 0; i < max; i++) {
    data.push(i + 1);
  }

  for (let i = 0; i < amount; i++) {
    const temp: number = getRandomNumber(0, data.length);
    result.push(data[temp]);

    data.splice(temp, 1);
  }

  return result.sort((a: number, b: number) => a - b);
}

// private static getRandomSet(min: number, max: number, amount: number): number[] {
//     const result: number[] = [];
//
//     for (let i = 0; i < amount; i++) {
//         let temp: number = 0;
//
//         while (temp === 0 ||
//             result.indexOf(temp) > -1 ||
//             result.indexOf(temp + 1) > -1 ||
//             result.indexOf(temp - 1) > -1) {
//             temp = this.getRandomNumber(min, max);
//         }
//
//         result.push(temp);
//     }
//
//     return result.sort((a: number, b: number) => a - b);
// }

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default getRandomData;
