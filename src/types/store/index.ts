import { store } from 'store/index';

import { useAppDispatch } from 'store/hooks';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type DispatchType = ReturnType<typeof useAppDispatch>;
