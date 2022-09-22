import React from 'react'
import {RangeDirective, RangesDirective, SheetDirective, SheetsDirective, 
  SpreadsheetComponent, RowsDirective, RowDirective, CellsDirective, CellDirective,
  ColumnsDirective, ColumnDirective, getCellIndexes, getColumnHeaderText, getCell} from '@syncfusion/ej2-react-spreadsheet'
import service from "./data.js"
import './App.css'

function App() {
  let ssObj: SpreadsheetComponent
  const calculateMultiple=(cellAddr1: string)=>{
    return (Number(cellAddr1))*100
  }
  // let sheet = ssObj.getActiveSheet()
  // let cell = getCellIndexes(sheet.activeCell)
  let predicates = [{
    field: 'A',
    operator: 'greaterthan',
    value: '0', 
    matchCase: false
  }]
  const onCreated=()=>{
    ssObj.numberFormat("0.00", "M2:M11")
    ssObj.addCustomFunction(calculateMultiple, "MULTIPLE")
    ssObj.updateCell({value:"MULTIPLE:"}, "L14")
    ssObj.updateCell({formula:"=MULTIPLE(M12)"}, "M14")
    ssObj.applyFilter(predicates, 'A1:F1')
  }

  const employees = service.getEmployees()
  const cellStyle = {
    fontSize: "12pt",
    fontWeight: "bold",
    textAlign: "center",
    verticalAlign: "middle"
  }
  return (
    <div className='control-pane'>
      <div className='control-section spreadsheet-control'>
      <SpreadsheetComponent allowOpen={true} showRibbon={true} showFormulaBar={true}
        ref={((s:SpreadsheetComponent)=>ssObj=s)} height={500} created={onCreated}
        openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
        allowSave={true}
        saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save">
        <SheetsDirective>
          <SheetDirective>
            <RangesDirective>
              <RangeDirective dataSource={employees} showFieldAsHeader={true} ></RangeDirective>
            </RangesDirective>
            <RowsDirective>
            <RowDirective height={40} ></RowDirective>
            <RowDirective index={11}>
                <CellsDirective>
                    <CellDirective index={11} style={cellStyle} value='SUM:'></CellDirective>
                    <CellDirective index={12} formula='=SUM(M2:M11)' format='0.00'></CellDirective>
                </CellsDirective>
            </RowDirective>
            <RowDirective index={12}>
                <CellsDirective>
                    <CellDirective index={11} style={cellStyle} value='COUNT:'></CellDirective>
                    <CellDirective index={12} formula='=COUNT(M2:M11)' format='0.00'></CellDirective>
                </CellsDirective>
            </RowDirective>
            </RowsDirective>
            <ColumnsDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={120}></ColumnDirective>
                <ColumnDirective width={150}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
    </div>
  );
}

export default App