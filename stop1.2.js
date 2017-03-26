var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server),
    nicknames = {},
    mysql = require('mysql'),
    nUsers = 0,
	cumul=0,
	sending=0, //variable usada en una funcion
	points=[0,0],//puntosde cada jugador
	waiters=0, //gente que espera a una nueva rondas
	rondas=0, //rondas jugadas
	finjeu=false, //el juego sacabao
	  usuarios = [];
    var arbitre = false;
	  var modeJeu = 0;//cambiar jugadores a esperar
    var resp1 = [];
    var resp2 = [];
	  

	
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
    res.sendfile(__dirname + '/jeuStop1.2.html');

});
io.sockets.on('connection', function(socket) {
    socket.on('send message', function(data) {
        io.sockets.emit('new message', {msg: data, nick: socket.nickname});
    });
    
    socket.on('NORMAL',function(){
      modeJeu=2;
     //console.log("cwfw");
      io.sockets.emit('A');
    });
    socket.on('AR',function(){
      modeJeu=3;
      //console.log("cwfw");
      io.sockets.emit('A');
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
		if (nUsers==modeJeu){io.sockets.emit('joueursprets');
		}
    });

    socket.on('ARBITRE', function(r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12){
        console.log(r1);
          io.sockets.emit('ARBITRE2',r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12);

          //INTRODUIRE INFO///////////////////////////////////////////////////////////////////////////////7777
          var queryString1 = "SELECT resp FROM Animaux";
          if (r1 == "Rare" || r1 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[0]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into Animaux (resp, descrip) values ("'+resp1[0]+'","'+r1+'")')
                    }
             });   
          }

          var queryString1 = "SELECT resp FROM pays";
          if (r2 == "Rare" || r2 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[1]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into pays (resp, descrip) values ("'+resp1[1]+'","'+r2+'")')
                    }
             });   
          }
          var queryString1 = "SELECT resp FROM films";
          if (r3 == "Rare" || r3 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[2]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into films (resp, descrip) values ("'+resp1[2]+'","'+r3+'")')
                    }
             });   
          }
          var queryString1 = "SELECT resp FROM fleuves";
          if (r4 == "Rare" || r4 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[3]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into fleuves (resp, descrip) values ("'+resp1[3]+'","'+r4+'")')
                    }
             });   
          }
          var queryString1 = "SELECT resp FROM langages";
          if (r5 == "Rare" || r5 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[4]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into langages (resp, descrip) values ("'+resp1[4]+'","'+r5+'")')
                    }
             });   
          }
          var queryString1 = "SELECT resp FROM villes";
          if (r6 == "Rare" || r6 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[5]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into villes (resp, descrip) values ("'+resp1[5]+'","'+r6+'")')
                    }
             });   
          }
                    var queryString1 = "SELECT resp FROM Animaux";
          if (r7 == "Rare" || r7 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[6]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into Animaux (resp, descrip) values ("'+resp1[6]+'","'+r7+'")')
                    }
             });   
          }

          var queryString1 = "SELECT resp FROM pays";
          if (r8 == "Rare" || r8 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[7]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into pays (resp, descrip) values ("'+resp1[7]+'","'+r8+'")')
                    }
             });   
          }
          var queryString1 = "SELECT resp FROM films";
          if (r9 == "Rare" || r9 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[8]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into films (resp, descrip) values ("'+resp1[8]+'","'+r9+'")')
                    }
             });   
          }
          var queryString1 = "SELECT resp FROM fleuves";
          if (r10 == "Rare" || r10 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[9]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into fleuves (resp, descrip) values ("'+resp1[9]+'","'+r10+'")')
                    }
             });   
          }
          var queryString1 = "SELECT resp FROM langages";
          if (r11 == "Rare" || r11 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[10]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into langages (resp, descrip) values ("'+resp1[10]+'","'+r11+'")')
                    }
             });   
          }
          var queryString1 = "SELECT resp FROM villes";
          if (r12 == "Rare" || r12 == "Normal"){
            var query = connection.query(queryString1, function(error,rows,fields){
            if(error){
                console.log('ERROR database');
                }else{
                  //console.log("FFFFFFFFFFFF");
                  var exist = false;
                   for(var i in rows){
                       if(rows[i].resp == resp1[11]) {
                           exist = true;
                         }
                       }
                    if (exist == false)   connection.query('insert into villes (resp, descrip) values ("'+resp1[11]+'","'+r12+'")')
                    }
             });   
          }
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    });
    
    socket.on('disconnect', function(data) {
        if(!socket.nickname) return;
        delete nicknames[socket.nickname];
        usuarios.splice(nUsers-1,1);
        nUsers--;
        updateNickNames();
    });

    var letra;
    socket.on('lettre', function(data) {
        letra = data;
        io.sockets.emit('lettre2',data);
    });
	 
	socket.on('BLUR', function(us,data1,data2,data3,data4,data5,data6) {
        
        if (us == usuarios[0]){
          resp1[0]=data1;resp1[1]=data2;resp1[2]=data3;resp1[3]=data4;resp1[4]=data5;resp1[5]=data6;
          console.log(resp1);
        }
        if (us == usuarios[1]){
          resp1[6]=data1;resp1[7]=data2;resp1[8]=data3;resp1[9]=data4;resp1[10]=data5;resp1[11]=data6;
          console.log(resp1);
        }
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
                       if(rows[i].resp == data1 && data1[0]==letra) {
                            console.log("Animaux"); 
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
                       if(rows[i].resp == data2 && data2[0]==letra) {
                            console.log("Pays"); 
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
                       if(rows[i].resp == data3 && data3[0]==letra) {
                            console.log("films"); 
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
                       if(rows[i].resp == data4 && data4[0]==letra) {
                            console.log("fleuves"); 
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
                       if(rows[i].resp == data5 && data5[0]==letra) {
                            console.log("langages"); 
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
                       if(rows[i].resp == data6 && data6[0]==letra) {
                            console.log("villes"); 
                            result6 = rows[i].descrip;    
                            io.sockets.emit('BLUR2',socket.nickname,data1,data2,data3,data4,data5,data6,result1,result2,result3,result4,result5,result6);
                        }
                    }
               }
             });

      ///////////////////////////////////////////////////////////
	  if(result1=='rare') cumul+=10; if(result1=='normal') cumul+=5;
		if(result2=='rare') cumul+=10; if(result2=='normal') cumul+=5;
		if(result3=='rare') cumul+=10; if(result3=='normal') cumul+=5;
		if(result4=='rare') cumul+=10; if(result4=='normal') cumul+=5;
		if(result5=='rare') cumul+=10; if(result5=='normal') cumul+=5;
		if(result6=='rare') cumul+=10; if(result6=='normal') cumul+=5;

		if (socket.nickname==usuarios[0]) {points[0]+=cumul; sending=points[0];}
		else if(socket.nickname==usuarios[1]) {points[1]+=cumul;sending=points[1];}
		cumul=0;
		console.log(points[0]);
        io.sockets.emit('BLUR2',socket.nickname,data1,data2,data3,data4,data5,data6,result1,result2,result3,result4,result5,result6,sending);
    });
	
	socket.on('STOP', function(){
		rondas++; 
		if (rondas==3) finjeu=true;
		io.sockets.emit('STOP2',finjeu);
		finjeu=false;
	});
	
	socket.on('AGAIN', function(){
		waiters++; //cuando los dos estan listos y han clickado nueva rondas
		if (waiters==2){waiters=0;
		io.sockets.emit('AGAIN2'); }
	});
	
	socket.on('NEWGAME', function(){
		waiters++; 
		if (waiters==2){waiters=0;
		io.sockets.emit('NEWGAME2'); 
		rondas=0; points=[0,0];}
	});
    
    function updateNickNames() {
        io.sockets.emit('usernames', nicknames);
    }
});
