const play = document.querySelector('.play')
const scoreNumber = {
    p1:0,
    p2:0
}

function principal(){
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const score = document.querySelector('.score')
    
    /** Options */
    const FPS = 25
    
    function staticsFigures(){
        //porterias
        ctx.beginPath();
        ctx.rect(0, canvas.height/2 - 50, 30, 100);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect(canvas.width -30, canvas.height/2 - 50, 30, 100);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        ctx.closePath();
    
        /**Centro del campo */
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2, 60, 0, Math.PI*2);
        ctx.lineWidth = 4
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2, 10, 0, Math.PI*2);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        ctx.closePath();
    
        /**linea Central */
        ctx.beginPath();
        ctx.rect(canvas.width/2 - 5, 0, 5, canvas.height);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        ctx.closePath();
    
        /** Lineas de Porteria */
        ctx.beginPath();
        ctx.rect(0, canvas.height/2-100, 100, 200);
        ctx.lineWidth = 4
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect(0, canvas.height/2-150, 150, 300);
        ctx.lineWidth = 4
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect(canvas.width-100, canvas.height/2-100, 100, 200);
        ctx.lineWidth = 4
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect(canvas.width-150, canvas.height/2-150, 150, 300);
        ctx.lineWidth = 4
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        ctx.closePath();
    
        /** corner */
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI*2);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.arc(0, canvas.height, 20, 0, Math.PI*2);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.arc(canvas.width, 0, 20, 0, Math.PI*2);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.arc(canvas.width, canvas.height, 20, 0, Math.PI*2);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        ctx.closePath();
    
        /** Line Players */
        ctx.beginPath();
        ctx.rect(50, 0, 5, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect(50*3, 0, 5, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect(50*5, 0, 5, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect( (canvas.width/2 - 50), 0, 5, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.rect((canvas.width/2 + 50), 0, 5, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect(canvas.width/2 + 50*3, 0, 5, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect(canvas.width/2 + 50*5, 0, 5, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.rect( canvas.width - 50, 0, 5, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();
    }
    
    /** Players */
    
    function Player(x,y){
        this.x = x
        this.y = y
        this.width = 30
        this.height = 30
        this.dy = 5
        this.buttons = {
            up:false,
            down:false
        }
    }
    
    const player1 = {
        goalkeeper : new Player(35, canvas.height/2 - 15),
        defenders : new Player(150-15, canvas.height/2 - 100),
        midfielders: new Player(350-15, canvas.height/2 - 200),
        forwards: new Player(550-15, canvas.height/2 - 150)
    }
    
    const player2 = {
        goalkeeper : new Player(750-15, canvas.height/2 - 15),
        defenders : new Player(650-15, canvas.height/2 - 100),
        midfielders: new Player(450-15, canvas.height/2 - 200),
        forwards: new Player(250-15, canvas.height/2 - 150)
    }
    
    const ball = {
        x: canvas.width/2,
        y: canvas.height/2,
        r: 13,
        v: 7,
        dirX:0,
        dirY:0,
    }
    
    function drawPlayers(player, position, color, margin = 0){
        ctx.beginPath()
        ctx.rect(player[position].x, player[position].y + margin, player[position].width, player[position].height)
        ctx.fillStyle = color
        ctx.fill()
        ctx.closePath()
    }
    
    function goalkeepers(){
        /**Player 1 */
        drawPlayers(player1, 'goalkeeper', '#FFF')
    
        /**Player 2 */
        drawPlayers(player2, 'goalkeeper', '#0000ff')
    }
    
    function defenders(){
        /**Player 1 */
        drawPlayers(player1, 'defenders', '#FFF')
        drawPlayers(player1, 'defenders', '#FFF', 160)
    
        /** Player 2 */
        drawPlayers(player2, 'defenders', '#0000ff')
        drawPlayers(player2, 'defenders', '#0000ff', 160)
    }
    
    function midfielders(){
        /**Player 1 */
        drawPlayers(player1, 'midfielders', '#FFF')
        drawPlayers(player1, 'midfielders', '#FFF', 100)
        drawPlayers(player1, 'midfielders', '#FFF', 200)
        drawPlayers(player1, 'midfielders', '#FFF', 300)
        drawPlayers(player1, 'midfielders', '#FFF', 400)
    
        /**Player 2 */
        drawPlayers(player2, 'midfielders', '#0000ff')
        drawPlayers(player2, 'midfielders', '#0000ff', 100)
        drawPlayers(player2, 'midfielders', '#0000ff', 200)
        drawPlayers(player2, 'midfielders', '#0000ff', 300)
        drawPlayers(player2, 'midfielders', '#0000ff', 400)
    }
    
    function forwards(){
        /**Player 1 */
        drawPlayers(player1, 'forwards', '#FFF')
        drawPlayers(player1, 'forwards', '#FFF', 150)
        drawPlayers(player1, 'forwards', '#FFF', 300)
    
        /**Player 1 */
        drawPlayers(player2, 'forwards', '#0000ff')
        drawPlayers(player2, 'forwards', '#0000ff', 150)
        drawPlayers(player2, 'forwards', '#0000ff', 300)
    }
    
    function drawBall(){
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2)
        ctx.fillStyle = '#be8b2f'
        ctx.fill()
        ctx.closePath()
    }
    
    function logicPlayers(keyCodeUp, keyCodeDown, player, position, limit, infLimit){
        document.addEventListener('keydown', keyDownHandler, false)
        document.addEventListener('keyup', keyUpHandler, false)
    
        function keyDownHandler(e){
            e.stopPropagation()
            if(e.keyCode == keyCodeUp){
                player[position].buttons.up = true
            }else if ( e.keyCode == keyCodeDown ){
                player[position].buttons.down = true
            }
        }
    
        function keyUpHandler(e){
            if(e.keyCode == keyCodeUp){
                player[position].buttons.up = false
            }else if ( e.keyCode == keyCodeDown ){
                player[position].buttons.down = false
            }
        }
    
        if(player[position].buttons.up && player[position].y >= canvas.height/2 - limit && player[position].y >= 0){
            player[position].y -= player[position].dy
        }else if(player[position].buttons.down && player[position].y <= canvas.height/2 + limit-player[position].height && player[position].y <= canvas.height-player[position].height - infLimit){
            player[position].y += player[position].dy
        }
    }
    
    const verification = (player, position, dir, margin = 0) => {
        let res
        if(dir == 'x'){
            res = (player[position][dir] <= ball[dir] && player[position][dir]+player[position].width >= ball[dir])
        }else{
            res = (player[position][dir]+margin <= ball[dir] && player[position][dir]+player[position].height+margin >= ball[dir])
        }
        return res
    }
    
    function colision(){
        return (
            // player 1
            ( verification(player1, 'goalkeeper', 'y') && verification(player1, 'goalkeeper', 'x') ) ||
    
            ( verification(player1, 'defenders', 'y') && verification(player1, 'defenders', 'x') )  ||
    
            ( verification(player1, 'defenders', 'y', 160) && verification(player1, 'defenders', 'x') ) ||
    
            ( verification(player1, 'midfielders', 'y') && verification(player1, 'midfielders', 'x') ) ||
    
            ( verification(player1, 'midfielders', 'y', 100) && verification(player1, 'midfielders', 'x') ) ||
    
            ( verification(player1, 'midfielders', 'y', 200) && verification(player1, 'midfielders', 'x') ) ||
    
            ( verification(player1, 'midfielders', 'y', 300) && verification(player1, 'midfielders', 'x') ) ||
    
            ( verification(player1, 'midfielders', 'y', 400) && verification(player1, 'midfielders', 'x') ) ||
    
            ( verification(player1, 'forwards', 'y') && verification(player1, 'forwards', 'x') ) ||
    
            ( verification(player1, 'forwards', 'y', 150) && verification(player1, 'forwards', 'x') ) ||
    
            ( verification(player1, 'forwards', 'y', 300) && verification(player1, 'forwards', 'x') ) ||
            
            //player 2
            ( verification(player2, 'goalkeeper', 'y') && verification(player2, 'goalkeeper', 'x') ) ||
    
            ( verification(player2, 'defenders', 'y') && verification(player2, 'defenders', 'x') )  ||
    
            ( verification(player2, 'defenders', 'y', 160) && verification(player2, 'defenders', 'x') ) ||
    
            ( verification(player2, 'midfielders', 'y') && verification(player2, 'midfielders', 'x') ) ||
    
            ( verification(player2, 'midfielders', 'y', 100) && verification(player2, 'midfielders', 'x') ) ||
    
            ( verification(player2, 'midfielders', 'y', 200) && verification(player2, 'midfielders', 'x') ) ||
    
            ( verification(player2, 'midfielders', 'y', 300) && verification(player2, 'midfielders', 'x') ) ||
    
            ( verification(player2, 'midfielders', 'y', 400) && verification(player2, 'midfielders', 'x') ) ||
    
            ( verification(player2, 'forwards', 'y') && verification(player2, 'forwards', 'x') ) ||
    
            ( verification(player2, 'forwards', 'y', 150) && verification(player2, 'forwards', 'x') ) ||
    
            ( verification(player2, 'forwards', 'y', 300) && verification(player2, 'forwards', 'x') )
        )
    }
    
    function goal(){
        let res = false
        if(ball.x <= 0 && (ball.y <= canvas.height/2 + 50 && ball.y >= canvas.height/2 - 50)){
            //gol player 2
            scoreNumber.p2++
            play.innerHTML = `
                <div class="play-container">
                    <p>Goool</p>
                    <p>player 2</p>
                    <p class="click-play">Continue</p>
                </div>
            `
            res = true
        }else if(ball.x >= canvas.width && ( ball.y <= canvas.height/2 + 50 && ball.y >= canvas.height/2 - 50 ) ){
            //gol player 1
            scoreNumber.p1++
            play.innerHTML = `
                <div class="play-container">
                    <p>Goool</p>
                    <p>player 1</p>
                    <p class="click-play">Continue</p>
                </div>
            `
            res = true
        }
        if(res){
            play.style.transform = 'scale(1)'
            play.style.visibility = 'visible'
            clearInterval(loop)
        }
    }
    
    function gameOver(){
        let res = false
        if(scoreNumber.p1 === 5){
            play.innerHTML = `
                <div class="play-container">
                    <p>Winner</p>
                    <p>player 1</p>
                    <p class="click-play">Restart</p>
                </div>
            `
            res = true
        }else if(scoreNumber.p2 === 5){
            play.innerHTML = `
                <div class="play-container">
                    <p>Winner</p>
                    <p>player 2</p>
                    <p class="click-play">Restart</p>
                </div>
            `
            res = true
        }
        if(res){
            scoreNumber.p1 = 0
            scoreNumber.p2 = 0
        }
    }
    
    function logicBall(){
        if(ball.x >= canvas.width){
            ball.dirX = -1
        }else if(ball.x <= 0){
            ball.dirX = 1
        }
    
        if(ball.y >= canvas.height){
            ball.dirY = -1
        }else if(ball.y <= 0){
            ball.dirY = 1
        }
    
        if(colision()){
            ball.dirX *= -1
        }
    
        if(ball.dirX > 0){
            ball.x += ball.v
        }else{
            ball.x -= ball.v
        }
    
        if(ball.dirY > 0){
            ball.y += ball.v
        }else{
            ball.y -= ball.v
        }

        goal()
        gameOver()
    }
    
    function draw(){
        staticsFigures()
        goalkeepers()
        defenders()
        midfielders()
        forwards()
        drawBall()
    }
    
    function logic(){
    
        /** Player 1 */
        //goalkeeper
        logicPlayers(81,65, player1, 'goalkeeper',70, 0)
        //defenders
        logicPlayers(87, 83, player1, 'defenders', 250, 160 )
        //midfielders
        logicPlayers(69, 68, player1, 'midfielders', 250, 400 )
        //forwards
        logicPlayers(82, 70, player1, 'forwards', 250, 300 )
    
        /** Player 2 */
        //goalkeeper
        logicPlayers(74, 77, player2, 'forwards', 250, 300 )
        //defenders
        logicPlayers(76, 190, player2, 'defenders', 250, 160 )
        //midfielders
        logicPlayers(75, 188, player2, 'midfielders', 250, 400 )
        //forwards
        logicPlayers(192,189 , player2, 'goalkeeper',70, 0)
    
        /**Ball */
        logicBall()
    }
    
    function main(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw()
        logic()
        score.innerHTML = `${scoreNumber.p1} - ${scoreNumber.p2}`
    }
    
    const loop = setInterval(main, FPS)
}

play.addEventListener('click', e => {
    play.style.transform = 'scale(0)'
    play.style.visibility = 'hidden'
    if(e.target.classList.contains('click-play')){
        principal()
    }
})