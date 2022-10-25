//import { useState } from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { dimCtx } from "../context/DimensionContext";
import CSVBuilder from "../libs/csv_builder";
import jsonDownloader from "../libs/json_downloader";
import MatrixCalc from "../libs/matrix";
import Screenshot from "./Screenshot";

export interface Props {
    curr_color: string
}

export default function Wells({ curr_color }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [title, setTitle] = useState("Untitled")

    const { row, col } = useContext(dimCtx)
    let [matrixDim, setMatrixDim] = useState(MatrixCalc(row, col))

    useEffect(() => {
        setMatrixDim(MatrixCalc(row, col))
    }, [row, col])

    const upDateCellColor = (id: number) => {
        // https://dev.to/shareef/how-to-work-with-arrays-in-reactjs-usestate-4cmi#array-in-array-2
        setMatrixDim((data) =>
            data.map((row) =>
                row.map((cell) =>
                    cell.id === id ? ({ ...cell, color: curr_color }) : ({ ...cell })
                )
            ));
    }
    const upDateCellText = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        setMatrixDim((data) =>
            data.map((row) =>
                row.map((cell) =>
                    cell.id === id ? ({ ...cell, text: event.target.value }) : ({ ...cell })
                )
            ));
        console.log(matrixDim)
    }

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    return (
        <main>
            <div ref={ref}>
                <Screenshot title_string={title} refProp={ref} />&nbsp;
                <button className="btn" onClick={() => CSVBuilder(matrixDim, title)}>Download to CSV</button>&nbsp;
                <button className="btn" onClick={() => jsonDownloader(matrixDim, title)}>Download to JSON</button>
                <br />
                <input id="title-input" value={title} onChange={handleTitleChange}></input>
                <div id = "table-wrapper">
                    <table>
                        <tbody>
                            {matrixDim.map((row, i) => <tr key={row[i].id * Math.PI}>
                                {row.map((cells) =>
                                    <td key={cells.id}>
                                        {cells.cssClass === "well-cells" ? (
                                            <div
                                                style={{ backgroundColor: cells.color }}
                                                onClick={() => upDateCellColor(cells.id)}
                                                className={cells.cssClass}
                                            >
                                                <input type="string" className="well-input" defaultValue={cells.text} onChange={(e) => upDateCellText(cells.id, e)}></input>
                                            </div>
                                        ) : (
                                            <div className={cells.cssClass}>{cells.text}</div>
                                        )}
                                    </td>)}
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
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
                .well-input{
                    background: none;
                    border: none;
                    width:100%;
                    text-align:center;
                }
                #title-input{
                    all: unset;
                    font-size: 1.5rem;
                    margin-top:12px;
                    width:100%;
                }
                #table-wrapper{
                    max-width:900px;
                    max-height:700px;
                    overflow:scroll;
                }
            `}</style>
        </main>
    )
}