var vac =[];
var flagc = false;
var flagged;
var turn = false;
var scorered =0;
var scoreblue =0;
var moves = 85;
var done =[];
window.onload = function(){
    document.getElementById("nmoves").innerHTML = "Moves left: "+moves;
    var count = 0;
    var lft = 35;
    var tp = 35;
    for(i=0;i<50;i++){
        var elem = document.createElement("div");
        elem.id = i;
        elem.addEventListener("click",function(){clicked(this);});
        vac.push([0,0,0,0]);
        if(count<10){
            elem.style.left = lft + 100*count +"px";
            elem.style.top = tp+"px";
        }
        else{
            count=0;
            lft=35;
            tp+=100;
            elem.style.left = lft + 100*count +"px";
            elem.style.top = tp+"px";
        }
        document.getElementById("cont").appendChild(elem); 
        count++;  
    } 
    console.log(vac);
}


function clicked(t){
    var name = String(t.id);
    var n = parseInt(name);
    if(flagc==false){
        if(n%10==0){
            if(n<10){
                if(vac[n][1]==0){
                    document.getElementById(n+10).style.animation = "animation 1s infinite";
                }  
                if(vac[n][3]==0){
                    document.getElementById(n+1).style.animation = "animation 1s infinite";
                }
            }
            else if(n+10>=50){
                if(vac[n][0]==0){
                    document.getElementById(n-10).style.animation = "animation 1s infinite";
                }
                if(vac[n][3]==0){
                    document.getElementById(n+1).style.animation = "animation 1s infinite";
                }      
            }
            else{
                if(vac[n][0]==0){
                    document.getElementById(n-10).style.animation = "animation 1s infinite";
                }
                if(vac[n][1]==0){
                    document.getElementById(n+10).style.animation = "animation 1s infinite";
                }
                if(vac[n][3]==0){
                    document.getElementById(n+1).style.animation = "animation 1s infinite";
                }      
            }
        }
        else if(n%10==9){
            if(n<10){
                if(vac[n][1]==0){
                    document.getElementById(n+10).style.animation = "animation 1s infinite";
                }  
                if(vac[n][2]==0){
                    document.getElementById(n-1).style.animation = "animation 1s infinite";
                }  
            }
            else if(n+10>=50){
                if(vac[n][0]==0){
                    document.getElementById(n-10).style.animation = "animation 1s infinite";
                }
                if(vac[n][2]==0){
                    document.getElementById(n-1).style.animation = "animation 1s infinite";
                }      
            }
            else{
                if(vac[n][0]==0){
                    document.getElementById(n-10).style.animation = "animation 1s infinite";
                }
                if(vac[n][1]==0){
                    document.getElementById(n+10).style.animation = "animation 1s infinite";
                }
                if(vac[n][2]==0){
                    document.getElementById(n-1).style.animation = "animation 1s infinite";
                }      
            }
        }
        else{
            if(n<10){
                if(vac[n][1]==0){
                    document.getElementById(n+10).style.animation = "animation 1s infinite";
                }  
                if(vac[n][2]==0){
                    document.getElementById(n-1).style.animation = "animation 1s infinite";
                }  
                if(vac[n][3]==0){
                    document.getElementById(n+1).style.animation = "animation 1s infinite";
                }
            }
            else if(n+10>=50){
                if(vac[n][0]==0){
                    document.getElementById(n-10).style.animation = "animation 1s infinite";
                }
                if(vac[n][2]==0){
                    document.getElementById(n-1).style.animation = "animation 1s infinite";
                }  
                if(vac[n][3]==0){
                    document.getElementById(n+1).style.animation = "animation 1s infinite";
                }    
            }
            else{
                if(vac[n][0]==0){
                    document.getElementById(n-10).style.animation = "animation 1s infinite";
                }
                if(vac[n][1]==0){
                    document.getElementById(n+10).style.animation = "animation 1s infinite";
                }  
                if(vac[n][2]==0){
                    document.getElementById(n-1).style.animation = "animation 1s infinite";
                }  
                if(vac[n][3]==0){
                    document.getElementById(n+1).style.animation = "animation 1s infinite";
                }     
            }    
        }
        flagged = n;
        flagc = true;
    }
    else{
        if(t.id==flagged){
            back();
        }
        else if(t.id==flagged+1 && vac[flagged][3]==0 && parseInt(document.getElementById(flagged).style.top)==parseInt(document.getElementById(flagged+1).style.top)){
            var stx = parseInt(document.getElementById(flagged).style.left);
            var sty = parseInt(document.getElementById(flagged).style.top);
            var t = flagged+1;
            if(turn==false){
                vac[flagged][3]=1;
                vac[flagged+1][2]=1;
            }
            else{
                vac[flagged][3]=2;
                vac[flagged+1][2]=2;
            }
            draw(stx,sty,t);
            back();
            
        }
        else if(t.id==flagged-1 && vac[flagged][2]==0 && parseInt(document.getElementById(flagged).style.top)==parseInt(document.getElementById(flagged-1).style.top)){
            var stx = parseInt(document.getElementById(flagged).style.left);
            var sty = parseInt(document.getElementById(flagged).style.top);
            var t = flagged-1;
            if(turn==false){
                vac[flagged][2]=1;
                vac[flagged-1][3]=1;
            }
            else{
                vac[flagged][2]=2;
                vac[flagged-1][3]=2;
            }
            draw(stx,sty,t);
            back();
        }
        else if(t.id==flagged+10 && vac[flagged][1]==0){
            var stx = parseInt(document.getElementById(flagged).style.left);
            var sty = parseInt(document.getElementById(flagged).style.top);
            var t = flagged+10;
            if(turn==false){
                vac[flagged][1]=1;
                vac[flagged+10][0]=1;
            }
            else{
                vac[flagged][1]=2;
                vac[flagged+10][0]=2;
            }
            draw(stx,sty,t);
            back();
            
        }
        else if(t.id==flagged-10 && vac[flagged][0]==0){
            var stx = parseInt(document.getElementById(flagged).style.left);
            var sty = parseInt(document.getElementById(flagged).style.top);
            var t = flagged-10;
            if(turn==false){
                vac[flagged][0]=1;
                vac[flagged-10][1]=1;
            }
            else{
                vac[flagged][0]=2;
                vac[flagged-10][1]=2;
            }
            draw(stx,sty,t);
            back();
            
        }
    }
    for(i=0;i<50;i++){
        if(done.includes(i)==false){
            x = i;
            y = 3;
            var sum =0;
            for(j=0;j<4;j++){
                if(j==0){
                    sum = vac[x][y];
                    x+=1;
                    y=1;
                }
                else if(j==1){
                    if(sum!=vac[x][y]){
                        sum=0;
                    }
                    x+=10;
                    y=2;
                }
                else if(j==2){
                    if(sum!=vac[x][y]){
                        sum=0;
                    }
                    x-=1;
                    y= 0;
                }
                else{
                    if(sum!=vac[x][y]){
                        sum=0;
                    }
                }
            }
            if(sum==2){
                var lf = parseInt(document.getElementById(i).style.left);
                var tp = parseInt(document.getElementById(i).style.top);
                var cnvs = document.getElementById("draw");
                var cntx = cnvs.getContext("2d");
                cntx.fillStyle="#669DB3FF";
                cntx.fillRect(lf+4.5,tp+4.5,100,100);
                done.push(i);
                scoreblue++;
                document.getElementById("blues").innerHTML = scoreblue;
            }
            else if(sum==1){
                var lf = parseInt(document.getElementById(i).style.left);
                var tp = parseInt(document.getElementById(i).style.top);
                var cnvs = document.getElementById("draw");
                var cntx = cnvs.getContext("2d");
                cntx.fillStyle="#FF4F58FF";
                cntx.fillRect(lf+4.5,tp+4.5,100,100);
                done.push(i);
                scorered++;
                document.getElementById("reds").innerHTML = scorered;
            }
        }
    }
      
}

function back(){
    flagc=!flagc;
    for(i=0;i<50;i++){
        document.getElementById(i).style.animation = null;
    }
}

function draw(x,y,t){
    var cnvs = document.getElementById("draw");
    var cntx = cnvs.getContext("2d");
    cntx.beginPath();
    cntx.moveTo(x+4.5, y+4.5);
    if(t==flagged+1){
       cntx.lineTo(x+4.5+100, y+4.5); 
    }
    else if(t==flagged-1){
        cntx.lineTo(x+4.5-100, y+4.5); 
    }
    else if(t==flagged+10){
        cntx.lineTo(x+4.5, y+100); 
    }
    else if(t==flagged-10){
        cntx.lineTo(x+4.5, y-100); 
    }
    if(turn==false){
        cntx.strokeStyle = "#FF4F58FF";
    }
    else{
        cntx.strokeStyle = "#669DB3FF";
    }
    cntx.lineWidth = 5;
    cntx.stroke();
    cntx.closePath();
    moves--;
    document.getElementById("nmoves").innerHTML = "Moves left: "+moves;  
    if(turn==false){
        document.getElementById("bg").style.animation = "animation2 1s forwards";
        document.getElementById("blueb").style.color = "#F0F6F7FF"
        document.getElementById("redb").style.color = "#FF4F58FF"
    }  
    else{
        document.getElementById("bg").style.animation = "animation2 1s backwards";
        document.getElementById("redb").style.color = "#F0F6F7FF"
        document.getElementById("blueb").style.color = "#669DB3FF"
    }
    turn = !turn;
}
    
