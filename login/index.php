<?php 
 session_start();
 include '../script/config.php';
 $folder="../img/";
ini_set ('gd.jpeg_ignore_warning', 1);

         if (!isset($_SESSION['username'])) {
    header('Location: login.php');    
 }      $quality= '';
        $err_mess =  array();
if (isset($_POST['submit'])) {
    if (!empty($_FILES['kep']['name'][0])){
       $szoba_opcio = $_POST['szobak'];
       if ((empty($szoba_opcio)==true)) {
        echo 'Valasz butor fajtat'.'</br>';
      } else {
      foreach($_FILES['kep']['name'] as $i =>$file_name){
      
      

      $errors= array();
      $file_size =$_FILES['kep']['size'][$i];
      $file_tmp =$_FILES['kep']['tmp_name'][$i];
      $file_type=$_FILES['kep']['type'][$i];
      $file_ext=strtolower(end(explode('.',$file_name)));
      $random = rand(1,999999);
      $date = date("dmy");
      $file_name = $date.$random.'.'.$file_ext;

      
      $expensions= array("jpeg","jpg","png");
      
      

     
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="File extension " ."<b>". $file_ext . "</b>"." not allowed, please choose a JPEG or PNG file."."</br>";
      }
      
      if($file_size > 10097152){
         $errors[]="File" . "<b>". $file_name . "</b>" . "size must be smaler than 10 MB"."</br>";
      }
      if(isset($_FILES['kep']['name'][10])) {
        $errors[]="Max File to select 10 "."</br>";
}
      
      if(empty($errors) === true){

        if($file_size > 10097152){
          $quality = 10;
        }
         elseif($file_size > 5097152){
          $quality = 15;
        }
         elseif($file_size > 3097152){
          $quality = 20;
        }
          elseif($file_size > 2097152){
          $quality = 25;
        }
         elseif($file_size > 1097152){
          $quality = 50;
        }
        elseif($file_size > 0){
          $quality = 100;
        }
         $image = @imagecreatefromjpeg($file_tmp);
         imagejpeg($image,$file_tmp,$quality);
         move_uploaded_file($file_tmp,$folder.$file_name);         
         $q = "INSERT INTO img (kep_nev,option) VALUES ('$file_name','$szoba_opcio')";
         mysqli_query($conn,$q);
      }else{
         foreach ($errors as $value) {
       $err_mess[] = $value;
}// error foreach
      }//Success or not
   } //foreatch
   }// szoba check ha ures
 } else { // select file
  echo "Select File";// select file
 } // select file
} // check submit gomb
 ?>
<html>
<head>
  <meta charset="UTF-8">
  <title>Admin</title>
</head>
<body>
 <div class="wrap">
 <div class="mass">
   <?php 
 foreach ($err_mess as $value) {
       echo $value;
}// error foreach
    ?>
 </div>
   <div class="header">
     <div class="form">
  <a class="pull_rigth logout" href="logout.php">Log Out</a>
  <form action="index.php" method="POST" enctype="multipart/form-data">
    <input type="file" name="kep[]" id="kep" class="default" multiple="">
    <select name="szobak" id="selection" class="default">
    <option value="">Butor</option>
    <option value="gyerekszoba">Gyerekszoba</option>
    <option value="nappali">Nappali</option>
    <option value="halaszoba">Halaszoba</option>
  </select>

    <input type="submit" name="submit" id="button" value="Toltest">
  </form>
        </div>
     </div>
  </div>
      
    <form action="delete.php" method="POST">
    <?php 

    $q = "SELECT * FROM img"; 
    $r = mysqli_query($conn, $q);
  if($r->num_rows === 0) {
       
  }else { ?>
    <input type="submit" name="delete" id="delete" value="Delete">
     <div class="wraper">
       <div class="row">
   <?php while ($row = mysqli_fetch_object($r))
   {   
     ?>
    
          <div class="col">
         
     
     <div class="imge" style="background-image:url('<?php echo $folder.$row->kep_nev ?>')">
     <input name="checkbox[]" type="checkbox" id="<?php echo $row->id?>" class="require-one" value="<?php echo $row->id?> ">
     <label for="<?php echo $row->id?>"></label>
            </div>
         </div> <!-- col-->
     <?php 
      }
    }
      ?> 
          </div> <!-- row-->
     </div> <!-- wraper-->    
      </form>
     </div>
  </div>
</body>
</html>