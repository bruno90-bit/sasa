# Kim 💗

Website kejutan romantis sederhana dengan tema pink, PIN, surat singkat, pertanyaan, dan kolom rencana.

## Cara menjalankan di komputer
1. Ekstrak folder `Kim`.
2. Buka `index.html` di browser.

## Ubah nama dan PIN
Buka `script.js`, lalu ubah bagian ini:

```js
const CONFIG = {
  personName: "Putri",
  pin: "123456"
};
```

PIN default adalah `123456`. PIN di website statis bukan sistem keamanan sungguhan karena dapat dilihat di source code.

## Publikasikan gratis lewat GitHub Pages
1. Masuk ke https://github.com dan login.
2. Buat repository baru bernama **Kim**.
3. Unggah `index.html`, `style.css`, `script.js`, dan `README.md` ke halaman utama repository.
4. Buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch **main** dan folder **/(root)**, lalu tekan **Save**.
7. Tunggu sebentar. GitHub akan menampilkan alamat website di bagian Pages, biasanya berbentuk `https://USERNAME.github.io/Kim/`.

## Catatan
- Website ini tidak memakai server atau database.
- Kolom rencana hanya menampilkan konfirmasi di browser; tidak mengirim pesan ke pemilik website.
- Font dari Google Fonts memerlukan koneksi internet; jika offline, font cadangan akan digunakan.
