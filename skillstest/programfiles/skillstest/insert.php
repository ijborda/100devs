<?php

    include 'connect.php'; 

    extract($_POST);

    if( isset($_POST['titleSend']) && isset($_POST['isbnSend']) && isset($_POST['authorSend']) && isset($_POST['publisherSend']) && isset($_POST['yearpublishedSend']) && isset($_POST['categorySend'])) {
        
        $sql = "INSERT INTO `Books` (title, isbn, author, publisher, yearpublished, category) VALUES ('$titleSend', '$isbnSend', '$authorSend', '$publisherSend', '$yearpublishedSend', '$categorySend')";

        $result = mysqli_query($con, $sql);
    }

    
?>