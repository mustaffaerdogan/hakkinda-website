
function temizleForm() {
    // Form alanlarına erişip ve formu temizleriz.
    document.getElementById("form-ad").value = "";
    document.getElementById("form-mail").value = "";
    document.getElementById("form-mesaj").value = "";
}


fetch('https://app.sheetlabs.com/RAPI/Top100movieslist')
    .then(response => response.json())
    .then(data => {
        // REST API veri çekme işlemleri.
        console.log(data);

        document.getElementById("movie-desc1").textContent = data[0].description;
        document.getElementById("movie-desc2").textContent = data[1].description;
        document.getElementById("movie-desc3").textContent = data[2].description;
        document.getElementById("movie-desc4").textContent = data[3].description;
        document.getElementById("movie-desc5").textContent = data[4].description;
        document.getElementById("movie-desc6").textContent = data[5].description;


        document.getElementById("movie-title1").textContent = data[0].title;
        document.getElementById("movie-title2").textContent = data[1].title;
        document.getElementById("movie-title3").textContent = data[2].title;
        document.getElementById("movie-title4").textContent = data[3].title;
        document.getElementById("movie-title5").textContent = data[4].title;
        document.getElementById("movie-title6").textContent = data[5].title;


        document.getElementById("movie-img1").setAttribute("src", data[0].image)
        document.getElementById("movie-img2").setAttribute("src", data[1].image)
        document.getElementById("movie-img3").setAttribute("src", data[2].image)
        document.getElementById("movie-img4").setAttribute("src", data[3].image)
        document.getElementById("movie-img5").setAttribute("src", data[4].image)
        document.getElementById("movie-img6").setAttribute("src", data[5].image)


    })
    .catch(error => {
        // Hata durumunda burası çalışır
        console.error('Hata veriler çekilemiyor. :', error);
    });

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Formun otomatik gönderilmesini engelle

    // Form verilerini al
    var ad = document.querySelector('#form-ad').value;
    var soru = document.querySelector('#form-soru').value;
    var mail = document.querySelector('#form-mail').value;
    var mesaj = document.querySelector('#form-mesaj').value;

    // Tabloya verileri ekle
    var tablo = window.opener.document.querySelector('#hedef-tablo');
    var satir = tablo.insertRow();
    var hucre1 = satir.insertCell();
    hucre1.innerHTML = ad;
    var hucre2 = satir.insertCell();
    hucre2.innerHTML = soru;
    var hucre3 = satir.insertCell();
    hucre3.innerHTML = mail;
    var hucre4 = satir.insertCell();
    hucre4.innerHTML = mesaj;

    // Formu temizle
    document.querySelector('form').reset();
});

