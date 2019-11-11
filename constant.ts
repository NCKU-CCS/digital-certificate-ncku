export enum IndexState {
  INPUT = 0,
  READY = 1,
  SUCCESS = 2,
  FAILURE = 3,
}
export enum QueryState {
  INPUT = 10,
  SUCCESS = 11,
  FAILURE = 12,
}
export enum ReissueState {
  INPUT = 20,
  READY = 21,
  SUCCESS = 22,
  FAILURE = 23,
}

export interface IStudent {
  name: string;
  birth: string;
  major: string;
  other: string;
  apply: string;
}
