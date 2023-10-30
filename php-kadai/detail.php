<?php
$dsn = 'mysql:dbname=employees_db;host=localhost;charset=utf8mb4';
$user = 'root';
$password = '';

// enum（社員番号）パラメータの値が存在すれば処理を行う
if(isset($_GET['enum'])) {
  try {
    $pdo = new PDO($dsn, $user, $password);

    // enumカラムの値をプレースホルダ（:enum）に置き換えたSQL文をあらかじめ用意
    $sql_select_employee = 'SELECT * FROM employees_list WHERE enum = :enum';
    $stmt_select_employee = $pdo->prepare($sql_select_employee);

    // bindValue()メソッドを使って実際の値をプレースホルダにバインドする（割り当てる）
    $stmt_select_employee->bindValue(':enum', $_GET['enum'], PDO::PARAM_INT);

    // SQL文を実行する
    $stmt_select_employee->execute();


    // SQL文の実行結果を配列で取得する
    $employee = $stmt_select_employee->fetch(PDO::FETCH_ASSOC);

    // idパラメータの値と同じIDのデータが存在しない場合はエラーメッセージを表示して終了
    // 補足：fetch()メソッドは実行結果が取得できなかった場合はFALSEを返す。
    if ($employee === FALSE) {
      exit('enumパラメータの値が不正です。1');
    }

    // detailテーブルからenumカラムのデータを取得するためのSQL文の変数$sql_select_detailsに代入する
    $sql_select_detail = 'SELECT * FROM employees_detail WHERE enum = :enum';
    $stmt_select_detail = $pdo->prepare($sql_select_detail);

    // bindValue()メソッドを使って実際の値をプレースホルダにバインドする（割り当てる）
    $stmt_select_detail->bindValue(':enum', $_GET['enum'], PDO::PARAM_INT);

    // SQL文を実行する
    $stmt_select_detail->execute();

    // SQL文の実行結果を配列で取得する
    // 補足：PDO::FETCH_COLUMNは1つのカラムの値を1次元配列で取得する設定
    $detail = $stmt_select_detail->fetch(PDO::FETCH_ASSOC);

    // idパラメータの値と同じIDのデータが存在しない場合はエラーメッセージを表示して終了
    // 補足：fetch()メソッドは実行結果が取得できなかった場合はFALSEを返す。
    if ($employee === FALSE) {
      exit('enumパラメータの値が不正です。1');
    }

  } catch (PDOException $e) {
    echo "error!";
      exit($e->getMessage());
  }
} else {
  // idパラメータが存在しない場合はエラーメッセージを表示して処理停止
  exit('idパラメータの値が存在しません。');
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>社員詳細</title>
    <link rel="stylesheet" href="css/style.css">

    <!-- Google Fontsの読み込み -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
</head>

<body>

  <main>
    <h1>社員詳細ページ</h1>
    <div class="employee-detail">
      <ul class="detail">
        <li>氏名：<?= $employee['name'] ?></li>
        <li>所属：<?= $employee['department'] ?></li>
        <li>役職：<?= $employee['post'] ?></li>
        <li>趣味：<?= $detail['hobby'] ?></li>
        <li>所持資格：<?= $detail['license'] ?></li>
        <li>座右の銘：<br><?= $detail['motto'] ?></li>
      </ul>
      <div class="back">
        <a href="list.php" class="btn">&lt; 戻る</a>
      </div>
    </div>

  </main>
</body>