import { mainInstance, nckuInstance } from './config';
import runtimeEnv from '../runtimeEnv';

export const queryApi = async (studentID: string) => {
  const data = mainInstance
    .get('/students/query/', {
      params: { ID: studentID },
    })
    .then(resp => resp.data)
    .catch();
  return data;
};

export const cardToStudentID = async (cardID: string) => {
  const re = /[A-Z]{1}[0-9]{8}/i;
  let studentID: string = cardID;

  if (!cardID.match(re)) {
    studentID = await nckuInstance
      .get('/ncku/queryno.php', {
        params: { octin: cardID },
      })
      .then(resp => resp.data)
      .catch();
  }

  return studentID;
};

export function getRelativePath(path: string): string {
  if (runtimeEnv.GITHUB) {
    const valid = /[^\/].*/g.exec(path);
    return valid
      ? `/${runtimeEnv.PROJ_NAME}/${valid[0]}`
      : `/${runtimeEnv.PROJ_NAME}/`;
  }
  return path;
}
