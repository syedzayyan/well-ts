export default function CSVBuilder(matrix: any[][], title: string) {
    let editMatrix = matrix
    editMatrix.map((row, i) => {
        row.map((value, j) => {
            editMatrix[i][j] = value.text
            return 0
        })
        return 0
    })
    if (title === ""){
        title = "Untitled"
    }
    var csv = 'Name,' + title + '\n';
    matrix.forEach(function (row) {
        csv += row.join(',');
        csv += "\n";
    });
    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = title + '.csv';
    hiddenElement.click();
}