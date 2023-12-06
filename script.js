function hitungLuas() {
  var alas = parseFloat(document.getElementById('alasLuas').value);
  var tinggi = parseFloat(document.getElementById('tinggiLuas').value);

  if (!isNaN(alas) && !isNaN(tinggi)) {
    var luas = 0.5 * alas * tinggi;
    document.getElementById('luasResult').innerText = "Luas: " + luas.toFixed(2);
  } else {
    alert("Masukkan panjang alas dan tinggi yang valid.");
  }
}

function resetLuas() {
  document.getElementById('alasLuas').value = "";
  document.getElementById('tinggiLuas').value = "";
  document.getElementById('luasResult').innerText = "-";
}

function hitungKeliling() {
  var sisiA = parseFloat(document.getElementById('sisiA').value);
  var sisiB = parseFloat(document.getElementById('sisiB').value);

  if (!isNaN(sisiA) && !isNaN(sisiB)) {
    var sisiC = Math.sqrt(sisiA * sisiA + sisiB * sisiB);
    var keliling = sisiA + sisiB + sisiC;
    document.getElementById('kelilingResult').innerText = "Keliling: " + keliling.toFixed(2);
  } else {
    alert("Masukkan panjang sisi A dan B yang valid.");
  }
}

function resetKeliling() {
  document.getElementById('sisiA').value = "";
  document.getElementById('sisiB').value = "";
  document.getElementById('sisiC').value = "";
  document.getElementById('kelilingResult').innerText = "-";
}
