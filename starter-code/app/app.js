$().ready(function() {
  console.log("Howdy");
  // connect to api then get individual books and list in ul on page.. coonect to form field that accepts new data and adds to api

   $("#submitButton").on('click', function(event){
      event.preventDefault(); // Stops form from submitting
      var title = $('#book-title').val();
      var author = $('#book-author').val();
      var image = $('#book-image' ).val();
      var date = $('#book-release-date').val();
      $('#books').prepend(
        "<ul><li><span class='info'>Title:</span> " + title + "</li>" +
          "<li><span class='info'>Author:</span> " + author + "</li>" +
          "<li><span class='info'>Cover:</span> " + "<img src=" + image + ">" + "</li>" +
          "<li><span class='info'>Release Date:</span> " + date + "</li>" +
          "</ul>");

    let book =  {
    title: title,
    author: author,
    image: image,
    releaseDate: date
   };

   //JSON.stringify(book);
    $.post('https://den-super-crud.herokuapp.com/books', book)
      .done(function(data){
       console.log(data);
     });


    });

  //Getting books to list under form in ul

   var books = $.get('https://den-super-crud.herokuapp.com/books')
    .done(function(data){
      console.log(data);
      console.log(data.books[0].title);
      var newBooks = data.books;
      for (var i = 0; i < newBooks.length ; i++) {
        console.log(newBooks[i]);
        $('#books').append(
          "<ul><li><span class='info'>Title:</span> " + newBooks[i].title + "</li>" +
          "<li><span class='info'>Author:</span> " + newBooks[i].author + "</li>" +
          "<li><span class='info'>Cover:</span> " + "<img src=" + newBooks[i].image + ">" + "</li>" +
          "<li><span class='info'>Release Date:</span> " + newBooks[i].releaseDate + "</li>" +
          "</ul>");
      }//End loop

    });

});











// OLD CODE
// $().ready(function() {
//   console.log("Howdy");
//   // connect to api then get individual books and list in ul on page.. coonect to form field that accepts new data and adds to api


// $('#submitButton').on('click', function(event){
//      event.preventDefault(); // Stops form from submitting
//       // getting input value from form
//       var title = $('#book-title').val();
//       var author = $('#book-author').val();
//       var image = $('#book-image' /* + './ ' */).val();
//       var date = $('#book-release-date').val();
//       // adding new book to top of book list

//       $('#books').prepend(
//         "<ul><li><span class='info'>Title:</span> " + title + "</li>" +
//           "<li><span class='info'>Author:</span> " + author + "</li>" +
//           "<li><span class='info'>Cover:</span> " + "<img src=" + image + ">" + "</li>" +
//           "<li><span class='info'>Release Date:</span> " + date + "</li>" +
//           "</ul>");
//     });


//   //Getting books to list under form in ul


//    var books = $.get('https://den-super-crud.herokuapp.com/books')
//     .done(function(data){
//       console.log(data.books[0].title);
//       var newBooks = data.books;
//       for (var i = 0; i < newBooks.length ; i++) {
//         console.log(newBooks[i]);
//         $('#books').append(
//           "<ul><li><span class='info'>Title:</span> " + newBooks[i].title + "</li>" +
//           "<li><span class='info'>Author:</span> " + newBooks[i].author + "</li>" +
//           "<li><span class='info'>Cover:</span> " + "<img src=" + newBooks[i].image + ">" + "</li>" +
//           "<li><span class='info'>Release Date:</span> " + newBooks[i].releaseDate + "</li>" +
//           "</ul>");
//       }//End loop

//     });

// });

