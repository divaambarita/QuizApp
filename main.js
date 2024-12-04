const pertanyaan = [
    { teks: "Berapa 2 + 2?", tipe: "mcq", opsi: ["2", "4", "5"], jawaban: "4", poin: 20 },
    { teks: "Ibu kota Prancis adalah?", tipe: "text", jawaban: "paris", poin: 20 },
    { teks: "Berapa hasil dari 5 x 6?", tipe: "mcq", opsi: ["11", "30", "35"], jawaban: "30", poin: 20 },
    { teks: "Siapakah aku?", tipe: "mcq", opsi: ["Dipa", "idoy", "sukit"], jawaban: "sukit", poin: 20 },
    { teks: "Berapa jumlah huruf dalam kata 'dipa'?", tipe: "text", jawaban: "4", poin: 20 }
];

let soalSaatIni = 0;
let skor = 0;
let jawabanUser = [];

function muatSoal() {
    const soal = pertanyaan[soalSaatIni];
    document.getElementById('teksPertanyaan').innerText = soal.teks;
    const opsiJawaban = document.getElementById('opsiJawaban');
    opsiJawaban.innerHTML = '';

    if (soal.tipe === "mcq") {
        soal.opsi.forEach(opsi => {
            const btn = document.createElement("button");
            btn.innerText = opsi;
            btn.onclick = () => cekJawaban(opsi);
            opsiJawaban.appendChild(btn);
        });
    } else if (soal.tipe === "text") {
        const input = document.createElement("input");
        input.type = "text";
        input.onchange = (e) => cekJawaban(e.target.value);
        opsiJawaban.appendChild(input);
    }

    updateActiveNavBox();
}

function cekJawaban(jawaban) {
    const soal = pertanyaan[soalSaatIni];
    if (jawaban === soal.jawaban) {
        skor += soal.poin;
    }
    jawabanUser[soalSaatIni] = { soal: soal.teks, jawaban, benar: jawaban === soal.jawaban };
    soalBerikut();
}

function soalBerikut() {
    soalSaatIni++;
    if (soalSaatIni < pertanyaan.length) {
        document.getElementById("progress").innerText = `${soalSaatIni + 1}/${pertanyaan.length}`;
        muatSoal();
        resetTimer(); 
    } else {
        selesaiQuiz();
    }
}

function soalKe(index) {
    soalSaatIni = index;
    document.getElementById("progress").innerText = `${soalSaatIni + 1}/${pertanyaan.length}`;
    muatSoal();
    resetTimer();
}

function selesaiQuiz() {
    localStorage.setItem('skor', skor);
    window.location.href = "result.html";
}

function buatNavBoxes() {
    const navBoxes = document.getElementById("navBoxes");
    pertanyaan.forEach((_, index) => {
        const box = document.createElement("div");
        box.classList.add("nav-box");
        box.innerText = index + 1;
        box.onclick = () => soalKe(index);
        navBoxes.appendChild(box);
    });
}

function updateActiveNavBox() {
    const navBoxes = document.querySelectorAll(".nav-box");
    navBoxes.forEach((box, index) => {
        if (index === soalSaatIni) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    muatSoal();
    buatNavBoxes();
});
