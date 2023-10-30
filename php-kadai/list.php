<?php
$dsn = 'mysql:dbname=employees_db;host=localhost;charset=utf8mb4';
$user = 'root';
$password = '';

try {
  $pdo = new PDO($dsn, $user, $password);

  // 社員リストの表示

  $sql = 'SELECT * FROM employees_list WHERE 1';

  // SQL文を実行する
  $stmt = $pdo->query($sql) ;

  // SQL文の実行結果を配列で取得する
  $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);

} catch (PDOException $e) {
  exit($e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>社員名簿</title>
    <link rel="stylesheet" href="css/style.css">

    <!-- Google Fontsの読み込み -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
</head>

<body>

  <main>
    <article class="employees">
      <h1>社員名簿</h1>

      <table class="employee-table">
        <tr>
          <th>社員番号</th>
          <th>氏名</th>
          <th>部署</th>
          <th>役職</th>
          <th>性別</th>
          <th>年齢</th>
        </tr>
        <?php
          // 配列の中身を順番に取り出し、表形式で出力する
          foreach($employees as $employee) {
            // 性別は文字の色を変える
            if( $employee['sex'] === "男性") {
              $color = 'color:blue';
            } else {
              $color = 'color:red';
            }
            $table_row = "
                <tr>
                <td>{$employee['enum']}</td>
                <td><a href='detail.php?enum={$employee['enum']}'>{$employee['name']}</a></td>
                <td>{$employee['department']}</td>
                <td>{$employee['post']}</td>
                <td><span style=$color>{$employee['sex']}</span></td>
                <td>{$employee['age']}</td>
                </th>
            ";
            echo $table_row;

          }
        ?>
      </table>
    </article>
  </main>
</body>