import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { calculate } from "../calculateFnc/calculate";
import { useNavigate } from "react-router-dom";




function IncomeDetails() {
  const incomeValue = useSelector((state) => state.incomeValue.income);
  const typeOfIncome = useSelector((state) => state.typeOfIncomeValue.typeOfIncome);
  const timeOfIncome = useSelector((state) => state.timeOfIncomeValue.timeOfIncome);
  
  const [result,setResult] = useState()
  
  let history = useNavigate();

useEffect(()=>{



  if(incomeValue && typeOfIncome && timeOfIncome){
    const result = calculate(incomeValue,typeOfIncome,timeOfIncome)
    
    setResult(result)

    document.getElementById(timeOfIncome).classList.add('bg-slate-400')
  }
},[])

  return (
    
    <div className="w-[50vw] h-[50vh] rounded-lg flex justify-center items-center px-6">
              <table className="border text-center w-full">
                <thead className="border-t border-slate-900">
                  <tr className="border-b border-slate-900">
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-l border-slate-900">Frequency</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-slate-900">Gross income</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-slate-900">Tax (20%)</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-slate-900">Net income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-900" id="Weekly">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-l border-slate-900">Weekly</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[0].grossIncome}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[0].tax}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[0].net}</td>
                  </tr>
                  <tr className="border-b border-slate-900" id="Fortnightly">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-l border-slate-900">Fortinightly</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[1].grossIncome}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[1].tax}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[1].net}</td>
                  </tr>
                  <tr className="border-b border-slate-900" id="Monthly">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-l border-slate-900">Monthly</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 text-center border-r border-slate-900">{result?.[2].grossIncome}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[2].tax}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[2].net}</td>
                  </tr>
                  <tr className="border-b border-slate-900" id="Annually">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-l border-slate-900">Annualy</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 text-center border-r border-slate-900">{result?.[3].grossIncome}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[3].tax}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-slate-900">{result?.[3].net}</td>
                  </tr>
                </tbody>
              </table>
            </div>
  );
}

export default IncomeDetails;
