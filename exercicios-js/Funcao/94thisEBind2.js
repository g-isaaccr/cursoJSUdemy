function pessoa(){
    this.idade = 0


    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)

    }/*.bind(this)*/,1000) //setInterval dispara uma outra função a partir de um intervalo, 1000ms representa 1s
}

new pessoa