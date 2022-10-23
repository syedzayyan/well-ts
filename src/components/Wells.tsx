//import { useState } from "react";
import { useContext } from "react";
import { dimCtx } from "../context/DimensionContext";
import MatrixCalc from "../libs/matrix";

export interface Props {
    curr_color : string
}

export default function Wells({ curr_color } : Props) {
    const { row, col } = useContext(dimCtx)

    let matrixDim = MatrixCalc(row, col)

    const upDateCell = (i: number, j: number) => {
        matrixDim[i][j].color = curr_color;
    }

    return (
        <main>
            <table>
                <tbody>
                    {matrixDim.map((row, i) => <tr key={row[i].id * 100}>
                        {row.map((cells, j) =>
                            <td key = {cells.id}>
                                {cells.cssClass === "well-cells" ? (
                                    <div
                                        style={{ backgroundColor : cells.color}}
                                        onClick={() => upDateCell(i, j)}
                                        contentEditable="true"
                                        className={cells.cssClass}
                                    />
                                ) : (
                                    <div className={cells.cssClass}>{cells.text}</div>
                                )}
                            </td>)}
                    </tr>)}
                </tbody>
            </table>
            <style>{`
                .well-cells {
                    height: 60px;
                    width: 60px;
                    line-height: 60px;
                    border: 0.1rem solid black;
                    border-radius: 30px;
                    text-align: center;
                    overflow: hidden;
                }
                .column_heading {
                    text-align: right;
                    width: 35px;
                    height: 30px;
                }
                #table_matrix {
                    border: 1px solid black;
                    padding: 10px;
                    text-align: center;
                    border-radius: 5px;
                    overflow: scroll;
                    resize: both;
                }
            `}</style>
        </main>
    )
}