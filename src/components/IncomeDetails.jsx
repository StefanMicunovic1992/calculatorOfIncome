import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { analysing_and_send_data_to_calculate } from "../allFunction/calculateFnc/calculator";

function IncomeDetails() {
  const incomeValue = useSelector((state) => state.incomeValue.income);
  const typeOfIncome = useSelector((state) => state.typeOfIncomeValue.typeOfIncome);
  const timeOfIncome = useSelector((state) => state.timeOfIncomeValue.timeOfIncome);
  
  const [result, setResult] = useState();
  
  useEffect(() => {
    if (incomeValue && typeOfIncome && timeOfIncome) {
      const result = analysing_and_send_data_to_calculate(incomeValue, typeOfIncome, timeOfIncome);
      setResult(result);
      document.getElementById('divForMessage').classList.add('hidden')
    }else{
      document.getElementById('tableForData').classList.add('hidden')
    }
  }, []);

  return (
    <div className="w-[100vw] h-[95vh] flex flex-col justify-around items-center lg:w-[50vw] lg:h-[55vh] ">
      <table className="w-[95vw] border text-center lg:w-[90%] lg:h-[50%]" id="tableForData">
        <thead className="border-t border-slate-900">
          <tr className="border-b border-slate-900 border">
            <th className="text-sm p-2 font-medium text-gray-900 border-r border-slate-900">
              Frequency
            </th>
            <th className="text-sm p-2 font-medium text-gray-900 border-r border-slate-900">
              Gross income
            </th>
            <th className="text-sm p-2 font-medium text-gray-900 border-r border-slate-900">
              Tax (20%)
            </th>
            <th className="text-sm p-2 font-medium text-gray-900 border-r border-slate-900">
              Net income
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-900 hover:bg-[#A4BE7B]" id="Weekly">
            <td className="text-sm p-2 font-medium text-gray-900 border-r border-l border-slate-900">
              Weekly
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[0].grossIncome}
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[0].tax}
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[0].net}
            </td>
          </tr>
          <tr className="border-b border-slate-900 hover:bg-[#A4BE7B]" id="Fortnightly">
            <td className="text-sm p-2 font-medium text-gray-900 border-r border-l border-slate-900">
              Fortinightly
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[1].grossIncome}
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[1].tax}
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[1].net}
            </td>
          </tr>
          <tr className="border-b border-slate-900 hover:bg-[#A4BE7B]" id="Monthly">
            <td className="text-sm p-2 font-medium text-gray-900 border-r border-l border-slate-900">
              Monthly
            </td>
            <td className="text-sm p-2 text-gray-900 font-light text-center border-r border-slate-900">
              {result?.[2].grossIncome}
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[2].tax}
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[2].net}
            </td>
          </tr>
          <tr className="border-b border-slate-900 hover:bg-[#A4BE7B]" id="Annually">
            <td className="text-sm p-2 font-medium text-gray-900 border-r border-l border-slate-900">
              Annualy
            </td>
            <td className="text-sm p-2 text-gray-900 font-light text-center border-r border-slate-900">
              {result?.[3].grossIncome}
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[3].tax}
            </td>
            <td className="text-sm p-2 text-gray-900 font-light border-r border-slate-900">
              {result?.[3].net}
            </td>
          </tr>
        </tbody>
      </table>
      <div id="divForMessage">
        <p className="text-center px-5 text-red-600 font-bold">You must fill in all the fields on the INCOME page to get the results</p>
      </div>
    </div>
  );
}

export default IncomeDetails;
