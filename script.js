document.getElementById("cv-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const isim = document.getElementById("isim").value;
  const eposta = document.getElementById("eposta").value;
  const amaç = document.getElementById("amaç").value;

  if (isim && eposta && amaç) {
    alert("CV indiriliyor...");
    window.location.href = "/Users/musa/Desktop/web1/assets/cvvvv.pdf";
  } else {
    alert("Lütfen tüm alanları doldurun.");
  }
});

// Yolu: cvvvvv.pdf yada /Users/musa/Desktop/web1/assets/cvvvv.pdf
// Bu dosyayı oluşturmanız gerekiyor. İçeriğini doldurmanız gerekiyor. İçeriği doldurmak için bir PDF düzenleyici kullanabilirsiniz. Örneğin Adobe Acrobat Reader.
