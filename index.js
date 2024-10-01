// Code your solution in this file!

// function to return the first two objects 
const returnFirstTwoDrivers = function (allDrivers) {
    return allDrivers.slice(0, 2);
};
const allDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(allDrivers);
// function to return last two objects
const returnLastTwoDrivers = function (allDrivers) {
    return allDrivers.slice(2);
};

const lastTwoDrivers = returnLastTwoDrivers(allDrivers);
// An array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// function to return a function to multiply fare accordingly
function createFareMultiplier(multiplierFare) {
    return function(fare) {
        return multiplierFare * fare;
    }
}
// function to double fare 
const fareDoubler = createFareMultiplier(2);
// function to triple fare
const fareTripler = createFareMultiplier(3);
// function to return either the first two drivers or last two drivers
function selectDifferentDrivers(drivers, selectFunctions) {
    return selectFunctions(drivers);
}
























































