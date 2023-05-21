<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // İletişim formundan gelen verileri alalım
  $ad = $_POST['form-ad'];
  $soru = $_POST['form-soru'];
  $mail = $_POST['form-mail'];
  $mesaj = $_POST['form-mesaj'];

  // Yukarıdaki forma veriyi yerleştirelim
  echo '<section class="intro">
          <div class="gradient-custom-1 h-100">
            <div class="mask d-flex align-items-center h-100">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12">
                    <div class="table-responsive bg-white">
                      <table class="table mb-0">
                        <thead>
                          <tr>
                            <th scope="col">AD-SOYAD</th>
                            <th scope="col">SORU</th>
                            <th scope="col">MAİL</th>
                            <th scope="col">MESAJ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>' . $ad . '</td>
                            <td>' . $soru . '</td>
                            <td>' . $mail . '</td>
                            <td>' . $mesaj . '</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>';
}
