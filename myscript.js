function validasi(){
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    if( username == "user" && password == "123"){
        alert("Password Benar");
        
        
    }
    else if(username =="" || password ==""){
      alert("Masukan username dan password Anda");
   
    }
    else{
      alert("Username atau password yang Anda masukan SALAH");
      
    }
  }