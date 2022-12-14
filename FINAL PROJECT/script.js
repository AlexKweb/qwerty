let links = document.querySelectorAll('.btn')
let targetID
links.forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault()
        targetID = element.getAttribute('href')
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})


function anna() {
    document.querySelector('body').innerHTML = '<canvas id="flappybird" width="1920" height="900"></canvas>'

    let canvas = document.querySelector("#flappybird");
let pero = canvas.getContext("2d");


function stop(){
    pero.drawImage(bg,0,0)
    pero.drawImage(bird,xPos,yPos)
    pero.fillStyle="#fff";
    pero.font="34px Verdana";
    pero.fillText("Хотите играть", 19, 100);
    pero.fillText("нажмите любую", 1, 200);
    pero.fillText("клавишу на ", 35, 300);
    pero.fillText("клавиатуре", 35, 400);
    pero.fillStyle="#000";
    pero.font="24px Verdana";
    pero.fillText("Догони Марио", 49, 450);
    addEventListener('keypress',function draw(p){
        pero.drawImage(bg,0,0)
        pero.drawImage(bird,xPos,yPos)
        
        for(let i = 0; i<pipes_x.length; i++){
            if(pipes_x[i]<5 && pipes_x[i]>3){
            score++;
            mari++
            xm=0
            if(score>max){
                max=score
            }
            
        }
        
        let ym=pipes_y[mari] + pipeUp.height-30+xm    
        xm+=0.35
        if (xm>gap+10) {ym=1000 
            
        }
        pero.drawImage(mario,pipes_x[mari],ym)     
        pero.drawImage(pipeUp,pipes_x[i],pipes_y[i])
        pero.drawImage(pipeBotton,pipes_x[i],pipes_y[i] + pipeUp.height + gap)
        
        pipes_x[i]-=1
        if(pipes_x[i]===50){
            pipes_x.push(pipes_x[pipes_x.length-1]+250)
            pipes_y.push(Math.floor(Math.random() * pipeUp.height) - pipeUp.height)
        }
        if(xPos + bird.width >= pipes_x[i] && xPos <= pipes_x[i] + pipeUp.width && (yPos <= pipes_y[i] + pipeUp.height || yPos + bird.height >= pipes_y[i] + pipeUp.height + gap) || yPos + bird.height >= canvas.height - fg.height)
        {
            
            
            pipes_x=[canvas.width];
            pipes_y=[0];
            score=0;
            xPos=4  ;
            yPos=250;
            change=2;
            numb++
            mari=0
            xm=0
            
        }
        
        }
        if(change>0){
            bird.src = "images/bird2_up.png"
        }
        else{bird.src = "images/bird2_down.png"}
        yPos-=change
        change-=grav
        pero.drawImage(fg,0,400)
        pero.fillStyle="#000";
        pero.font="24px Verdana";
        pero.fillText("Best:"+max, 10, canvas.height-40);
        pero.fillText("Score:"+score, 10, canvas.height-10);
        requestAnimationFrame(draw)
    })
}
stop()





















}

