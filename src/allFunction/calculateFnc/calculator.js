const fortnightly_weeks_num = 2;
const monthly_weeks_num = 4.5;
const annually_weeks_num = 52;

const calculateIncome= (income,type) =>{
    
    switch(type){
        case 'net':{

            const weeklyIncomeNet = Math.fround(income);
            const fortnightlyIncomeNet = Math.fround(income*fortnightly_weeks_num);
            const monthlyIncomeNet = Math.fround(income*monthly_weeks_num);
            const annuallyIncomeNet = Math.fround(income*annually_weeks_num);

            const result = [
                {
                    time:'Weekly',
                    grossIncome: (weeklyIncomeNet+((weeklyIncomeNet/8)*2)).toFixed(2),
                    tax: (weeklyIncomeNet+((weeklyIncomeNet/8)*2) - weeklyIncomeNet).toFixed(2),
                    net: weeklyIncomeNet.toFixed(2)
                },
                {
                    time:'Fortnightly',
                    grossIncome: (fortnightlyIncomeNet+((fortnightlyIncomeNet/8)*2)).toFixed(2),
                    tax: (fortnightlyIncomeNet+((fortnightlyIncomeNet/8)*2) - fortnightlyIncomeNet).toFixed(2),
                    net: fortnightlyIncomeNet.toFixed(2)
                },
                {
                    time:'Monthly',
                    grossIncome: (monthlyIncomeNet+((monthlyIncomeNet/8)*2)).toFixed(2),
                    tax: (monthlyIncomeNet+((monthlyIncomeNet/8)*2) - monthlyIncomeNet).toFixed(2),
                    net: monthlyIncomeNet.toFixed(2)
                },
                {
                    time:'Annually',
                    grossIncome: (annuallyIncomeNet+((annuallyIncomeNet/8)*2)).toFixed(2),
                    tax: (annuallyIncomeNet+((annuallyIncomeNet/8)*2) - annuallyIncomeNet).toFixed(2),
                    net: annuallyIncomeNet.toFixed(2)
                }
            ]
            return result;
        }
        case 'gross':{

            const weeklyIncomeGross = Math.fround(income);
            const fortnightlyIncomeGross = Math.fround(income*fortnightly_weeks_num);
            const monthlyIncomeGross = Math.fround(income*monthly_weeks_num);
            const annuallyIncomGross = Math.fround(income*annually_weeks_num);

            const result = [
                {
                    time:'Weekly',
                    grossIncome: weeklyIncomeGross.toFixed(2),
                    tax: (weeklyIncomeGross*0.2).toFixed(2),
                    net: (weeklyIncomeGross*0.8).toFixed(2)
                },
                {
                    time:'Fortnightly',
                    grossIncome: fortnightlyIncomeGross.toFixed(2),
                    tax: (fortnightlyIncomeGross*0.2).toFixed(2),
                    net: (fortnightlyIncomeGross*0.8).toFixed(2)
                },
                {
                    time:'Monthly',
                    grossIncome: monthlyIncomeGross.toFixed(2),
                    tax: (monthlyIncomeGross*0.2).toFixed(2),
                    net: (monthlyIncomeGross*0.8).toFixed(2)
                },
                {
                    time:'Annually',
                    grossIncome: annuallyIncomGross.toFixed(2),
                    tax: (annuallyIncomGross*0.2).toFixed(2),
                    net: (annuallyIncomGross*0.8).toFixed(2)
                }
            ]
            return result;
        }
    }  
}

export const analysing_and_send_data_to_calculate = (income, type, time) => {

    switch (time) {
        case 'Weekly':{
            const result = calculateIncome(income,type)
            return result
        }
        case 'Fortnightly':{
            const newIncome = Math.fround(income/fortnightly_weeks_num)
            const result = calculateIncome(newIncome,type)
            return result
        }
        case 'Monthly':{
            const newIncome = Math.fround(income/monthly_weeks_num)
            const result = calculateIncome(newIncome,type)
            return result
        }
        case 'Annually':{
            const newIncome = Math.fround(income/annually_weeks_num)
            const result = calculateIncome(newIncome,type)
            return result
        }
    }
}