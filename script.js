function tahminKontrol() {
    const tahminInput = document.getElementById('tahminInput');
    const sonucMesaji = document.getElementById('sonuc');

    const kullaniciTahmini = parseInt(tahminInput.value);

    if (isNaN(kullaniciTahmini) || kullaniciTahmini < 1 || kullaniciTahmini > 10) {
        sonucMesaji.innerHTML = 'Lütfen 1 ile 10 arasında geçerli bir sayı girin.';
        sonucMesaji.style.color = 'red';
    } else {
        const gizliSayi = Math.floor(Math.random() * 10) + 1;

        if (kullaniciTahmini === gizliSayi) {
            sonucMesaji.innerHTML = 'Tebrikler! Doğru tahmin ettiniz!';
            sonucMesaji.style.color = 'green';
        } else {
            sonucMesaji.innerHTML = 'Yanlış tahmin. Tekrar deneyin!';
            sonucMesaji.style.color = 'red';
        }
    }

    tahminInput.value = ''; 
    tahminInput.focus(); 

    setTimeout(() => {
        sonucMesaji.innerHTML = '1 ile 10 arasında bir tahminde bulunun';
        sonucMesaji.style.color = 'black';
    }, 5000);
}
