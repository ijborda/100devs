<?php

include 'connect.php'; 

if( isset($_POST['displaySend']) ) {
    
    $table = '<table class="table table-custom">
    <thead>
      <tr>
        <th scope="col" class="hidden">ID</th>
        <th scope="col">TITLE</th>
        <th scope="col">ISBN</th>
        <th scope="col">AUTHOR</th>
        <th scope="col">PUBLISHER</th>
        <th scope="col">YEAR PUBLISHED</th>
        <th scope="col">CATEGORY</th>
        <th scope="col"> </th>
      </tr>
    </thead>';

    $sql = "SELECT * FROM `Books`";

    $result = mysqli_query($con, $sql);

    while($row = mysqli_fetch_assoc($result)) {
        $id = $row['id'];
        $title = $row['title'];
        $isbn = $row['isbn'];
        $author = $row['author'];
        $publisher = $row['publisher'];
        $yearpublished = $row['yearpublished'];
        $category = $row['category'];
        $table.='
          <tr>
            <td class="hidden">'.$id.'</td>
            <td>'.$title.'</td>
            <td>'.$isbn.'</td>
            <td>'.$author.'</td>
            <td>'.$publisher.'</td>
            <td>'.$yearpublished.'</td>
            <td>'.$category.'</td>
            <td>
                <button class="btn edit gray-bg" onclick="editBook('.$id.')">EDIT</button>
                <button class="btn del gray-bg" onclick="deleteBook('.$id.')">DEL</button>
            </td>
          </tr>';
    }
    $table.='</table>';
    echo $table;
}

?>