import React, { useContext } from "react"
import { dimCtx } from "../context/DimensionContext"

export default function DimensionChanger() {
    const { row, setRow } = useContext(dimCtx);
    const { col, setCol } = useContext(dimCtx);

    const rowHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredNum = parseInt(event.target.value);
        if (setRow) {
            setRow(enteredNum);
        }
    };
    const colHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredNum = parseInt(event.target.value);
        if (setCol) {
            setCol(enteredNum);
        }
    };
    const typeRowColChanger = (r: number, c: number) => {
        if (setRow && setCol) {
            setRow(r);
            setCol(c);
        }
    }
    const typeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedVal = parseInt(event.target.value);
        switch (selectedVal) {
            case 384:
                typeRowColChanger(16, 24)
                break
            case 96:
                typeRowColChanger(8, 12)
                break
            case 48:
                typeRowColChanger(6, 8)
                break
            case 24:
                typeRowColChanger(4,6)
                break
            case 12:
                typeRowColChanger(3, 4)
                break
        }
    }
    return (
        <div>
            <label>Row:
                <input name="row" type="number" value={row} onChange={rowHandler} />
            </label>
            <label>Column:
                <input type="number" value={col} onChange={colHandler} />
            </label>
            <label>Well Plates Layouts on the Market:
                <select onChange={typeHandler} defaultValue="96" name="well-plates" id="well-plate-selector">
                    <option value="384">384 Well Plates</option>
                    <option value="96">96 Well Plates</option>
                    <option value="48">48 Well Plates</option>
                    <option value="24">24 Well Plates</option>
                    <option value="12">12 Well Plates</option>
                </select>
            </label>
        </div>
    )
}