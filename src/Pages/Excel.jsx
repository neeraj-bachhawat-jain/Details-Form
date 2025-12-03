import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { saveAs } from 'file-saver';

export default function Excel({ data = [], setData }) {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('/');
  }
  const handleExportToPdf = () =>{
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "A4"
    });
    doc.setFontSize(18);
    autoTable(doc, { html: "#detail-table"});
    doc.save("detail.pdf");
  }
  const handleExportToExcel = () =>{
    const table = document.getElementById('detail-table');
    const workbook = XLSX.utils.table_to_book(table);
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], { type: "application/octet-stream"});
    saveAs(file, "details.xlsx");
  }
  const handleDelete = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Data Details</h1>
          <div className='gap-4 flex'>
            <button 
            className='px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200'
            onClick={handleExportToPdf}
          >
            Export to PDF
          </button>
          <button 
            className='px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200'
            onClick={handleExportToExcel}
          >
            Export to Excel
          </button>
          <button
            className='px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200'
            onClick={handleAdd}
          >
            + Add New Data
          </button>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" id='detail-table'>
              <thead>
                <tr className="bg-linear-to-r from-blue-600 to-indigo-600 text-white">
                  <th className="px-8 py-4 text-left font-semibold">SNo.</th>
                  <th className="px-8 py-4 text-left font-semibold">Name</th>
                  <th className="px-8 py-4 text-left font-semibold">Email</th>
                  <th className="px-8 py-4 text-left font-semibold">Phone</th>
                  <th className="px-8 py-4 text-left font-semibold">Skills</th>
                  <th className="px-8 py-4 text-left font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-150 group">
                      <td className="px-8 py-4 text-gray-700 font-medium">{index + 1}</td>
                      <td className="px-8 py-4 font-semibold text-gray-800">{item.firstName} {item.lastName}</td>
                      <td className="px-8 py-4">{item.email}</td>
                      <td className="px-8 py-4">{item.mobile}</td>
                      <td className="px-8 py-4 w-96">
                        <div className='flex flex-wrap gap-2'>
                          {item.skills.map((item, index)=>(<span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{item}</span>))
                          }</div>
                      </td>
                      <td className="px-8 py-4">
                        <button onClick={() => handleDelete(index)} className="text-red-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer duration-150">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-8 py-12 text-center text-gray-500 text-lg">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
