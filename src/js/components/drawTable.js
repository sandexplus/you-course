import Inputmask from "inputmask";

export default function drawTable(tableData, row = 7, coll = 6) {
    if (!tableData) {
        return;
    }
    const table = document.createElement('div');
    table.classList = 'table';

    for (let i = 0; i < coll; i++) {
        const tableColl = document.createElement('div');
        tableColl.classList.add('table__coll');
        // console.log(tableData[i], i)
        if (tableData[i]) {
            for (let [j, cell] of tableData[i].entries()) {
                const tableRow = document.createElement('div');
                tableRow.classList.add('table__row');
                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.classList.add('table__input');
                input.value = cell;
                input.disabled = true;
                new Inputmask('9[9][9]см').mask(input);
                // input.dataset.inputmask='9[9][9]см'
                if (j === 0) {
                    new Inputmask('99.99.9999').mask(input);
                    // input.dataset.inputmask='99.99.9999'
                }
                tableRow.append(input);
                tableColl.append(tableRow); 
            }
            
        } 
        else {
            if (tableData.length === i) {
                for (let j = 0; j < row; j++) {
                    const tableRow = document.createElement('div');
                    tableRow.classList.add('table__row');
                    const input = document.createElement('input');
                    input.setAttribute('type', 'text');
                    input.classList.add('table__input');
                    new Inputmask('9[9][9]см').mask(input);
                    console.log(1)
                    input.disabled = false;
                    if (j === 0) {
                        new Inputmask('99.99.9999').mask(input);
                    }
                    tableRow.append(input);
                    tableColl.append(tableRow);
                }  
                 
            } else {
                
                for (let j = 0; j < row; j++) {
                    const tableRow = document.createElement('div');
                    tableRow.classList.add('table__row');
                    const input = document.createElement('input');
                    input.setAttribute('type', 'text');
                    input.classList.add('table__input');
                    input.disabled = true;
                    new Inputmask('9[9][9]см').mask(input);
                    if (j === 0) {
                        new Inputmask('99.99.9999').mask(input);
                    }
                    tableRow.append(input);
                    tableColl.append(tableRow); 
                }  
                
            }
        }
        table.append(tableColl)
    }

    return table;
}