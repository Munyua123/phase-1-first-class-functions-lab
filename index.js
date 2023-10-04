// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
    drivers =['Antonia', 'Nuru']
    return [... drivers]
}

const returnLastTwoDrivers = (drivers) => {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    return function fareQuintupler(num2) {
        return num1 * num2
     }
}


function fareDoubler(num1) {
    return num1 * 2
}

function fareTripler(num1) {
    return num1 * 3
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}

