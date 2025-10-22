# Superadmin Dashboard

Halaman ini menyediakan ringkasan dan navigasi ke berbagai modul administratif yang hanya dapat diakses oleh pengguna dengan peran **Superadmin**.

## Rute yang Dapat Diakses

Berikut adalah daftar rute (URL) yang tersedia secara eksklusif untuk superadmin:

| Modul | URL Path | Deskripsi |
|-------|----------|-----------|
| Departemen | `/admin/department` | Mengelola data departemen perusahaan. |
| Karyawan | `/admin/employee` | Mengelola data karyawan, termasuk penambahan, pembaruan, dan penghapusan. |
| Level Karyawan | `/admin/employeeLevel` | Mengatur hierarki atau level jabatan karyawan (misal: Junior, Senior, Manager). |
| Lokasi Absensi | `/admin/locationAttendance` | Mengelola lokasi-lokasi yang diizinkan untuk absensi karyawan. |
| Jenis Permintaan | `/admin/requestType` | Mengatur jenis-jenis permintaan yang dapat diajukan karyawan (misal: cuti, izin, lembur). |
| Kuota Cuti | `/admin/leaveQuota` | Menentukan alokasi kuota cuti berdasarkan level karyawan atau kebijakan perusahaan. |

> ⚠️ **Catatan**: Semua rute di atas memerlukan autentikasi dan otorisasi sebagai **Superadmin**. Akses oleh pengguna biasa atau admin biasa akan ditolak.

## Fitur Dashboard

- **Ringkasan Data**: Menampilkan jumlah total departemen, karyawan aktif, dan permintaan tertunda.
- **Navigasi Cepat**: Tautan langsung ke modul administratif utama.
- **Log Aktivitas**: Riwayat aktivitas terbaru yang dilakukan oleh superadmin lain (jika tersedia).

---

> 💡 Untuk informasi lebih lanjut tentang struktur API atau integrasi dengan frontend, lihat dokumentasi [API Reference](/api-reference) atau [Frontend Integration](/frontend-guide).