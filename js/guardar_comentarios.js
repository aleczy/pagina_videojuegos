$(document).ready(function() {
		$("#submit").click(function() {
			var name = $("#nombre").val();
			var email = $("#email").val();
			var telefono = $("#telefono").val();
			var comentarios = $("#comentarios").val();
			
			
				//Construimos la variable que se guardará en el data del Ajax para pasar al archivo php que procesará los datos
			 var dataString = 'name1=' + name + '&email1=' + email + '&telefono1=' + telefono + '&comentarios1=' + comentarios;

					$.ajax({
						type: "POST",
						url: "php/conexion_bd.php",
						data: dataString,
						success: function() {
					    	$('#mainform').html("<div id='message'></div>");
					        $('#message').html("<h2>Tus datos han sido guardados correctamente!</h2>");
					        alert("Proceso Satisfactorio");
							$('#form1')[0].reset(); // To reset form fields
					    }
					});
					return true;
		});
});
