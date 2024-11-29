// Code your solution in this file!
const hqBlock = 42
// DISTANCE FROM HQ IN BLOCKS
function distanceFromHqInBlocks(block){
    block = Math.abs(block - hqBlock);
    return block;
    // console.log(block)
}
distanceFromHqInBlocks(43);
// distanceFromHqInBlocks(50)
// distanceFromHqInBlocks(34)

// DISTANCE FROM HQ IN FEET
function distanceFromHqInFeet(block){
    const distanceFeet = distanceFromHqInBlocks(block) * 264;
    return distanceFeet;
    // console.log(distanceFeet)
}
distanceFromHqInFeet()

// DISTANCE TRAVELLED IN FEET
function distanceTravelledInFeet(start, destination){
    const distance = Math.abs(destination - start) * 264;
    const feet = distance;
    return feet;
}

// CALCULATED FARE PRICES
function calculatesFarePrice(start, destination){
    const blockDistance = Math.abs(destination - start);
    const distanceTravelled = blockDistance * 264;

    if (distanceTravelled <= 400){
        return 0;
    } else if (distanceTravelled <= 2000){
        return (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled <= 2500){
        return 25;
    } else(distanceTravelled > 2500);{
        return 'cannot travel that far';
    }
}