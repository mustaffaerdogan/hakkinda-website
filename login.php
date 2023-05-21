<?php
// Kullanıcı adı ve parola bilgilerini alalım
$username = $_POST['b221210308@sakarya.edu.tr'];
$password = $_POST['b221210308'];

// Kullanıcı adı ve parolayı doğrulayalım
if ($username === 'admin' && $password === 'password') {
    // Giriş başarılı olduğunda yapılacak işlemler
    echo 'Giriş başarılı!';
} else {
    // Giriş başarısız olduğunda yapılacak işlemler
    echo 'Geçersiz kullanıcı adı veya parola.';
}
