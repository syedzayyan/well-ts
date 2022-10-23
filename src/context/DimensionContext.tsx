import React, { useState, createContext } from "react";


type SetValue = (value: number) => void;

export interface dimType {
    row: number;
    setRow?: SetValue
    col: number;
    setCol?: SetValue
};

const defaultDim = {
    row: 8,
    col: 12
}

export const dimCtx = createContext<dimType>(defaultDim)

type Props = {
    children: React.ReactNode
}
const DimProvider = (props: Props) => {
    const [row, setRow] = useState(8);
    const [col, setCol] = useState(12);

    return (
        <dimCtx.Provider value={{ row, setRow, col, setCol }}>{props.children}</dimCtx.Provider>
    )
};

export default DimProvider;
