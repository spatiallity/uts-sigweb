function validasi(){
    pass = document.getElementById("pass").value;
    if(pass=="Selesai"){
        document.getElementById("hasil").innerHTML="Selamat, ujian telah selesai!";
    }
    else{
        alert("Password Salah!")
    }
}