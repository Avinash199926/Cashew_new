import React, { createContext, useContext, useState } from 'react'

const appCtx = createContext({
    navbarState: Boolean,
    setNavbarState: Function,
    toggle: Function
});
export const UseAppCtx = () => useContext(appCtx);

const AppContext = ({ children }) => {

    const [navbarState, setNavbarState] = useState(false);
    const toggle = () => setNavbarState(p => !p);

    return (
        <appCtx.Provider value={{
            navbarState,
            setNavbarState,
            toggle
        }}>
            {children}
        </appCtx.Provider>
    )
}

export default AppContext