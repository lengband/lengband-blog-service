<?php
session_start();

//注销登录
unset($_SESSION['userid']);
unset($_SESSION['username']);
header("Location:../index.html");
