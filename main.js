$(document).ready(function() {
  $('#jBold').click(function() {
    document.execCommand('bold');
  });
    $('#jitalic').click(function() {
    document.execCommand('italic');
  });
    $('#underline').click(function(){
   document.execCommand('underline')});
    
    $("#fs").change(function() {
    $('#editor1').css("font-family", $(this).val());

});

$("#size").change(function() {
    $('#editor1').css("font-size", $(this).val() + "px");
});
   });