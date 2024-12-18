<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h2>Pertanyaan Quiz</h2>
        <?php if ($_POST['nama']): ?>
            <h3><?= $_POST['nama'] ?></h3>
            <h3><?= $_POST['nim'] ?></h3>
        <?php endif ?>
        <div class="quiz-content">
            <div id="containerPertanyaan">
                <h3 id="teksPertanyaan"></h3>
                <div id="opsiJawaban"></div>
            </div>

            <div class="question-navigation">
                <p>Pilih Soal:</p>
                <div id="navBoxes"></div>
            </div>
        </div>

        <p>Progress: <span id="progress">0/10</span></p>
        <p>Waktu Tersisa: <span id="timer">20</span> detik</p>
        <button onclick="soalBerikut()">Berikutnya</button>
    </div>

    <script src="main.js"></script>
    <script src="timer.js"></script>
</body>

</html>