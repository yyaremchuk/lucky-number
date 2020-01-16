import { Combination } from './combination.model';

export interface Draw {
  id?: string;
  date: Date;
  result: Combination;
  played: Array<Combination>;
  suggested: Array<Combination>;
}
