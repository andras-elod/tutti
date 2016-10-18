<?php
$conn = mysqli_connect('localhost','root','');
if (!$conn) {
    die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
}
$db = mysqli_select_db($conn,'tutti');
if (!$db) {
  die ('Cannot use database : ' . mysql_error());
}
?>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
<script type="text/javascript" src="../js/all.js"></script>
<link href='../css/style.css' type='text/css' rel='stylesheet'/>
<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">