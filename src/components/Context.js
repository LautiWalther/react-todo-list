import { createContext, useContext, useState } from "react";

const Contxt = createContext(null);

export const DataProvider = ({ children }) => {
    const [reload, setReload] = useState(0);

    const [list, setList] = useState([]);
    
    return (
        <Contxt.Provider value={{ reload, setReload , list, setList }}>
            {children}
        </Contxt.Provider>
    )
}

export const useData = () => {
    return useContext(Contxt);
}