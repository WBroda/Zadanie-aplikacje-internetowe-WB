 //Dodanie opisu do funkcji sortującej bąbelkowo
 function bblSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//Dodanie opisu do funkcji obliczającej
function oblicz() {
    // Pobranie wartości z pola tekstowego
    const val = document.querySelector("#input").value.split(",");
    // Konwersja wartości na liczby
    const converted = val.map(x => Number(x));
    // Wywołanie funkcji sortującej i aktualizacja wyświetlanego wyniku
    document.querySelector("#wynik").innerHTML = bblSort(converted);
    console.log("Wynik bąbelkowego sortowania: " + bblSort(converted))
    alert("Wynik bąbelkowego sortowania: " + bblSort(converted))
}


function selectSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Znalezienie najmniejszej liczby w podtablicy
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Zamiana elementów
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

function oblicz1() {
    // Pobranie wartości z pola tekstowego
    const val = document.querySelector("#input1").value.split(",");
    // Konwersja wartości na liczby
    const converted = val.map(x => Number(x));
    // Wywołanie funkcji sortującej i aktualizacja wyświetlanego wyniku
    document.querySelector("#wynik1").innerHTML = selectSort(converted);
    console.log("Wynik sortowania przez wybieranie: " + selectSort(converted))
    alert("Wynik sortowania przez wybieranie: " + selectSort(converted))
}

