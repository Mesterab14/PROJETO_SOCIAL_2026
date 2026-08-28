<?php

$usuario = 'if0_42695718';
$senha = 'projetosocial21';
$database = 'if0_42695718_XXX';
$host = 'sql103.infinityfree.com';

$mysqli = new mysqli($host, $usuario, $senha, $database);

if($mysqli->error) {
    die("Falha ao conectar com o banco de dados: " . $mysqli->error);
}