import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function IncomeDetails() {
  const incomeValue = useSelector((state) => state.incomeValue.income);
  const typeOfIncome = useSelector((state) => state.typeOfIncomeValue.typeOfIncome);
  const timeOfIncome = useSelector((state) => state.timeOfIncomeValue.timeOfIncome);
  const dataOfIncome = useSelector((state) => state.dataFromCalculateFncValue.dataFromCalculateFnc);
  
  const [result, setResult] = useState();
  const [valueForSelectedTag, setValueForSelectedTag] = useState();

  useEffect(() => {
    if (incomeValue && typeOfIncome && timeOfIncome) {
      setResult(dataOfIncome);
      setValueForSelectedType(timeOfIncome, undefined)
      document.getElementById('divForMessage').classList.add('hidden')
    }else{
      document.getElementById('tableForData').classList.add('hidden')
      document.getElementById('divForOnlyNetIncome').classList.add('hidden')
    }
  }, []);

  const setValueForSelectedType = (typeFromRedux, e) => {
    if(typeFromRedux){
      const incomeTime = document.getElementById('incomeTime').value = typeFromRedux;
      const resultFilter = dataOfIncome.filter((element) => element.time == typeFromRedux);
      setValueForSelectedTag(resultFilter[0].net)
    }else if(e){
      const resultFilter = dataOfIncome.filter((element) => element.time == e.target.value);
      setValueForSelectedTag(resultFilter[0].net)
    }
    
  }

  return (
    <div className="w-[100vw] h-[95vh] flex flex-col justify-evenly items-center lg:w-[50vw] lg:h-[55vh] ">
      <div id="divForOnlyNetIncome">
          <span className="bg-[#9ba17b] px-8 py-3 rounded-md">$ {valueForSelectedTag}</span><span> your net </span><select name="incomeTime" id="incomeTime" className="h-full text-center bg-transparent text-gray-900 text-sm" onChange={(e)=>setValueForSelectedType(undefined, e)}>
              <option value="Weekly">Weekly</option>
              <option value="Fortnightly">Fortnightly</option>
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          <span> income</span>
      </div>
      <table className="w-[95vw] border text-center lg:w-[90%] lg:h-[50%]" id="tableForData">
        <thead className="border-t border-slate-900">
          <tr className="border-b border-slate-900 border">
            <th className="text-sm p-2 font-medium text-gray-900 border-r border-slate-900">
              Frequency
            </th>
            <th className="text-sm p-2 font-medium text-gray-900 border-r border-slate-900">
              Gross income (100%)
            </th>
            <th className="text-sm p-2 font-medium text-gray-900 border-r border-slate-900">
              Tax (20%)
            </th>
            <th className="text-sm p-2 font-medium text-gray-900 border-r border-slate-900">
              Net income (80%)
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
        <p className="text-center px-5 text-red-600 font-bold">You must fill in all the fields on the INCOME page and click on button CALCULATE to get the results.</p>
      </div>
    </div>
  );
}

export default IncomeDetails;
