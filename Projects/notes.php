<?php
$insert=false;
$update=false; 
$delete=false;
$servername = "localhost";
$username = "root";
$passsword = "";
$database = "notes";

$conn = mysqli_connect($servername, $username, $passsword, $database);

if (!$conn) {
    die("sorry we faild to connect" . mysqli_connect_error());
} else {
    // echo "Connection was succesfull<br>";
}
//echo $_SERVER['REQUEST_METHOD'];
// echo $_POST['snoEdit'];
// echo $_GET['update'];
// // exit();

if(isset($_GET['delete']))
{
    $sno=$_GET['delete'];
    // echo $sno;
    $sql="DELETE FROM `notes` Where sno=$sno";
    $result = mysqli_query($conn, $sql);
}



if($_SERVER['REQUEST_METHOD']=='POST')
{
    if(isset($_POST['snoEdit']))
    {
        // echo "yes";
        //update
        $sno=$_POST['snoEdit'];
        $title=$_POST["titleEdit"];
        $description=$_POST["descriptionEdit"];
     
        
       $sql1 ="UPDATE `notes` SET `title` = '$title',`description` = '$description' WHERE `notes`.`sno` = $sno; ";
      
    $result2 = mysqli_query($conn, $sql1);
    if($result2)
    {
        $update=true;
    }
    
    }
    else
    {
        // 
    }
    $title=$_POST["title"];
    $description=$_POST["description"];
 
    
   $sql1 ="INSERT INTO `notes` (`sno`, `title`, `description`) VALUES (NULL, '$title', '$description');";
  
  $result1 = mysqli_query($conn, $sql1);
 
//  echo $result;


  if($result1)
  {
   $insert=true;
  }
  }
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link rel="stylesheet" href="//cdn.datatables.net/1.13.7/css/jquery.dataTables.min.css">
   
    
  
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
       


</head>

<body>


     <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
 Edit Modal
</button> -->

<!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fs-5" id="editModalLabel">Edit this Note</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           
      
      <form action="/CRUD/index.php" method="post">
        <input type="hidden" name="snoEdit" id="snoEdit">
            <div class="mb-3">
                <label for="titleEdit" class="form-label">Note Title</label>
                <input type="text" class="form-control" id="titleEdit" name="titleEdit" aria-describedby="emailHelp">

                <div class="mb-3">
                    <label for="description" class="form-label">Note Describtion
                    </label>

                </div>
                <div class="">
                    <textarea class="form-control" id="descriptionEdit" name="descriptionEdit" rows="3"></textarea>
                </div>
                <button type="Submit" class="btn btn-primary">Update Note</button>
                  </div>
        </form>  
      


      </div>
   
    </div>
  </div>
</div>



    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
<?php
if($insert)
{
    echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
    <strong>Sucess </strong> Your Notes in added Sucess
    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
  </div>";
  $insert=false;
}
if($delete)
{
    echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
    <strong>Sucess </strong> Your Notes is Updated Sucessully
    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
  </div>";
  $delete=false;
}
if($update)
{
    echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
    <strong>Sucess </strong> Your Notes is Deleted Sucessfully
    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
  </div>";
  $update=false;
}
?>
    <div class="container my-4">
        <h2>Add a Note</h2>
        <form action="/CRUD/index.php?update=true" method="post">
            <div class="mb-3">
                <label for="title" class="form-label">Note Title</label>
                <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp">

                <div class="mb-3">
                    <label for="description" class="form-label">Note Describtion
                    </label>

                </div>
                <div class="">
                    <textarea class="form-control" id="description" name="description" rows="3"></textarea>
                </div>
                <button type="Submit" class="btn btn-primary">Add Note</button>
        </form>

    </div>
    <div class="container">
       
        <table class="table" id="myTable">
            <thead>
                <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Title</th>
                    <th scope="col">description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            <?php
            $srn=1;
        $sql = "select * from `notes`";
        $result = mysqli_query($conn, $sql);
        $srn=0;
        while ($row = mysqli_fetch_assoc($result)) {
            $srn=$srn+1;
           echo " <tr>
          
                    <th scope='row'>".$srn."</th>
                    <td >".$row['title'] ."</td>
                    <td>".$row['description']."</td>
                    <td>"."   <button class='btn btn-sm btn-primary edit' id=".$row['sno']." >Edit</button> &nbsp <button class='btn btn-sm btn-primary delete' id=d".$row['sno']." >Delete</button> </td>
                    
                </tr>";
                 
        }
        ?>
        
                
            </tbody>
        </table>
        <?php
       
        ?>

    </div>
    <hr>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<script src="//cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js"></script>
<script>
 let table = new DataTable('#myTable');
    </script>

<script>
const edits=document.getElementsByClassName("edit");
Array.from(edits).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log("edit");
        tr= e.target.parentNode.parentNode;
        title = tr.getElementsByTagName("td")[0].innerText;
        description=tr.getElementsByTagName("td")[1].innerText;
        // console.log(title,description);
        titleEdit.value=title;
        descriptionEdit.value=description;
        snoEdit.value =e.target.id;
        console.log(e.target.id);
        $('#editModal').modal('toggle');
        
    })
})
deletes=document.getElementsByClassName("delete");
Array.from(deletes).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log("delete");
        sno =e.target.id.substr(1,);
        console.log(sno);
       if(confirm("Are you sure you want to delete"))
       {
        console.log("yes");
        window.location=`/CRUD/index.php?delete=${sno}`;
       }
       else{
        console.log("no"); 
       }
    })
})

</script>


</body>

</html>