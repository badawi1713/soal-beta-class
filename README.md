# Jawaban untuk Soal Beta Class (04/01/2020)
#### Oleh: Dzaky Badawi

### Bismillah
#### Jawaban nomor 1,2,4,5:
##### Untuk jawaban nomor 1,2,4,5 saya menggunakan bahasa pemrograman Javascript yang dapat deksekusi melalui https://es6console.com/

#### Jawaban nomor 3:
##### Untuk jawaban nomor 3 saya menggunakan bahasa pemrograman PHP yang dapat deksekusi melalui https://www.onlinegdb.com/

#### Jawaban nomor 6:
##### Lakukan import database yang ada pada folder "database", lalu lakukan konfigurasi database yang ada pada folder 'utils/connection.js' ssai dengan pengaturan yang diinginkan!

##### Nama database yang digunakan adalah "db_pos" dengan berbagai tabel seperti:
##### A. tabel "t_product", dengan stuktur berikut:
Column | Type | Size
------------ | -------------| -------------
id | int | 11
product_name | Varchar | 60
price | int | 11
category | Varchar | 60

##### B. tabel "t_cashier", dengan stuktur berikut:
Column | Type | Size
------------ | -------------| -------------
id | int | 11
cashier_name | Varchar | 45

##### C. tabel "t_order", dengan stuktur berikut:
Column | Type | Size
------------ | -------------| -------------
id | int | 11
id_product | int | 11
id_cashier | int | 11
date | Varchar | 45

## Project setup
```
npm install --save
```
## Compiles and run Node.js server
```
nodemon
```
```
localhost:3001
```

### Demo Example of basic POS App CRUD with Node.js (Express), EJS, and MYSQL:
#### 1st image, halaman utama yang menampilkan daftar order-an. Dimana user dapat melihat daftar order yang telah ditambahkan dan juga terdapat tombol untuk menambah order. Selain itu juga pada navigasi atas terdapat menu lain yaitu "Product" untuk menuju ke halaman Product.

![First image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/1.PNG)

#### 2nd image, untuk menambah order baru dapat mengisikan form add order pada halaman indeks '/'

![Second image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/2.PNG)

#### 3rd image, pada halaman product terdapat daftar product yang telah didaftarkan. Pengguna dapat melakukan tambah product, melakukan edit, dan menghapusnya.

![Third image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/3.PNG)

#### 4th image, menambah produk yang akan ditambahkan.

![Fourth image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/4.PNG)

#### 5th image, form untuk melakukan edit data produk yang telah ditambahkan.

![Fifth image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/5.PNG)

#### 6th image, apabila ingin menghapus data produk akan tampil konfirmasi seperti berikut.

![Sixth image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/6.PNG)

### Thank you!
