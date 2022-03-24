const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function afunction(fare) {
        return fare * int
    }
}

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2;
};

const fareTripler = function (createFareMultiplier) {
    return createFareMultiplier * 3;
};

function selectDifferentDrivers(arrayOfDrivers, pick) {
    console.log(arrayOfDrivers, pick)
    // const arrayOfDrivers = (function(){return [returnFirstTwoDrivers,returnLastTwoDrivers]})
    return pick(arrayOfDrivers)
}
