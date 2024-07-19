const reproductorMusica ={

    estado : "apagar",
    play : function (cancion) {
        if(this.estado === "apagado"){
            console.log(`comenzando cancion ${cancion}..`)
            //cambair estado
            this.estado = "play"
        }else{
            console.log(`cancion para ejecutar: estop para terminar...`)
        }
        
    },

    stop: function(){
        if (this.estado === "apagado") {
            console.log(`esta apagado..`)
        }else{
            console.log(`apagado reproductor `)
            this.estado = "apagado" 
        }
        getEstado = function (){
            return this.estado
        },
        setEstado = function(){
            this.estado = estado
        }
    }
   
}


reproductorMusica.play("himno nacinal");
reproductorMusica.stop();
reproductorMusica.stop();