function tahminKontrol() {
    const tahminInput = document.getElementById('tahminInput');
    const sonucMesaji = document.getElementById('sonuc');

    const kullaniciTahmini = parseInt(tahminInput.value);

    // try catch yapısını kullanarak yapmalıyız :) 
    if (isNaN(kullaniciTahmini) || kullaniciTahmini < 1 || kullaniciTahmini > 10) {
        sonucMesaji.innerHTML = 'Lütfen 1 ile 10 arasında geçerli bir sayı girin.';
        sonucMesaji.style.color = 'red';
    } else {
        const gizliSayi = Math.floor(Math.random() * 10) + 1;
         /*
            böyle iç içe if yerine 14-20 arası satırları 
            farklı bir fonksiyon içinde yapıp çağırabiliriz.
        */
        if (kullaniciTahmini === gizliSayi) {
            sonucMesaji.innerHTML = 'Tebrikler! Doğru tahmin ettiniz!';
            sonucMesaji.style.color = 'green';
        } else {
            sonucMesaji.innerHTML = 'Yanlış tahmin. Tekrar deneyin!';
            /*
                inner html 4 farklı yerde kullanmışız. 
                bunuda ayrı bir fonksiyon ile message parametresi 
                alıp yazdıracak şekilde yapabiliriz.
            */
            sonucMesaji.style.color = 'red';
            /*
                color yine 4 farklı yerde kullanmışız. 
                bunuda ayrı bir fonksiyon ile color parametresi 
                alıp yazdıracak şekilde yapabiliriz.
            */
        }
    }

    tahminInput.value = ''; 
    tahminInput.focus(); 

    setTimeout(() => {
        sonucMesaji.innerHTML = '1 ile 10 arasında bir tahminde bulunun';
        /*
            inner html 4 farklı yerde kullanmışız. 
            bunuda ayrı bir fonksiyon ile message parametresi 
            alıp yazdıracak şekilde yapabiliriz.
        */
        sonucMesaji.style.color = 'black';
    }, 5000);
}


/*
    kodu farklı bir branchda düzenleyip main branch pull request açabiliriz
    ben farklı bir branchda bu yorumları yazdım ve pull request açtım, 
    oradan değişiklikleri görebilirsin, merge(birleştirmeye) gerek yok
*/