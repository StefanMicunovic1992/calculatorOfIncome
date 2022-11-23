const FORTNIGHTLY_WEEKS_NUM = 2;
const MONTHLY_WEEKS_NUM = 4.33; 
const ANNUALLY_WEEKS_NUM = 52;

const calculateIncome = (income,type) =>{
    
    switch(type){

        case 'net': {
            
            const weeklyIncomeNet = Math.fround(income);
            const fortnightlyIncomeNet = Math.fround(income*FORTNIGHTLY_WEEKS_NUM);
            const monthlyIncomeNet = Math.fround(income*MONTHLY_WEEKS_NUM);
            const annuallyIncomeNet = Math.fround(income*ANNUALLY_WEEKS_NUM);

            const calculateGrossInCaseNet = (income) => {
                return ((income/8)*10).toFixed(2)
            }

            const calculateTaxInCaseNet = (income) => {
                return ((income/8*10) - income).toFixed(2)
            }

            return [
                {
                    time:'Weekly',
                    grossIncome: calculateGrossInCaseNet(weeklyIncomeNet),
                    tax: calculateTaxInCaseNet(weeklyIncomeNet),
                    net: weeklyIncomeNet.toFixed(2)
                },
                {
                    time:'Fortnightly',
                    grossIncome: calculateGrossInCaseNet(fortnightlyIncomeNet),
                    tax: calculateTaxInCaseNet(fortnightlyIncomeNet),
                    net: fortnightlyIncomeNet.toFixed(2)
                },
                {
                    time:'Monthly',
                    grossIncome: calculateGrossInCaseNet(monthlyIncomeNet),
                    tax: calculateTaxInCaseNet(monthlyIncomeNet),
                    net: monthlyIncomeNet.toFixed(2)
                },
                {
                    time:'Annually',
                    grossIncome: calculateGrossInCaseNet(annuallyIncomeNet),
                    tax: calculateTaxInCaseNet(annuallyIncomeNet),
                    net: annuallyIncomeNet.toFixed(2)
                }
            ]
        }
        case 'gross':{
            
            const weeklyIncomeGross = Math.fround(income);
            const fortnightlyIncomeGross = Math.fround(income*FORTNIGHTLY_WEEKS_NUM);
            const monthlyIncomeGross = Math.fround(income*MONTHLY_WEEKS_NUM);
            const annuallyIncomGross = Math.fround(income*ANNUALLY_WEEKS_NUM);

            const calculateNetInCaseGross = (income) => {
                return (income*0.8).toFixed(2)
            }

            const calculateTaxInCaseGross = (income) => {
                return (income*0.2).toFixed(2)
            }

            return [
                {
                    time:'Weekly',
                    grossIncome: weeklyIncomeGross.toFixed(2),
                    tax: calculateTaxInCaseGross(weeklyIncomeGross),
                    net: calculateNetInCaseGross(weeklyIncomeGross)
                },
                {
                    time:'Fortnightly',
                    grossIncome: fortnightlyIncomeGross.toFixed(2),
                    tax: calculateTaxInCaseGross(fortnightlyIncomeGross),
                    net: calculateNetInCaseGross(fortnightlyIncomeGross)
                },
                {
                    time:'Monthly',
                    grossIncome: monthlyIncomeGross.toFixed(2),
                    tax: calculateTaxInCaseGross(monthlyIncomeGross),
                    net: calculateNetInCaseGross(monthlyIncomeGross)
                },
                {
                    time:'Annually',
                    grossIncome: annuallyIncomGross.toFixed(2),
                    tax: calculateTaxInCaseGross(annuallyIncomGross),
                    net: calculateNetInCaseGross(annuallyIncomGross)
                }
            ]
        }
    }  
}

export const analysing_and_send_data_to_calculate = (income, type, time) => {

    switch (time) {
        case 'Weekly':{
            return calculateIncome(income, type)
        }
        case 'Fortnightly':{
            const newIncome = Math.fround(income/FORTNIGHTLY_WEEKS_NUM)
            return calculateIncome(newIncome, type)
        }
        case 'Monthly':{
            const newIncome = Math.fround(income/MONTHLY_WEEKS_NUM)
            return calculateIncome(newIncome, type)
        }
        case 'Annually':{
            const newIncome = Math.fround(income/ANNUALLY_WEEKS_NUM)
            return calculateIncome(newIncome, type)
        }
    }
}