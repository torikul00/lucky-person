

document.getElementById('rolling-button').addEventListener('click', function () {

    const textArea = document.getElementById('text-area')
    const textAreaValue = textArea.value.toUpperCase();
    if (textAreaValue === '') {
       return
   }
    const arr = textAreaValue
    const singleNames = arr.split(',')
    console.log(singleNames)
    nameIndex = 0;
   var myInterval =  setInterval(() => {
        
        if (nameIndex < singleNames.length) {
            const getSingleName = singleNames[nameIndex]
       
            const h2 = document.getElementById('single-name')
            h2.innerText = getSingleName
            nameIndex++
        }
        else {
            nameIndex = 0;
        }
    }
       , 50)
    
  document.getElementById('stop-button').addEventListener('click', function () {
  clearInterval(myInterval)
   
})
})



/* var funky = setInterval(function() {
    alert('hello world');
}, 2000);

$('#start').click(function() {
    funky();
});
$('#stop').click(function() {
    clearInterval(funky)
}) */