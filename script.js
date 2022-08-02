function insert(num) {
    document.form.text.value = document.form.text.value + num;
}
function equal() {
    var exp = document.form.text.value;
    if (exp){
        document.form.text.value=eval(exp);
    }
}
function c() {
    document.form.text.value="";
}
function back() {
    var exp = document.form.text.value;
    document.form.text.value = exp.substring(0,exp.length-1);
}
        var sonuc;
        function hesapla(){
            var sayi1=document.getElementById("sayi1").value;
            var islem=document.getElementById("islem").value;
    
            var s1 = Number(sayi1);

            if(islem == 'carp1')
                sonuc = s1 * 0.000017;
            else if(islem == 'carp2')
                sonuc = s1 * 0.000014;
            else if(islem == 'carp3')
                sonuc = s1 * 0.000011;
            else 
                sonuc = s1 * 0.000197;

            document.getElementById("sonuc").innerHTML = "my existence:" + sonuc;
        }

        var hesaplaBtn=document.getElementById("buton");
        hesaplaBtn.onclick=hesapla;