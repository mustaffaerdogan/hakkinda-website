<?php
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

if ($username === 'b221210308@sakarya.edu.tr' && $password === 'b221210308') {
    echo 'Giriş başarılı! 5 saniye sonra Anasayfaya otomatik yönlendirileceksiniz. ';
    header("refresh:5; url=index.html"); // 5 saniye sonra index.html sayfasına yönlendirme
} else {
    echo 'Geçersiz kullanıcı adı veya parola.  5 saniye sonra Login sayfasına tekrar yönlendirileceksiniz.';
    header("refresh:5; url=login.html"); // 5 saniye sonra login.html sayfasına yönlendirme
    exit; // Kodun devamını çalıştırmamak için çıkış yapılıyor.
}
