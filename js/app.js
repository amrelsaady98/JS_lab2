try {
  // task #01 --------------------------------------------------------------------------------
  let tipsArray = [
    "Use console.table() to Display Arrays and Objects in the Console",
    "Use Template Interpolation to Render Strings Instead of the Assignment Operator",
    "Convert Strings to Numbers with Unary Plus and Number Constructor",
    "You Don’t Need to Declare Every Variable with a Keyword",
    "Use console.group() with Multiple console.log() to Group Related Items to the Console",
    "Style your Console Output with the %c Specifier",
    "How Math.floor(Math.random() * n1 , n2) Generates a Random Number Between n1 and n2",
    "Capitalize the First Letter of Any Word",
    "Destructure Arrays with Default Values to Avoid Getting undefined",
    "Use the Spread Operator to Copy and Merge Arrays",
    "Use Arrow Syntax to Write Shorter and More Elegant Functions",
  ]
  document.getElementById('tip-content').innerHTML = tipsArray[Math.floor(Math.random() * tipsArray.length)];

  // tasks #02, #03, #04 + bonus #01

  //document elements -----------------------------------------------------------------------

  let showDateButton = document.getElementById('show-date-button');
  let validateDateButton = document.getElementById('validate-date-button');
  let dateInput = document.getElementById('date-input');


  // variables ------------------------------------------------------------------------------
  let dateInputDataText;
  let dateValidationResult;
  let dateObject;

  showDateButton.addEventListener('click', function () {
    alert(new Date().toLocaleDateString());
  })
  validateDateButton.addEventListener('click', function () {
    dateInputDataText = dateInput.value;
    dateValidationResult = validateDateString(dateInputDataText);
    if (typeof dateValidationResult === Date) {
      alert("date is valid");

    } else {
      alert(dateValidationResult);
    }
  })

  /**
   * Check the String if it in valid format or not;
   * if date is valid returns null, other returns the reason in string
   * @dateString date in string format to validate
   * */
  function validateDateString(dateString) {
    let dateArray = dateString.split('-')
    let dateObject = new Date();


    //check whether the date string contains letters
    for (let i = 0; i < dateArray.length; i++) {
      if (!Number.isFinite(Number.parseInt(dateArray[i]))) {
        return "Date must be a number";
      }
    }

    //check if date values within range
    for (let j = 0; j < dateArray.length; j++) {
      switch (j) {
        case 0:
          if (Number.parseInt(dateArray[j]) > 31 || Number.parseInt(dateArray[j]) < 1) {
            return "Day Must be in range of 1 ~ 31";
          } else {
            dateObject.setDate(Number.parseInt(dateArray[j]))
          }
          break;
        case 1:
          if (Number.parseInt(dateArray[j]) > 12 || Number.parseInt(dateArray[j]) < 1) {
            return "Month Must be in range of 1 ~ 12";
          } else {
            dateObject.setMonth(Number.parseInt(dateArray[j]))
          }
          break;
        case 2:
          if (Number.parseInt(dateArray[j]) > 2024 || Number.parseInt(dateArray[j]) < 1950) {
            return "Year Must be in range of 1950 ~ 2024";
          } else {
            dateObject.setFullYear(Number.parseInt(dateArray[j]))
          }
          break;
      }
    }
    return dateObject;
  }


  // Tasks #05, #06 --------------------------------------------------------------------

  var numbers = [0, 1, 2, 3, 4, 3, 5, 6, 7, 3, 8, 9, 3];
  console.log(countItems(numbers, 10));
  console.log(removeItem(numbers, 3));
  console.table(numbers)

  /**
   * Count the matched items in an array, if array does not contain item returns 0;
   * @item the the required item to found
   * */
  function countItems(array, item) {
    let itemCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item)
        itemCount++;
    }
    return itemCount;
  }

  /**
   * remove all items in array matches the required item
   * @item the the required item to be removed
   * */
  function removeItem(array, item) {
    let i = 0;
    while (i < array.length) {
      if (array[i] === item) {
        array.splice(i, 1);
      } else {
        ++i;
      }
    }
    return array;
  }

// bonus #02 ----------------------------------------------------------------
  window.addEventListener('error', function (error) {
    document.body.style.backgroundColor = 'red';
  })

// bonus #03 ----------------------------------------------------------------

  /**
   * bubble sort Algorithm implementation
   * */
  function bubbleSort(array) {

    for (var i = 0; i < array.length; i++) {

      // Last i elements are already in place
      for (var j = 0; j < (array.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration
        if (array[j] > array[j + 1]) {

          // If the condition is true
          // then swap them
          var temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
        }
      }
    }
  }


  /**
   * swap shuffle implementation
   * */
  function shuffleArray(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  var numbersToSort = [0, 1, 2, 3, 4, 3, 5, 6, 7, 3, 8, 9, 3];
  shuffleArray(numbersToSort);
  console.log("Shuffled numbers -> " + numbersToSort);
  bubbleSort(numbersToSort);
  console.log("bubble sort -> "+numbersToSort);


  // Print the sorted array
  console.table(numbersToSort);
} catch (e) {
  console.log(e)
}
