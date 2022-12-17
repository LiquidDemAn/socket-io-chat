import { AppState } from '../../store/typedef';

export const getUser = (state: AppState) => state.user.user;
export const getUserError = (state: AppState) => state.user.error;
export const getIsAuth = (state: AppState) => Boolean(state.user.user);
