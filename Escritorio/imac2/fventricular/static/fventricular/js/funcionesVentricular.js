var peso=0,talla=0,pesot="",tallat="";
var id_seleccionado="";
var nombre="";
$(document).ready(function(){      
        $('table').on('mousedown', 'input', function(e){
 id_seleccionado= $(this).attr('value');
    var talla_seleccionada= $(this).attr('id');
     var peso_seleccionado= $(this).attr('class');
     var id_estudio= $(this).attr('text');
		$("#id_pac_estudio").val(id_estudio);
      $("#id_pac_ventricular").val(id_seleccionado);
      nombre= $(this).attr('nombre');
 // alert(id_seleccionado + id_estudio + peso_seleccionado + talla_seleccionada)
 pesot =peso_seleccionado;
 tallat=talla_seleccionada;


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
     
    
          alertify.confirm("Desea continuar y cargar datos a pre-informe del paciente "+nombre,
        
        function(){
        
        var v =verificarCamposVacios()
        if (v==1) { $("#enviarFormulario").click();
            alertify.warning('Complete los campos obligatorios');
        } else{
            alertify.success('Redireccionando a pre-informe...');
            retorno(); 
             $("#enviarFormulario").click();
        }
       
        

        },
        function(closeEvent){
          alertify.error('Cancelado');
          closeEvent.cancel = false;
          
        });

         
      }

      function retorno() {
        return true;
    }

    function verificarCamposVacios() {
        if ( $("#ivolumen_relativo").val()==""||  $("#ivfdvi").val()=="" ||  $("#ifvsvi").val()=="" || $("#ivolumen_relativo_r").val()==""|| $("#ivfdvir").val()==""|| $("#ifvsvir").val()=="") {
           return 1;
        }
    }

    //******************************************************************************************************************************* */


function calcularStress() {

if (pesot!="" && tallat!="") { // validacion para seleccion obligatoria del paciente
	peso=parseInt(pesot);
	talla=parseInt(tallat);
	
/******stress******/

volRelativo=$("#ivolumen_relativo").val();
vfdvi=$("#ivfdvi").val();
fvsvi=$("#ifvsvi").val();
vfdviM2=(vfdvi/Math.sqrt((peso*talla)/3600));
fvsviM2=(fvsvi/Math.sqrt((peso*talla)/3600));
fey=((vfdvi-fvsvi)/vfdvi)*100;
/*****rest*******/
volRelativoR=$("#ivolumen_relativo_r").val();
vfdvir=$("#ivfdvir").val();
fvsvir=$("#ifvsvir").val();
vfdvirM2=(vfdvir/Math.sqrt((peso*talla)/3600));
fvsvirM2=(fvsvir/Math.sqrt((peso*talla)/3600));
feyR=((vfdvir-fvsvir)/vfdvir)*100;
/******TID******/

tid=volRelativo/volRelativoR;


/*******Asignacion de resultados*****/

/******Stress****/
$("#ivfdvim2").val(Math.trunc(vfdviM2));
$("#ifvsvim2").val(Math.trunc(fvsviM2));
$("#ifey").val(Math.trunc(fey));

/****rest****/
$("#ivfdvirm2").val(Math.trunc(vfdvirM2));
$("#ifvsvirm2").val(Math.trunc(fvsvirM2));
$("#ifeyr").val(Math.trunc(feyR));

/*****Tid***/
$("#itid").val(tid);
}else{alertify.alert().setHeader('<em> Aviso </em> ').set({transition:'flipy',message: 'Seleccione un paciente del la tabla'}).show();}
}
