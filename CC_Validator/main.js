// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const mystery6 = [3, 7, 5, 3, 1, 0, 9, 9, 8, 0, 5, 7, 0, 7, 9]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6]


// array contains digits of a valid credit card number: return true
// else: return false
function validateCred(inputArray){

    let size = inputArray.length;
    //console.log(size);
    let sum = 0;

    // Luhn algorithm
    for(let i = size -1; i >= 0; i--){
        
        // if even length, even indices are doubled
        if(size % 2 === 0){
            // check digit is not doubled, skip
            if(i === size -1){
                sum += inputArray[i];
                continue;
            }else if(i % 2 === 0){
                inputArray[i] = inputArray[i] * 2;
                if(inputArray[i] > 9){
                    inputArray[i] -= 9;
                }
                sum += inputArray[i];
                continue;
            }else{
                sum += inputArray[i];
                continue;
            }
            // if odd length, odd indices are doubled   
        }else{
            // check digit is not doubled, skip
            if(i === size -1){
                sum += inputArray[i];
                continue;
            }else if(i % 2 === 1){
                inputArray[i] = inputArray[i] * 2;
                if(inputArray[i] > 9){
                    inputArray[i] -= 9;
                } 
                sum += inputArray[i];
                continue;
            }else{
                sum += inputArray[i];
                continue;
            }
        }

    }

    // true = valid digits, false = invalid digits
    if(sum % 10 === 0){
        return true;
    }else{
        return false;
    }
    
} // end validateCred
// console.log(validateCred(valid5));


// check through nested array for which numbers are invalid
// return nested array of invalid cards
function findInvalidCards(nestedArray){
    
    // loop through cards
    for(let i = 0; i < nestedArray.length; i++){
        
        // call validateCred on each card
        let valid = validateCred(nestedArray[i]);
        if(valid === true){
            nestedArray[i] = [];
        }
    }
    return nestedArray;

} // end findInvalidCards()

// findInvalidCards(batch);



// ID companies that issued faulty numbers
// return array of companies that have mailed out invalid numbers 
function idInvalidCardCompanies(nestedArray){
    let companies = [];

    // loop through cards
    for(let i = 0; i < nestedArray.length; i++){
        let card = nestedArray[i];
        if(card[0] === 3){
            if(!companies.includes('Amex')){
                companies[i] = 'Amex';
            }
        }else if(card[0] === 4){
            if(!companies.includes('Visa')){
                companies[i] = 'Visa';
            }
        }else if(card[0] === 5){
            if(!companies.includes('Mastercard')){
                companies[i] = 'Mastercard';
            }
        }else if(card[0] === 6){
            if(!companies.includes('Discover')){
                companies[i] = 'Discover';
            }
        }else{
            console.log('Company not found.');
        }
        
    }
    
    console.log(companies);
    return companies;
    
}

idInvalidCardCompanies(batch);