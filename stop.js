var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server),
    nicknames = {},
    mysql = require('mysql'),
    nUsers = 0,
	  usuarios = [];

	
server.listen(8888);
//server.listen(process.env.PORT, process.env.IP);
///MYSQL///////////////////////////////////////////////////
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'stop',
   //port: 3306
}); 

connection.connect(function(error){
   if(error){
      console.log('ERROR Conexion');
   }else{
      console.log('Conexion correcta.');
   }
});
   

//connection.end();


/////////////////////////////////////////////////////////
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/jeuStop.html');

});
io.sockets.on('connection', function(socket) {
    socket.on('send message', function(data) {
        io.sockets.emit('new message', {msg: data, nick: socket.nickname});
    });
    
    socket.on('new user', function(data, callback) {
        if (data in nicknames) {
            callback(false);
        } else {
            callback(true);
            socket.nickname = data;
            nicknames[socket.nickname] = 1;
            updateNickNames();
			      usuarios.push(socket.nickname);
            io.sockets.emit('USERS', usuarios);
            nUsers++;
        }
    });
    
    socket.on('disconnect', function(data) {
        if(!socket.nickname) return;
        delete nicknames[socket.nickname];
        usuarios.splice(nUsers-1,1);
        nUsers--;
        updateNickNames();
    });
	 
	socket.on('BLUR', function(data1,data2,data3,data4,data5,data6) {
        
  /////Base de données////////////////////////////////////////////////////////////////////////////////////////////////////
        var result1 = 'Nulle';
        var result2 = 'Nulle';
        var result3 = 'Nulle';
        var result4 = 'Nulle';
        var result5 = 'Nulle';
        var result6 = 'Nulle';

        var queryString1 = 'SELECT * FROM Animaux';
        var queryString2 = 'SELECT * FROM pays';
        var queryString3 = 'SELECT * FROM films';
        var queryString4 = 'SELECT * FROM fleuves';
        var queryString5 = 'SELECT * FROM langages';
        var queryString6 = 'SELECT * FROM villes';

         var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                   for(var i in rows){
                       if(rows[i].resp == data1) {
                            console.log(rows[i].descrip); 
                            result1 = rows[i].descrip;    
                            io.sockets.emit('BLUR2',socket.nickname,data1,data2,data3,data4,data5,data6,result1,result2,result3,result4,result5,result6);
                        }
                    }
               }
             });   
         var query = connection.query(queryString2, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                   for(var i in rows){
                       if(rows[i].resp == data2) {
                            console.log(rows[i].descrip); 
                            result2 = rows[i].descrip;    
                            io.sockets.emit('BLUR2',socket.nickname,data1,data2,data3,data4,data5,data6,result1,result2,result3,result4,result5,result6);
                        }
                    }
               }
             });   
         var query = connection.query(queryString3, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                   for(var i in rows){
                       if(rows[i].resp == data3) {
                            console.log(rows[i].descrip); 
                            result3 = rows[i].descrip;    
                            io.sockets.emit('BLUR2',socket.nickname,data1,data2,data3,data4,data5,data6,result1,result2,result3,result4,result5,result6);
                        }
                    }
               }
             });
         var query = connection.query(queryString4, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                   for(var i in rows){
                       if(rows[i].resp == data4) {
                            console.log(rows[i].descrip); 
                            result4 = rows[i].descrip;    
                            io.sockets.emit('BLUR2',socket.nickname,data1,data2,data3,data4,data5,data6,result1,result2,result3,result4,result5,result6);
                        }
                    }
               }
             });
         var query = connection.query(queryString5, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                   for(var i in rows){
                       if(rows[i].resp == data5) {
                            console.log(rows[i].descrip); 
                            result5 = rows[i].descrip;    
                            io.sockets.emit('BLUR2',socket.nickname,data1,data2,data3,data4,data5,data6,result1,result2,result3,result4,result5,result6);
                        }
                    }
               }
             });
         var query = connection.query(queryString6, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                   for(var i in rows){
                       if(rows[i].resp == data6) {
                            console.log(rows[i].descrip); 
                            result6 = rows[i].descrip;    
                            io.sockets.emit('BLUR2',socket.nickname,data1,data2,data3,data4,data5,data6,result1,result2,result3,result4,result5,result6);
                        }
                    }
               }
             });

      ///////////////////////////////////////////////////////////
        io.sockets.emit('BLUR2',socket.nickname,data1,data2,data3,data4,data5,data6,result1,result2,result3,result4,result5,result6);
    });
	
	socket.on('STOP', function(){
		io.sockets.emit('STOP2');
	});
    
    function updateNickNames() {
        io.sockets.emit('usernames', nicknames);
    }
});
