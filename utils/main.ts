import { mainInstance, nckuInstance } from './config';
import runtimeEnv from '../runtimeEnv';

/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/query
 * @function queryApi()
 * @param {string} studentID
 */
const queryApi = async (studentID: string) => {
  const data = await mainInstance
    .get('/students/query/', {
      params: { ID: studentID },
    })
    .then(resp => resp.data)
    .catch(() => null);
  return data;
};

/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/students/gradinfo/
 * @function gradinfoApi()
 * @param {string} studentID
 */
const gradinfoApi = async (studentID: string) => {
  const data = await mainInstance
    .get('/students/gradinfo/', {
      params: { ID: studentID },
    })
    .then(resp => resp.data)
    .catch(() => null);
  return data.student_id ? data : null;
};

/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/students/issue/
 * @function issueApi()
 * @param {string} studentID
 */
const issueApi = async (studentID: string) => {
  const data = await mainInstance
    .get('/students/issue/', {
      params: { ID: studentID },
    })
    .then(resp => resp.data)
    .catch(() => null);
  return data;
};

/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/students/reissue/
 * @function reissueApi()
 * @param {string} studentID
 */
const reissueApi = async (studentID: string) => {
  const data = await mainInstance
    .get('/students/reissue/', {
      params: { ID: studentID },
    })
    .then(resp => resp.data)
    .catch(() => null);
  return data;
};

/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Translate cardId into studentId from NCKU_HOST/ncku/queryno.php.
 * If it is not necessary, this function can be deleted
 * @function cardToStudentID()
 * @param {string} studentID
 */
const cardToStudentID = async (cardID: string) => {
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

/**
 * @function getRelativePath()
 * @param {string} path
 * resolve path for assets and links
 */
function getRelativePath(path: string): string {
  if (runtimeEnv.GITHUB) {
    const valid = /[^\/].*/g.exec(path);
    return valid
      ? `/${runtimeEnv.PROJ_NAME}/${valid[0]}`
      : `/${runtimeEnv.PROJ_NAME}/`;
  }
  return path;
}

export {
  queryApi,
  issueApi,
  reissueApi,
  gradinfoApi,
  cardToStudentID,
  getRelativePath,
};
