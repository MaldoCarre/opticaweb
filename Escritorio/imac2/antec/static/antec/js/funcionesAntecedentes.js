/**************************Selecion de Id Paciente***************************/
var id_seleccionado="";
var nombre="";
$(document).ready(function(){    
      	$('table').on('mousedown', 'input', function(e){
    	 id_seleccionado= $(this).attr('value');
		$("#id_pac_antec").val(id_seleccionado);
		var id_estudio= $(this).attr('idEstudio');
		$("#id_pac_estudio").val(id_estudio);
		//alert(id_estudio)
		nombre =$(this).attr('nombre');

	});
});



function unicaOpcion(nombreImput) {
	if (nombreImput=="tabaquismo") {
		$("#ex_tabaquismo").prop('checked',false);
	}
	else{
		$("#tabaquismo").prop('checked',false);
	}
}

function calcularAños(identificador) {
let fecha="";
switch(identificador){
	case "fecha_fcrv_hta":
fecha =$("#fecha_fcrv_hta").val();
Calculos(fecha);
break;
// alert(fecha.slice(0,-6)) // formato: 2019-10-24
	case "fecha_fcrv_dta":
fecha =$("#fecha_fcrv_dta").val();
Calculos(fecha);
break;
	case "fecha_crm_hta":
fecha =$("#fecha_crm_hta").val();	
	Calculos(fecha);
break;
case "fecha_infarto_reciente":
fecha =$("#fecha_infarto_reciente").val();	
	Calculos(fecha);
break;
}



function Calculos(fecha) {
	var año = parseInt(fecha.slice(0,-6));
 
 	var objfecha = new Date();
	var añoActual = objfecha.getFullYear();

	var añosDiabetes=añoActual-año;
	console.log(añosDiabetes)
}
  

}


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
     
    
          alertify.confirm("Desea continuar y cargar datos a Ergometría del paciente "+nombre,
        
        function(){
        
        var v =verificarCamposVacios()
        if (v==1) {
			 alertify.success('Redireccionando a Ergometría...');
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