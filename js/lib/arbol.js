// JavaScript Document

jQuery(window).bind("load", function() {
			jQuery("div#slider1").codaSlider()
			// jQuery("div#slider2").codaSlider()
			// etc, etc. Beware of cross-linking difficulties if using multiple sliders on one page.
		});
		

		
		function buscar(){
			if( document.form1.obra.value == 1){
			    document.getElementById("resul").style.visibility = "visible";
			    document.getElementById("myTable").style.visibility = "visible";
				}else{
				document.getElementById("result3").style.display = "block";
				document.getElementById("acor").style.visibility = "hidden";
				document.getElementById("cribus").style.visibility = "hidden";
				document.getElementById("criterio").style.visibility = "hidden";
				document.getElementById("modulo").style.visibility = "hidden";
				}
            
            }	
			
			function opciones(){
		 		document.getElementById("botones").style.display = "block";
			}
		
			function cambiacolor_over(celda){ 
				celda.style.backgroundColor="#A9D0F5" 
			}  
		
			function cambiacolor_out(celda){ 
				celda.style.backgroundColor="#f0f0f0" 
			}
			
			function verHist(){
		   document.getElementById("modi").style.visibility = "visible";
		   document.getElementById("modificar").style.visibility = "visible";
		   document.getElementById("hist").style.visibility = "visible";
		   document.getElementById("historico").style.visibility ="visible";
		}
		
		
		function verObras(){
		   document.getElementById("resultado").style.visibility = "visible";
		   document.getElementById("myTable").style.visibility = "visible";
		   
		}
		
		function verResult(){
		    document.getElementById("myTable").style.display = "block";
		}
		
		function busqueda(){
		    document.getElementById("criterio").style.visibility = "visible";
			document.getElementById("modulo").style.visibility = "visible";
			
			
		}
		function actInfo(){
		   document.getElementById("resul").style.visibility = "hidden";
		   document.getElementById("myTable").style.visibility = "hidden";
		   document.getElementById("modi").style.visibility = "visible";
		   document.getElementById("modificar").style.visibility = "visible";
		   document.getElementById("detalle").style.visibility= "hidden";
		   document.getElementById("menu").style.visibility= "hidden";
		}
		
		function tooltip(){
		   document.getElementById("sugerencias").style.visibility = "visible";
		}
		
		function arbol(){
		   document.getElementById("arbol").style.visibility = "hidden";
		}
				
	    function detalleObra(){
			document.getElementById("detalle").style.visibility= "visible";
			document.getElementById("menu").style.visibility= "visible";
			document.getElementById("buscar").style.display = "block";
			document.getElementById("ejecutor").style.display = "block";
			document.getElementById("delegacion").style.display = "block";
			document.getElementById("central").style.display = "block";
			document.getElementById("resul").style.display = "visible";
			document.getElementById("myTable").style.visibility = "visible";
				
		}
		
		function crit2(){
			document.getElementById("cabecera2").style.visibility = "visible";
			document.getElementById("info2").style.visibility = "visible";
		}
		function crit3(){
			document.getElementById("cabecera3").style.visibility = "visible";
			document.getElementById("info3").style.visibility = "visible";
		}
		function crit4(){
			document.getElementById("cabecera4").style.visibility = "visible";
			document.getElementById("info4").style.visibility = "visible";
		}
		function crit5(){
			document.getElementById("cabecera5").style.visibility = "visible";
			document.getElementById("info5").style.visibility = "visible";
		}
		function crit6(){
			document.getElementById("cabecera6").style.visibility = "visible";
			document.getElementById("info6").style.visibility = "visible";
		}
		function crit7(){
			document.getElementById("cabecera7").style.visibility = "visible";
			document.getElementById("info7").style.visibility = "visible";
		}
		function crit8(){
			document.getElementById("cabecera8").style.visibility = "visible";
			document.getElementById("info8").style.visibility = "visible";
		}
		function crit9(){
			document.getElementById("cabecera9").style.visibility = "visible";
			document.getElementById("info9").style.visibility = "visible";
		}
		function crit10(){
			document.getElementById("cabecera10").style.visibility = "visible";
			document.getElementById("info10").style.visibility = "visible";
		}
		function critx(){
			document.getElementById("cabecerax").style.visibility = "visible";
			document.getElementById("infox").style.visibility = "visible";
		}
		
		
		
		
		
		function busqueda2(){
		    document.getElementById("info1").style.visibility = "visible";
			document.getElementById("infox").style.visibility = "hidden";
			
			
		}
		
		function modPref(){
			document.getElementById("cabecerax").style.visibility = "visible";
			document.getElementById("infox").style.visibility = "visible";
		}
		
		