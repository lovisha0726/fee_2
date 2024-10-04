const form = document.querySelector('form');
const textInput = document.getElementById('textInput');


form.addEventListener('submit',function(event)  {
    event.preventDefault();
    // console.log("form is submitted")
    const inputData = textInput.value; 
    console.log('Form has been submitted! Input Data:', inputData);

});

//form da default nature hai ki oh next form the chlaa ju
// jis krke apmni expected output console te nai aa ri
//uss chij nu achive krn li apn prevent default da use krde hn