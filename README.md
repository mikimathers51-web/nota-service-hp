# nota-service-hp# Aplikasi Nota Service HP

Aplikasi manajemen service HP dengan fitur:
- 4 tahap alur service (terima → diagnosa → selesai → ambil)
- Cetak nota ke printer thermal Bluetooth (fallback PDF)
- Kirim nota via WhatsApp teks & gambar
- Simpan & impor kontak pelanggan
- Ambil foto device via kamera native
- Backup & restore data ke JSON
- Mode gelap, pengaturan toko, logo custom

## Build APK via GitHub Actions
Push ke branch `main` → otomatis build debug APK.
Buat tag `v*` → build release APK (butuh keystore secrets).
