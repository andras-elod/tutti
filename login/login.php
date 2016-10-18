<?php 
 session_start();
include '../script/config.php';
if (isset($_SESSION['username'])) {
    header('Location: index.php');   	
 }
if(isset($_POST['submit'])) {
  $q = "SELECT * FROM users WHERE user_name = '$_POST[username]' AND password = SHA1('$_POST[password]')"; 
  $r = mysqli_query($conn, $q);

  $row = mysqli_num_rows($r);

  if ($row == 1) {
   $_SESSION['username'] = $_POST['username'];
   header('Location:index.php');
  }
}
 ?>
<html>
<head>
	<meta charset="UTF-8">
	<title>Login</title>
</head>
<body>
 
    <div class="wrap">
      <div class="form">
        <h1>Login</h1>
	<form action="login.php" method="POST">
	  <input type="text" name="username" id="username" class="default" placeholder="Username">
	  <input type="password" name="password" id="password" class="default" placeholder="Password">
	  <input type="submit" name="submit" value="Login" id="login">
  </form>
    </div>
  </div>
</body>
</html>