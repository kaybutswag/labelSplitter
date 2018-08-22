$(function() {
    $('form').submit(function(evt) {
      evt.preventDefault();
      console.log(evt);
      var csv = evt.target[0].files[0];
      var csv_name = evt.target[0].files[0].name;
      console.log(csv);

        $.ajax({
            type: 'POST',
            url: 'https://labelsplitter.herokuapp.com/label-splitter?name='+csv_name,
            processData: false,
            // dataType:"json",
            data: csv
    }); 
})

})

 

