import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIncome } from "../../store/incomeSlice";
import { setTimeOfIncome } from "../../store/timeOfIncomeSlice";
import { setTypeOfIncome } from "../../store/typeOfIncomeSlice";
import { useEffect } from "react";

function Income() {
  const incomeValue = useSelector((state) => state.incomeValue.income);
  const typeOfIncome = useSelector(
    (state) => state.typeOfIncomeValue.typeOfIncome
  );
  const timeOfIncome = useSelector(
    (state) => state.timeOfIncomeValue.timeOfIncome
  );
  const dispatch = useDispatch();

  let history = useNavigate();

  useEffect(() => {
    if (incomeValue !== 0) {
      const inputIncome = (document.getElementById("incomeInput").value =
        incomeValue);
    }

    if (timeOfIncome) {
      const selectedTime = (document.getElementById("incomeTime").value =
        timeOfIncome);
    }

    if (typeOfIncome) {
      if (typeOfIncome == "gross") {
        const typeGross = document
          .getElementById("gross")
          .setAttribute("checked", "checked");
      } else {
        const typeNet = document
          .getElementById("net")
          .setAttribute("checked", "checked");
      }
    }
  }, []);

  const checkIncome = (e) => {
    e.target.value = e.target.value.replace(/[^\d0-9]/g);
  };

  const calculate = () => {
    if (incomeValue > 0 && typeOfIncome && timeOfIncome) {
      history("/income_details");
    } else {
      alert(
        "You must fill in all fields, and the amount must be greater than 0."
      );
    }
  };

  return (
    <div className="w-[50vw] h-[50vh]  flex items-center">
      <form className="h-full w-full p-3 flex flex-col justify-center items-center gap-16">
        <article className="w-[50%] h-[20%] flex flex-col items-center justify-center">
          <label htmlFor="incomeInput">Enter your income</label>
          <br />
          <div className="flex">
            <span className="h-full font-bold inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              $
            </span>
            <input
              type="number"
              name="incomeInput"
              id="incomeInput"
              min="1"
              className="h-7 px-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 10000"
              onInput={(e) => checkIncome(e)}
              onChange={(e) => dispatch(setIncome(Number(e.target.value)))}
            />
            <select
              name="incomeTime"
              id="incomeTime"
              className="h-full text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => dispatch(setTimeOfIncome(e.target.value))}
            >
              <option value="Weekly">Weekly</option>
              <option value="Fortnightly">Fortnightly</option>
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </div>
        </article>
        <article className="w-[50%] h-[20%] flex flex-col justify-evenly items-center">
          <legend className="text-center">Please choose the income type</legend>
          <div className="w-full flex items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <input
                id="net"
                className="peer/net mx-2"
                type="radio"
                name="status"
                value="net"
                onChange={(e) => dispatch(setTypeOfIncome(e.target.value))}
              />
              <label htmlFor="net" className="peer-checked/net:text-sky-500">
                Net income
              </label>
            </div>
            <div className="w-full flex items-center justify-center">
              <input
                id="gross"
                className="peer/gross mx-2"
                type="radio"
                name="status"
                value="gross"
                onChange={(e) => dispatch(setTypeOfIncome(e.target.value))}
              />
              <label
                htmlFor="gross"
                className="peer-checked/gross:text-sky-500"
              >
                Gross income
              </label>
            </div>
          </div>
        </article>
        <article className="w-[50%] h-10 flex justify-center">
          <button
            type="button"
            id="calculateBtn"
            onClick={calculate}
            className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md text-center"
          >
            Calculate
          </button>
        </article>
      </form>
    </div>
  );
}

export default Income;
