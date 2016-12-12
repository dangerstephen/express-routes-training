$(document).ready(function(){
  $('#guess-number-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: '/pick-a-number',
      method: 'GET',
      data: $('#guess-number-form').serialize(),
      success: handleGuessSuccess,
      error: handleError
    });
  });

  function handleGuessSuccess(guessResponse){
    console.log(guessResponse);
    $('#high-low-correct').html(guessResponse);
  }



  function handleError(jqXHR, status, error){
    console.log('error:', error);
  }
});
