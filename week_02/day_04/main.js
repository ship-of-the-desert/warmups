const subwaySystem = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

var stops = 0;

function oneLine(lineName, startStop, endStop) {
    var lineArray = subwaySystem[lineName]
    var result = ""
    if (lineArray.indexOf(startStop) < lineArray.indexOf(endStop)) {
        for (let i = lineArray.indexOf(startStop) + 1; i <= lineArray.indexOf(endStop); i++) {
            result += lineArray[i] + ", ";
            stops++;
        }
    } else {
        for (let i = lineArray.indexOf(startStop) - 1; i >= lineArray.indexOf(endStop); i--) {
            result += lineArray[i] + ", ";
            stops++;
        }
    }
    return result
}

// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

function planTrip(firstLine, firstStop, secondLine, secondStop) {
    var endResult;
    var secondResult;
    if (firstLine === secondLine) {
        endResult = oneLine(firstLine, firstStop, secondStop);
        console.log(`You must travel through the following stops on the ${firstLine} line: ${endResult}`)
    } else {
        endResult = oneLine(firstLine, firstStop, "Union Square");
        secondResult = oneLine(secondLine, "Union Square", secondStop)
        console.log(`You must travel through the following stops on the ${firstLine} line: ${endResult}`);
        console.log("Change at Union Square.");
        console.log(`Your journey continues through the ${secondLine} following stops: ${secondResult}`)
    }
    console.log(`${stops} stops in total.`)
}

planTrip("6", "Astor Place", "N", "Times Square");