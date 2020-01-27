export interface Combination {
  id?: string;
  mains: Array<number>;
  lucky: Array<number>;
  // string representation of 7 = 5 + 2 numbers joint by '.'
  value?: string;
}
