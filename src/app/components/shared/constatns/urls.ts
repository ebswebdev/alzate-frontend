const BASE_URL = 'http://localhost:5000';

export const USERS_URL = BASE_URL + '/api/users';
export const USERS_TAGS_URL = USERS_URL + '/tags';
export const USERS_BY_SEARCH_URL = USERS_URL + '/search/';
export const USERS_BY_TAG_URL = USERS_URL + '/tag/';
export const USER_BY_ID_URL = USERS_URL + '/';

export const USER_LOGIN_URL = USERS_URL + '/login'
export const USER_REGISTER_URL = USERS_URL + '/register'


export const RADICADOS_URL = BASE_URL +  '/api/radicados';
export const RADICADO_BY_USER_URL =  RADICADOS_URL + '/';
export const RADICADO_ADD_URL =  RADICADOS_URL + '/agregar';