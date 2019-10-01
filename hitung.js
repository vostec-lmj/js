//|=======================================================================|\\
//| Script By Wahyu                                                       |\\
//| WhatsApp https://wa.me/6285804041617&text=Hai%3ABoleh%20Kenalan%20Gak |\\
//|=======================================================================|\\

function getDina (day, month, year) {
var tempyear, valdlookup, valdlookupday, dinane;
var dina = [null, "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
var dinalookup = new Array();
dinalookup[1] = [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0];
dinalookup[2] = [3, 6, 6, 2, 4, 0, 2, 5, 1, 3, 6, 1];
dinalookup[3] = [4, 0, 1, 4, 6, 2, 4, 0, 3, 5, 1, 3];
dinalookup[4] = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
dinalookup[5] = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
dinalookup[6] = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
dinalookup[7] = [2, 5, 6, 2, 4, 0, 2, 5, 1, 3, 6, 1];
dinalookup[8] = [4, 0, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2];
dinalookup[9] = [5, 1, 1, 4, 6, 2, 4, 0, 3, 5, 1, 3];
dinalookup[10] = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
dinalookup[11] = [0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
dinalookup[12] = [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0];
dinalookup[13] = [3, 6, 6, 2, 4, 0, 2, 5, 1, 3, 6, 1];
dinalookup[14] = [4, 0, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2];
dinalookup[15] = [5, 1, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
dinalookup[16] = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
dinalookup[17] = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
dinalookup[18] = [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0];
dinalookup[19] = [3, 6, 0, 3, 5, 1, 3, 5, 2, 4, 0, 2];
dinalookup[20] = [5, 1, 1, 4, 6, 2, 4, 0, 3, 5, 1, 3];
dinalookup[21] = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
dinalookup[22] = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
dinalookup[23] = [1, 4, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0];
dinalookup[24] = [3, 6, 6, 2, 4, 0, 2, 5, 1, 3, 6, 1];
dinalookup[25] = [4, 0, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2];
dinalookup[26] = [5, 1, 1, 4, 6, 2, 4, 0, 3, 5, 1, 3];
dinalookup[27] = [6, 2, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
dinalookup[28] = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
tempyear = year+15;
if (tempyear % 28 == 0) {
valdlookup = dinalookup[28][month-1];}
else {
valdlookup = dinalookup[tempyear % 28][month-1];}
valdlookupday = valdlookup + day;
if (valdlookupday > 7) {
if (valdlookupday % 7 == 0) {
dinane = dina[7];}
else {
dinane = dina[(valdlookupday % 7)];}
}
else {
dinane = dina[valdlookupday];}
return dinane;
}
function getPasaran (day, month, year) {
var tempyear, valplookup, valplookupday, pasarane;
var pasaran = [null, "Legi", "Pahing", "Pon", "Wage", "Kliwon"];
var pasaranlookup = new Array();
pasaranlookup[1] = [1, 2, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1];
pasaranlookup[2] = [2, 3, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1];
pasaranlookup[3] = [2, 3, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1];
pasaranlookup[4] = [2, 3, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1];
pasaranlookup[5] = [2, 3, 2, 3, 3, 4, 4, 0, 1, 1, 2, 2];
pasaranlookup[6] = [3, 4, 2, 3, 3, 4, 4, 0, 1, 1, 2, 2];
pasaranlookup[7] = [3, 4, 2, 3, 3, 4, 4, 0, 1, 1, 2, 2];
pasaranlookup[8] = [3, 4, 2, 3, 3, 4, 4, 0, 1, 1, 2, 2];
pasaranlookup[9] = [3, 4, 3, 4, 4, 0, 0, 1, 2, 2, 3, 3];
pasaranlookup[10] = [4, 0, 3, 4, 4, 0, 0, 1, 2, 2, 3, 3];
pasaranlookup[11] = [4, 0, 3, 4, 4, 0, 0, 1, 2, 2, 3, 3];
pasaranlookup[12] = [4, 0, 3, 4, 4, 0, 0, 1, 2, 2, 3, 3];
pasaranlookup[13] = [4, 0, 4, 0, 0, 1, 1, 2, 3, 3, 4, 4];
pasaranlookup[14] = [0, 1, 4, 0, 0, 1, 1, 2, 3, 3, 4, 4];
pasaranlookup[15] = [0, 1, 4, 0, 0, 1, 1, 2, 3, 3, 4, 4];
pasaranlookup[16] = [0, 1, 4, 0, 0, 1, 1, 2, 3, 3, 4, 4];
pasaranlookup[17] = [0, 1, 0, 1, 1, 2, 2, 3, 4, 4, 0, 0];
pasaranlookup[18] = [1, 2, 0, 1, 1, 2, 2, 3, 4, 4, 0, 0];
pasaranlookup[19] = [1, 2, 0, 1, 1, 2, 2, 3, 4, 4, 0, 0];
pasaranlookup[20] = [1, 2, 0, 1, 1, 2, 2, 3, 4, 4, 0, 0];
tempyear = year+17;
if (tempyear % 20 == 0) {
valplookup = pasaranlookup[20][month-1];}
else {
valplookup = pasaranlookup[tempyear % 20][month-1];}
valplookupday = valplookup + day;
if (valplookupday > 5) {
if (valplookupday % 5 == 0) {
pasarane = pasaran[5];}
else {
pasarane = pasaran[(valplookupday % 5)];}
}
else {
pasarane = pasaran[valplookupday];}
return pasarane;
}
function getNeptu (dinane, pasarane) {
var neptu;
var dina = new Array();
dina["Minggu"] = 5;
dina["Senin"] = 4;
dina["Selasa"] = 3;
dina["Rabu"] = 7;
dina["Kamis"] = 8;
dina["Jum'at"] = 6;
dina["Sabtu"] = 9;
var pasaran = new Array();
pasaran["Legi"] = 5;
pasaran["Pahing"] = 9;
pasaran["Pon"] = 7;
pasaran["Wage"] = 4;
pasaran["Kliwon"] = 8;
neptu = dina[dinane] + pasaran[pasarane];
return neptu;
}
function getFullYear(){
var year = this.getFullYear();
if(year < 1000){
year += 1900;}
return year
}
function hitung() {
var dina, pasaran, neptu;
var bulan = [null, "Januari", "Pebruari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var thedate = parseInt(document.forms[0].date.value);
var themonth = parseInt(document.forms[0].month.value);
var theyear = parseInt(document.forms[0].year.value);
var ddate = new Date (theyear, themonth-1, thedate);
var dinaddate = getDina (thedate, themonth, theyear);
var pasaranddate = getPasaran (thedate, themonth, theyear);
var selamatand = dinaddate + " " + pasaranddate + " " + thedate+ " " + bulan[themonth] + " " + theyear;
var date3 = new Date(ddate.getTime() + 3*24*60*60*1000);
var daydate3 = date3.getDate();
var monthdate3 = date3.getMonth()+1;
var yeardate3 = date3.getFullYear();
var dinadate3 = getDina (daydate3, monthdate3, yeardate3);
var pasarandate3 = getPasaran (daydate3, monthdate3, yeardate3);
var selamatan3 = dinadate3 + " " + pasarandate3 + " " + daydate3 + " " + bulan[monthdate3] + " " + yeardate3;
var date7 = new Date(ddate.getTime() + 7*24*60*60*1000);
var daydate7 = date7.getDate();
var monthdate7 = date7.getMonth()+1;
var yeardate7 = date7.getFullYear();
var dinadate7 = getDina (daydate7, monthdate7, yeardate7);
var pasarandate7 = getPasaran (daydate7, monthdate7, yeardate7);
var selamatan7 = dinadate7 + " " + pasarandate7 + " " + daydate7 + " " + bulan[monthdate7] + " " + yeardate7;
var date40 = new Date(ddate.getTime() + 40*24*60*60*1000);
var daydate40 = date40.getDate();
var monthdate40 = date40.getMonth()+1;
var yeardate40 = date40.getFullYear();
var dinadate40 = getDina (daydate40, monthdate40, yeardate40);
var pasarandate40 = getPasaran (daydate40, monthdate40, yeardate40);
var selamatan40 = dinadate40 + " " + pasarandate40 + " " + daydate40 + " " + bulan[monthdate40] + " " + yeardate40;
var date100 = new Date(ddate.getTime() + 100*24*60*60*1000);
var daydate100 = date100.getDate();
var monthdate100 = date100.getMonth()+1;
var yeardate100 = date100.getFullYear();
var dinadate100 = getDina (daydate100, monthdate100, yeardate100);
var pasarandate100 = getPasaran (daydate100, monthdate100, yeardate100);
var selamatan100 = dinadate100 + " " + pasarandate100 + " " + daydate100 + " " + bulan[monthdate100] + " " + yeardate100;
var date354 = new Date(ddate.getTime() + 354*24*60*60*1000);
var daydate354 = date354.getDate();
var monthdate354 = date354.getMonth()+1;
var yeardate354 = date354.getFullYear();
var dinadate354 = getDina (daydate354, monthdate354, yeardate354);
var pasarandate354 = getPasaran (daydate354, monthdate354, yeardate354);
var selamatan354 = dinadate354 + " " + pasarandate354 + " " + daydate354 + " " + bulan[monthdate354] + " " + yeardate354;
var date708 = new Date(ddate.getTime() + 708*24*60*60*1000);
var daydate708 = date708.getDate();
var monthdate708 = date708.getMonth()+1;
var yeardate708 = date708.getFullYear();
var dinadate708 = getDina (daydate708, monthdate708, yeardate708);
var pasarandate708 = getPasaran (daydate708, monthdate708, yeardate708);
var selamatan708 = dinadate708 + " " + pasarandate708 + " " + daydate708 + " " + bulan[monthdate708] + " " + yeardate708;
var date1000 = new Date(ddate.getTime() + 1000*24*60*60*1000);
var daydate1000 = date1000.getDate();
var monthdate1000 = date1000.getMonth()+1;
var yeardate1000 = date1000.getFullYear();
var dinadate1000 = getDina (daydate1000, monthdate1000, yeardate1000);
var pasarandate1000 = getPasaran (daydate1000, monthdate1000, yeardate1000);
var selamatan1000 = dinadate1000 + " " + pasarandate1000 + " " + daydate1000 + " " + bulan[monthdate1000] + " " + yeardate1000;
document.write (
"<html>\n" +
"<head>\n" +
"<title>Hasil Perhitungan</title>\n" +
"<style type=\"text/css\">\n" +
"body\n" +
"{text-align:justify; }\n" +
"p, td, li\n" +
"{ \n" +
" font-family: arial, verdana, Helvetica, Geneva, sans-serif; \n" +
" color: #000000; \n" +
" text-decoration: none; \n" +
" font-size: 17px; \n" +
"}\n" +
"h3\n" +
"{ \n" +
" font-family: arial, verdana, Helvetica, Geneva, sans-serif;\n " +
" color: #000000; \n" +
" text-decoration: none; \n" +
" font-size: 20px; \n" +
"}\n" +
"</style>\n" +
"</head>\n" +
"<body>\n" +
"<h3>Hasil Perhitungan</h3>\n" + "<b>NAMA : <input placeholder=\"tambahkan nama almarhum / almarhumah\" style=\"text-transform:uppercase;border:0px;font-family: -webkit-body;font-weight: bold;font-size: large;width:80%;\"></input></b>\n" +
"<ol>\n" +
"<b><li>Selamatan tepat hari meninggal <i>(geblake)</i> : </b>" + selamatand + "</li>\n" +
"<b><li>Selamatan 3 hari meninggal : </b>" + selamatan3 + "</li>\n" +
"<b><li>Selamatan 7 hari meninggal : </b>" + selamatan7 + "</li>\n" +
"<b><li>Selamatan 40 hari meninggal : </b>" + selamatan40 + "</li>\n" +
"<b><li>Selamatan 100 hari meninggal : </b>" + selamatan100 + "</li>\n" +
"<b><li>Selamatan Pendhak I (354 hari) meninggal : </b>" + selamatan354 + "</li>\n" +
"<b><li>Selamatan Pendhak II (708 hari) meninggal : </b>" + selamatan708 + "</li>\n" +
"<b><li>Selamatan 1000 hari meninggal : </b>" + selamatan1000 + "</li>\n" +
"</ol>\n" +
"<div id=\"jowotenan\">\n" +
"<p><b>Persyaratan <i>(ubarampene)</i> selamatan untuk orang yang meninggal :</b><br>\n" +
"<ol>\n" +
" <li>Nasi gurih, lauk pauknya <i>garingan</i>, artinya tidak boleh memakai sayur-sayuran. Lauknya biasanya <b><i>ingkung ayam</i></b>, yaitu ayam yang lengkap dengan jerohannya, dimasak kering (panggang) dalam keadaan <i>wutuh</i> artinya seekor tidak dipotong-potong , sedangkan lainnya boleh dipotong seperti biasa.</li>\n" +
" <li>Kue-kuenya, jangan melupakan kue <b><i>apem.</i></b></li>\n" +
" <li><b><i>Kembang Kum</i></b> yaitu bunga yang ditempatkan dalam tempat yang berisi air</li>" +
" <li><b><i>Salawate (saren)</i></b> sekadarnya.</li>\n" +
" <li>Juga jangan lupa membuat <b><i>sandingan</i></b> yaitu semacam sajen yang bahannya diambilkan dari makanan yang dipakai selamatan, seperti nasi gurih, lauk yang dipakai selamatan dengan kue-kue yang ada, kopi, <i>kembang kum</i>, rokok + korek dan kendi isi air mentah serta kobokan isi air (untuk cuci tangan). </li>\n" +
"</ol>\n" +
"<p>Barang-barang tersebut ditempatkan pada tempat tertentu yang tidak terganggu oleh orang yang lalu lalang dan diberi lampu (boleh listrik yang ada di ruangan itu, atau lampu teplok dan sebagainya kalau belum ada aliran listrik )</p>\n" +
"<p><b>Khusus untuk selamatan 1000 hari :</b><br>\n" +
"<i>Ubarampe</i> di atas ditambah dengan kain kafan 3 m, tikar, sandal, piring, cangkir 1 stel, sendok, payung, lampu teplok, kalau ada pakaian atau benda-benda yang menjadi kelangenan / kesenangan orang yang meninggal tersebut dapat diikutsertakan. <br>\n" +
"Semua barang-barang ini ikut dikendurikan.</p>\n" +
"<p><b>Hal-hal yang harus diingat yaitu:</b><br>\n" +
"<ol>\n" +
" <li>Walaupun menyembelih kambing atau sapi, tetapi jangan lupa lauk ingkung ayam. </li>\n" +
" <li>Kalau disembelihkan kambing atau sapi, kulitnya jangan dijual tetapi disedekahkan.</li>\n" +
" <li>Lauk yang dipergunakan untuk selamatan itu harus habis pada malam itu juga dan jangan sampai menyisakan untuk hari esok, lebih-lebih kalau sisa itu berupa yang masih mentah, misalnya : satu paha sapi, atau kambing.</li>\n" +
"</ol>\n" +
"</p>\n" +
"<center><button onclick=\"document.getElementById('jowotenan').style.display = 'none';\">SEMBUNYIKAN PERSYARATAN</button></center>\n" +
"</div><br>\n" +
"<center><button onclick=\"window.print();\">CETAK</button><br><span style=\"font-size:12px;\">Jasa Hitung Tahlilan Online Vostec Lumajang</span></center>\n" +
"</body>\n" +
"</html>\n"
);
return null;
}
