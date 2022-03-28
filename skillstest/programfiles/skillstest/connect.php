<?php

    $con=new mysqli('localhost', 'root', '', 'skillstest');

    if (!$con) {
        die(mysqli_error($con));
    } 
    
?>