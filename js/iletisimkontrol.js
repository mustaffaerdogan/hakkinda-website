new Vue({
    el: '#contact',
    data: {
        ad: '',
        soru: '',
        mail: '',
        mesaj: ''
    },
    methods: {
        temizleForm: function () {
            this.ad = '';
            this.soru = '';
            this.mail = '';
            this.mesaj = '';
        },
        formuGonder: function () {
            if (this.kontrolEt()) {
                // Formu gönderme işlemleri burada yapılır
                console.log('Form gönderildi!');
            }
        },
        kontrolEt: function () {
            // Ad kontrolü
            if (this.ad === '') {
                alert('Lütfen adınızı girin!');
                return false;
            }

            // E-posta kontrolü
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.mail)) {
                alert('Geçerli bir e-posta adresi girin!');
                return false;
            }

            return true;
        }
    }
});