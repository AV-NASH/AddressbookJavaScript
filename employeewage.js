const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

//Refactored for UC 10
let empObjArray = new Array();
console.log("UC 10");

while((totalEmpHrs<=MAX_HRS_IN_MONTH) && 
        (totalWorkingDays<NUM_OF_WORKING_DAYS)){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs + empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays,empHrs);

    empObjArray.push(
        {
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString() {
            return "Day=" + this.dayNum + " : Working Hours="+this.dailyHours
                +" : Wage earned=" +this.dailyWage+"\n"
        },
    });
}
console.log("Printing All Objects:");
console.log(empObjArray);
console.log("---------------------------------------------------");

console.log("Daily Wage Array: "+empDailyWageArray);
console.log("Daily Wage Map:");
console.log(empDailyWageMap);
console.log("---------------------------------------------------");

//Object Helper Function
//UC 7A
console.log("UC 7A");
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage = totEmpWage + dailyWage;
}

empDailyWageArray.forEach(sum);
console.log("Total hrs: "+totalEmpHrs);
console.log("Total Emp Wage: "+totEmpWage);
console.log("Total Days: "+totalWorkingDays);

function totalWages(totalWageobj,dailywageobj){
  

    return totalWageobj.dailyWage + dailywageobj.dailyWage;
}

console.log("Emp Wage with reduce: "+empObjArray.reduce(totalWages));
console.log("---------------------------------------------------");

//UC 7B
console.log("UC 7B");
let dailyCntr =0;
function mapDayWithWage(dailyWageobj){

    return dailyWageobj.dayNum +" = " + dailyWageobj.dailyWage;
}

let mapDayWithWageArr = empObjArray.map(mapDayWithWage);
console.log("Daily Wage Map:");
console.log(mapDayWithWageArr);
console.log("---------------------------------------------------");

//UC 7C
console.log("UC 7C");
function fullTimeWage(dailyWageobj){
    return dailyWageobj.dailyWage.includes("160");
}
let fullDayWageArr = empObjArray.filter(fullTimeWage);
console.log("Days With Full Time Wage Earned Using Filter:");
console.log(fullDayWageArr);
console.log("---------------------------------------------------");

//UC 7D
console.log("UC 7D");
function findFullTimeWage(dailyWageobj){
    return dailyWageobj.dailyWage.includes("160");
}
console.log("First time Full Time Wage earned on day: "+
    empObjArray.find(findFullTimeWage));
console.log("---------------------------------------------------");

//UC 7E
console.log("UC 7E");
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Check all Element have Full Time Wage: "+
    empObjArray.every(findFullTimeWage));
console.log("---------------------------------------------------");

//UC 7F
console.log("UC 7F");
function isAnyPartTimeWage(dailyWageobj){
    return dailyWageobj.dailyWage.includes("80");
}

console.log("Check if any have Part Time Wage: "+
    empObjArray.some(isAnyPartTimeWage));
console.log("---------------------------------------------------");

//UC 7G
console.log("UC 7G");
function totalDaysWorked(noOfDays,dailyWageobj){
    if(dailyWageobj.dailyWage>0) return noOfDays+1;
    return noOfDays;
}
console.log("Number of Days Emp Worked: "+
    empObjArray.reduce(totalDaysWorked,0));
console.log("---------------------------------------------------");

//UC 9
console.log("UC 9");

const findTotal=(TotalVal, dailyVal) => {return TotalVal+dailyVal};
let count=0;
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage>0)
    .reduce(findTotal,0);
console.log("Total Wage Comp Using Arrow Func: "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value,key,map)=>{
    if(value==8) fullWorkingDays.push(key);
    else if(value==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days: "+fullWorkingDays);
console.log("Part working days: "+partWorkingDays);
console.log("Non working days: "+nonWorkingDays);
console.log("---------------------------------------------------");

