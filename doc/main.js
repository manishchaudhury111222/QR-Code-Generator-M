function generateQR() {
  const text = document.getElementById("qrText").value;
  const qrImage = document.getElementById("qrImage");

  if (text.trim() === "") {
    alert("Kuch text ya URL likho");
    return;
  }

  const qrAPI = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=";
  qrImage.src = qrAPI + encodeURIComponent(text);
}
