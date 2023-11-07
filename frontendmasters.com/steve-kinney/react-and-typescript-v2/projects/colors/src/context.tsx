import { createContext, useReducer } from "react";
import { AdjustColorActions, colorReducer, initialState } from "./color-reducer";

type ColorContextState = {
    hexColor: string;
    dispatch: React.Dispatch<AdjustColorActions>
}

export const ColorContext = createContext<ColorContextState>(initialState as ColorContextState);

export const ColorProvider = ({ children }: React.PropsWithChildren) => {
    const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

    return (
        <ColorContext.Provider value={{
            hexColor: hexColor,
            dispatch: dispatch
        }}>
            {children}
        </ColorContext.Provider>
    )
}