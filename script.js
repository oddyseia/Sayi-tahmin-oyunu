function tahminKontrol() {
    const tahminInput = document.getElementById('tahminInput');
    const sonucMesaji = document.getElementById('sonuc');

    try {
        const kullaniciTahmini = parseInt(tahminInput.value);

        if (isNaN(kullaniciTahmini) || kullaniciTahmini < 1 || kullaniciTahmini > 10) {
            throw new Error('Lütfen 1 ile 10 arasında geçerli bir sayı girin.');
        }

        const gizliSayi = Math.floor(Math.random() * 10) + 1;

        if (kullaniciTahmini === gizliSayi) {
            sonucMesajiniYaz(sonucMesaji, 'Tebrikler! Doğru tahmin ettiniz!', '#2ecc71');
            tahminInput.disabled = true;
            setTimeout(() => {
                inputSifirla(sonucMesaji, tahminInput);
            }, 5000);
        } else {
            sonucMesajiniYaz(sonucMesaji, 'Yanlış tahmin. Tekrar deneyin!', '#e74c3c');
        }

    } catch (hata) {
        sonucMesajiniYaz(sonucMesaji, hata.message, 'red');
    }
}

function inputSifirla(sonuc, input) {
    sonucMesajiniYaz(sonuc, '1 ile 10 arasında bir tahminde bulunun', '#333');
    input.value = '';
    input.disabled = false;
    input.focus();
}

function sonucMesajiniYaz(element, mesaj, renk) {
    element.innerHTML = mesaj;
    element.style.color = renk;
}
