import { mainInstance } from './config';
import runtimeEnv from './runtimeEnv';
import { IStudent, IResp } from '../constant';

/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/query
 * @function queryApi()
 * @param {string} studentID
 * @param {boolean} isEng
 * @returns {Promise<IResp>}
 */
const queryApi = async (studentID: string, isEng: boolean): Promise<IResp> => {
  const data = await mainInstance
    .get('/students/query/', {
      params: {
        ID: studentID,
        type: isEng ? 'English' : 'Chinese',
      },
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
 * @returns {Promise<IStudent>}
 */
const gradinfoApi = async (studentID: string): Promise<IStudent> => {
  const data = await mainInstance
    .get<IStudent>('/students/gradinfo/', {
      params: { ID: studentID },
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      withCredentials: true,
    })
    .then(resp => resp.data)
    .catch(() => null);
  return data && data.student_id ? data : null;
};

/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/students/issue/
 * @function issueApi()
 * @param {string} studentID
 * @param {boolean} isEng
 * @returns {Promise<IResp>}
 */
const issueApi = async (studentID: string, isEng: boolean): Promise<IResp> => {
  const data = await mainInstance
    .get<IResp>('/students/issue/', {
      params: {
        ID: studentID,
        type: isEng ? 'English' : 'Chinese',
      },
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
 * @param {boolean} isEng
 * @returns {Promise<IResp>}
 */
const reissueApi = async (
  studentID: string,
  isEng: boolean,
): Promise<IResp> => {
  const data = await mainInstance
    .get<IResp>('/students/reissue/', {
      params: {
        ID: studentID,
        type: isEng ? 'English' : 'Chinese',
      },
    })
    .then(resp => resp.data)
    .catch(() => null);
  return data;
};

/**
 * @global
 *  @host MAIN_HOST
 *  @method POST
 * Get from MAIN_HOST/students/reissue/
 * @function renameApi()
 * @param {string} studentID
 * @param {string} name
 * @returns {Promise<IResp>}
 */
const renameApi = async (
  studentID: string,
  newName: string,
): Promise<IResp> => {
  const data = await mainInstance
    .get('/students/rename/', {
      params: {
        ID: studentID,
        name: newName,
      },
    })
    .then(resp => resp.data)
    .catch(() => null);
  return data;
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
  renameApi,
  getRelativePath,
};
