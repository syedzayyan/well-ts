export default function MatrixCalc(rows: number, columns: number) {
    type WellCell = {
        color?: string, 
        text: string, 
        cssClass: string,
        id : number
    }
    let rows_mut = rows + 1
    let columns_mut = columns + 1
    let tableBody:WellCell[][] = []
    for (let i = 0; i < rows_mut; i++) {
        tableBody[i] = [];
        for (var j = 0; j < columns_mut; j++) {
            if (i === 0) {
                if (j === 0) {
                    tableBody[i][j] = { text: '', cssClass: 'column_heading', id : Math.random() };
                    continue
                }
                tableBody[i][j] = { text: String(j), cssClass: 'column_heading', id : Math.random() };
            } else if (i > 0) {
                if (j === 0) {
                    tableBody[i][j] = { text: String.fromCharCode(64 + i), cssClass: 'row_start', id : Math.random() };
                    continue
                }
                tableBody[i][j] = { color: 'white', text: '', cssClass: 'well-cells', id : Math.random() }
            }
        }
    }
    return tableBody
}