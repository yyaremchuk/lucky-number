function getRandomData(count: number): Array<string> {
  const results: Array<string> = [];

  for (let i = 0; i < count; i++) {
    const tmp: Array<number> = [];
    tmp.push(...getRandomSetNew(50, 5), ...getRandomSetNew(12, 2));
    results.push(tmp.join('.'));
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

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default getRandomData;
