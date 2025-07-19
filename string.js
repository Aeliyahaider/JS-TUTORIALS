// STRING METHODS IN JAVASCRIPT
let str = "my name is aeliya haider and i'm a professional website developer expert in wordpress, shopify, sql and javascript language";
console.log(str.toUpperCase()); // USE FOR LOWER CASE TO UPPER CASE (IMMUTEABLE)


// STRING METHODS IN JAVASCRIPT
let str1 = "THIS IS A TEXT FOR UPPER CASE TO LOWER CASE";
console.log(str1.toLowerCase()); // USE FOR UPPER CASE TO LOWER CASE (IMMUTEABLE)

// STRING METHODS IN JAVASCRIPT
let str2 = "      AELIYA HAIDER SUTO      ";
console.log(str2.trim()); // USE FOR REMOVE SPACES FROM START AND END OF A STRING (IMMUTEABLE) // REMOVE WHITENESS 

// STRING METHODS IN JAVASCRIPT
let str3 = "ABCDEGHIJK";    // DIVIDE INTO SLICE PRINT VALUSE ONLY DEFINE IN AN INDEX
console.log(str3.slice(1,4)); // IT WILL PRINT (BCD) IN RESULT

// STRING METHODS IN JAVASCRIPT
let str4 = "1234567";    // DIVIDE INTO SLICE PRINT VALUSE ONLY DEFINE IN AN INDEX
console.log(str4.slice(1,4)); // IT WILL PRINT (234) IN RESULT

// STRING METHODS IN JAVASCRIPT
let str5 = "AELIYA";  // TO CONCATENATE STR5 AND STR 6 
let str6 = "HAIDER";  // TO COMBINE STR5 AND STR6
let cont = str5.concat(str6);  //CONCATINATION
console.log(cont); // PRINTING   AELIYAHAIDER in combine formate

// STRING METHODS IN JAVASCRIPT
let str7 = "AELIYA"; // FOR REPLACING A VALUE OR A STRING 
console.log(str7.replace("YA", "HA"));   // PRINT AND REPLACE YA WITH HA RESULT (AELIHA);

// STRING METHODS IN JAVASCRIPT
let str8 = "AELIYA"; // FOR FIND VALUSE IN INDEXES 
console.log(str8.charAt(0));   // PRINT INDEX AT O RESULT (A);

// STRING METHODS IN JAVASCRIPT
let str9 = prompt("PLEASE ENTER YOUR NAME!");
let username = "@" + str9 + str9.length;
console.log(username);