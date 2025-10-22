# 🧭 Overview Fitur HRIS

Selamat datang di dokumentasi **Fitur HRIS (Human Resource Information System)**.  
Bagian ini menjelaskan fungsi utama dari sistem HRIS yang dirancang untuk membantu perusahaan dalam mengelola data sumber daya manusia secara efisien dan terintegrasi.

---

## 🏢 Apa itu HRIS?

**HRIS (Human Resource Information System)** adalah sistem terpadu untuk manajemen data karyawan, absensi, cuti, penggajian, dan laporan HR.  
Dengan HRIS, seluruh aktivitas HR dapat dilakukan secara **otomatis, cepat, dan akurat** melalui satu platform terpadu.

Sistem ini juga menyediakan **API** yang dapat digunakan untuk integrasi dengan aplikasi eksternal seperti ERP, payroll service, dan sistem absensi fingerprint.

---

## ⚙️ Arsitektur Umum

Struktur sistem HRIS dibagi menjadi dua lapisan utama:

| Lapisan | Deskripsi |
|----------|------------|
| **Mobile App (Flutter)** | Menyediakan antarmuka interaktif untuk admin dan karyawan (dashboard HR, form cuti, laporan, dll). |
| **Frontend (Next.js)** | Menyediakan antarmuka interaktif untuk admin dan karyawan (dashboard HR, form cuti, laporan, dll). |
| **Backend (Express)** | Menangani logika bisnis, autentikasi, pengelolaan data, dan koneksi ke database. |

> API backend menggunakan **Express (Nodejs runtime)** untuk performa tinggi dan efisiensi memory.

---

## 🌟 Daftar Fitur Utama

### 🕒 1. Absensi & Kehadiran

- Check-in / Check-out berbasis lokasi dan perangkat
- Integrasi dengan mesin fingerprint atau RFID
- Rekap otomatis jam kerja, lembur, dan keterlambatan
- Dashboard kehadiran harian dan bulanan



---

### 👥 2. Manajemen Karyawan

- CRUD data karyawan (profil, jabatan, status kerja)
- Manajemen divisi, departemen, dan posisi
- Riwayat kerja dan status keaktifan
- Upload dokumen (KTP, CV, NPWP, kontrak)



---

### 🏖️ 3. Cuti & Izin

- Pengajuan cuti melalui sistem digital
- Persetujuan berjenjang (atasan langsung → HR)
- Perhitungan otomatis saldo cuti tahunan
- Tracking status pengajuan secara real-time


---

### 💰 4. Penggajian (Payroll)

- Otomatisasi perhitungan gaji berdasarkan absensi & lembur
- Komponen tunjangan, potongan, dan pajak
- Slip gaji digital (PDF download)
- Integrasi dengan sistem keuangan perusahaan



---

### 📊 5. Laporan & Analitik

- Laporan absensi, kehadiran, dan keterlambatan
- Statistik cuti per divisi / per bulan
- Grafik perbandingan produktivitas karyawan
- Ekspor laporan ke Excel atau PDF



---

### ⚙️ 6. Pengaturan & Master Data

- Manajemen level jabatan, jenis cuti, dan hari libur nasional
- Konfigurasi sistem (zona waktu, format tanggal, dan notifikasi)
- Role-based Access Control (RBAC)
- Sinkronisasi data dari sistem eksternal


---

## 🔒 Keamanan & Akses

Semua modul dilindungi oleh sistem autentikasi **JWT (JSON Web Token)** dan otorisasi berbasis **role**:

| Role | Akses |
|------|--------|
| **Admin Aplikasi** | Semua modul dan konfigurasi sistem |
| **Superadmin** | Data karyawan, absensi, cuti, payroll |
| **Karyawan** | Data diri, absensi, cuti pribadi, slip gaji |

---

## 🧠 Integrasi Eksternal

HRIS dapat terhubung dengan:

- **Sistem absensi fingerprint / IoT**
- **ERP & Accounting Software**
- **Google Calendar / Outlook**
- **WhatsApp Gateway (notifikasi cuti / payroll)**

---

## 🚀 Teknologi yang Digunakan

| Komponen | Teknologi |
|-----------|------------|
| Mobile App | Flutter |
| Frontend | Next.js 15 + TailwindCSS + Shadcn/UI |
| Backend | Express (Node runtime) |
| Database |  MySQL |
| Auth |  Token |
| Logging Api | Winston |
| Logging HTTPS | Morgan |
| Dokumentasi | VitePress |

---


---

📄 **Catatan:**  
Semua fitur di atas dapat dikustomisasi sesuai kebutuhan perusahaan, termasuk integrasi dengan sistem payroll internal atau API eksternal.

---

© 2025 **Zafir HRIS** — All rights reserved.
