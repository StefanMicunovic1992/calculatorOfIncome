
const calculateIncome= (income,type) =>{
    console.log(income);

    if(type=='net'){

        const weeklyIncomeNet = Math.fround(income);
        const fortnightlyIncomeNet = Math.fround(income*2);
        const monthlyIncomeNet = Math.fround(income*4.5);
        const annuallyIncomeNet = Math.fround(income*52);

        
        const result = [
            {
                time:'weekly',
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
    }else{

        const weeklyIncomeGross = parseFloat(income);
        const fortnightlyIncomeGross = parseFloat(income*2);
        const monthlyIncomeGross = parseFloat(income*4.5);
        const annuallyIncomGross = parseFloat(income*52);

        const result = [
            {
                time:'weekly',
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






export const calculate = (income, type, time) => {

   
    if (time == 'Weekly') {
        
        const result = calculateIncome(income,type)
        return result
    }else if(time == 'Fortnightly'){
        
        let newIncome = Math.fround(income/2)
        console.log(newIncome)
        const result = calculateIncome(newIncome,type)
        return result
    }else if(time == 'Monthly'){
        
        let newIncome = Math.fround(income/4.5) 
        console.log(newIncome)
        const result = calculateIncome(newIncome,type)
        return result
    }else if(time == 'Annually'){
        
        let newIncome = Math.fround(income/52) 
        console.log(newIncome)
        const result = calculateIncome(newIncome,type)
        return result
    }
}


