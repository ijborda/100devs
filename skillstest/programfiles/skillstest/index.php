<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8">
    	<meta name="description" content="Your description goes here">
    	<meta name="keywords" content="one, two, three">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>PHP Bootstap Modal CRUD </title>

		<!-- Google Font -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		
		<!-- Custom CSS -->
		<link rel="stylesheet" href="main.css">
	
	 </head>
	<body>

		<!-- Modal -->
		<div class="modal fade" id="completeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Enter Book Information</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label for="title">Title</label>
						<input type="text" class="form-control" id="title" placeholder="Enter Title">
					</div>
					<div class="form-group">
						<label for="isbn">ISBN</label>
						<input type="text" class="form-control" id="isbn" placeholder="Enter ISBN">
					</div>
					<div class="form-group">
						<label for="author">Author</label>
						<input type="text" class="form-control" id="author" placeholder="Enter Author">
					</div>
					<div class="form-group">
						<label for="publisher">Publisher</label>
						<input type="text" class="form-control" id="publisher" placeholder="Enter Publisher">
					</div>
					<div class="form-group">
						<label for="yearpublished">Year Published</label>
						<input type="number" class="form-control" id="yearpublished" placeholder="Enter Year Published">
					</div>
					<div class="form-group">
						<label for="category">Category</label>
						<input type="text" class="form-control" id="category" placeholder="Enter Category">
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button"  onclick="addBook()" class="btn btn-primary green-bg">Submit</button>
				</div>
			</div>
			</div>
 		</div>

		<!-- Update Modal -->
		<div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Update Book Information</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label for="updatetitle">Title</label>
						<input type="text" class="form-control" id="updatetitle" placeholder="Enter Title">
					</div>
					<div class="form-group">
						<label for="updateisbn">ISBN</label>
						<input type="text" class="form-control" id="updateisbn" placeholder="Enter ISBN">
					</div>
					<div class="form-group">
						<label for="updateauthor">Author</label>
						<input type="text" class="form-control" id="updateauthor" placeholder="Enter Author">
					</div>
					<div class="form-group">
						<label for="updatepublisher">Publisher</label>
						<input type="text" class="form-control" id="updatepublisher" placeholder="Enter Publisher">
					</div>
					<div class="form-group">
						<label for="updateyearpublished">Year Published</label>
						<input type="number" class="form-control" id="updateyearpublished" placeholder="Enter Year Published">
					</div>
					<div class="form-group">
						<label for="updatecategory">Category</label>
						<input type="text" class="form-control" id="updatecategory" placeholder="Enter Category">
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button"  onclick="updateBook()" class="btn btn-primary green-bg">Update</button>
					<input type="hidden" id="hiddenData">
				</div>
			</div>
			</div>
 		</div>

		<div class="container my-3">
			<h1 class="hidden">PHP CRUD</h1>
			<!-- Button trigger modal -->
			<div class="button-container">
				<button type="button" class="btn add green-bg" data-toggle="modal" data-target="#completeModal">
				Add
				</button>
			</div>
			<div id="displayDataTable">
			</div>
		</div>


		<!-- Bootstrap JS -->
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
	
		<!-- Custom JS -->
		<script type="text/javascript" src="main.js"></script>
	</body>
</html>
