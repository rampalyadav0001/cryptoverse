import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/Cryptoapi';
import { cryptoNewsApi } from '../services/cryptonewsApi';
import { cryptoExchangeApi } from '../services/cryptoexchangeApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoExchangeApi.reducerPath]:cryptoExchangeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware,
      cryptoExchangeApi.middleware,
    ), // Combine the RTK-Query middlewares
});
