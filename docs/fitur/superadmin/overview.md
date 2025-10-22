# 👑 Overview untuk Superadmin

Sebagai **Superadmin**, Anda memiliki akses penuh ke seluruh modul dan data master dalam sistem HRIS. Peran ini dirancang khusus untuk pengelola sistem HR tingkat perusahaan yang bertanggung jawab atas konfigurasi, pengawasan, dan administrasi menyeluruh terhadap seluruh aktivitas sumber daya manusia.

## 🔑 Hak Akses Superadmin

| Modul | Akses |
|-------|--------|
| **Manajemen Karyawan** | ✅ Lengkap: tambah, edit, nonaktifkan, hapus semua karyawan (termasuk role *employee* dan *approver*) |
| **Absensi & Kehadiran** | ✅ Lihat & kelola data absensi seluruh karyawan, override kehadiran, atur jadwal kerja |
| **Cuti & Izin** | ✅ Approve/reject semua pengajuan cuti, kelola saldo cuti, atur kebijakan cuti per divisi |
| **Penggajian** | ✅ Akses penuh ke komponen gaji, generate payroll, ekspor slip gaji semua karyawan |
| **Master Data** | ✅ Kelola divisi, jabatan, jenis cuti, hari libur nasional, shift kerja, dan struktur organisasi |
| **Role & Izin** | ✅ Tetapkan siapa yang menjadi *approver*, ubah role karyawan, kelola hak akses |
| **Laporan & Audit** | ✅ Ekspor laporan lengkap, lacak riwayat perubahan data, audit log aktivitas sistem |

> 💡 **Catatan**: Superadmin **tidak bisa di-assign sebagai approver** — perannya bersifat administratif penuh, bukan operasional harian.

## 🛠️ Tugas Utama Superadmin

1. **Menginisiasi Data Awal**  
   - Input struktur organisasi (divisi, departemen, posisi)
   - Buat daftar hari libur nasional & cuti bersama
   - Atur kebijakan absensi dan cuti perusahaan

2. **Mengelola Pengguna Sistem**  
   - Daftarkan karyawan baru
   - Tetapkan karyawan tertentu sebagai **approver** (misal: kepala divisi, HRD)
   - Nonaktifkan akun karyawan yang resign

3. **Mengawasi Alur Persetujuan**  
   - Pantau antrian cuti yang menunggu persetujuan
   - Intervensi manual jika approver tidak merespons
   - Revisi kebijakan alur approval jika diperlukan

4. **Menjaga Integritas Data**  
   - Validasi data absensi dan payroll sebelum closing bulanan
   - Backup & restore data master saat diperlukan
   - Audit perubahan sensitif (misal: perubahan gaji atau status karyawan)

## 🔄 Perbedaan dengan Role Lain

| Fitur | Superadmin | Approver | Employee Biasa |
|-------|------------|----------|----------------|
| Lihat data semua karyawan | ✅ | ❌ | ❌ |
| Edit data master (divisi, jabatan) | ✅ | ❌ | ❌ |
| Approve cuti orang lain | ✅ | ✅ (hanya bawahan) | ❌ |
| Ajukan cuti sendiri | ✅ | ✅ | ✅ |
| Generate payroll semua karyawan | ✅ | ❌ | ❌ |
| Ubah role pengguna | ✅ | ❌ | ❌ |

## 📌 Best Practice untuk Superadmin

- Jangan gunakan akun Superadmin untuk aktivitas harian (misal: absen atau ajukan cuti). Buat akun terpisah jika Anda juga karyawan.
- Batasi jumlah Superadmin — idealnya hanya 1–2 orang per perusahaan.
- Aktifkan **audit log** untuk melacak semua perubahan kritis.
- Lakukan **backup berkala** pada data master dan payroll.

## 🚀 Langkah Selanjutnya

Sebagai Superadmin, Anda dapat mulai dengan:


> 💬 Butuh bantuan? Hubungi tim support atau lihat [dokumentasi API](/api/overview) untuk integrasi otomatis.