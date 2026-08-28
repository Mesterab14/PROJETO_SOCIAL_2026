<?php
include('conexao.php');

if (isset($_POST['matricula']) && isset($_POST['senha'])) {

    if (strlen($_POST['matricula']) == 0) {
        echo "Preencha sua matricula";
    }else if (strlen($_POST['senha']) == 0) {
        echo "Preencha sua senha";
    } else {

    $matricula = $mysqli->real_escape_string($_POST['matricula']);
    $senhaDigitada = $_POST['senha']; 

    $sql_code = "SELECT * FROM usuarios WHERE matricula = '$matricula'";
    $sql_query = $mysqli->query($sql_code)
        or die("Falha na execução do código SQL: " . $mysqli->error);

    if ($sql_query->num_rows == 1) {

    $usuario = $sql_query->fetch_assoc();

    
    if (password_verify($senhaDigitada, $usuario['senha'])) {

        if (!isset($_SESSION)) {
            session_start();
        }

        $_SESSION['id'] = $usuario['id'];
        $_SESSION['nome'] = $usuario['nome'];

        header("Location: ../sitecomp.html");
        exit;

    } else {
        echo "<script>
        alert('Senha incorreta');
        window.location.href='../index.html';
        </script>";
    }

    } else {
        echo "<script>
        alert('Matricula não encontrada');
        window.location.href='../index.html';
        </script>";
    }

    }

}
?>
        
