# Jawaban untuk Soal Beta Class (04/01/2020) - Dzaky Badawi

###Bismillah
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
product_name | String | 60
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

### Example of basic POS App CRUD with Node.js (Express), EJS, and MYSQL:
#### 1st image, my to-do-list app Index page! When list item is created successfully, the list item will appear on the table.

![First image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/1.PNG)

#### 2nd image, to insert new list item we must add item data by click on "+ Add Item" button and the modal will pop up, then you must input the list item title.

![Second image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/2.PNG)

#### 3rd image, to edit the list item title, you can click the edit button.

![Third image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/3.PNG)

#### 4th image, the result after list item title that been edited.

![Fourth image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/4.PNG)

#### 5th image, to delete single list item you can click the delete button and the confirmation box will appear to confirm your action.

![Fifth image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/5.PNG)

#### 6th image, if your list item is empty, the view of the index page will appear like this.

![Sixth image](https://github.com/badawi1713/soal-beta-class/blob/master/jawaban-06/pos-app-basic/public/images/6.PNG)

##### Thank you!
