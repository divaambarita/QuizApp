<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data Pemain</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container">
    <h2>Masukkan Data Anda</h2>
    <form id="formPemain" action="quiz.php" method="POST">
      <label for="nama">Nama:</label>
      <input type="text" id="nama" name="nama" required>
      <label for="nim">NIM:</label>
      <input type="text" id="nim" name="nim" required>
      <input type="submit">Mulai Quiz</input>
    </form>
  </div>
  <script>
    function simpanDataPemain() {
      const nama = document.getElementById('nama').value;
      const nim = document.getElementById('nim').value;
      localStorage.setItem('nama', nama);
      localStorage.setItem('nim', nim);
      window.location.href = 'quiz.html';
    }
  </script>
</body>

</html>
