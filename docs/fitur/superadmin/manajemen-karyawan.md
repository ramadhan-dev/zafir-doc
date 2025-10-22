# 👥 Manajemen Karyawan

Modul **Manajemen Karyawan** memungkinkan Superadmin untuk mengelola seluruh data karyawan dalam sistem HRIS — mulai dari pendaftaran, pembaruan profil, penugasan role, hingga nonaktifasi akun. Semua data ini menjadi dasar bagi modul lain seperti absensi, cuti, dan payroll.

## 📋 Daftar Fitur

- ✅ Tambah, edit, dan hapus data karyawan
- ✅ Kelola role: *Employee Biasa* atau *Approver*
- ✅ Upload dokumen pendukung (KTP, NPWP, CV, Kontrak)
- ✅ Atur status keaktifan (aktif/resign/nonaktif)
- ✅ Kelola divisi, departemen, dan jabatan
- ✅ Impor data karyawan via Excel (CSV)

---

## ➕ Menambahkan Karyawan Baru

Sebagai Superadmin, Anda dapat menambahkan karyawan secara manual atau massal.

### Langkah Manual:
1. Buka menu **Karyawan > Tambah Karyawan**
2. Isi formulir berikut:
   - Nama lengkap
   - Email (akan digunakan untuk login)
   - Nomor HP
   - Tanggal mulai kerja
   - Divisi & Jabatan
   - Role: pilih **Employee** atau **Approver**
3. Upload dokumen wajib (opsional tapi disarankan)
4. Klik **Simpan**

> 💡 Sistem akan mengirim email otomatis berisi instruksi login jika notifikasi diaktifkan.

### Impor Massal (via Excel):
1. Unduh template Excel dari tombol **Unduh Template**
2. Isi data sesuai kolom yang tersedia
3. Upload file `.xlsx` atau `.csv`
4. Sistem akan validasi dan tampilkan preview
5. Klik **Impor** untuk menyimpan semua data

::: warning
Pastikan format tanggal dan email sesuai! Impor akan gagal jika ada data tidak valid.
:::

---

## 🧑‍💼 Mengelola Role: Employee vs Approver

Setiap karyawan harus memiliki **satu role**:

| Role | Hak Akses |
|------|----------|
| **Employee** | Hanya bisa mengakses data pribadi: absen, ajukan cuti, lihat slip gaji |
| **Approver** | Selain akses employee, juga bisa **approve cuti & absensi bawahan** |

### Cara Mengubah Role:
1. Buka profil karyawan
2. Klik tombol **Edit**
3. Pada bagian **Role**, pilih:
   - `employee` → pengguna biasa
   - `approver` → atasan yang berhak menyetujui
4. Simpan perubahan

> 🔒 Hanya Superadmin yang bisa mengubah role.

---

## 📁 Dokumen Karyawan

Setiap karyawan dapat memiliki dokumen pendukung yang disimpan secara aman:

- KTP
- NPWP
- Ijazah
- Surat Kontrak Kerja
- Foto Profil

### Fitur:
- Upload ulang dokumen kapan saja
- Preview dokumen langsung di browser
- Download semua dokumen dalam satu ZIP

---

## 🚫 Menonaktifkan Karyawan

Jika karyawan resign atau cuti panjang, Anda bisa **menonaktifkannya** tanpa menghapus data:

1. Buka profil karyawan
2. Klik **Nonaktifkan Akun**
3. Pilih alasan: *Resign*, *PHK*, *Cuti Panjang*, dll.
4. Konfirmasi

> ✅ Data absensi, cuti, dan payroll tetap tersimpan untuk keperluan audit.

---

## 🗂️ Struktur Organisasi

Superadmin juga mengelola **master data organisasi** yang menjadi acuan seluruh sistem:

- **Divisi** (misal: Teknologi, Keuangan, HRD)
- **Departemen** (misal: Frontend, Backend, Akuntansi)
- **Jabatan** (misal: Staff, Supervisor, Manager)

Anda bisa:
- Tambah/hapus divisi
- Pindahkan karyawan antar departemen
- Atur hierarki pelaporan (untuk alur approval)

---

## 🔍 Pencarian & Filter

Gunakan fitur pencarian canggih untuk:
- Cari berdasarkan nama, email, atau NIK
- Filter berdasarkan status (aktif/tidak aktif)
- Urutkan berdasarkan tanggal masuk atau divisi

---

## 📤 Ekspor Data

Anda dapat mengekspor seluruh data karyawan ke format:
- Excel (.xlsx)
- CSV
- PDF (daftar ringkas)

Cocok untuk audit internal atau pelaporan ke pihak ketiga.

---

## 🔄 Sinkronisasi dengan Sistem Eksternal

Jika perusahaan menggunakan sistem HR lain (misal: SAP, Talenta), HRIS mendukung:
- Sinkronisasi otomatis via API
- Webhook untuk update real-time
- Mapping field kustom

Hubungi tim IT untuk konfigurasi integrasi.

---

## 🚀 Langkah Selanjutnya

- [🏖️ Kelola Pengajuan Cuti](./cuti-izin.md)
- [🕒 Atur Jadwal Absensi](./absensi.md)
- [💰 Siapkan Data Payroll](./penggajian.md)

> 📌 **Tips**: Simpan backup data karyawan setiap bulan!