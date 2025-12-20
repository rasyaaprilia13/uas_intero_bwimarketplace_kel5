# Banyuwangi Marketplace - Data Integration Service
Project ini dibuat untuk memenuhi UAS Mata Kuliah Interoperabilitas.
Sistem ini bertujuan untuk mengintegrasikan data produk UMKM dari tiga vendor
yang memiliki struktur JSON berbeda ke dalam satu format standar.

## Anggota Kelompok
1. Rasya Aprilia - 362458302115 (Vendor A)
2. Citra Resa Permata - 362458302019 (Vendor B)
3. Maulina Dwi Wahyunengtias - 36245830 (Vendor C)
4. Nazwa RIdev Ramadhani - 362458302068 (Integrator)

## Branch Repository
- vendorA : Data produk dari Vendor A (legacy system)
- vendorB : Data produk dari Vendor B (modern system)
- vendorC : Data produk dari Vendor C (nested JSON)
- integrator : Parsing, normalisasi, dan integrasi data

## Langkah-langkah Tiap Mahasiswa
# Mahasiswa 1 :
- membuat branch dan file vendor A
- membuat data produk dalam bentuk json : semua tipe data string
- membuat file untuk testing menampilkan di terminal melalui test.js, memanggil datanya
- hasil data saat berhasil ditampilkan :
<img width="549" height="263" alt="image" src="https://github.com/user-attachments/assets/845ff1a4-5038-4e44-88bf-6776a54f003b" />

# Mahasiswa 2 :
- Membuat branch dan file vendor B
- Membuat data produk JSON, menggunakan bahasa inggris dan CamelCase : tipe data number/int, boolean, dan string
- Untuk testing diterminal melalui test.js
- Hasil:
![hasilB](https://github.com/user-attachments/assets/4937bf55-295e-42ef-9f4e-b9a15397f677)

# Mahasiswa 3 :
- Membuat branch dan file vendor C 
- Membuat file JavaScript bernama vendorC.js di dalam folder VendorC. Di dalamnya mendefinisikan data produk dalam bentuk array JSON dengan objek bersarang (nested object),
  yaitu berisi details (name dan category), pricing (base_price dan tax yang dipisah), serta stock. Menggunakan tipe data campuran yaitu number untuk id, base_price, tax,
  dan stock yaitu string untuk name dan category.
- Membuat/memperbarui file test.js di root directory untuk melakukan require data dari ./VendorC/vendorC.js dan menampilkan datanya ke terminal sebagai pengujian
- Menjalankan pengujian di terminal dengan perintah node test.js dan memvalidasi output di terminal untuk memastikan seluruh struktur nested (objek dalam objek) muncul dengan benar. Hasil output yang berhasil ditampilkan:
  <img width="231" height="74" alt="image" src="https://github.com/user-attachments/assets/902ac953-0fab-4738-b602-ef9a345bd014" />

  
