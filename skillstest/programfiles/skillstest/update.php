<?php

    include 'connect.php'; 

    if( isset($_POST['updateID']) ) {        

        $bookID = $_POST['updateID'];

        $sql = "SELECT * FROM `Books` WHERE id = $bookID";

        $result = mysqli_query($con, $sql);

        $response = array();

        while($row = mysqli_fetch_assoc($result)) {
            $response = $row;
        }

        echo json_encode($response);
    } else {
        $response['status'] = 200;
        $response['message'] = "Invalid or data not found";
    }

    // Update Query
    if ( isset($_POST['hiddenData']) ){
        $uniqueID = $_POST['hiddenData'];
        $title = $_POST['updatetitle'];
        $isbn = $_POST['updateisbn'];
        $author = $_POST['updateauthor'];
        $publisher = $_POST['updatepublisher'];
        $yearpublished = $_POST['updateyearpublished'];
        $category = $_POST['updatecategory'];
        
        $sql = "UPDATE `Books` SET title = '$title', isbn = '$isbn', author = '$author', publisher = '$publisher', yearpublished = '$yearpublished', category = '$category' WHERE id = $uniqueID";

        $result = mysqli_query($con, $sql);

    }
?>