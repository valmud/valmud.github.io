function check(lang){

    //wielokrotny wybor do naprawy
    let points = 0;
    let p1 = document.quiz.p1.value;
    let  p2=document.quiz.p2.value;
    let  p3=document.quiz.p3.value;
    let  p4=document.quiz.p4.value;
    let  p5=document.quiz.p5.value;
    let  p6=document.quiz.p6.value;
    let  p7=document.quiz.p7.value;
    let  p8=document.quiz.p8.value;
    let  p9=document.quiz.p9.value;
    let  p10=document.quiz.p10.value;
    let  p11=document.quiz.p11.value;
    let  p12=document.quiz.p12.value;
    let  p13=document.quiz.p13.value;
    let  p14=document.quiz.p14.value;
    let  p15=document.quiz.p15.value;
    let  p16=document.quiz.p16.value;
    let  p17=document.quiz.p17.value;
    let  p18=document.quiz.p18.value;
    let  p19=document.quiz.p19.value;
    let  p20=document.quiz.p20.value;
    let  p21=document.quiz.p21.value;
    let  p22=document.quiz.p22.value;
    let  p23=document.quiz.p23.value;
    let  p24=document.quiz.p24.value;



    if(p1==='c'){points++;}
    if(p2==='b'){points++;}
    if(p3==='a'){points++;}
    if(p4==='a' && p4 ==='b' && p4 ==='d'){points++;}
    if(p5==='b' && p5 ==='c'){points++;}
    if(p6==='c'){points++;}
    if(p7==='c'){points++;}
    if(p8==='a' && p8 ==='b' && p8 ==='c'){points++;}
    if(p9==='a' && p9==='b' && p9 ==='c' && p9==='d'){points++;}
    if(p10==='b'){points++;}
    if(p11==='a'){points++;}
    if(p12==='c'){points++;}
    if(p13==='a'){points++;}
    if(p14==='a' && p14==='c' && p14==='d'){points++;}
    if(p15==='a' && p15 ==='d'){points++;}
    if(p16==='c'){points++;}
    if(p17==='a' && p17 ==='c'){points++;}
    if(p18==='a' && p18 ==='b' && p18 ==='c'){points++;}
    if(p19==='c' && p19 ==='d'){points++;}
    if(p20==='a'){points++;}
    if(p21==='a' && p21 ==='b' && p21 ==='d' && p21 ==='e'){points++;}
    if(p22==='c'){points++;}
    if(p23==='a'){points++;}
    if(p24==='b'){points++;}


    const pictures = ["https://media1.giphy.com/media/11sBLVxNs7v6WA/giphy.gif", "https://media.giphy.com/media/tIeCLkB8geYtW/source.gif", "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif"];
    
    document.getElementById("output").style.visibility="visible";

    let degree;
    if(points===0){degree=1}
    if(points===1){degree=1}
    if(points===2){degree=1}
    if(points===3){degree=2}
    if(points===4){degree=2}
    if(points===5){degree=3}
    if(points===6){degree=3}
    if(points===7){degree=4}
    if(points===8){degree=4}
    if(points===9){degree=5}
    if(points===10){degree=5}
    if(points===11){degree=6}
    if(points===12){degree=6}
    if(points===13){degree=7}
    if(points===14){degree=7}
    if(points===15){degree=8}
    if(points===16){degree=8}
    if(points===17){degree=9}
    if(points===18){degree=9}
    if(points===19){degree=10}
    if(points===20){degree=10}
    if(points===21){degree=11}
    if(points===22){degree=11}
    if(points===23){degree=12}
    if(points===24){degree=12}

    let range;

    if(degree<=6){
        range=2;
    }

    if(degree>6&&degree<=9){
        range=1;
    }

    if(degree>9){
        range=0;
    }
    if(lang === 1){document.getElementById("degree").innerHTML="Балів: "+ points + ". Оцінка: "+ degree;}
    if(lang === 2){document.getElementById("punktacja").innerHTML="Punktów: "+ points + ". Ocena: "+ degree;}




    document.getElementById("gif").src=pictures[range];


}


