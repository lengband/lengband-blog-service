<?php

// header("Content-type: text/html; charset=utf-8");

$res = json_decode(file_get_contents('php://input', 'r'), true);

session_start();

$_SESSION['username'] = $res['username'];
$_SESSION['password'] = $res['password'];

$opt = array('errno' => 0, 'data' => array('username' => $res['username']));

echo json_encode($opt);

//登录成功
// $_SESSION['username'] = $_POST['username'];
// $_SESSION['userid'] = $_POST['password'];
?>