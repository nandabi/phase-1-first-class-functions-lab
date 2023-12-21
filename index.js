const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers=function(drivers) {
    return drivers.slice(-2,driverslength)
}
const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]    
 const createFareMultiplier = function(mult){
    return function(fare){
        return fare.mult
    }
 }
 function fareDoubler(fare){
    return createFareMultiplier(2)(fare)
 }
 function fareTripler(fare){
    return createFareMultiplier(3)(fare)
 }  
 function selectDifferentDrivers(drivers,func){
    return func(drivers)
 }
