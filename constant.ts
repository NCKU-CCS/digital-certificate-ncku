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
  RENAME = 13,
}
export enum ReissueState {
  INPUT = 20,
  READY = 21,
  SUCCESS = 22,
  FAILURE = 23,
}

export interface IStudent {
  cert_num: string;
  chinese_name: string;
  english_name: string;
  birth_date: string;
  identify_id: string;
  student_id: string;
  email: string;
  graduate_date: string;
  graduate_univ: string;
  graduate_colg: string;
  graduate_dept: string;
  degree: string;
  minor_d_major: string;
  e_graduate_univ: string;
  e_graduate_colg: string;
  e_graduate_dept: string;
  e_degree: string;
  e_cert_num: string;
}
