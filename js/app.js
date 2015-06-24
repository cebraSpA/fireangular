var app =  angular.module('chatApp', ['firebase']);
 
	app.controller('chatController', ['$scope','Message', function($scope,Message){

		var userFacebookId = 10207123163383238;
		var idVideo = 2;

		$scope.messages = Message.obtener(idVideo);

		$scope.insertNuevo = function(nuevo){
			
			var texto = nuevo.mensaje;
			var user = 'Cristian Droguett Rubio';
			var userId = 10207123163383238;
 			var fecha = new Date().getTime();
 			var idCap = 1;
			
			var mensaje = {
				"mensaje": texto,
				"user": user,
				"userId": userId,
				"fecha": fecha,
				"idCap": idCap
			}

			Message.create(mensaje);
		};
	}]);
 
	app.factory('Message', ['$firebase',
		function($firebase) {
			
			var ref = new Firebase('<< TU URL DE LA BASE DE DATOS >>');

			var Message = {
				obtener: function (idVideo) {
					return $firebase(ref.child('messages/' + idVideo)).$asArray();
				},
				create: function (mensaje) {
					return $firebase(ref.child('messages/' + mensaje.idCap)).$asArray().$add(mensaje);
				},
				get: function (messageId) {
					return $firebase(ref.child('messages').child(messageId)).$asObject();
				},
				delete: function (mensaje) {
					return messages.$remove(mensaje);
				}
			};

			return Message;
		}
	]);
