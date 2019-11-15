/**************************Selecion de Id Paciente***************************/
var id_seleccionado="";
var nombre="";
$(document).ready(function(){    
    $('table').on('mousedown', 'input', function(e){
    var id_estudio= $(this).attr('class');
    $("#id_pac_estudio").val(id_estudio);
    id_seleccionado= $(this).attr('value');
    nombre= $(this).attr('nombre');
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
     
    
          alertify.confirm("Desea continuar y istar Dicom cargadas? "+nombre,
        
        function(){
        
        var v =verificarCamposVacios()
        if (v==1) {
			 alertify.success('Guardado');
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