import { createContext, useReducer, useContext } from 'react';
import storeReducer, { classNames_store } from './StoreReducer';

const StoreContext = createContext();

const StoreProvider = ({ children }) => 
    <StoreContext.Provider value={useReducer(storeReducer, classNames_store)}>
        {children}
    </StoreContext.Provider>

const useStore = () => useContext(StoreContext)[0]
const useDispatch = () => useContext(StoreContext)[1]

export { StoreContext, useStore, useDispatch }
export default StoreProvider