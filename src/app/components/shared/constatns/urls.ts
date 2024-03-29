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
export const RADICADO_STATUS =  RADICADOS_URL + '/estado/';


export const PROCESOSR_URL = BASE_URL +  '/api/procesosr';
export const PROCESOR_BY_RADICADO_URL =  PROCESOSR_URL + '/';
export const PROCESOR_BY_USER_URL =  PROCESOSR_URL + '/usuario/';
export const PROCESOR_ADD_URL =  PROCESOSR_URL + '/agregar';