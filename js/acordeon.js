// JavaScript Document

/*$(document).ready(function(){

 $(".accordion h3:first").addClass("active");
 $(".accordion .elemento:not(:first)").hide();

 $(".accordion h3").click(function(){
 $(this).next("div").slideToggle("slow")
 .siblings("div:visible").slideUp("slow");
 $(this).toggleClass("active");
 $(this).siblings("h3").removeClass("active");
 });
 
 
});
*/
$(document).ready( function() {
	$('#resul2').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
		$('#criterio').slideUp('slow');
	});
	$('#resul3').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
		$('#criterio').slideUp('slow');
	});
	$('#resul4').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
		$('#criterio').slideUp('slow');
	});
	$('#resul5').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
	});
	$('#resul6').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
	});
	$('#resul7').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
	});
	$('#resul8').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
	});
	$('#resul9').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
	});
	$('#resul10').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
	});
	$('#resul11').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
	});
	$('resul').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
		
		
	});
	$('#cribus').click(function(){
		$('#criterio').slideDown('slow');
		$('#menu').slideUp('slow');	
		$('#myTable').slideUp('slow');	
		$('#modificar').slideUp('slow');
		$('#historico').slideUp('slow');
	});
	
	$('#btn_busca').click(function(){
		$('#criterio').slideUp('slow');	
		$('#myTable').slideDown('slow');
	});	
								  
	$('#detalle').click(function(){
		$('#menu').slideDown('slow');
		$('#myTable').slideUp('slow');
		$('#modificar').slideUp('slow');
		$('#criterio').slideUp('slow');
		$('#historico').slideUp('slow');
	});
	$('#actInf').click(function(){
		$('#criterio').slideUp('slow');	
		$('#myTable').slideUp('slow');
		$('#menu').slideUp('slow');
		$('#modificar').slideDown('slow');
	});
	$('#histo').click(function(){
		$('#criterio').slideUp('slow');	
		$('#myTable').slideUp('slow');
		$('#menu').slideUp('slow');
		$('#modificar').slideUp('slow');
		$('#historico').slideDown('slow');
		$('#modificar').slideUp('slow');
	});
	$('#modi').click(function(){
		$('#criterio').slideUp('slow');	
		$('#myTable').slideUp('slow');
		$('#menu').slideUp('slow');
		$('#modificar').slideDown('slow');
		$('#historico').slideUp('slow');
	});
	
	
	$('#hist').click(function(){
		$('#criterio').slideUp('slow');	
		$('#myTable').slideUp('slow');
		$('#menu').slideUp('slow');
		$('#modificar').slideUp('slow');
		$('#historico').slideDown('slow');
		$('#modificar').slideUp('slow');
	});
	
    $('#cabecera1').click(function(){
		$('#info1').slideDown('slow');
		$('#info2').slideUp('slow');
		$('#info3').slideUp('slow');
		$('#info4').slideUp('slow');
		$('#info5').slideUp('slow');
		$('#info6').slideUp('slow');
		$('#info7').slideUp('slow');
		$('#info8').slideUp('slow');
		$('#info9').slideUp('slow');
		$('#info10').slideUp('slow');
		$('#infox').slideUp('slow');
		$('#cabecera2').slideDown('slow');
		$('#cabecera3').slideDown('slow');
		$('#cabecera4').slideDown('slow');
		$('#cabecera5').slideDown('slow');
		$('#cabecera6').slideDown('slow');
		$('#cabecera7').slideDown('slow');
		$('#cabecera8').slideDown('slow');
		$('#cabecera9').slideDown('slow');
		$('#cabecera10').slideDown('slow');
		$('#cabecerax').slideDown('slow');
	});
	
	$('#btn_1').click(function(){
		$('#info1').slideUp('slow');	
		$('#info2').slideDown('slow');
	});	
	$('#btn_2').click(function(){
		$('#info2').slideUp('slow');	
		$('#info3').slideDown('slow');
	});	
	$('#btn_3').click(function(){
		$('#info3').slideUp('slow');	
		$('#info4').slideDown('slow');
	});	
	$('#btn_4').click(function(){
		$('#info4').slideUp('slow');	
		$('#info5').slideDown('slow');
	});	
	$('#btn_5').click(function(){
		$('#info5').slideUp('slow');	
		$('#info6').slideDown('slow');
	});	
	$('#btn_6').click(function(){
		$('#info6').slideUp('slow');	
		$('#info7').slideDown('slow');
	});	
	$('#btn_7').click(function(){
		$('#info7').slideUp('slow');	
		$('#info8').slideDown('slow');
	});	
	$('#btn_8').click(function(){
		$('#info8').slideUp('slow');	
		$('#info9').slideDown('slow');
	});	
	$('#btn_9').click(function(){
		$('#info9').slideUp('slow');	
		$('#info10').slideDown('slow');
	});	
	
	$('#btn_10').click(function(){
		$('#info10').slideUp('slow');	
		$('#infox').slideDown('slow');
	});	
	
	$('#btn_x').click(function(){
		$('#info1').slideUp('slow');	
		
		$('#infox').slideUp('slow');
	});	
	
	
	
});

/*  funcion para poner el acordeon visible completamente
$(document).ready(function(){
  $("#accordion div").hide();
  $("#accordion h3").click(function(){
    $(this).next("div").slideToggle("slow")
    .siblings("div:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings("h3").removeClass("active");
  });
});
*/  



