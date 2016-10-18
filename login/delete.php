<?php 
 include '../script/config.php';
 $folder="../img/";
if (isset($_POST['delete'])) {
$box = $_POST['checkbox'];
if (!empty($box)) {
foreach($box as $i =>$id){
 $q =  "SELECT kep_nev FROM img where id = '$id'";
 $r = mysqli_query($conn, $q);
 $row = mysqli_fetch_object($r);
 $image_name = $row->kep_nev;

if (unlink($folder.$image_name))
 {
	$q = "DELETE FROM img where id='$id'";
	$r = mysqli_query($conn, $q);
	}

 header('Location: index.php');
 } // forearch checbox
} else {
	echo "Nothing to Delete";
}

} // check submit
 ?>