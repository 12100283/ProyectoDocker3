function Suma(isChecked, valor){ 
        if (isChecked) { 
            siniva2 = (parseFloat(document.sumar2.totalsiniva2.value) + parseFloat(valor)).toFixed(2); 
        } else { 
            siniva2 = (parseFloat(document.sumar2.totalsiniva2.value) - parseFloat(valor)).toFixed(2); 
        }
        document.sumar2.totalsiniva2.value = siniva2; 
        document.sumar2.total2.value =  siniva2;
    } 
    
    var valor_viejo = 0;
    function SumaSelect(valor){
        siniva2 = (parseFloat(document.sumar2.totalsiniva2.value) + parseFloat(valor)).toFixed(2); 
        document.sumar2.totalsiniva2.value = siniva2; 
        document.sumar2.total2.value =  siniva2;
        valor_viejo = valor;
    }  
    
    //reloj
 
    function show5(){
        if (!document.layers&&!document.all&&!document.getElementById)
        return

         var Digital=new Date()
         var hours=Digital.getHours()
         var minutes=Digital.getMinutes()
         var seconds=Digital.getSeconds()

        var dn="PM"
        if (hours<12)
        dn="AM"
        if (hours>12)
        hours=hours-12
        if (hours==0)
        hours=12

         if (minutes<=9)
         minutes="0"+minutes
         if (seconds<=9)
         seconds="0"+seconds
        //change font size here to your desire
        myclock="<font size='5' face='Arial' ><b><font size='1'>Hora actual:</font></br>"+hours+":"+minutes+":"
         +seconds+" "+dn+"</b></font>"
        if (document.layers){
        document.layers.liveclock.document.write(myclock)
        document.layers.liveclock.document.close()
        }
        else if (document.all)
        liveclock.innerHTML=myclock
        else if (document.getElementById)
        document.getElementById("liveclock").innerHTML=myclock
        setTimeout("show5()",1000)
         }


        window.onload=show5
     