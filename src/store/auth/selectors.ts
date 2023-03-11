import { RootState } from 'types/store';

export const selectAuth = (state: RootState) => state.auth.isAuthenticated;
