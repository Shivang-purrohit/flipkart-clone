import { createContext, useContext, useReducer } from "react";
import Filter_rud from "./Filter_rud";
import { initialstate, Reducer } from "./Reducer";

const Context = createContext();

const Store = ({children}) => {

    const [product, dis] = useReducer(Reducer, initialstate);
    const [filter, dis_fill] = useReducer(Filter_rud,{
        sort:null,
        size:null,
        brand:null,
        clear:null
    })

    return <Context.Provider value={{product, dis, filter, dis_fill}}>
        {children}
    </Context.Provider>
}

export const Use_r_state =() => useContext(Context);
export default Store ;
