import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
       
        Type:"Business",      
        Name:"Christina",
        CreditScore:"",
        Comapny:"google",
        Designation:"b.e",

    }
    
];

class Download extends React.Component {
    render() {
        return (
            <ExcelFile element={<button>Excel Export</button>}>
                <ExcelSheet data={dataSet1} name="Employees">
                <ExcelColumn label="Type" value="Type"/>
                <ExcelColumn label="Name" value="Name"/>
                    <ExcelColumn label="CreditScore" value="CreditScore"/>
                    <ExcelColumn label="Company"value="Company"/>
                    <ExcelColumn label="Designation"value="Designation"/>
                                                     
                                                     
                </ExcelSheet>
               
            </ExcelFile>
        );
    }
}
export default Download;