// Load data once document is ready
$(document).ready(function(){
    displayBook();
})

// Get data from database and display
function displayBook() {
    let displayBook = "true";
    $.ajax({
        url: "display.php",
        type: "post",
        data: {
            displaySend: displayBook
        },
        success: function(data, status) {
            $("#displayDataTable").html(data);
        }
    })
}

// Add book entry
function addBook() {
    let titleAdd = $("#title").val() 
    let isbnAdd = $("#isbn").val() 
    let authorAdd = $("#author").val() 
    let publisherAdd = $("#publisher").val() 
    let yearpublishedAdd = $("#yearpublished").val() 
    let categoryAdd = $("#category").val() 

    $.ajax({
        url: "insert.php",
        type: 'post',
        data: {
            titleSend: titleAdd,
            isbnSend: isbnAdd,
            authorSend: authorAdd,
            publisherSend: publisherAdd,
            yearpublishedSend: yearpublishedAdd,
            categorySend: categoryAdd
        },
        success: function(data, status) {
            $('#completeModal').modal('hide')
            displayBook()
        }
    })
}

// Delete book entry
function deleteBook(deleteID) {
    $.ajax({
        url: "delete.php",
        type: "post",
        data: {
            deleteSend: deleteID
        },
        success: function(data, status) {
            displayBook()
        }
    })
}

// Edit book entry (Show current data in updateModal)
function editBook(updateID) {
    $('#hiddenData').val(updateID)

    $.post("update.php", {updateID: updateID}, function(data, status) {
        let userid = JSON.parse(data);
        $('#updatetitle').val(userid.title);
        $('#updateisbn').val(userid.isbn);
        $('#updateauthor').val(userid.author);
        $('#updatepublisher').val(userid.publisher);
        $('#updateyearpublished').val(userid.yearpublished);
        $('#updatecategory').val(userid.category);
    })

    $('#updateModal').modal("show")
}

// Update book entry (Update data in database)
function updateBook() {
    let updatetitle = $('#updatetitle').val();
    let updateisbn = $('#updateisbn').val();
    let updateauthor = $('#updateauthor').val();
    let updatepublisher = $('#updatepublisher').val();
    let updateyearpublished = $('#updateyearpublished').val();
    let updatecategory = $('#updatecategory').val();
    let hiddenData = $('#hiddenData').val();
    $.post("update.php", {
        updatetitle: updatetitle,
        updateisbn: updateisbn,
        updateauthor: updateauthor,
        updatepublisher: updatepublisher,
        updateyearpublished: updateyearpublished,
        updatecategory: updatecategory,
        hiddenData: hiddenData
    }, function(data, status) {
        $('#updateModal').modal('hide')
        displayBook()
    })
}