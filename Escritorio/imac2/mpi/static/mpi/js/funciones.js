

var id_seleccionado="";
var nombre="";
$(document).ready(function(){
 
        $('table').on('mousedown', 'input', function(e){
     id_seleccionado= $(this).attr('value');
      $("#id_pac_mpi").val(id_seleccionado);
      var id_estudio= $(this).attr('id_Estudio');
      $("#id_estudio_mpi").val(id_estudio);
      nombre =$(this).attr('nombre');
     
  });

});


function ValidarEnvioFormulario() {
  if (id_seleccionado=="") {
   
      alertify.alert().setHeader('<em> Aviso </em> ').set({transition:'flipy',message: 'Seleccione un paciente del la tabla'}).show();
      return false;
  
  
    }else{
      valid();
return false;

  } 
}
function valid() {
                
      alertify.confirm().set('labels', {ok:'Continuar', cancel:'Cancelar'}).setHeader('<em> Aviso </em> ').set({transition:'flipy',message: 'Transition effect: flipy'}).show();
   
  
        alertify.confirm("Desea continuar y cargar datos a función ventricular del paciente "+nombre,
      
      function(){
      
      var v =verificarCamposVacios()
      if (v==1) {
     alertify.success('Redireccionando a función ventricular...');
    $("#enviarFormulario").click();
    
    
      } else{
      
      }
     
      

      },
      function(closeEvent){
        alertify.error('Cancelado');
        closeEvent.cancel = false;
        
      });

       
    }


  function verificarCamposVacios() {
    
         return 1;
      
  }



/**********************************************************************************INPUT 1=sss,2=ssr,3=ssd************************************************************************************************/
// alert("sdadasdas");
var fsss1;
var fssr1;
var fssd1;
var contador=0;	
$(document).ready(function(){

$(this).bind("contextmenu", function(e) { // evitamos que el usuario pueda usar el  panel del botón derecho del ratón:
                e.preventDefault();
});
$('.par-i1').val(contador);
$("#isss1").mousedown(function(e){
	if(e.which == 1) {             
        if (contador<4) {contador++;
            switch (contador){
            case 0:  $('.par-img1').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); fsss1=(contador*1.4705882353);break;
            case 1: $('.par-img1').addClass("blanco");fsss1=(contador*1.4705882353); break;
            case 2:  $('.par-img1').removeClass("blanco");$('.par-img1').addClass("amarillo"); fsss1=(contador*1.4705882353);break;
            case 3:   $('.par-img1').removeClass("amarillo");$('.par-img1').addClass("rosadoClaro"); fsss1=(contador*1.4705882353);break;
            case 4:  $('.par-img1').removeClass("rosadoClaro"); $('.par-img1').addClass("rosadoOscuro");fsss1=(contador*1.4705882353);break;}
            }else{contador=0;$('.par-img1').removeClass("rosadoOscuro");fsss1=(contador*1.4705882353);}
                $('.par-i1').val(contador);
           		     // console.log("soy el a1 con click izq"+contador);
                    // console.log("soy fsss1 fuera del if"+fsss1);
                    // $('.SSS-SSD').val(fsss1);
// sss1=contador;
// calcular_valor(sss1);

                 }

  if (e.which==3) {if (contador<=4 && contador>0 ){contador--;
            switch (contador){
              case 0: $('.par-img1').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss1=(contador*1.4705882353);  break;
              case 1: $('.par-img1').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img1').addClass("blanco"); fsss1=(contador*1.4705882353);break;
            case 2: $('.par-img1').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img1').addClass("amarillo");fsss1=(contador*1.4705882353); break;
            case 3: $('.par-img1').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img1').addClass("rosadoClaro"); fsss1=(contador*1.4705882353); break;
            case 4: $('.par-img1').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img1').addClass("rosadoOscuro");fsss1=(contador*1.4705882353); break;}
            }else{contador=4; $('.par-img1').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img1').addClass("rosadoOscuro");fsss1=(contador*1.4705882353);}
           		    $('.par-i1').val(contador);
           		   			// console.log("soy el a1 con click der "+contador);
                      // $('.SSS-SSD').val(fsss1);
// sss1=contador;
// calcular_valor(sss1);
                    }	
           		   			
  if (contador>=diferencia){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
           		   			var resultado= contador-diferencia;
           		   			// console.log( "soy el a2 de la diferencia "+resultado);
           		   			 $('#issd1').val(resultado);
            switch (resultado){
              case 0:  $('#ssd1-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd1=(resultado*1.4705882353);break;
              case 1: $('#ssd1-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd1-img').addClass("blanco");fssd1=(resultado*1.4705882353); break;
              case 2: $('#ssd1-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd1-img').addClass("amarillo");fssd1=(resultado*1.4705882353); break;
              case 3: $('#ssd1-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd1-img').addClass("rosadoClaro"); fssd1=(resultado*1.4705882353); break;
              case 4: $('#ssd1-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd1-img').addClass("rosadoOscuro"); fssd1=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd1').val(resultado);$('#ssd1-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd1=(resultado*1.4705882353);}
            // ssd1=resultado;
// calcular_valor(ssd1);
 // $('#ssd').val(fssd1);

calcular_valor(fsss1,fssr1,fssd1);

        	});
});

var diferencia=0;

$(document).ready(function(){
$('#issr1').val(diferencia);
$("#issr1").mousedown(function(e){
	if(e.which == 1) {             
        if (diferencia<4) {diferencia++;
            switch (diferencia){
              case 0: $('#ssr1-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr1=(diferencia*1.4705882353);break;
            case 1: $('#ssr1-img').addClass("blanco");fssr1=(diferencia*1.4705882353); break;
            case 2: $('#ssr1-img').removeClass("blanco");  $('#ssr1-img').addClass("amarillo");fssr1=(diferencia*1.4705882353); break;
            case 3: $('#ssr1-img').removeClass("amarillo");  $('#ssr1-img').addClass("rosadoClaro");fssr1=(diferencia*1.4705882353);break;
            case 4: $('#ssr1-img').removeClass("rosadoClaro");  $('#ssr1-img').addClass("rosadoOscuro");fssr1=(diferencia*1.4705882353); break;}
             }else{diferencia=0;$('#ssr1-img').removeClass("rosadoOscuro");fssr1=(diferencia*1.4705882353);}
                  $('#issr1').val(diferencia);
           		     // console.log(diferencia);
// $('#ssr').val(fssr1); lo comente ahora
          }
                   // ssr1=diferencia;
// calcular_valor(ssr1);
                 

        if (e.which==3) {if (diferencia<=4 && diferencia>0 ){diferencia--;
            switch (diferencia){
              case 0:  $('#ssr1-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr1=(diferencia*1.4705882353); break;
              case 1:  $('#ssr1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr1-img').addClass("blanco");fssr1=(diferencia*1.4705882353); break;
              case 2:  $('#ssr1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr1-img').addClass("amarillo");fssr1=(diferencia*1.4705882353);break;
              case 3:  $('#ssr1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr1-img').addClass("rosadoClaro");fssr1=(diferencia*1.4705882353);  break;
              case 4:  $('#ssr1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr1-img').addClass("rosadoOscuro");fssr1=(diferencia*1.4705882353); break;}
              }else{diferencia=4; $('#ssr1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr1-img').addClass("rosadoOscuro");fssr1=(diferencia*1.4705882353);}
           		      $('#issr1').val(diferencia);
           		   			// console.log(diferencia);
                    }
// $('#ssr').val(fssr1);

                   // ssr1=diferencia;
// calcular_valor(ssr1);
                    	
				if (contador>=diferencia){
           		   			var resultado= contador-diferencia;
           		   			// console.log(resultado);
           		   			 $('#issd1').val(resultado);
            switch (resultado){
              case 0:  $('#ssd1-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); fssd1=(resultado*1.4705882353);break;
              case 1: $('#ssd1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd1-img').addClass("blanco"); fssd1=(resultado*1.4705882353);break;
              case 2: $('#ssd1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd1-img').addClass("amarillo");fssd1=(resultado*1.4705882353);break;
              case 3: $('#ssd1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd1-img').addClass("rosadoClaro");fssd1=(resultado*1.4705882353);break;
              case 4:  $('#ssd1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd1-img').addClass("rosadoOscuro"); fssd1=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd1').val(resultado);$('#ssd1-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd1=(resultado*1.4705882353);}
// ssd1=resultado;
// calcular_valor(ssd1);
// $('#ssd').val(fssd1);
    calcular_valor(fsss1,fssr1,fssd1);        
        	});
});



/**********************************************************************************INPUT 4=sss,5=ssr,6=ssd************************************************************************************************/

var fsss2;
var fssr2;
var fssd2;
var contador2=0; 
$(document).ready(function(){
$('.par-i2').val(contador2);
$("#isss2").mousedown(function(e){
  if(e.which == 1) {             
        if (contador2<4) {contador2++;
            switch (contador2){
              case 0: $('.par-img2').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss2=(contador2*1.4705882353); break;
              case 1: $('.par-img2').addClass("blanco"); fsss2=(contador2*1.4705882353); break;
            case 2:$('.par-img2').removeClass("blanco");$('.par-img2').addClass("amarillo");fsss2=(contador2*1.4705882353); break;
            case 3: $('.par-img2').removeClass("amarillo");$('.par-img2').addClass("rosadoClaro");fsss2=(contador2*1.4705882353); break;
            case 4:$('.par-img2').removeClass("rosadoClaro"); $('.par-img2').addClass("rosadoOscuro");fsss2=(contador2*1.4705882353); break;}
            }else{contador2=0;$('.par-img2').removeClass("rosadoOscuro");fsss2=(contador2*1.4705882353);}
                $('.par-i2').val(contador2);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador2<=4 && contador2>0 ){contador2--;
            switch (contador2){
              case 0:$('.par-img2').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss2=(contador2*1.4705882353); break;
              case 1:$('.par-img2').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img2').addClass("blanco");fsss2=(contador2*1.4705882353); break;
            case 2: $('.par-img2').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img2').addClass("amarillo");fsss2=(contador2*1.4705882353); break;
            case 3: $('.par-img2').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img2').addClass("rosadoClaro");fsss2=(contador2*1.4705882353);  break;
            case 4: $('.par-img2').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img2').addClass("rosadoOscuro");fsss2=(contador2*1.4705882353); break;}
            }else{contador2=4; $('.par-img2').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img2').addClass("rosadoOscuro");fsss2=(contador2*1.4705882353);}
                  $('.par-i2').val(contador2);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador2>=diferencia2){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador2-diferencia2;
                      // console.log(resultado);
                       $('#issd2').val(resultado);
            switch (resultado){
              case 0: $('#ssd2-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd2=(resultado*1.4705882353);break;
              case 1: $('#ssd2-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd2-img').addClass("blanco"); fssd2=(resultado*1.4705882353);break;
              case 2: $('#ssd2-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd2-img').addClass("amarillo");fssd2=(resultado*1.4705882353); break;
              case 3: $('#ssd2-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd2-img').addClass("rosadoClaro");fssd2=(resultado*1.4705882353);  break;
              case 4: $('#ssd2-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd2-img').addClass("rosadoOscuro"); fssd2=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd2').val(resultado);$('#ssd2-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd2=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss2,fssr2,fssd2);   
          });
});

var diferencia2=0;

$(document).ready(function(){
$('#issr2').val(diferencia2);
$("#issr2").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia2<4) {diferencia2++;
            switch (diferencia2){
              case 0:  $('#ssr2-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr2=(diferencia2*1.4705882353); break;
              case 1: $('#ssr2-img').addClass("blanco");fssr2=(diferencia2*1.4705882353);  break;
              case 2: $('#ssr2-img').removeClass("blanco");  $('#ssr2-img').addClass("amarillo");fssr2=(diferencia2*1.4705882353); break;
              case 3: $('#ssr2-img').removeClass("amarillo");  $('#ssr2-img').addClass("rosadoClaro"); fssr2=(diferencia2*1.4705882353); break;
              case 4: $('#ssr2-img').removeClass("rosadoClaro");  $('#ssr2-img').addClass("rosadoOscuro");fssr2=(diferencia2*1.4705882353);  break;}
             }else{diferencia2=0;$('#ssr2-img').removeClass("rosadoOscuro");fssr2=(diferencia2*1.4705882353);}
                  $('#issr2').val(diferencia2);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia2<=4 && diferencia2>0 ){diferencia2--;
            switch (diferencia2){
              case 0: $('#ssr2-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr2=(diferencia2*1.4705882353); break;
              case 1: $('#ssr2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr2-img').addClass("blanco");fssr2=(diferencia2*1.4705882353); break;
              case 2: $('#ssr2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr2-img').addClass("amarillo");fssr2=(diferencia2*1.4705882353);break;
              case 3: $('#ssr2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr2-img').addClass("rosadoClaro"); fssr2=(diferencia2*1.4705882353);break;
              case 4: $('#ssr2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr2-img').addClass("rosadoOscuro"); fssr2=(diferencia2*1.4705882353);break;}
              }else{diferencia2=4; $('#ssr2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr2-img').addClass("rosadoOscuro");fssr2=(diferencia2*1.4705882353);}
                    $('#issr2').val(diferencia2);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador2>=diferencia2){
                      var resultado= contador2-diferencia2;
                      // console.log(resultado);
                       $('#issd2').val(resultado);
            switch (resultado){
              case 0: $('#ssd2-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd2=(resultado*1.4705882353); break;
              case 1: $('#ssd2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd2-img').addClass("blanco");fssd2=(resultado*1.4705882353);break;
              case 2: $('#ssd2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd2-img').addClass("amarillo");fssd2=(resultado*1.4705882353); break;
              case 3: $('#ssd2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd2-img').addClass("rosadoClaro");fssd2=(resultado*1.4705882353); break;
              case 4: $('#ssd2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd2-img').addClass("rosadoOscuro"); fssd2=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd2').val(resultado);$('#ssd2-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd2=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss2,fssr2,fssd2); 
          });
});

/**********************************************************************************INPUT 7=sss,8=ssr,9=ssd************************************************************************************************/

var fsss3;
var fssr3;
var fssd3;
var contador3=0; 
$(document).ready(function(){
$('.par-i3').val(contador3);
$("#isss3").mousedown(function(e){
  if(e.which == 1) {             
        if (contador3<4) {contador3++;
            switch (contador3){
              case 0: $('.par-img3').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss3=(contador3*1.4705882353); break;
              case 1: $('.par-img3').addClass("blanco"); fsss3=(contador3*1.4705882353); break;
            case 2: $('.par-img3').removeClass("blanco");$('.par-img3').addClass("amarillo");fsss3=(contador3*1.4705882353); break;
            case 3: $('.par-img3').removeClass("amarillo");$('.par-img3').addClass("rosadoClaro");fsss3=(contador3*1.4705882353); break;
            case 4: $('.par-img3').removeClass("rosadoClaro"); $('.par-img3').addClass("rosadoOscuro");fsss3=(contador3*1.4705882353); break;}
            }else{contador3=0;$('.par-img3').removeClass("rosadoOscuro");fsss3=(contador3*1.4705882353);}
                $('.par-i3').val(contador3);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador3<=4 && contador3>0 ){contador3--;
            switch (contador3){
              case 0: $('.par-img3').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss3=(contador3*1.4705882353); break;
              case 1: $('.par-img3').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img3').addClass("blanco");fsss3=(contador3*1.4705882353); break;
            case 2: $('.par-img3').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img3').addClass("amarillo");fsss3=(contador3*1.4705882353); break;
            case 3: $('.par-img3').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img3').addClass("rosadoClaro");fsss3=(contador3*1.4705882353);  break;
            case 4: $('.par-img3').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img3').addClass("rosadoOscuro");fsss3=(contador3*1.4705882353); break;}
            }else{contador3=4; $('.par-img3').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img3').addClass("rosadoOscuro");fsss3=(contador3*1.4705882353);}
                  $('.par-i3').val(contador3);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador3>=diferencia3){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador3-diferencia3;
                      // console.log(resultado);
                       $('#issd3').val(resultado);
            switch (resultado){
              case 0: $('#ssd3-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd3=(resultado*1.4705882353);break;
              case 1: $('#ssd3-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd3-img').addClass("blanco"); fssd3=(resultado*1.4705882353);break;
              case 2: $('#ssd3-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd3-img').addClass("amarillo");fssd3=(resultado*1.4705882353); break;
              case 3: $('#ssd3-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd3-img').addClass("rosadoClaro");fssd3=(resultado*1.4705882353);  break;
              case 4: $('#ssd3-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd3-img').addClass("rosadoOscuro"); fssd3=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd3').val(resultado);$('#ssd3-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd3=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss3,fssr3,fssd3);   
          });
});

var diferencia3=0;

$(document).ready(function(){
$('#issr3').val(diferencia3);
$("#issr3").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia3<4) {diferencia3++;
            switch (diferencia3){
              case 0: $('#ssr3-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr3=(diferencia3*1.4705882353); break;
              case 1: $('#ssr3-img').addClass("blanco");fssr3=(diferencia3*1.4705882353);  break;
              case 2: $('#ssr3-img').removeClass("blanco");  $('#ssr3-img').addClass("amarillo");fssr3=(diferencia3*1.4705882353); break;
              case 3: $('#ssr3-img').removeClass("amarillo");  $('#ssr3-img').addClass("rosadoClaro");fssr3=(diferencia3*1.4705882353); break;
              case 4: $('#ssr3-img').removeClass("rosadoClaro");  $('#ssr3-img').addClass("rosadoOscuro");fssr3=(diferencia3*1.4705882353);  break;}
             }else{diferencia3=0;$('#ssr3-img').removeClass("rosadoOscuro");fssr3=(diferencia3*1.4705882353);}
                  $('#issr3').val(diferencia3);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia3<=4 && diferencia3>0 ){diferencia3--;
            switch (diferencia3){
              case 0: $('#ssr3-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr3=(diferencia3*1.4705882353); break;
              case 1: $('#ssr3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr3-img').addClass("blanco");fssr3=(diferencia3*1.4705882353); break;
              case 2: $('#ssr3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr3-img').addClass("amarillo");fssr3=(diferencia3*1.4705882353);break;
              case 3: $('#ssr3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr3-img').addClass("rosadoClaro"); fssr3=(diferencia3*1.4705882353);break;
              case 4: $('#ssr3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr3-img').addClass("rosadoOscuro"); fssr3=(diferencia3*1.4705882353);break;}
              }else{diferencia3=4; $('#ssr3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr3-img').addClass("rosadoOscuro");fssr3=(diferencia3*1.4705882353);}
                    $('#issr3').val(diferencia3);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador3>=diferencia3){
                      var resultado= contador3-diferencia3;
                      // console.log(resultado);
                       $('#issd3').val(resultado);
            switch (resultado){
              case 0: $('#ssd3-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd3=(resultado*1.4705882353); break;
              case 1: $('#ssd3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd3-img').addClass("blanco"); fssd3=(resultado*1.4705882353);break;
              case 2: $('#ssd3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd3-img').addClass("amarillo");fssd3=(resultado*1.4705882353); break;
              case 3: $('#ssd3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd3-img').addClass("rosadoClaro");fssd3=(resultado*1.4705882353); break;
              case 4: $('#ssd3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd3-img').addClass("rosadoOscuro"); fssd3=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd3').val(resultado);$('#ssd3-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd3=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss3,fssr3,fssd3); 
          });
});


/**********************************************************************************INPUT 10=sss,11=ssr,12=ssd************************************************************************************************/

var fsss4;
var fssr4;
var fssd4;
var contador4=0; 
$(document).ready(function(){
$('.par-i4').val(contador4);
$("#isss4").mousedown(function(e){
  if(e.which == 1) {             
        if (contador4<4) {contador4++;
            switch (contador4){
              case 0: $('.par-img4').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss4=(contador4*1.4705882353); break;
              case 1: $('.par-img4').addClass("blanco"); fsss4=(contador4*1.4705882353); break;
            case 2: $('.par-img4').removeClass("blanco");$('.par-img4').addClass("amarillo");fsss4=(contador4*1.4705882353); break;
            case 3: $('.par-img4').removeClass("amarillo");$('.par-img4').addClass("rosadoClaro");fsss4=(contador4*1.4705882353); break;
            case 4: $('.par-img4').removeClass("rosadoClaro"); $('.par-img4').addClass("rosadoOscuro");fsss4=(contador4*1.4705882353); break;}
            }else{contador4=0;$('.par-img4').removeClass("rosadoOscuro");fsss4=(contador4*1.4705882353);}
                $('.par-i4').val(contador4);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador4<=4 && contador4>0 ){contador4--;
            switch (contador4){
              case 0: $('.par-img4').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss4=(contador4*1.4705882353); break;
              case 1: $('.par-img4').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img4').addClass("blanco");fsss4=(contador4*1.4705882353); break;
            case 2: $('.par-img4').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img4').addClass("amarillo");fsss4=(contador4*1.4705882353); break;
            case 3: $('.par-img4').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img4').addClass("rosadoClaro");fsss4=(contador4*1.4705882353);  break;
            case 4: $('.par-img4').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img4').addClass("rosadoOscuro");fsss4=(contador4*1.4705882353); break;}
            }else{contador4=4; $('.par-img4').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img4').addClass("rosadoOscuro");fsss4=(contador4*1.4705882353);}
                  $('.par-i4').val(contador4);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador4>=diferencia4){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador4-diferencia4;
                      // console.log(resultado);
                       $('#issd4').val(resultado);
            switch (resultado){
              case 0: $('#ssd4-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd4=(resultado*1.4705882353);break;
              case 1: $('#ssd4-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd4-img').addClass("blanco"); fssd4=(resultado*1.4705882353);break;
              case 2: $('#ssd4-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd4-img').addClass("amarillo");fssd4=(resultado*1.4705882353); break;
              case 3: $('#ssd4-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd4-img').addClass("rosadoClaro");fssd4=(resultado*1.4705882353);  break;
              case 4: $('#ssd4-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd4-img').addClass("rosadoOscuro"); fssd4=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd4').val(resultado);$('#ssd4-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd4=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss4,fssr4,fssd4);   
          });
});

var diferencia4=0;

$(document).ready(function(){
$('#issr4').val(diferencia4);
$("#issr4").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia4<4) {diferencia4++;
            switch (diferencia4){
              case 0: $('#ssr4-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr4=(diferencia4*1.4705882353); break;
              case 1: $('#ssr4-img').addClass("blanco");fssr4=(diferencia4*1.4705882353);  break;
              case 2: $('#ssr4-img').removeClass("blanco");  $('#ssr4-img').addClass("amarillo");fssr4=(diferencia4*1.4705882353); break;
              case 3: $('#ssr4-img').removeClass("amarillo");  $('#ssr4-img').addClass("rosadoClaro"); fssr4=(diferencia4*1.4705882353); break;
              case 4: $('#ssr4-img').removeClass("rosadoClaro");  $('#ssr4-img').addClass("rosadoOscuro");fssr4=(diferencia4*1.4705882353);  break;}
             }else{diferencia4=0;$('#ssr4-img').removeClass("rosadoOscuro");fssr4=(diferencia4*1.4705882353);}
                  $('#issr4').val(diferencia4);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia4<=4 && diferencia4>0 ){diferencia4--;
            switch (diferencia4){
              case 0: $('#ssr4-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr4=(diferencia4*1.4705882353); break;
              case 1: $('#ssr4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr4-img').addClass("blanco");fssr4=(diferencia4*1.4705882353); break;
              case 2: $('#ssr4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr4-img').addClass("amarillo");fssr4=(diferencia4*1.4705882353);break;
              case 3: $('#ssr4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr4-img').addClass("rosadoClaro"); fssr4=(diferencia4*1.4705882353);break;
              case 4: $('#ssr4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr4-img').addClass("rosadoOscuro"); fssr4=(diferencia4*1.4705882353);break;}
              }else{diferencia4=4;  $('#ssr4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr4-img').addClass("rosadoOscuro");fssr4=(diferencia4*1.4705882353);}
                    $('#issr4').val(diferencia4);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador4>=diferencia4){
                      var resultado= contador4-diferencia4;
                      // console.log(resultado);
                       $('#issd4').val(resultado);
            switch (resultado){
              case 0: $('#ssd4-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd4=(resultado*1.4705882353); break;
              case 1: $('#ssd4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd4-img').addClass("blanco"); fssd4=(resultado*1.4705882353);break;
              case 2: $('#ssd4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd4-img').addClass("amarillo");fssd4=(resultado*1.4705882353); break;
              case 3: $('#ssd4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd4-img').addClass("rosadoClaro");fssd4=(resultado*1.4705882353); break;
              case 4: $('#ssd4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd4-img').addClass("rosadoOscuro"); fssd4=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd4').val(resultado);$('#ssd4-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd4=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss4,fssr4,fssd4); 
          });
});

/**********************************************************************************INPUT 13=sss,14=ssr,15=ssd************************************************************************************************/

var fsss5;
var fssr5;
var fssd5;
var contador5=0; 
$(document).ready(function(){
$('.par-i5').val(contador5);
$("#isss5").mousedown(function(e){
  if(e.which == 1) {             
        if (contador5<4) {contador5++;
            switch (contador5){
              case 0: $('.par-img5').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss5=(contador5*1.4705882353); break;
              case 1: $('.par-img5').addClass("blanco"); fsss5=(contador5*1.4705882353); break;
            case 2: $('.par-img5').removeClass("blanco");$('.par-img5').addClass("amarillo");fsss5=(contador5*1.4705882353); break;
            case 3: $('.par-img5').removeClass("amarillo");$('.par-img5').addClass("rosadoClaro");fsss5=(contador5*1.4705882353); break;
            case 4: $('.par-img5').removeClass("rosadoClaro"); $('.par-img5').addClass("rosadoOscuro");fsss5=(contador5*1.4705882353); break;}
            }else{contador5=0;$('.par-img5').removeClass("rosadoOscuro");fsss5=(contador5*1.4705882353);}
                $('.par-i5').val(contador5);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador5<=4 && contador5>0 ){contador5--;
            switch (contador5){
              case 0: $('.par-img5').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss5=(contador5*1.4705882353); break;
              case 1: $('.par-img5').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img5').addClass("blanco");fsss5=(contador5*1.4705882353); break;
            case 2: $('.par-img5').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img5').addClass("amarillo");fsss5=(contador5*1.4705882353); break;
            case 3: $('.par-img5').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img5').addClass("rosadoClaro");fsss5=(contador5*1.4705882353);  break;
            case 4: $('.par-img5').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img5').addClass("rosadoOscuro");fsss5=(contador5*1.4705882353); break;}
            }else{contador5=4; $('.par-img5').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img5').addClass("rosadoOscuro");fsss5=(contador5*1.4705882353);}
                  $('.par-i5').val(contador5);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador5>=diferencia5){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador5-diferencia5;
                      // console.log(resultado);
                       $('#issd5').val(resultado);
            switch (resultado){
              case 0: $('#ssd5-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd5=(resultado*1.4705882353);break;
              case 1: $('#ssd5-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd5-img').addClass("blanco"); fssd5=(resultado*1.4705882353);break;
              case 2: $('#ssd5-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd5-img').addClass("amarillo");fssd5=(resultado*1.4705882353); break;
              case 3: $('#ssd5-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd5-img').addClass("rosadoClaro");fssd5=(resultado*1.4705882353);  break;
              case 4: $('#ssd5-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd5-img').addClass("rosadoOscuro"); fssd5=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd5').val(resultado);$('#ssd5-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd5=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss5,fssr5,fssd5);   
          });
});

var diferencia5=0;

$(document).ready(function(){
$('#issr5').val(diferencia5);
$("#issr5").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia5<4) {diferencia5++;
            switch (diferencia5){
              case 0: $('#ssr5-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr5=(diferencia5*1.4705882353); break;
              case 1: $('#ssr5-img').addClass("blanco");fssr5=(diferencia5*1.4705882353);  break;
              case 2: $('#ssr5-img').removeClass("blanco");  $('#ssr5-img').addClass("amarillo");fssr5=(diferencia5*1.4705882353); break;
              case 3: $('#ssr5-img').removeClass("amarillo");  $('#ssr5-img').addClass("rosadoClaro"); fssr5=(diferencia5*1.4705882353); break;
              case 4: $('#ssr5-img').removeClass("rosadoClaro");  $('#ssr5-img').addClass("rosadoOscuro");fssr5=(diferencia5*1.4705882353);  break;}
             }else{diferencia5=0;$('#ssr5-img').removeClass("rosadoOscuro");fssr5=(diferencia5*1.4705882353);}
                  $('#issr5').val(diferencia5);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia5<=4 && diferencia5>0 ){diferencia5--;
            switch (diferencia5){
              case 0: $('#ssr5-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr5=(diferencia5*1.4705882353); break;
              case 1: $('#ssr5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr5-img').addClass("blanco");fssr5=(diferencia5*1.4705882353); break;
              case 2: $('#ssr5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr5-img').addClass("amarillo");fssr5=(diferencia5*1.4705882353);break;
              case 3: $('#ssr5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr5-img').addClass("rosadoClaro"); fssr5=(diferencia5*1.4705882353);break;
              case 4: $('#ssr5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr5-img').addClass("rosadoOscuro"); fssr5=(diferencia5*1.4705882353);break;}
              }else{diferencia5=4;  $('#ssr5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr5-img').addClass("rosadoOscuro");fssr5=(diferencia5*1.4705882353);}
                    $('#issr5').val(diferencia5);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador5>=diferencia5){
                      var resultado= contador5-diferencia5;
                      // console.log(resultado);
                       $('#issd5').val(resultado);
            switch (resultado){
              case 0: $('#ssd5-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd5=(resultado*1.4705882353); break;
              case 1: $('#ssd5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd5-img').addClass("blanco"); fssd5=(resultado*1.4705882353);break;
              case 2: $('#ssd5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd5-img').addClass("amarillo");fssd5=(resultado*1.4705882353); break;
              case 3: $('#ssd5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd5-img').addClass("rosadoClaro");fssd5=(resultado*1.4705882353); break;
              case 4: $('#ssd5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd5-img').addClass("rosadoOscuro"); fssd5=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd5').val(resultado);$('#ssd5-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd5=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss5,fssr5,fssd5); 
          });
});

/**********************************************************************************INPUT 16=sss,17=ssr,18=ssd************************************************************************************************/

var fsss6;
var fssr6;
var fssd6;
var contador6=0; 
$(document).ready(function(){
$('.par-i6').val(contador6);
$("#isss6").mousedown(function(e){
  if(e.which == 1) {             
        if (contador6<4) {contador6++;
            switch (contador6){
              case 0: $('.par-img6').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss6=(contador6*1.4705882353); break;
              case 1: $('.par-img6').addClass("blanco"); fsss6=(contador6*1.4705882353); break;
            case 2: $('.par-img6').removeClass("blanco");$('.par-img6').addClass("amarillo");fsss6=(contador6*1.4705882353); break;
            case 3: $('.par-img6').removeClass("amarillo");$('.par-img6').addClass("rosadoClaro");fsss6=(contador6*1.4705882353); break;
            case 4: $('.par-img6').removeClass("rosadoClaro"); $('.par-img6').addClass("rosadoOscuro");fsss6=(contador6*1.4705882353); break;}
            }else{contador6=0;$('.par-img6').removeClass("rosadoOscuro");fsss6=(contador6*1.4705882353);}
                $('.par-i6').val(contador6);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador6<=4 && contador6>0 ){contador6--;
            switch (contador6){
              case 0: $('.par-img6').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss6=(contador6*1.4705882353); break;
              case 1: $('.par-img6').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img6').addClass("blanco");fsss6=(contador6*1.4705882353); break;
            case 2: $('.par-img6').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img6').addClass("amarillo");fsss6=(contador6*1.4705882353); break;
            case 3: $('.par-img6').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img6').addClass("rosadoClaro");fsss6=(contador6*1.4705882353);  break;
            case 4: $('.par-img6').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img6').addClass("rosadoOscuro");fsss6=(contador6*1.4705882353); break;}
            }else{contador6=4; $('.par-img6').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img6').addClass("rosadoOscuro");fsss6=(contador6*1.4705882353);}
                  $('.par-i6').val(contador6);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador6>=diferencia6){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador6-diferencia6;
                      // console.log(resultado);
                       $('#issd6').val(resultado);
            switch (resultado){
              case 0: $('#ssd6-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd6=(resultado*1.4705882353);break;
              case 1: $('#ssd6-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd6-img').addClass("blanco"); fssd6=(resultado*1.4705882353);break;
              case 2: $('#ssd6-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd6-img').addClass("amarillo");fssd6=(resultado*1.4705882353); break;
              case 3: $('#ssd6-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd6-img').addClass("rosadoClaro");fssd6=(resultado*1.4705882353);  break;
              case 4: $('#ssd6-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd6-img').addClass("rosadoOscuro"); fssd6=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd6').val(resultado);$('#ssd6-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd6=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss6,fssr6,fssd6);   
          });
});

var diferencia6=0;

$(document).ready(function(){
$('#issr6').val(diferencia6);
$("#issr6").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia6<4) {diferencia6++;
            switch (diferencia6){
              case 0: $('#ssr6-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr6=(diferencia6*1.4705882353); break;
              case 1: $('#ssr6-img').addClass("blanco");fssr6=(diferencia6*1.4705882353);  break;
              case 2: $('#ssr6-img').removeClass("blanco");  $('#ssr6-img').addClass("amarillo");fssr6=(diferencia6*1.4705882353); break;
              case 3: $('#ssr6-img').removeClass("amarillo");  $('#ssr6-img').addClass("rosadoClaro"); fssr6=(diferencia6*1.4705882353); break;
              case 4: $('#ssr6-img').removeClass("rosadoClaro");  $('#ssr6-img').addClass("rosadoOscuro");fssr6=(diferencia6*1.4705882353);  break;}
             }else{diferencia6=0;$('#ssr6-img').removeClass("rosadoOscuro");fssr6=(diferencia6*1.4705882353);}
                  $('#issr6').val(diferencia6);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia6<=4 && diferencia6>0 ){diferencia6--;
            switch (diferencia6){
              case 0: $('#ssr6-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr6=(diferencia6*1.4705882353); break;
              case 1: $('#ssr6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr6-img').addClass("blanco");fssr6=(diferencia6*1.4705882353); break;
              case 2: $('#ssr6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr6-img').addClass("amarillo");fssr6=(diferencia6*1.4705882353);break;
              case 3: $('#ssr6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr6-img').addClass("rosadoClaro"); fssr6=(diferencia6*1.4705882353);break;
              case 4: $('#ssr6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr6-img').addClass("rosadoOscuro"); fssr6=(diferencia6*1.4705882353);break;}
              }else{diferencia6=4; $('#ssr6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr6-img').addClass("rosadoOscuro");fssr6=(diferencia6*1.4705882353);}
                    $('#issr6').val(diferencia6);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador6>=diferencia6){
                      var resultado= contador6-diferencia6;
                      // console.log(resultado);
                       $('#issd6').val(resultado);
            switch (resultado){
              case 0: $('#ssd6-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd6=(resultado*1.4705882353); break;
              case 1: $('#ssd6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd6-img').addClass("blanco"); fssd6=(resultado*1.4705882353);break;
              case 2: $('#ssd6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd6-img').addClass("amarillo");fssd6=(resultado*1.4705882353); break;
              case 3: $('#ssd6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd6-img').addClass("rosadoClaro");fssd6=(resultado*1.4705882353); break;
              case 4: $('#ssd6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd6-img').addClass("rosadoOscuro"); fssd6=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd6').val(resultado);$('#ssd6-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd6=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss6,fssr6,fssd6); 
          });
});

/**********************************************************************************INPUT 19=sss,20=ssr,21=ssd************************************************************************************************/

var fsss7;
var fssr7;
var fssd7;
var contador7=0; 
$(document).ready(function(){
$('.par-i7').val(contador7);
$("#isss7").mousedown(function(e){
  if(e.which == 1) {             
        if (contador7<4) {contador7++;
            switch (contador7){
              case 0: $('.par-img7').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss7=(contador7*1.4705882353); break;
              case 1: $('.par-img7').addClass("blanco"); fsss7=(contador7*1.4705882353); break;
            case 2: $('.par-img7').removeClass("blanco");$('.par-img7').addClass("amarillo");fsss7=(contador7*1.4705882353); break;
            case 3: $('.par-img7').removeClass("amarillo");$('.par-img7').addClass("rosadoClaro");fsss7=(contador7*1.4705882353); break;
            case 4: $('.par-img7').removeClass("rosadoClaro"); $('.par-img7').addClass("rosadoOscuro");fsss7=(contador7*1.4705882353); break;}
            }else{contador7=0;$('.par-img7').removeClass("rosadoOscuro");fsss7=(contador7*1.4705882353);}
                $('.par-i7').val(contador7);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador7<=4 && contador7>0 ){contador7--;
            switch (contador7){
              case 0: $('.par-img7').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss7=(contador7*1.4705882353); break;
              case 1: $('.par-img7').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img7').addClass("blanco");fsss7=(contador7*1.4705882353); break;
            case 2: $('.par-img7').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img7').addClass("amarillo");fsss7=(contador7*1.4705882353); break;
            case 3: $('.par-img7').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img7').addClass("rosadoClaro");fsss7=(contador7*1.4705882353);  break;
            case 4: $('.par-img7').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img7').addClass("rosadoOscuro");fsss7=(contador7*1.4705882353); break;}
            }else{contador7=4; $('.par-img7').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img7').addClass("rosadoOscuro");fsss7=(contador7*1.4705882353);}
                  $('.par-i7').val(contador7);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador7>=diferencia7){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador7-diferencia7;
                      // console.log(resultado);
                       $('#issd7').val(resultado);
            switch (resultado){
              case 0: $('#ssd7-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd7=(resultado*1.4705882353);break;
              case 1: $('#ssd7-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd7-img').addClass("blanco"); fssd7=(resultado*1.4705882353);break;
              case 2: $('#ssd7-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd7-img').addClass("amarillo");fssd7=(resultado*1.4705882353); break;
              case 3: $('#ssd7-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd7-img').addClass("rosadoClaro");fssd7=(resultado*1.4705882353);  break;
              case 4: $('#ssd7-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd7-img').addClass("rosadoOscuro"); fssd7=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd7').val(resultado);$('#ssd7-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd7=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss7,fssr7,fssd7);   
          });
});

var diferencia7=0;

$(document).ready(function(){
$('#issr7').val(diferencia7);
$("#issr7").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia7<4) {diferencia7++;
            switch (diferencia7){
              case 0: $('#ssr7-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr7=(diferencia7*1.4705882353); break;
              case 1: $('#ssr7-img').addClass("blanco");fssr7=(diferencia7*1.4705882353);  break;
              case 2: $('#ssr7-img').removeClass("blanco");  $('#ssr7-img').addClass("amarillo");fssr7=(diferencia7*1.4705882353); break;
              case 3: $('#ssr7-img').removeClass("amarillo");  $('#ssr7-img').addClass("rosadoClaro"); fssr7=(diferencia7*1.4705882353); break;
              case 4: $('#ssr7-img').removeClass("rosadoClaro");  $('#ssr7-img').addClass("rosadoOscuro");fssr7=(diferencia7*1.4705882353);  break;}
             }else{diferencia7=0;$('#ssr7-img').removeClass("rosadoOscuro");fssr7=(diferencia7*1.4705882353);}
                  $('#issr7').val(diferencia7);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia7<=4 && diferencia7>0 ){diferencia7--;
            switch (diferencia7){
              case 0: $('#ssr7-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr7=(diferencia7*1.4705882353); break;
              case 1:$('#ssr7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr7-img').addClass("blanco");fssr7=(diferencia7*1.4705882353); break;
              case 2: $('#ssr7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr7-img').addClass("amarillo");fssr7=(diferencia7*1.4705882353);break;
              case 3: $('#ssr7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr7-img').addClass("rosadoClaro"); fssr7=(diferencia7*1.4705882353);break;
              case 4: $('#ssr7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr7-img').addClass("rosadoOscuro"); fssr7=(diferencia7*1.4705882353);break;}
              }else{diferencia7=4; $('#ssr7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr7-img').addClass("rosadoOscuro");fssr7=(diferencia7*1.4705882353);}
                    $('#issr7').val(diferencia7);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador7>=diferencia7){
                      var resultado= contador7-diferencia7;
                      // console.log(resultado);
                       $('#issd7').val(resultado);
            switch (resultado){
              case 0: $('#ssd7-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd7=(resultado*1.4705882353); break;
              case 1: $('#ssd7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd7-img').addClass("blanco"); fssd7=(resultado*1.4705882353);break;
              case 2: $('#ssd7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd7-img').addClass("amarillo");fssd7=(resultado*1.4705882353); break;
              case 3: $('#ssd7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd7-img').addClass("rosadoClaro");fssd7=(resultado*1.4705882353); break;
              case 4: $('#ssd7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd7-img').addClass("rosadoOscuro"); fssd7=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd7').val(resultado);$('#ssd7-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd7=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss7,fssr7,fssd7); 
          });
});



/**********************************************************************************INPUT 22=sss,23=ssr,24=ssd************************************************************************************************/

var fsss8;
var fssr8;
var fssd8;
var contador8=0; 
$(document).ready(function(){
$('.par-i8').val(contador8);
$("#isss8").mousedown(function(e){
  if(e.which == 1) {             
        if (contador8<4) {contador8++;
            switch (contador8){
              case 0:$('.par-img8').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss8=(contador8*1.4705882353); break;
              case 1: $('.par-img8').addClass("blanco"); fsss8=(contador8*1.4705882353); break;
            case 2: $('.par-img8').removeClass("blanco");$('.par-img8').addClass("amarillo");fsss8=(contador8*1.4705882353); break;
            case 3:$('.par-img8').removeClass("amarillo");$('.par-img8').addClass("rosadoClaro");fsss8=(contador8*1.4705882353); break;
            case 4: $('.par-img8').removeClass("rosadoClaro"); $('.par-img8').addClass("rosadoOscuro");fsss8=(contador8*1.4705882353); break;}
            }else{contador8=0;$('.par-img8').removeClass("rosadoOscuro");fsss8=(contador8*1.4705882353);}
                $('.par-i8').val(contador8);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador8<=4 && contador8>0 ){contador8--;
            switch (contador8){
              case 0: $('.par-img8').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss8=(contador8*1.4705882353); break;
              case 1: $('.par-img8').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img8').addClass("blanco");fsss8=(contador8*1.4705882353); break;
            case 2: $('.par-img8').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img8').addClass("amarillo");fsss8=(contador8*1.4705882353); break;
            case 3: $('.par-img8').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img8').addClass("rosadoClaro");fsss8=(contador8*1.4705882353);  break;
            case 4: $('.par-img8').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img8').addClass("rosadoOscuro");fsss8=(contador8*1.4705882353); break;}
            }else{contador8=4; $('.par-img8').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img8').addClass("rosadoOscuro");fsss8=(contador8*1.4705882353);}
                  $('.par-i8').val(contador8);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador8>=diferencia8){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador8-diferencia8;
                      // console.log(resultado);
                       $('#issd8').val(resultado);
            switch (resultado){
              case 0: $('#ssd8-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd8=(resultado*1.4705882353);break;
              case 1: $('#ssd8-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd8-img').addClass("blanco"); fssd8=(resultado*1.4705882353);break;
              case 2: $('#ssd8-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd8-img').addClass("amarillo");fssd8=(resultado*1.4705882353); break;
              case 3: $('#ssd8-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd8-img').addClass("rosadoClaro");fssd8=(resultado*1.4705882353);  break;
              case 4: $('#ssd8-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd8-img').addClass("rosadoOscuro"); fssd8=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd8').val(resultado);$('#ssd8-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd8=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss8,fssr8,fssd8);   
          });
});

var diferencia8=0;

$(document).ready(function(){
$('#issr8').val(diferencia8);
$("#issr8").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia8<4) {diferencia8++;
            switch (diferencia8){
              case 0:$('#ssr8-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr8=(diferencia8*1.4705882353); break;
              case 1: $('#ssr8-img').addClass("blanco");fssr8=(diferencia8*1.4705882353);  break;
              case 2: $('#ssr8-img').removeClass("blanco");  $('#ssr8-img').addClass("amarillo");fssr8=(diferencia8*1.4705882353); break;
              case 3: $('#ssr8-img').removeClass("amarillo");  $('#ssr8-img').addClass("rosadoClaro"); fssr8=(diferencia8*1.4705882353); break;
              case 4: $('#ssr8-img').removeClass("rosadoClaro");  $('#ssr8-img').addClass("rosadoOscuro");fssr8=(diferencia8*1.4705882353);  break;}
             }else{diferencia8=0;$('#ssr8-img').removeClass("rosadoOscuro");fssr8=(diferencia8*1.4705882353);}
                  $('#issr8').val(diferencia8);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia8<=4 && diferencia8>0 ){diferencia8--;
            switch (diferencia8){
              case 0: $('#ssr8-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr8=(diferencia8*1.4705882353); break;
              case 1: $('#ssr8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr8-img').addClass("blanco");fssr8=(diferencia8*1.4705882353); break;
              case 2: $('#ssr8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr8-img').addClass("amarillo");fssr8=(diferencia8*1.4705882353);break;
              case 3: $('#ssr8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr8-img').addClass("rosadoClaro"); fssr8=(diferencia8*1.4705882353);break;
              case 4: $('#ssr8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr8-img').addClass("rosadoOscuro"); fssr8=(diferencia8*1.4705882353);break;}
              }else{diferencia8=4; $('#ssr8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr8-img').addClass("rosadoOscuro");fssr8=(diferencia8*1.4705882353);}
                    $('#issr8').val(diferencia8);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador8>=diferencia8){
                      var resultado= contador8-diferencia8;
                      // console.log(resultado);
                       $('#issd8').val(resultado);
            switch (resultado){
              case 0: $('#ssd8-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd8=(resultado*1.4705882353); break;
              case 1: $('#ssd8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd8-img').addClass("blanco"); fssd8=(resultado*1.4705882353);break;
              case 2: $('#ssd8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd8-img').addClass("amarillo");fssd8=(resultado*1.4705882353); break;
              case 3: $('#ssd8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd8-img').addClass("rosadoClaro");fssd8=(resultado*1.4705882353); break;
              case 4: $('#ssd8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd8-img').addClass("rosadoOscuro"); fssd8=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd8').val(resultado);$('#ssd8-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd8=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss8,fssr8,fssd8); 
          });
});



/**********************************************************************************INPUT 25=sss,26=ssr,27=ssd************************************************************************************************/

var fsss9;
var fssr9;
var fssd9;
var contador9=0; 
$(document).ready(function(){
$('.par-i9').val(contador9);
$("#isss9").mousedown(function(e){
  if(e.which == 1) {             
        if (contador9<4) {contador9++;
            switch (contador9){
              case 0: $('.par-img9').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss9=(contador9*1.4705882353); break;
              case 1: $('.par-img9').addClass("blanco"); fsss9=(contador9*1.4705882353); break;
            case 2: $('.par-img9').removeClass("blanco");$('.par-img9').addClass("amarillo");fsss9=(contador9*1.4705882353); break;
            case 3: $('.par-img9').removeClass("amarillo");$('.par-img9').addClass("rosadoClaro");fsss9=(contador9*1.4705882353); break;
            case 4: $('.par-img9').removeClass("rosadoClaro"); $('.par-img9').addClass("rosadoOscuro");fsss9=(contador9*1.4705882353); break;}
            }else{contador9=0;$('.par-img9').removeClass("rosadoOscuro");fsss9=(contador9*1.4705882353);}
                $('.par-i9').val(contador9);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador9<=4 && contador9>0 ){contador9--;
            switch (contador9){
              case 0: $('.par-img9').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss9=(contador9*1.4705882353); break;
              case 1: $('.par-img9').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img9').addClass("blanco");fsss9=(contador9*1.4705882353); break;
            case 2: $('.par-img9').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img9').addClass("amarillo");fsss9=(contador9*1.4705882353); break;
            case 3: $('.par-img9').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img9').addClass("rosadoClaro");fsss9=(contador9*1.4705882353);  break;
            case 4: $('.par-img9').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img9').addClass("rosadoOscuro");fsss9=(contador9*1.4705882353); break;}
            }else{contador9=4; $('.par-img9').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img9').addClass("rosadoOscuro");fsss9=(contador9*1.4705882353);}
                  $('.par-i9').val(contador9);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador9>=diferencia9){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador9-diferencia9;
                      // console.log(resultado);
                       $('#issd9').val(resultado);
            switch (resultado){
              case 0: $('#ssd9-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd9=(resultado*1.4705882353);break;
              case 1: $('#ssd9-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd9-img').addClass("blanco"); fssd9=(resultado*1.4705882353);break;
              case 2: $('#ssd9-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd9-img').addClass("amarillo");fssd9=(resultado*1.4705882353); break;
              case 3: $('#ssd9-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd9-img').addClass("rosadoClaro");fssd9=(resultado*1.4705882353);  break;
              case 4: $('#ssd9-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd9-img').addClass("rosadoOscuro"); fssd9=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd9').val(resultado);$('#ssd9-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd9=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss9,fssr9,fssd9);   
          });
});

var diferencia9=0;

$(document).ready(function(){
$('#issr9').val(diferencia9);
$("#issr9").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia9<4) {diferencia9++;
            switch (diferencia9){
              case 0: $('#ssr9-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr9=(diferencia9*1.4705882353); break;
              case 1: $('#ssr9-img').addClass("blanco");fssr9=(diferencia9*1.4705882353);  break;
              case 2: $('#ssr9-img').removeClass("blanco");  $('#ssr9-img').addClass("amarillo");fssr9=(diferencia9*1.4705882353); break;
              case 3: $('#ssr9-img').removeClass("amarillo");  $('#ssr9-img').addClass("rosadoClaro"); fssr9=(diferencia9*1.4705882353); break;
              case 4: $('#ssr9-img').removeClass("rosadoClaro");  $('#ssr9-img').addClass("rosadoOscuro");fssr9=(diferencia9*1.4705882353);  break;}
             }else{diferencia9=0;$('#ssr9-img').removeClass("rosadoOscuro");fssr9=(diferencia9*1.4705882353);}
                  $('#issr9').val(diferencia9);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia9<=4 && diferencia9>0 ){diferencia9--;
            switch (diferencia9){
              case 0: $('#ssr9-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr9=(diferencia9*1.4705882353); break;
              case 1: $('#ssr9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr9-img').addClass("blanco");fssr9=(diferencia9*1.4705882353); break;
              case 2: $('#ssr9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr9-img').addClass("amarillo");fssr9=(diferencia9*1.4705882353);break;
              case 3: $('#ssr9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr9-img').addClass("rosadoClaro"); fssr9=(diferencia9*1.4705882353);break;
              case 4: $('#ssr9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr9-img').addClass("rosadoOscuro"); fssr9=(diferencia9*1.4705882353);break;}
              }else{diferencia9=4; $('#ssr9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr9-img').addClass("rosadoOscuro");fssr9=(diferencia9*1.4705882353);}
                    $('#issr9').val(diferencia9);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador9>=diferencia9){
                      var resultado= contador9-diferencia9;
                      // console.log(resultado);
                       $('#issd9').val(resultado);
            switch (resultado){
              case 0: $('#ssd9-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd9=(resultado*1.4705882353); break;
              case 1: $('#ssd9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd9-img').addClass("blanco"); fssd9=(resultado*1.4705882353);break;
              case 2: $('#ssd9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd9-img').addClass("amarillo");fssd9=(resultado*1.4705882353); break;
              case 3: $('#ssd9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd9-img').addClass("rosadoClaro");fssd9=(resultado*1.4705882353); break;
              case 4: $('#ssd9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd9-img').addClass("rosadoOscuro"); fssd9=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd9').val(resultado);$('#ssd9-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd9=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss9,fssr9,fssd9); 
          });
});



/**********************************************************************************INPUT 28=sss,29=ssr,30=ssd************************************************************************************************/

var fsss10;
var fssr10;
var fssd10;
var contador10=0; 
$(document).ready(function(){
$('.par-i10').val(contador10);
$("#isss10").mousedown(function(e){
  if(e.which == 1) {             
        if (contador10<4) {contador10++;
            switch (contador10){
              case 0: $('.par-img10').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss10=(contador10*1.4705882353); break;
              case 1: $('.par-img10').addClass("blanco"); fsss10=(contador10*1.4705882353); break;
            case 2: $('.par-img10').removeClass("blanco");$('.par-img10').addClass("amarillo");fsss10=(contador10*1.4705882353); break;
            case 3:$('.par-img10').removeClass("amarillo");$('.par-img10').addClass("rosadoClaro");fsss10=(contador10*1.4705882353); break;
            case 4: $('.par-img10').removeClass("rosadoClaro"); $('.par-img10').addClass("rosadoOscuro");fsss10=(contador10*1.4705882353); break;}
            }else{contador10=0;$('.par-img10').removeClass("rosadoOscuro");fsss10=(contador10*1.4705882353);}
                $('.par-i10').val(contador10);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador10<=4 && contador10>0 ){contador10--;
            switch (contador10){
              case 0: $('.par-img10').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss10=(contador10*1.4705882353); break;
              case 1: $('.par-img10').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img10').addClass("blanco");fsss10=(contador10*1.4705882353); break;
            case 2: $('.par-img10').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img10').addClass("amarillo");fsss10=(contador10*1.4705882353); break;
            case 3: $('.par-img10').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img10').addClass("rosadoClaro");fsss10=(contador10*1.4705882353);  break;
            case 4: $('.par-img10').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img10').addClass("rosadoOscuro");fsss10=(contador10*1.4705882353); break;}
            }else{contador10=4; $('.par-img10').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img10').addClass("rosadoOscuro");fsss10=(contador10*1.4705882353);}
                  $('.par-i10').val(contador10);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador10>=diferencia10){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador10-diferencia10;
                      // console.log(resultado);
                       $('#issd10').val(resultado);
            switch (resultado){
              case 0: $('#ssd10-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd10=(resultado*1.4705882353);break;
              case 1: $('#ssd10-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd10-img').addClass("blanco"); fssd10=(resultado*1.4705882353);break;
              case 2: $('#ssd10-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd10-img').addClass("amarillo");fssd10=(resultado*1.4705882353); break;
              case 3: $('#ssd10-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd10-img').addClass("rosadoClaro");fssd10=(resultado*1.4705882353);  break;
              case 4: $('#ssd10-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd10-img').addClass("rosadoOscuro"); fssd10=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd10').val(resultado);$('#ssd10-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd10=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss10,fssr10,fssd10);   
          });
});

var diferencia10=0;

$(document).ready(function(){
$('#issr10').val(diferencia10);
$("#issr10").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia10<4) {diferencia10++;
            switch (diferencia10){
              case 0: $('#ssr10-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr10=(diferencia10*1.4705882353); break;
              case 1: $('#ssr10-img').addClass("blanco");fssr10=(diferencia10*1.4705882353);  break;
              case 2: $('#ssr10-img').removeClass("blanco");  $('#ssr10-img').addClass("amarillo");fssr10=(diferencia10*1.4705882353); break;
              case 3: $('#ssr10-img').removeClass("amarillo");  $('#ssr10-img').addClass("rosadoClaro"); fssr10=(diferencia10*1.4705882353); break;
              case 4: $('#ssr10-img').removeClass("rosadoClaro");  $('#ssr10-img').addClass("rosadoOscuro");fssr10=(diferencia10*1.4705882353);  break;}
             }else{diferencia10=0;$('#ssr10-img').removeClass("rosadoOscuro");fssr10=(diferencia10*1.4705882353);}
                  $('#issr10').val(diferencia10);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia10<=4 && diferencia10>0 ){diferencia10--;
            switch (diferencia10){
              case 0: $('#ssr10-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr10=(diferencia10*1.4705882353); break;
              case 1: $('#ssr10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr10-img').addClass("blanco");fssr10=(diferencia10*1.4705882353); break;
              case 2: $('#ssr10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr10-img').addClass("amarillo");fssr10=(diferencia10*1.4705882353);break;
              case 3: $('#ssr10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr10-img').addClass("rosadoClaro"); fssr10=(diferencia10*1.4705882353);break;
              case 4: $('#ssr10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr10-img').addClass("rosadoOscuro");fssr10=(diferencia10*1.4705882353);break;}
              }else{diferencia10=4; $('#ssr10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr10-img').addClass("rosadoOscuro");fssr10=(diferencia10*1.4705882353);}
                    $('#issr10').val(diferencia10);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador10>=diferencia10){
                      var resultado= contador10-diferencia10;
                      // console.log(resultado);
                       $('#issd10').val(resultado);
            switch (resultado){
              case 0: $('#ssd10-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd10=(resultado*1.4705882353); break;
              case 1: $('#ssd10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd10-img').addClass("blanco"); fssd10=(resultado*1.4705882353);break;
              case 2: $('#ssd10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd10-img').addClass("amarillo");fssd10=(resultado*1.4705882353); break;
              case 3: $('#ssd10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd10-img').addClass("rosadoClaro");fssd10=(resultado*1.4705882353); break;
              case 4: $('#ssd10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd10-img').addClass("rosadoOscuro"); fssd10=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd10').val(resultado);$('#ssd10-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd10=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss10,fssr10,fssd10); 
          });
});




/**********************************************************************************INPUT 31=sss,32=ssr,33=ssd************************************************************************************************/

var fsss11;
var fssr11;
var fssd11;
var contador11=0; 
$(document).ready(function(){
$('.par-i11').val(contador11);
$("#isss11").mousedown(function(e){
  if(e.which == 1) {             
        if (contador11<4) {contador11++;
            switch (contador11){
              case 0: $('.par-img11').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss11=(contador11*1.4705882353); break;
              case 1: $('.par-img11').addClass("blanco"); fsss11=(contador11*1.4705882353); break;
            case 2: $('.par-img11').removeClass("blanco");$('.par-img11').addClass("amarillo");fsss11=(contador11*1.4705882353); break;
            case 3: $('.par-img11').removeClass("amarillo");$('.par-img11').addClass("rosadoClaro");fsss11=(contador11*1.4705882353); break;
            case 4: $('.par-img11').removeClass("rosadoClaro"); $('.par-img11').addClass("rosadoOscuro");fsss11=(contador11*1.4705882353); break;}
            }else{contador11=0;$('.par-img11').removeClass("rosadoOscuro");fsss11=(contador11*1.4705882353);}
                $('.par-i11').val(contador11);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador11<=4 && contador11>0 ){contador11--;
            switch (contador11){
              case 0: $('.par-img11').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss11=(contador11*1.4705882353); break;
              case 1: $('.par-img11').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img11').addClass("blanco");fsss11=(contador11*1.4705882353); break;
            case 2: $('.par-img11').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img11').addClass("amarillo");fsss11=(contador11*1.4705882353); break;
            case 3: $('.par-img11').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img11').addClass("rosadoClaro");fsss11=(contador11*1.4705882353);  break;
            case 4: $('.par-img11').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img11').addClass("rosadoOscuro");fsss11=(contador11*1.4705882353); break;}
            }else{contador11=4; $('.par-img11').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img11').addClass("rosadoOscuro");fsss11=(contador11*1.4705882353);}
                  $('.par-i11').val(contador11);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador11>=diferencia11){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador11-diferencia11;
                      // console.log(resultado);
                       $('#issd11').val(resultado);
            switch (resultado){
              case 0: $('#ssd11-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd11=(resultado*1.4705882353);break;
              case 1: $('#ssd11-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd11-img').addClass("blanco"); fssd11=(resultado*1.4705882353);break;
              case 2: $('#ssd11-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd11-img').addClass("amarillo");fssd11=(resultado*1.4705882353); break;
              case 3: $('#ssd11-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd11-img').addClass("rosadoClaro");fssd11=(resultado*1.4705882353);  break;
              case 4: $('#ssd11-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd11-img').addClass("rosadoOscuro"); fssd11=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd11').val(resultado);$('#ssd11-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd11=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss11,fssr11,fssd11);   
          });
});

var diferencia11=0;

$(document).ready(function(){
$('#issr11').val(diferencia11);
$("#issr11").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia11<4) {diferencia11++;
            switch (diferencia11){
              case 0: $('#ssr11-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr11=(diferencia11*1.4705882353); break;
              case 1: $('#ssr11-img').addClass("blanco");fssr11=(diferencia11*1.4705882353);  break;
              case 2: $('#ssr11-img').removeClass("blanco");  $('#ssr11-img').addClass("amarillo");fssr11=(diferencia11*1.4705882353); break;
              case 3: $('#ssr11-img').removeClass("amarillo");  $('#ssr11-img').addClass("rosadoClaro");fssr11=(diferencia11*1.4705882353); break;
              case 4: $('#ssr11-img').removeClass("rosadoClaro");  $('#ssr11-img').addClass("rosadoOscuro");fssr11=(diferencia11*1.4705882353);  break;}
             }else{diferencia11=0;$('#ssr11-img').removeClass("rosadoOscuro");fssr11=(diferencia11*1.4705882353);}
                  $('#issr11').val(diferencia11);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia11<=4 && diferencia11>0 ){diferencia11--;
            switch (diferencia11){
              case 0: $('#ssr11-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr11=(diferencia11*1.4705882353); break;
              case 1:$('#ssr11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr11-img').addClass("blanco");fssr11=(diferencia11*1.4705882353); break;
              case 2:$('#ssr11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr11-img').addClass("amarillo");fssr11=(diferencia11*1.4705882353);break;
              case 3: $('#ssr11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr11-img').addClass("rosadoClaro"); fssr11=(diferencia11*1.4705882353);break;
              case 4: $('#ssr11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr11-img').addClass("rosadoOscuro"); fssr11=(diferencia11*1.4705882353);break;}
              }else{diferencia11=4; $('#ssr11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr11-img').addClass("rosadoOscuro");fssr11=(diferencia11*1.4705882353);}
                    $('#issr11').val(diferencia11);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador11>=diferencia11){
                      var resultado= contador11-diferencia11;
                      // console.log(resultado);
                       $('#issd11').val(resultado);
            switch (resultado){
              case 0: $('#ssd11-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd11=(resultado*1.4705882353); break;
              case 1: $('#ssd11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd11-img').addClass("blanco");fssd11=(resultado*1.4705882353);break;
              case 2: $('#ssd11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd11-img').addClass("amarillo");fssd11=(resultado*1.4705882353); break;
              case 3: $('#ssd11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd11-img').addClass("rosadoClaro");fssd11=(resultado*1.4705882353); break;
              case 4: $('#ssd11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd11-img').addClass("rosadoOscuro"); fssd11=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd11').val(resultado);$('#ssd11-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd11=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss11,fssr11,fssd11); 
          });
});

/**********************************************************************************INPUT 34=sss,35=ssr,36=ssd************************************************************************************************/

var fsss12;
var fssr12;
var fssd12;
var contador12=0; 
$(document).ready(function(){
$('.par-i12').val(contador12);
$("#isss12").mousedown(function(e){
  if(e.which == 1) {             
        if (contador12<4) {contador12++;
            switch (contador12){
              case 0: $('.par-img12').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss12=(contador12*1.4705882353); break;
              case 1: $('.par-img12').addClass("blanco"); fsss12=(contador12*1.4705882353); break;
            case 2: $('.par-img12').removeClass("blanco");$('.par-img12').addClass("amarillo");fsss12=(contador12*1.4705882353); break;
            case 3: $('.par-img12').removeClass("amarillo");$('.par-img12').addClass("rosadoClaro");fsss12=(contador12*1.4705882353); break;
            case 4: $('.par-img12').removeClass("rosadoClaro"); $('.par-img12').addClass("rosadoOscuro");fsss12=(contador12*1.4705882353); break;}
            }else{contador12=0;$('.par-img12').removeClass("rosadoOscuro");fsss12=(contador12*1.4705882353);}
                $('.par-i12').val(contador12);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador12<=4 && contador12>0 ){contador12--;
            switch (contador12){
              case 0: $('.par-img12').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss12=(contador12*1.4705882353); break;
              case 1: $('.par-img12').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img12').addClass("blanco");fsss12=(contador12*1.4705882353); break;
            case 2: $('.par-img12').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img12').addClass("amarillo");fsss12=(contador12*1.4705882353); break;
            case 3: $('.par-img12').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img12').addClass("rosadoClaro");fsss12=(contador12*1.4705882353);  break;
            case 4: $('.par-img12').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img12').addClass("rosadoOscuro");fsss12=(contador12*1.4705882353); break;}
            }else{contador12=4; $('.par-img12').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img12').addClass("rosadoOscuro");fsss12=(contador12*1.4705882353);}
                  $('.par-i12').val(contador12);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador12>=diferencia12){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador12-diferencia12;
                      // console.log(resultado);
                       $('#issd12').val(resultado);
            switch (resultado){
              case 0: $('#ssd12-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd12=(resultado*1.4705882353);break;
              case 1: $('#ssd12-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd12-img').addClass("blanco"); fssd12=(resultado*1.4705882353);break;
              case 2: $('#ssd12-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd12-img').addClass("amarillo");fssd12=(resultado*1.4705882353); break;
              case 3: $('#ssd12-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd12-img').addClass("rosadoClaro");fssd12=(resultado*1.4705882353);  break;
              case 4: $('#ssd12-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd12-img').addClass("rosadoOscuro"); fssd12=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd12').val(resultado);$('#ssd12-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd12=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss12,fssr12,fssd12);   
          });
});

var diferencia12=0;

$(document).ready(function(){
$('#issr12').val(diferencia12);
$("#issr12").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia12<4) {diferencia12++;
            switch (diferencia12){
              case 0: $('#ssr12-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr12=(diferencia12*1.4705882353); break;
              case 1: $('#ssr12-img').addClass("blanco");fssr12=(diferencia12*1.4705882353);  break;
              case 2: $('#ssr12-img').removeClass("blanco");  $('#ssr12-img').addClass("amarillo");fssr12=(diferencia12*1.4705882353); break;
              case 3: $('#ssr12-img').removeClass("amarillo");  $('#ssr12-img').addClass("rosadoClaro"); fssr12=(diferencia12*1.4705882353); break;
              case 4: $('#ssr12-img').removeClass("rosadoClaro");  $('#ssr12-img').addClass("rosadoOscuro");fssr12=(diferencia12*1.4705882353);  break;}
             }else{diferencia12=0;$('#ssr12-img').removeClass("rosadoOscuro");fssr12=(diferencia12*1.4705882353);}
                  $('#issr12').val(diferencia12);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia12<=4 && diferencia12>0 ){diferencia12--;
            switch (diferencia12){
              case 0: $('#ssr12-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr12=(diferencia12*1.4705882353); break;
              case 1: $('#ssr12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr12-img').addClass("blanco");fssr12=(diferencia12*1.4705882353); break;
              case 2: $('#ssr12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr12-img').addClass("amarillo");fssr12=(diferencia12*1.4705882353);break;
              case 3: $('#ssr12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr12-img').addClass("rosadoClaro"); fssr12=(diferencia12*1.4705882353);break;
              case 4: $('#ssr12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr12-img').addClass("rosadoOscuro"); fssr12=(diferencia12*1.4705882353);break;}
              }else{diferencia12=4;  $('#ssr12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr12-img').addClass("rosadoOscuro");fssr12=(diferencia12*1.4705882353);}
                    $('#issr12').val(diferencia12);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador12>=diferencia12){
                      var resultado= contador12-diferencia12;
                      // console.log(resultado);
                       $('#issd12').val(resultado);
            switch (resultado){
              case 0: $('#ssd12-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd12=(resultado*1.4705882353); break;
              case 1: $('#ssd12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd12-img').addClass("blanco"); fssd12=(resultado*1.4705882353);break;
              case 2: $('#ssd12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd12-img').addClass("amarillo");fssd12=(resultado*1.4705882353); break;
              case 3: $('#ssd12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd12-img').addClass("rosadoClaro");fssd12=(resultado*1.4705882353); break;
              case 4: $('#ssd12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd12-img').addClass("rosadoOscuro"); fssd12=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd12').val(resultado);$('#ssd12-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd12=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss12,fssr12,fssd12); 
          });
});


/**********************************************************************************INPUT 37=sss,38=ssr,39=ssd************************************************************************************************/

var fsss13;
var fssr13;
var fssd13;
var contador13=0; 
$(document).ready(function(){
$('.par-i13').val(contador13);
$("#isss13").mousedown(function(e){
  if(e.which == 1) {             
        if (contador13<4) {contador13++;
            switch (contador13){
              case 0: $('.par-img13').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss13=(contador13*1.4705882353); break;
              case 1: $('.par-img13').addClass("blanco"); fsss13=(contador13*1.4705882353); break;
            case 2: $('.par-img13').removeClass("blanco");$('.par-img13').addClass("amarillo");fsss13=(contador13*1.4705882353); break;
            case 3: $('.par-img13').removeClass("amarillo");$('.par-img13').addClass("rosadoClaro");fsss13=(contador13*1.4705882353); break;
            case 4: $('.par-img13').removeClass("rosadoClaro"); $('.par-img13').addClass("rosadoOscuro");fsss13=(contador13*1.4705882353); break;}
            }else{contador13=0;$('.par-img13').removeClass("rosadoOscuro");fsss13=(contador13*1.4705882353);}
                $('.par-i13').val(contador13);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador13<=4 && contador13>0 ){contador13--;
            switch (contador13){
              case 0: $('.par-img13').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss13=(contador13*1.4705882353); break;
              case 1: $('.par-img13').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img13').addClass("blanco");fsss13=(contador13*1.4705882353); break;
            case 2: $('.par-img13').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img13').addClass("amarillo");fsss13=(contador13*1.4705882353); break;
            case 3: $('.par-img13').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img13').addClass("rosadoClaro");fsss13=(contador13*1.4705882353);  break;
            case 4: $('.par-img13').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img13').addClass("rosadoOscuro");fsss13=(contador13*1.4705882353); break;}
            }else{contador13=4; $('.par-img13').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img13').addClass("rosadoOscuro");fsss13=(contador13*1.4705882353);}
                  $('.par-i13').val(contador13);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador13>=diferencia13){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador13-diferencia13;
                      // console.log(resultado);
                       $('#issd13').val(resultado);
            switch (resultado){
              case 0: $('#ssd13-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd13=(resultado*1.4705882353);break;
              case 1: $('#ssd13-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd13-img').addClass("blanco"); fssd13=(resultado*1.4705882353);break;
              case 2: $('#ssd13-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd13-img').addClass("amarillo");fssd13=(resultado*1.4705882353); break;
              case 3: $('#ssd13-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd13-img').addClass("rosadoClaro");fssd13=(resultado*1.4705882353);  break;
              case 4: $('#ssd13-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd13-img').addClass("rosadoOscuro");fssd13=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd13').val(resultado);$('#ssd13-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd13=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss13,fssr13,fssd13);   
          });
});

var diferencia13=0;

$(document).ready(function(){
$('#issr13').val(diferencia13);
$("#issr13").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia13<4) {diferencia13++;
            switch (diferencia13){
              case 0:  $('#ssr13-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr13=(diferencia13*1.4705882353); break;
              case 1: $('#ssr13-img').addClass("blanco");fssr13=(diferencia13*1.4705882353);  break;
              case 2: $('#ssr13-img').removeClass("blanco");  $('#ssr13-img').addClass("amarillo");fssr13=(diferencia13*1.4705882353); break;
              case 3: $('#ssr13-img').removeClass("amarillo");  $('#ssr13-img').addClass("rosadoClaro"); fssr13=(diferencia13*1.4705882353); break;
              case 4: $('#ssr13-img').removeClass("rosadoClaro");  $('#ssr13-img').addClass("rosadoOscuro");fssr13=(diferencia13*1.4705882353);  break;}
             }else{diferencia13=0;$('#ssr13-img').removeClass("rosadoOscuro");fssr13=(diferencia13*1.4705882353);}
                  $('#issr13').val(diferencia13);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia13<=4 && diferencia13>0 ){diferencia13--;
            switch (diferencia13){
              case 0: $('#ssr13-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr13=(diferencia13*1.4705882353); break;
              case 1: $('#ssr13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr13-img').addClass("blanco");fssr13=(diferencia13*1.4705882353); break;
              case 2: $('#ssr13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr13-img').addClass("amarillo");fssr13=(diferencia13*1.4705882353);break;
              case 3: $('#ssr13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr13-img').addClass("rosadoClaro"); fssr13=(diferencia13*1.4705882353);break;
              case 4: $('#ssr13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr13-img').addClass("rosadoOscuro"); fssr13=(diferencia13*1.4705882353);break;}
              }else{diferencia13=4;  $('#ssr13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr13-img').addClass("rosadoOscuro");fssr13=(diferencia13*1.4705882353);}
                    $('#issr13').val(diferencia13);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador13>=diferencia13){
                      var resultado= contador13-diferencia13;
                      // console.log(resultado);
                       $('#issd13').val(resultado);
            switch (resultado){
              case 0: $('#ssd13-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd13=(resultado*1.4705882353); break;
              case 1: $('#ssd13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd13-img').addClass("blanco"); fssd13=(resultado*1.4705882353);break;
              case 2: $('#ssd13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd13-img').addClass("amarillo");fssd13=(resultado*1.4705882353); break;
              case 3: $('#ssd13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd13-img').addClass("rosadoClaro");fssd13=(resultado*1.4705882353); break;
              case 4: $('#ssd13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd13-img').addClass("rosadoOscuro"); fssd13=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd13').val(resultado);$('#ssd13-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd13=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss13,fssr13,fssd13); 
          });
});




/**********************************************************************************INPUT 40=sss,41=ssr,42=ssd************************************************************************************************/

var fsss14;
var fssr14;
var fssd14;
var contador14=0; 
$(document).ready(function(){
$('.par-i14').val(contador14);
$("#isss14").mousedown(function(e){
  if(e.which == 1) {             
        if (contador14<4) {contador14++;
            switch (contador14){
              case 0: $('.par-img14').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss14=(contador14*1.4705882353); break;
              case 1: $('.par-img14').addClass("blanco"); fsss14=(contador14*1.4705882353); break;
            case 2: $('.par-img14').removeClass("blanco");$('.par-img14').addClass("amarillo");fsss14=(contador14*1.4705882353); break;
            case 3: $('.par-img14').removeClass("amarillo");$('.par-img14').addClass("rosadoClaro");fsss14=(contador14*1.4705882353); break;
            case 4: $('.par-img14').removeClass("rosadoClaro"); $('.par-img14').addClass("rosadoOscuro");fsss14=(contador14*1.4705882353); break;}
            }else{contador14=0;$('.par-img14').removeClass("rosadoOscuro");fsss14=(contador14*1.4705882353);}
                $('.par-i14').val(contador14);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador14<=4 && contador14>0 ){contador14--;
            switch (contador14){
              case 0: $('.par-img14').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss14=(contador14*1.4705882353); break;
              case 1: $('.par-img14').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img14').addClass("blanco");fsss14=(contador14*1.4705882353); break;
            case 2: $('.par-img14').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img14').addClass("amarillo");fsss14=(contador14*1.4705882353); break;
            case 3: $('.par-img14').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img14').addClass("rosadoClaro");fsss14=(contador14*1.4705882353);  break;
            case 4: $('.par-img14').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img14').addClass("rosadoOscuro");fsss14=(contador14*1.4705882353); break;}
            }else{contador14=4; $('.par-img14').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img14').addClass("rosadoOscuro");fsss14=(contador14*1.4705882353);}
                  $('.par-i14').val(contador14);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador14>=diferencia14){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador14-diferencia14;
                      // console.log(resultado);
                       $('#issd14').val(resultado);
            switch (resultado){
              case 0: $('#ssd14-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd14=(resultado*1.4705882353);break;
              case 1: $('#ssd14-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd14-img').addClass("blanco"); fssd14=(resultado*1.4705882353);break;
              case 2: $('#ssd14-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd14-img').addClass("amarillo");fssd14=(resultado*1.4705882353); break;
              case 3: $('#ssd14-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd14-img').addClass("rosadoClaro");fssd14=(resultado*1.4705882353);  break;
              case 4: $('#ssd14-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd14-img').addClass("rosadoOscuro");fssd14=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd14').val(resultado);$('#ssd14-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd14=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss14,fssr14,fssd14);   
          });
});

var diferencia14=0;

$(document).ready(function(){
$('#issr14').val(diferencia14);
$("#issr14").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia14<4) {diferencia14++;
            switch (diferencia14){
              case 0: $('#ssr14-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr14=(diferencia14*1.4705882353); break;
              case 1: $('#ssr14-img').addClass("blanco");fssr14=(diferencia14*1.4705882353);  break;
              case 2: $('#ssr14-img').removeClass("blanco");  $('#ssr14-img').addClass("amarillo");fssr14=(diferencia14*1.4705882353); break;
              case 3: $('#ssr14-img').removeClass("amarillo");  $('#ssr14-img').addClass("rosadoClaro"); fssr14=(diferencia14*1.4705882353); break;
              case 4: $('#ssr14-img').removeClass("rosadoClaro");  $('#ssr14-img').addClass("rosadoOscuro");fssr14=(diferencia14*1.4705882353);  break;}
             }else{diferencia14=0;$('#ssr14-img').removeClass("rosadoOscuro");fssr14=(diferencia14*1.4705882353);}
                  $('#issr14').val(diferencia14);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia14<=4 && diferencia14>0 ){diferencia14--;
            switch (diferencia14){
              case 0: $('#ssr14-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr14=(diferencia14*1.4705882353); break;
              case 1: $('#ssr14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr14-img').addClass("blanco");fssr14=(diferencia14*1.4705882353); break;
              case 2: $('#ssr14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr14-img').addClass("amarillo");fssr14=(diferencia14*1.4705882353);break;
              case 3: $('#ssr14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr14-img').addClass("rosadoClaro"); fssr14=(diferencia14*1.4705882353);break;
              case 4: $('#ssr14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr14-img').addClass("rosadoOscuro"); fssr14=(diferencia14*1.4705882353);break;}
              }else{diferencia14=4; $('#ssr14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr14-img').addClass("rosadoOscuro");fssr14=(diferencia14*1.4705882353);}
                    $('#issr14').val(diferencia14);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador14>=diferencia14){
                      var resultado= contador14-diferencia14;
                      // console.log(resultado);
                       $('#issd14').val(resultado);
            switch (resultado){
              case 0: $('#ssd14-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd14=(resultado*1.4705882353); break;
              case 1: $('#ssd14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd14-img').addClass("blanco"); fssd14=(resultado*1.4705882353);break;
              case 2: $('#ssd14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd14-img').addClass("amarillo");fssd14=(resultado*1.4705882353); break;
              case 3: $('#ssd14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd14-img').addClass("rosadoClaro");fssd14=(resultado*1.4705882353); break;
              case 4: $('#ssd14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd14-img').addClass("rosadoOscuro"); fssd14=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd14').val(resultado);$('#ssd14-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd14=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss14,fssr14,fssd14); 
          });
});


/**********************************************************************************INPUT 43=sss,44=ssr,45=ssd************************************************************************************************/

var fsss15;
var fssr15;
var fssd15;
var contador15=0; 
$(document).ready(function(){
$('.par-i15').val(contador15);
$("#isss15").mousedown(function(e){
  if(e.which == 1) {             
        if (contador15<4) {contador15++;
            switch (contador15){
              case 0: $('.par-img15').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss15=(contador15*1.4705882353); break;
              case 1: $('.par-img15').addClass("blanco"); fsss15=(contador15*1.4705882353); break;
            case 2: $('.par-img15').removeClass("blanco");$('.par-img15').addClass("amarillo");fsss15=(contador15*1.4705882353); break;
            case 3: $('.par-img15').removeClass("amarillo");$('.par-img15').addClass("rosadoClaro");fsss15=(contador15*1.4705882353); break;
            case 4: $('.par-img15').removeClass("rosadoClaro"); $('.par-img15').addClass("rosadoOscuro");fsss15=(contador15*1.4705882353); break;}
            }else{contador15=0;$('.par-img15').removeClass("rosadoOscuro");fsss15=(contador15*1.4705882353);}
                $('.par-i15').val(contador15);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador15<=4 && contador15>0 ){contador15--;
            switch (contador15){
              case 0: $('.par-img15').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss15=(contador15*1.4705882353); break;
              case 1: $('.par-img15').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img15').addClass("blanco");fsss15=(contador15*1.4705882353); break;
            case 2: $('.par-img15').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img15').addClass("amarillo");fsss15=(contador15*1.4705882353); break;
            case 3: $('.par-img15').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img15').addClass("rosadoClaro");fsss15=(contador15*1.4705882353);  break;
            case 4: $('.par-img15').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img15').addClass("rosadoOscuro");fsss15=(contador15*1.4705882353); break;}
            }else{contador15=4; $('.par-img15').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img15').addClass("rosadoOscuro");fsss15=(contador15*1.4705882353);}
                  $('.par-i15').val(contador15);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador15>=diferencia15){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador15-diferencia15;
                      // console.log(resultado);
                       $('#issd15').val(resultado);
            switch (resultado){
              case 0: $('#ssd15-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd15=(resultado*1.4705882353);break;
              case 1: $('#ssd15-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd15-img').addClass("blanco"); fssd15=(resultado*1.4705882353);break;
              case 2: $('#ssd15-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd15-img').addClass("amarillo");fssd15=(resultado*1.4705882353); break;
              case 3: $('#ssd15-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd15-img').addClass("rosadoClaro");fssd15=(resultado*1.4705882353);  break;
              case 4: $('#ssd15-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd15-img').addClass("rosadoOscuro"); fssd15=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd15').val(resultado);$('#ssd15-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd15=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss15,fssr15,fssd15);   
          });
});

var diferencia15=0;

$(document).ready(function(){
$('#issr15').val(diferencia15);
$("#issr15").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia15<4) {diferencia15++;
            switch (diferencia15){
              case 0: $('#ssr15-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr15=(diferencia15*1.4705882353); break;
              case 1: $('#ssr15-img').addClass("blanco");fssr15=(diferencia15*1.4705882353);  break;
              case 2: $('#ssr15-img').removeClass("blanco");  $('#ssr15-img').addClass("amarillo");fssr15=(diferencia15*1.4705882353); break;
              case 3: $('#ssr15-img').removeClass("amarillo");  $('#ssr15-img').addClass("rosadoClaro"); fssr15=(diferencia15*1.4705882353); break;
              case 4: $('#ssr15-img').removeClass("rosadoClaro");  $('#ssr15-img').addClass("rosadoOscuro");fssr15=(diferencia15*1.4705882353);  break;}
             }else{diferencia15=0;$('#ssr15-img').removeClass("rosadoOscuro");fssr15=(diferencia15*1.4705882353);}
                  $('#issr15').val(diferencia15);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia15<=4 && diferencia15>0 ){diferencia15--;
            switch (diferencia15){
              case 0: $('#ssr15-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr15=(diferencia15*1.4705882353); break;
              case 1: $('#ssr15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr15-img').addClass("blanco");fssr15=(diferencia15*1.4705882353); break;
              case 2: $('#ssr15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr15-img').addClass("amarillo");fssr15=(diferencia15*1.4705882353);break;
              case 3: $('#ssr15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr15-img').addClass("rosadoClaro"); fssr15=(diferencia15*1.4705882353);break;
              case 4: $('#ssr15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr15-img').addClass("rosadoOscuro"); fssr15=(diferencia15*1.4705882353);break;}
              }else{diferencia15=4; $('#ssr15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr15-img').addClass("rosadoOscuro");fssr15=(diferencia15*1.4705882353);}
                    $('#issr15').val(diferencia15);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador15>=diferencia15){
                      var resultado= contador15-diferencia15;
                      // console.log(resultado);
                       $('#issd15').val(resultado);
            switch (resultado){
              case 0: $('#ssd15-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd15=(resultado*1.4705882353); break;
              case 1: $('#ssd15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd15-img').addClass("blanco"); fssd15=(resultado*1.4705882353);break;
              case 2: $('#ssd15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd15-img').addClass("amarillo");fssd15=(resultado*1.4705882353); break;
              case 3: $('#ssd15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd15-img').addClass("rosadoClaro");fssd15=(resultado*1.4705882353); break;
              case 4: $('#ssd15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd15-img').addClass("rosadoOscuro"); fssd15=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd15').val(resultado);$('#ssd15-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd15=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss15,fssr15,fssd15); 
          });
});



/**********************************************************************************INPUT 46=sss,47=ssr,48=ssd************************************************************************************************/

var fsss16;
var fssr16;
var fssd16;
var contador16=0; 
$(document).ready(function(){
$('.par-i16').val(contador16);
$("#isss16").mousedown(function(e){
  if(e.which == 1) {             
        if (contador16<4) {contador16++;
            switch (contador16){
              case 0: $('.par-img16').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss16=(contador16*1.4705882353); break;
              case 1: $('.par-img16').addClass("blanco"); fsss16=(contador16*1.4705882353); break;
            case 2: $('.par-img16').removeClass("blanco");$('.par-img16').addClass("amarillo");fsss16=(contador16*1.4705882353); break;
            case 3: $('.par-img16').removeClass("amarillo");$('.par-img16').addClass("rosadoClaro");fsss16=(contador16*1.4705882353); break;
            case 4: $('.par-img16').removeClass("rosadoClaro"); $('.par-img16').addClass("rosadoOscuro");fsss16=(contador16*1.4705882353); break;}
            }else{contador16=0;$('.par-img16').removeClass("rosadoOscuro");fsss16=(contador16*1.4705882353);}
                $('.par-i16').val(contador16);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador16<=4 && contador16>0 ){contador16--;
            switch (contador16){
              case 0: $('.par-img16').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss16=(contador16*1.4705882353); break;
              case 1: $('.par-img16').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img16').addClass("blanco");fsss16=(contador16*1.4705882353); break;
            case 2: $('.par-img16').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img16').addClass("amarillo");fsss16=(contador16*1.4705882353); break;
            case 3: $('.par-img16').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img16').addClass("rosadoClaro");fsss16=(contador16*1.4705882353);  break;
            case 4: $('.par-img16').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img16').addClass("rosadoOscuro");fsss16=(contador16*1.4705882353); break;}
            }else{contador16=4;$('.par-img16').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img16').addClass("rosadoOscuro");fsss16=(contador16*1.4705882353);}
                  $('.par-i16').val(contador16);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador16>=diferencia16){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador16-diferencia16;
                      // console.log(resultado);
                       $('#issd16').val(resultado);
            switch (resultado){
              case 0: $('#ssd16-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd16=(resultado*1.4705882353);break;
              case 1: $('#ssd16-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd16-img').addClass("blanco"); fssd16=(resultado*1.4705882353);break;
              case 2: $('#ssd16-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd16-img').addClass("amarillo");fssd16=(resultado*1.4705882353); break;
              case 3: $('#ssd16-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd16-img').addClass("rosadoClaro");fssd16=(resultado*1.4705882353);  break;
              case 4: $('#ssd16-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd16-img').addClass("rosadoOscuro"); fssd16=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd16').val(resultado);$('#ssd16-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd16=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss16,fssr16,fssd16);   
          });
});

var diferencia16=0;

$(document).ready(function(){
$('#issr16').val(diferencia16);
$("#issr16").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia16<4) {diferencia16++;
            switch (diferencia16){
              case 0: $('#ssr16-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr16=(diferencia16*1.4705882353); break;
              case 1: $('#ssr16-img').addClass("blanco");fssr16=(diferencia16*1.4705882353);  break;
              case 2: $('#ssr16-img').removeClass("blanco");  $('#ssr16-img').addClass("amarillo");fssr16=(diferencia16*1.4705882353); break;
              case 3: $('#ssr16-img').removeClass("amarillo");  $('#ssr16-img').addClass("rosadoClaro"); fssr16=(diferencia16*1.4705882353); break;
              case 4: $('#ssr16-img').removeClass("rosadoClaro");  $('#ssr16-img').addClass("rosadoOscuro");fssr16=(diferencia16*1.4705882353);  break;}
             }else{diferencia16=0;$('#ssr16-img').removeClass("rosadoOscuro");fssr16=(diferencia16*1.4705882353);}
                  $('#issr16').val(diferencia16);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia16<=4 && diferencia16>0 ){diferencia16--;
            switch (diferencia16){
              case 0: $('#ssr16-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr16=(diferencia16*1.4705882353); break;
              case 1: $('#ssr16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr16-img').addClass("blanco");fssr16=(diferencia16*1.4705882353); break;
              case 2: $('#ssr16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr16-img').addClass("amarillo");fssr16=(diferencia16*1.4705882353);break;
              case 3: $('#ssr16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr16-img').addClass("rosadoClaro"); fssr16=(diferencia16*1.4705882353);break;
              case 4: $('#ssr16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr16-img').addClass("rosadoOscuro"); fssr16=(diferencia16*1.4705882353);break;}
              }else{diferencia16=4;  $('#ssr16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr16-img').addClass("rosadoOscuro");fssr16=(diferencia16*1.4705882353);}
                    $('#issr16').val(diferencia16);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador16>=diferencia16){
                      var resultado= contador16-diferencia16;
                      // console.log(resultado);
                       $('#issd16').val(resultado);
            switch (resultado){
              case 0: $('#ssd16-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd16=(resultado*1.4705882353); break;
              case 1: $('#ssd16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd16-img').addClass("blanco"); fssd16=(resultado*1.4705882353);break;
              case 2: $('#ssd16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd16-img').addClass("amarillo");fssd16=(resultado*1.4705882353); break;
              case 3: $('#ssd16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd16-img').addClass("rosadoClaro");fssd16=(resultado*1.4705882353); break;
              case 4: $('#ssd16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd16-img').addClass("rosadoOscuro"); fssd16=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd16').val(resultado);$('#ssd16-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd16=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss16,fssr16,fssd16); 
          });
});



/**********************************************************************************INPUT 49=sss,50=ssr,51=ssd************************************************************************************************/

var fsss17;
var fssr17;
var fssd17;
var contador17=0; 
$(document).ready(function(){
$('.par-i17').val(contador17);
$("#isss17").mousedown(function(e){
  if(e.which == 1) {             
        if (contador17<4) {contador17++;
            switch (contador17){
              case 0: $('.par-img17').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss17=(contador17*1.4705882353); break;
              case 1: $('.par-img17').addClass("blanco"); fsss17=(contador17*1.4705882353); break;
            case 2: $('.par-img17').removeClass("blanco");$('.par-img17').addClass("amarillo");fsss17=(contador17*1.4705882353); break;
            case 3: $('.par-img17').removeClass("amarillo");$('.par-img17').addClass("rosadoClaro");fsss17=(contador17*1.4705882353); break;
            case 4: $('.par-img17').removeClass("rosadoClaro"); $('.par-img17').addClass("rosadoOscuro");fsss17=(contador17*1.4705882353); break;}
            }else{contador17=0;$('.par-img17').removeClass("rosadoOscuro");fsss17=(contador17*1.4705882353);}
                $('.par-i17').val(contador17);
                   // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                 }

  if (e.which==3) {if (contador17<=4 && contador17>0 ){contador17--;
            switch (contador17){
              case 0: $('.par-img17').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss17=(contador17*1.4705882353); break;
              case 1: $('.par-img17').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fsss17=(contador17*1.4705882353); break;
            case 2: $('.par-img17').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img17').addClass("amarillo");fsss17=(contador17*1.4705882353); break;
            case 3: $('.par-img17').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img17').addClass("rosadoClaro");fsss17=(contador17*1.4705882353);  break;
            case 4: $('.par-img17').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img17').addClass("rosadoOscuro");fsss17=(contador17*1.4705882353); break;}
            }else{contador17=4;$('.par-img17').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('.par-img17').addClass("rosadoOscuro");fsss17=(contador17*1.4705882353);}
                  $('.par-i17').val(contador17);
                      // console.log(contador2);
// sss2=contador2;
// calcular_valor(sss2);
                    } 
                      
  if (contador17>=diferencia17){//con esto hago que si ya hice clic en diferencia y luego en a1 se siga aplicando la diferencia
                      var resultado= contador17-diferencia17;
                      // console.log(resultado);
                       $('#issd17').val(resultado);
            switch (resultado){
              case 0: $('#ssd17-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd17=(resultado*1.4705882353);break;
              case 1: $('#ssd17-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd17-img').addClass("blanco");fssd17=(resultado*1.4705882353);break;
              case 2: $('#ssd17-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd17-img').addClass("amarillo");fssd17=(resultado*1.4705882353); break;
              case 3: $('#ssd17-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd17-img').addClass("rosadoClaro");fssd17=(resultado*1.4705882353);  break;
              case 4: $('#ssd17-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd17-img').addClass("rosadoOscuro"); fssd17=(resultado*1.4705882353); break;}
              }else{ resultado=0; $('#issd17').val(resultado);$('#ssd17-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd17=(resultado*1.4705882353);}

              // console.log("el resultado es: " + resultado);
// ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss17,fssr17,fssd17);   
          });
});

var diferencia17=0;

$(document).ready(function(){
$('#issr17').val(diferencia17);
$("#issr17").mousedown(function(e){
  if(e.which == 1) {             
        if (diferencia17<4) {diferencia17++;
            switch (diferencia17){
              case 0: $('#ssr17-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr17=(diferencia17*1.4705882353); break;
              case 1: $('#ssr17-img').addClass("blanco");fssr17=(diferencia17*1.4705882353);  break;
              case 2: $('#ssr17-img').removeClass("blanco");  $('#ssr17-img').addClass("amarillo");fssr17=(diferencia17*1.4705882353); break;
              case 3: $('#ssr17-img').removeClass("amarillo");  $('#ssr17-img').addClass("rosadoClaro"); fssr17=(diferencia17*1.4705882353); break;
              case 4: $('#ssr17-img').removeClass("rosadoClaro");  $('#ssr17-img').addClass("rosadoOscuro");fssr17=(diferencia17*1.4705882353);  break;}
             }else{diferencia17=0;$('#ssr17-img').removeClass("rosadoOscuro");fssr17=(diferencia17*1.4705882353);}
                  $('#issr17').val(diferencia17);
                   // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                 }

        if (e.which==3) {if (diferencia17<=4 && diferencia17>0 ){diferencia17--;
            switch (diferencia17){
              case 0: $('#ssr17-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssr17=(diferencia17*1.4705882353); break;
              case 1: $('#ssr17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr17-img').addClass("blanco");fssr17=(diferencia17*1.4705882353); break;
              case 2: $('#ssr17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr17-img').addClass("amarillo");fssr17=(diferencia17*1.4705882353);break;
              case 3: $('#ssr17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr17-img').addClass("rosadoClaro");fssr17=(diferencia17*1.4705882353);break;
              case 4: $('#ssr17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssr17-img').addClass("rosadoOscuro"); fssr17=(diferencia17*1.4705882353);break;}
              }else{diferencia17=4;  $('#ssr17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");$('#ssr17-img').addClass("rosadoOscuro");fssr17=(diferencia17*1.4705882353);}
                    $('#issr17').val(diferencia17);
                      // console.log(diferencia2);
// ssr2=diferencia2;
// calcular_valor(ssr2);
                    } 
        if (contador17>=diferencia17){
                      var resultado= contador17-diferencia17;
                      // console.log(resultado);
                       $('#issd17').val(resultado);
            switch (resultado){
              case 0: $('#ssd17-img').removeClass("blanco amarillo rosadoClaro rosadoOscuro");fssd17=(resultado*1.4705882353); break;
              case 1: $('#ssd17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd17-img').addClass("blanco"); fssd17=(resultado*1.4705882353);break;
              case 2: $('#ssd17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd17-img').addClass("amarillo");fssd17=(resultado*1.4705882353); break;
              case 3: $('#ssd17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd17-img').addClass("rosadoClaro");fssd17=(resultado*1.4705882353); break;
              case 4: $('#ssd17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro"); $('#ssd17-img').addClass("rosadoOscuro"); fssd17=(resultado*1.4705882353);break;}
              }else{ resultado=0; $('#issd17').val(resultado);$('#ssd17-img').removeClass(" blanco amarillo rosadoClaro rosadoOscuro");fssd17=(resultado*1.4705882353);}
              // console.log("el resultado es: " + resultado);

              // ssd2=resultado;
              // calcular_valor(ssd2);
              calcular_valor(fsss17,fssr17,fssd17); 
          });
});


/*******************FALTAN CALCULAR PORCENTAJES 25/1.47....*********************/

fsss1=0;fssr1=0;fssd1=0;
fsss2=0;fssr2=0;fssd2=0;
fsss3=0;fssr3=0;fssd3=0;
fsss4=0;fssr4=0;fssd4=0;
fsss5=0;fssr5=0;fssd5=0;
fsss6=0;fssr6=0;fssd6=0;
fsss7=0;fssr7=0;fssd7=0;
fsss8=0;fssr8=0;fssd8=0;
fsss9=0;fssr9=0;fssd9=0;
fsss10=0;fssr10=0;fssd10=0;
fsss11=0;fssr11=0;fssd11=0;
fsss12=0;fssr12=0;fssd12=0;
fsss13=0;fssr13=0;fssd13=0;
fsss14=0;fssr14=0;fssd14=0;
fsss15=0;fssr15=0;fssd15=0;
fsss16=0;fssr16=0;fssd16=0;
fsss17=0;fssr17=0;fssd17=0;
function calcular_valor(){

console.log("----1------" +fsss1);

console.log("----1-------:" +fssr1);
console.log("----1----" +fssd1);

console.log("----2------" +fsss2);

console.log("----2-------:" +fssr2);
console.log("----2----" +fssd2);




SSS=fsss1+fsss2+fsss3+fsss4+fsss5+fsss6+fsss7+fsss8+fsss9+fsss10+fsss11+fsss12+fsss13+fsss14+fsss15+fsss16+fsss17;
SSR=fssr1+fssr2+fssr3+fssr4+fssr5+fssr6+fssr7+fssr8+fssr9+fssr10+fssr11+fssr12+fssr13+fssr14+fssr15+fssr16+fssr17;
SSD=fssd1+fssd2+fssd3+fssd4+fssd5+fssd6+fssd7+fssd8+fssd9+fssd10+fssd11+fssd12+fssd13+fssd14+fssd15+fssd16+fssd17;
// $("#p1").val(SSS);
// $("#pi").val(SSR);
// $("#p2").val(SSD);

// total=parseFloat(SSS).toFixed(0);

TSSS=Math.trunc(SSS);//trunco para que se muestre el entero
TSSR=Math.trunc(SSR);//trunco para que se muestre el entero
TSSD=Math.trunc(SSD);//trunco para que se muestre el entero


document.querySelector('#sss').innerText = TSSS + "%";// para el label cambiante dentro del progressbar
document.querySelector('#ssr').innerText = TSSR + "%";// para el label
document.querySelector('#ssd').innerText = TSSD + "%";// para el label
 $('#isss').val(TSSS);
 $('#issr').val(TSSR);
 $('#issd').val(TSSD);
// var h="sdads";

$('#sss').css('color','black');// color de texto porcentaje
// $('.form-control').css('color','black');//color de todos los texto de los label
$('#sss').css('font-weight', '700');//grosor de texto
// $('#').css('position').attr('hola');
$('#ssr').css('color','black');// color de texto porcentaje
// $('.form-control').css('color','black');//color de todos los texto de los label
$('#ssr').css('font-weight', '700');//grosor de texto

$('#ssd').css('color','black');// color de texto porcentaje
// $('.form-control').css('color','black');//color de todos los texto de los label
$('#ssd').css('font-weight', '700');//grosor de texto

 $('#sss').css('width', TSSS + '%').attr('aria-valuenow',TSSS);
  $('#ssr').css('width', TSSR + '%').attr('aria-valuenow',TSSR);
   $('#ssd').css('width', TSSD + '%').attr('aria-valuenow',TSSD);
// $('.progress-bar').css('width', total + '%').attr('aria-valuenow', total); 


}


// });