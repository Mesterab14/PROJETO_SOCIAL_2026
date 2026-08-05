<?php
session_start();
include('conexao.php');

$nome = mysqli_real_escape_string($mysqli, trim($_POST['nome']));
$matricula = mysqli_real_escape_string($mysqli, trim($_POST['matricula']));
$senha = $_POST['senha'];
$confirmar = $_POST['confirmar_senha'];

if ($senha != $confirmar) {
    echo "<script>
            alert('As senhas não são iguais!');
            window.history.back();
          </script>";
    exit;
}

$sql_verifica = "SELECT * FROM usuarios WHERE matricula = '$matricula'";
$resultado = mysqli_query($mysqli, $sql_verifica);

if (mysqli_num_rows($resultado) > 0) {
    echo "<script>
            alert('Essa matrícula já está cadastrada!');
            window.history.back();
          </script>";
    exit;
}


$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

$sql = "select count(*) as total from usuarios where matricula = '$matricula'";
$result = mysqli_query($mysqli, $sql);
$row = mysqli_fetch_assoc($result);

if($row['total'] == 1) {
    $_SESSION['email_existe'] = true;
    header('Location: CadLog.html');
    exit;
}

$sql = "INSERT INTO usuarios (nome, matricula, senha) VALUES ('$nome', '$matricula', '$senha_hash')";

if($mysqli->query($sql) === TRUE) {
    $_SESSION['status_cadastro'] = true;
}

$mysqli->close();
// preciso colocar o cadlog como index.php, e trocar esses headers
header('Location: ../CadLog.html');
exit;
?>
