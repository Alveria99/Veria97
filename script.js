function hitungLuas(){
        sisiLuas = document.getElementById("squareSide1").value;
        Luas = sisiLuas * sisiLuas;
        var RumusLuas = document.getElementById("RumusLuas");
        RumusLuas.innerHTML = "<p>Luas = Sisi x Sisi</p>";
        var MasukanLuas = document.getElementById("MasukanLuas");
        MasukanLuas.innerHTML = "<p>Luas = "+ sisiLuas +" x "+ sisiLuas +"</p>";
        var HasilLuas = document.getElementById("HasilLuas");
        HasilLuas.innerHTML = "<p>Luas = "+Luas+"</p>";
}

function hitungKeliling(){
        sisiKeliling = document.getElementById("squareSide2").value;
        Keliling = 4 * sisiKeliling;
        var RumusKeliling = document.getElementById("RumusKeliling");
        RumusKeliling.innerHTML = "<p>Keliling = 4 x Sisi</p>";
        var MasukanKeliling = document.getElementById("MasukanKeliling");
        MasukanKeliling.innerHTML = "<p>Keliling = 4 x "+ sisiKeliling +"</p>";
        var HasilKeliling = document.getElementById("HasilKeliling");
        HasilKeliling.innerHTML = "<p>Keliling = "+Keliling+"</p>";
}

function resetLuas() {
  document.getElementById('squareSide1').value = ''
  document.getElementById("RumusLuas").innerHTML = ''
  document.getElementById("MasukanLuas").innerHTML = ''
  document.getElementById("HasilLuas").innerHTML = ''
}

function resetKeliling() {
  document.getElementById('squareSide2').value = ''
  document.getElementById("RumusKeliling").innerHTML = ''
  document.getElementById("MasukanKeliling").innerHTML = ''
  document.getElementById("HasilKeliling").innerHTML = ''
}