const hari = document.getElementById("hari");
const jam = document.getElementById("jam");
const menit = document.getElementById("menit");
const detik = document.getElementById("detik");

const tahunSekarang = new Date().getFullYear();

const rencanaWaktu = new Date("December 1, 2024 00:00:00");

const updateWaktu = () => {
	const waktuSekarang = new Date();
	const selisihWaktu = rencanaWaktu - waktuSekarang;
	const d = Math.floor(selisihWaktu / 1000 / 60 / 60 / 24);
	const h = Math.floor(selisihWaktu / 1000 / 60 / 60) % 24;
	const m = Math.floor(selisihWaktu / 1000 / 60) % 60;
	const s = Math.floor(selisihWaktu / 1000) % 60;

	hari.innerHTML = d;
	jam.innerHTML = h < 10 ? "0" + h : h;
	menit.innerHTML = m;
	detik.innerHTML = s;
};

setInterval(updateWaktu, 1000);
