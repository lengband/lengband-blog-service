<?php
$data = array(
	array(
		"id" => 1,
		"username" => "小铭1",
		"telephone" => "12345678901",
		"password" => "123",
		"sex" => '男',
		"info" => "用户简介"
	),
	array(
		"id" => 2,
		"username" => "小铭2",
		"telephone" => "12345678901",
		"password" => "123",
		"sex" => '男',
		"info" => "用户简介"
	),
	array(
		"id" => 3,
		"username" => "小铭3",
		"telephone" => "12345678901",
		"password" => "123",
		"sex" => '男',
		"info" => "用户简介"
	),
	array(
		"id" => 4,
		"username" => "小铭4",
		"telephone" => "12345678901",
		"password" => "123",
		"sex" => '男',
		"info" => "用户简介"
	),
	array(
		"id" => 5,
		"username" => "小铭5",
		"telephone" => "12345678901",
		"password" => "123",
		"sex" => '男',
		"info" => "用户简介"
	)
);
$result = array(
	"errno" => 0,
	"data" => $data
);
echo json_encode($result);