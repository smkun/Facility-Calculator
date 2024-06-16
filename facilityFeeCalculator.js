// facilityFeeCalculator.js

// Declare variables for the total number of FE, NF, and Cat inputs
var totalFe = 5;
var totalNf = 10;
var totalCat = 1;

// Declare variables for storing the price per unit for FE, NF, and Cat
var fePricePerGt = 0;
var nfPricePerLb = 0;
var catPricePerCount = 0;

// Define an object to store region-specific prices
var regions = {
    NE: {
        fePricePerGt: 5,
        nfPricePerLb: 0.01,
        catPricePerCount: 1,
    },
    SW: {
        fePricePerGt: 10,
        nfPricePerLb: 0.01,
        catPricePerCount: 1,
    },
    WC: {
        fePricePerGt: 4,
        nfPricePerLb: 0.01,
        catPricePerCount: 1,
    },
    "WN US": {
        fePricePerGt: 4,
        nfPricePerLb: 0.01,
        catPricePerCount: 1,
    },
    "WN CAN": {
        fePricePerGt: 4,
        nfPricePerLb: 0.01,
        catPricePerCount: 1,
    },
    "SEC & PR": {
        fePricePerGt: 3,
        nfPricePerLb: 0.01,
        catPricePerCount: 1,
    },
    HI: {
        fePricePerGt: 0,
        nfPricePerLb: 0.01,
        catPricePerCount: 1,
    },
    SC: {
        fePricePerGt: 0,
        nfPricePerLb: 0.01,
        catPricePerCount: 1,
    },
};

// jQuery: Run the following code when the document is ready
$(document).ready(function () {
    redraw();
    drawRegionDropdown();
    
    // jQuery: Attach a change event handler to the element with id "regionSelection"
    $("#regionSelection").change(function () {
        clearCalc();
    });
});

// Redraw all input fields and clear calculations
function redraw() {
    drawFER();
    drawNFR();
    drawCat();
    clearCalc();
}

// Clear all calculated values
function clearCalc() {
    // jQuery: Set the text of various elements to an empty string
    $("#totalFeWeightLbs").text("");
    $("#totalFeWeightGt").text("");
    $("#feTotalFee").text("");
    $("#totalNfWeightLbs").text("");
    $("#nfTotalFee").text("");
    $("#totalCatCount").text("");
    $("#catTotalFee").text("");
}

// Set the prices based on the selected region
function setPrices() {
    // jQuery: Get the selected region text and use it to set the prices
    fePricePerGt = regions[$("#regionSelection").find(":selected").text()]["fePricePerGt"];
    nfPricePerLb = regions[$("#regionSelection").find(":selected").text()]["nfPricePerLb"];
    catPricePerCount = regions[$("#regionSelection").find(":selected").text()]["catPricePerCount"];
}

// Calculate the total FE weight and fee
function calcFe() {
    try {
        setPrices();
        let total = 0;
        for (let i = 1; i < totalFe + 1; i++) {
            // jQuery: Get the value of the input field with id "ferrWeight" + i
            total += parseVal("#ferrWeight" + i);
        }
        // jQuery: Set the text of the element with id "totalFeWeightLbs" to the total weight
        $("#totalFeWeightLbs").text(total);
        let gt = total / 2240;
        // jQuery: Set the text of the element with id "totalFeWeightGt" to the weight in GT
        $("#totalFeWeightGt").text(gt.toFixed(2));
        let feFee = gt * fePricePerGt;
        // jQuery: Set the text of the element with id "feTotalFee" to the calculated fee
        $("#feTotalFee").text("$" + feFee.toFixed(2));
    } catch (error) {
        console.error(error);
    }
}

// Calculate the total NF weight and fee
function calcNf() {
    try {
        setPrices();
        let total = 0;
        for (let i = 1; i < totalNf + 1; i++) {
            // jQuery: Get the value of the input field with id "nfWeight" + i
            total += parseVal("#nfWeight" + i);
        }
        // jQuery: Set the text of the element with id "totalNfWeightLbs" to the total weight
        $("#totalNfWeightLbs").text(total);
        let nfFee = total * nfPricePerLb;
        // jQuery: Set the text of the element with id "nfTotalFee" to the calculated fee
        $("#nfTotalFee").text("$" + nfFee.toFixed(2));
    } catch (error) {
        console.error(error);
    }
}

// Calculate the total Cat count and fee
function calcCat() {
    try {
        setPrices();
        let total = 0;
        for (let i = 1; i < totalCat + 1; i++) {
            // jQuery: Get the value of the input field with id "catCount" + i
            total += parseVal("#catCount" + i);
        }
        // jQuery: Set the text of the element with id "totalCatCount" to the total count
        $("#totalCatCount").text(total);
        let catFee = total * catPricePerCount;
        // jQuery: Set the text of the element with id "catTotalFee" to the calculated fee
        $("#catTotalFee").text("$" + catFee.toFixed(2));
    } catch (error) {
        console.error(error);
    }
}

// Draw the input fields for FE weights
function drawFER() {
    // jQuery: Empty the element with id "feBlock"
    $("#feBlock").empty();
    for (let i = 1; i < totalFe + 1; i++) {
        // jQuery: Append input fields to the element with id "feBlock"
        $("#feBlock").append(
            "<label for='ferrWeight" + i + "'>Enter Weight in Lbs (FE Material " + i + ")</label>" +
            "<input type='number' id='ferrWeight" + i + "' name='ferrWeight" + i + "' min='0'><br>"
        );
    }
}

// Draw the input fields for NF weights
function drawNFR() {
    // jQuery: Empty the element with id "nfBlock"
    $("#nfBlock").empty();
    for (let i = 1; i < totalNf + 1; i++) {
        // jQuery: Append input fields to the element with id "nfBlock"
        $("#nfBlock").append(
            "<label for='nfWeight" + i + "'>Enter Weight in Lbs (NF Material " + i + ")</label>" +
            "<input type='number' id='nfWeight" + i + "' name='nfWeight" + i + "' min='0'><br>"
        );
    }
}

// Draw the input fields for Cat counts
function drawCat() {
    // jQuery: Empty the element with id "catBlock"
    $("#catBlock").empty();
    for (let i = 1; i < totalCat + 1; i++) {
        // jQuery: Append input fields to the element with id "catBlock"
        $("#catBlock").append(
            "<label for='catCount" + i + "'>Enter Count (Cat Type " + i + ")</label>" +
            "<input type='number' id='catCount" + i + "' name='catCount" + i + "' min='0'><br>"
        );
    }
}

// Draw the region dropdown
function drawRegionDropdown() {
    let keys = Object.keys(regions);
    for (let i = 0; i < keys.length; i++) {
        // jQuery: Append option elements to the element with id "regionSelection"
        $("#regionSelection").append(
            $("<option>", {
                value: keys[i],
                text: keys[i],
            })
        );
    }
}

// Parse the value of an input field using jQuery
function parseVal(x) {
    // jQuery: Get the value of the element selected by the selector "x"
    return parseNum($(x).val());
}

// Parse a numeric value, returning 0 if parsing fails
function parseNum(x) {
    try {
        let y = parseInt(x);
        return Number.isNaN(y) ? 0 : y;
    } catch (error) {
        console.log(error);
        return 0;
    }
}