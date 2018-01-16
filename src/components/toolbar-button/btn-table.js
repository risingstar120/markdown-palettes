export default {
    name: 'table',
    icon: 'fa-table',
    title: '插入表格',
    action: {
        request: {
            title: '插入表格',
            body: [
                {
                    name: 'row',
                    title: '行数',
                    default: '3'
                },
                {
                    name: 'col',
                    title: '列数',
                    default: '2'
                }
            ],
            callback (data) {
                let rowString = '';
                for(let i = 0; i < data.col; i++) {
                    rowString += '|  '
                }
                rowString += '|'

                let divString = ''
                for(let i = 0; i < data.col; i++) {
                    divString += '| ------------ '
                }

                divString += '|'

                let outputString = rowString + '\n' + divString + '\n'

                for(let i = 0; i < data.row - 1; i++) {
                    outputString += rowString + '\n'
                }

                return outputString
            }
        }
    }
}
