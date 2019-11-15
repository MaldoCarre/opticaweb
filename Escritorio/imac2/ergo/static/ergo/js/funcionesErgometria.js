var edad="";var estadoInput=""; tipo="";var id_seleccionado=""; var nombre="";
$(document).ready(function(){
$('table').on('mousedown', 'input', function(e){
id_seleccionado= $(this).attr('value');
$("#id_pac_ergo").val(id_seleccionado);
var id_estudio= $(this).attr('idEstudio');
$("#id_pac_estudio").val(id_estudio);
var fechaNacimiento_seleccionada= $(this).attr('fechaNacimiento');
// alert(fechaNacimiento_seleccionada) // formato: June 10, 1996
var año = fechaNacimiento_seleccionada.slice(-5); // obtengo los ultimos cuatro valores de la cadena
var añoInt= parseInt(año);
/*Obtengo año actual*/
var fecha = new Date();
var añoActual = fecha.getFullYear();
// alert('El año actual es: '+ano);
var edadPac= añoActual-añoInt;

edad=edadPac;// edad del paciente seleccionado
nombre= $(this).attr('nombre');
});
});






function ValidarEnvioFormulario() {

  if (id_seleccionado=="") {
    alertify.alert().setHeader('<em> Aviso </em> ').set({transition:'flipy',message: 'Seleccione un paciente de la tabla'}).show();
    
    return false;


  }else{

    valid();
  
     return false;
   


  }
}


function valid() {
                  
  alertify.confirm().set('labels', {ok:'Continuar', cancel:'Cancelar'}).setHeader('<em> Aviso </em> ').set({transition:'flipy',message: 'Transition effect: flipy'}).show();


    alertify.confirm("Desea continuar y cargar datos a camara gamma del paciente "+nombre,
  
  function(){
  
  var v =verificarCamposVacios()
  if (v==1) {
     
  alertify.warning('Complete los campos obligatorios');$("#enviarFormulario").click();
} else{
  alertify.success('Redireccionando a camara gamma...');
  retorno(); 
   $("#enviarFormulario").click();
}
 
  

  },
  function(closeEvent){
    alertify.error('Cancelado');
    closeEvent.cancel = false;
    
  });

   
}


function verificarCamposVacios() {
  //$("#CicloErgonometro").val()==""|| || $("#bandaDeslizante").val()==""

  if ( $("#icarga").val()=="" ||  $("#1 option:selected").val()=="" || $("#2").val()==""|| $("#3").val()==""|| $("#4").val()=="" || $("#itas_esfuerzo").val()==""
  || $("#5").val()==""|| $("#6").val()==""|| $("#7").val()==""|| $("#ifc_esfuerzo").val()==""|| $("#8").val()==""|| $("#ifcm option:selected").val()==""|| $("#9 option:selected").val()==""|| $("#10 option:selected").val()==""
   || $("#ifcmp").val()==""|| $("#11 option:selected").val()==""|| $("#12 option:selected").val()=="" || $("#iitt").val()=="") {
    return 1;
 }
}


function retorno() {
  return true;
}




function calcular(){
if (edad!="" ) {
/*calculo de ergometria*/
var fcm=220-edad; //Not la edad debe ser la del paciente selecionado
var fc_esfuerzo=$("#ifc_esfuerzo").val();
var tas_esfuerzo=$("#itas_esfuerzo").val();
var fcmp=((parseInt(fc_esfuerzo)/parseInt(fcm))*100);
porcentaje_fcmp=parseFloat(fcmp).toFixed(0);
var itt=parseInt(fc_esfuerzo)*parseInt(tas_esfuerzo);
$("#ifcm").val(fcm);
$("#ifcmp").val(porcentaje_fcmp);
$("#iitt").val(itt);}else{
  alertify.alert().setHeader('<em> Aviso </em> ').set({transition:'flipy',message: 'Seleccione un paciente de la tabla'}).show();
$("#ifc_esfuerzo").val("");
$("#itas_esfuerzo").val("");}
}
function IngresoErgometria(estado,TipoErgometria) {
// alert(estado)
if (estado=="on" && TipoErgometria=="CicloErgonometro") {
$("#icarga").val("");
estadoInput =$("#CicloErgonometro").prop('checked');
tipo=1;
// alert(tipo)
var required= $("#CicloErgonometro").prop('required'); // pregunta por el estado del input si es true es requido y es false no lo es
if (required==false) {
$("#CicloErgonometro").attr('required');
}

$("#bandaDeslizante").prop('checked',false);
$("#bandaDeslizante").removeAttr('required');
}else{
$("#icarga").val("");
estadoInput =$("#bandaDeslizante").prop('checked');
tipo=2;
// alert(tipo)
var required2= $("#bandaDeslizante").prop('required'); // pregunta por el estado del input si es true es requido y es false no lo es
if (required2==false) {
$("#bandaDeslizante").attr('required');
}
$("#CicloErgonometro").prop('checked',false);
$("#CicloErgonometro").removeAttr('required');

}
}
function asignarCarga(longitud) {

var longitudCadena=	longitud.length;
if (estadoInput==false) {
//alert("Debe seleccionar un tipo de Ergometria");
alertify.alert().setHeader('<em> Aviso </em> ').set({transition:'flipy',message: 'Debe seleccionar un tipo de Ergometria.'}).show();
$("#icarga").val("");
}
else{
if (estadoInput==true) {
if (tipo==1) { //Ciclo Ergonometro
// alert("ciclo");
$("#icarga").attr("maxlength","4");
if (longitudCadena>8) {
  alertify.alert().setHeader('<em> Aviso </em> ').set({transition:'flipy',message: 'Formato no válido.'}).show();
 var cadenaCicloIncorreta=$("#icarga").val(); var cadenaCicloCorrecta= cadenaCicloIncorreta.slice(0,-1); $("#icarga").val(cadenaCicloCorrecta);
}else{
if (longitudCadena==4) {
var cadenaCiclo= $("#icarga").val();


var cadenaCiclo2=cadenaCiclo + ' Kgm';
$("#icarga").val(cadenaCiclo2);
}
}
}else if(tipo==2){// Banda deslizante
  $("#icarga").attr('maxlength','6');
if (longitudCadena >18) {alertify.alert().setHeader('<em> Aviso </em> ').set({transition:'flipy',message: 'Formato no válido.'}).show(); var cadenaIncorreta=$("#icarga").val(); var cadenaCorrecta= cadenaIncorreta.slice(0,-1); $("#icarga").val(cadenaCorrecta); }
else{
if (longitudCadena==2) {
var cadena =$("#icarga").val();
var cadena2=cadena+'/';
$("#icarga").val(cadena2);
}if (longitudCadena==6) {
var cadena3=$("#icarga").val();

var cadena4=cadena3+' % Grad/Km/h';
$("#icarga").val(cadena4);
}
}
}
}
}
}