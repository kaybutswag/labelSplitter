$(function() {
    $('form').submit(function(evt) {
      evt.preventDefault();
      console.log(evt);
      var csv = evt.target[0].files[0];
      var csv_name = evt.target[0].files[0].name;
      parseIt(csv);
      
  function parseIt(allData){
    Papa.parse(csv, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        fileData = results.data;
        sendIt(fileData);
      }
    });
  }
  

  function sendIt(csv_data){
    $.ajax({
      type: 'POST',
      url: 'https://labelsplitter.herokuapp.com/label-splitter?name='+csv_name,
      dataType:"json",
       data: { data : csv_data }
    }); 
      
    }

  })

})

 

