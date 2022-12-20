import { AppState } from '../../store/typedef';

export const getUser = (state: AppState) => state.user.user;
export const getUserId = (state: AppState) => state.user.user?._id;
export const getUserError = (state: AppState) => state.user.error;
