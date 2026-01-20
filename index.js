// Step 1: Return the first two drivers
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// Step 2: Return the last two drivers
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// Step 3: Store functions in an array
const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

// Step 4: Higher-order function that returns a function
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

// Step 5: Fare doubler
const fareDoubler = createFareMultiplier(2);

// Step 6: Fare tripler
const fareTripler = createFareMultiplier(3);

// Step 7: Pass a function to another function
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}

