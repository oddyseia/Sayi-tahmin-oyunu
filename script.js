/*
birden fazla fonksiyon içinde kullandığım için burada aldım.
*/
const tahminInput = document.getElementById("guessInput");

function tahminKontrol() {
  try {
    const kullaniciTahmini = parseInt(tahminInput.value);

    if (
      isNaN(kullaniciTahmini) ||
      kullaniciTahmini < 1 ||
      kullaniciTahmini > 10
    ) {
      throw new Error("Lütfen 1 ile 10 arasında geçerli bir sayı girin.");
    }

    guessControl();
  } catch (hata) {
    sonucMesajiniYaz(hata?.message, "red");
  }
}

/*
inputSifirla içinde tekrar element almasına gerek kalmadı.
*/
function inputSifirla() {
  sonucMesajiniYaz("1 ile 10 arasında bir tahminde bulunun", "#333");
  tahminInput.value = "";
  tahminInput.disabled = false;
  tahminInput.focus();
}

/*
burada element dışarıdan değil fonksiyonun içinde tanımlayabilirsin.
*/
function sonucMesajiniYaz(mesaj, renk) {
  const sonucMesaji = document.getElementById("result");
  sonucMesaji.innerHTML = mesaj;
  sonucMesaji.style.color = renk;
}

/*
    burada kontrol ayrı bir fonksiyon içine taşıdım. 
    if elseler iç içe çok kullanınca kodu okurken zorlaşıyor
    olabildiğince ayırmamız güzel olur.
*/
function guessControl() {
  const gizliSayi = Math.floor(Math.random() * 10) + 1;
  tahminInput.disabled = true;

  if (parseInt(tahminInput.value) === gizliSayi) {
    sonucMesajiniYaz("Tebrikler! Doğru tahmin ettiniz!", "#2ecc71");
  } else {
    sonucMesajiniYaz("Yanlış tahmin. Tekrar deneyin!", "#e74c3c");
  }

  setTimeout(() => {
    console.log("bura");
    inputSifirla();
  }, 5000);
}
