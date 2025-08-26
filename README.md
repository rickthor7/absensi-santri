# Sistem Absensi Digital Santri

Sebuah aplikasi web sederhana untuk mencatat absensi harian santri secara digital. Proyek ini bersifat _serverless_, memanfaatkan kekuatan Google Workspace (Sheets, Drive, Apps Script) sebagai backend-nya.

## Deskripsi

Aplikasi ini dirancang untuk mempermudah proses absensi di lingkungan pesantren. Santri dapat dengan mudah mencatat kehadiran mereka untuk setiap kegiatan harian yang telah dijadwalkan. Sistem secara otomatis akan menampilkan kegiatan yang relevan berdasarkan waktu akses, dan memungkinkan santri untuk mengunggah bukti foto kehadiran yang akan disimpan langsung ke Google Drive.

## Fitur Utama

- **Absensi Berbasis Waktu**: Kegiatan absensi (contoh: Sholat Subuh, Setoran Pagi) muncul secara otomatis sesuai dengan jadwalnya.
- **Input Sederhana**: Antarmuka yang bersih dan mudah digunakan untuk input nama dan status kehadiran (Hadir, Izin, Alfa).
- **Unggah Bukti Foto**: Santri dapat mengunggah foto sebagai bukti kehadiran, yang akan langsung disimpan di Google Drive.
- **Database Real-time**: Semua data absensi tercatat secara instan di dalam Google Sheet.
- **Desain Responsif**: Tampilan yang menyesuaikan dengan berbagai ukuran layar, baik di desktop maupun perangkat mobile.
- **Tema Islami Modern**: Desain visual dengan sentuhan ornamen Islami yang modern dan menenangkan.
- **Serverless**: Tidak memerlukan hosting atau server tradisional. Sepenuhnya berjalan di ekosistem Google.

## Tumpukan Teknologi (Technology Stack)

- **Frontend**: HTML, CSS, JavaScript (Vanilla JS)
- **Backend**: Google Apps Script
- **Database**: Google Sheets
- **Penyimpanan File**: Google Drive

## Struktur Proyek

.  
├── index.html # File utama antarmuka pengguna (UI) untuk absensi  
└── README.md # File dokumentasi yang sedang Anda baca  

- **index.html**: Berisi struktur (HTML), gaya (CSS), dan logika (JavaScript) dari aplikasi web.
- **Code.gs** (di Google Apps Script): Bertindak sebagai backend yang menjembatani index.html dengan Google Sheets dan Google Drive.

## Panduan Pemasangan (Setup Guide)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di akun Google Anda sendiri.

### Langkah 1: Siapkan Google Drive & Google Sheets

1. **Buat Folder Google Drive**:
    - Buka Google Drive, buat folder baru (misal: Bukti Absensi Santri).
    - Buka folder tersebut dan salin **ID Folder** dari URL. (Contoh: .../folders/ID_FOLDER_ANDA_DISINI).
2. **Buat Google Sheet**:
    - Buat Spreadsheet baru (misal: Database Absensi Digital).
    - Ganti nama _sheet_ di tab bawah menjadi data_absensi.
    - Buat 5 kolom di baris pertama dengan judul: Timestamp, Nama, Kegiatan, Status, Link_Bukti_Foto.

### Langkah 2: Konfigurasi Google Apps Script

1. Dari file Google Sheet Anda, buka **Ekstensi** > **Apps Script**.
2. Hapus kode contoh dan tempelkan kode dari file Code.gs yang telah disediakan sebelumnya.
3. Ganti GANTI_DENGAN_ID_FOLDER_DRIVE_ANDA dengan ID Folder Google Drive dari langkah sebelumnya.
4. **Simpan** proyek script.
5. Klik **Deploy** > **Deployment baru**.
6. Pilih jenis deployment **Aplikasi Web** (Web app).
7. Pada bagian **Siapa yang memiliki akses**, ubah menjadi **Siapa saja (Anyone)**. Ini sangat penting.
8. Klik **Deploy** dan berikan otorisasi akses yang diminta.
9. **Salin URL Aplikasi Web** yang ditampilkan.

### Langkah 3: Konfigurasi Frontend

1. Buka file index.html.
2. Cari baris const SCRIPT_URL = "GANTI_DENGAN_URL_SCRIPT_ANDA";.
3. Tempelkan **URL Aplikasi Web** yang Anda salin dari Langkah 2 untuk menggantikan placeholder tersebut.
4. Simpan file index.html.

## Cara Menggunakan

1. Buka file index.html menggunakan browser web apa pun (Google Chrome, Firefox, dll.).
2. Halaman akan secara otomatis menampilkan kegiatan absensi sesuai dengan waktu saat ini.
3. Masukkan nama lengkap Anda.
4. Pilih status kehadiran. Jika memilih "Hadir", opsi untuk mengunggah foto akan muncul.
5. Unggah foto bukti (jika diperlukan).
6. Klik tombol "Kirim Absen".
7. Data Anda akan langsung tercatat di Google Sheet.

## Kustomisasi

Anda dapat dengan mudah menyesuaikan aplikasi ini:

- **Jadwal Kegiatan**: Untuk mengubah jam kegiatan, modifikasi fungsi tentukanKegiatan() di dalam tag &lt;script&gt; pada file index.html.
- **Tampilan**: Untuk mengubah warna, font, atau ornamen, modifikasi kode CSS di dalam tag &lt;style&gt; pada file index.html.

## Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](https://opensource.org/licenses/MIT).
