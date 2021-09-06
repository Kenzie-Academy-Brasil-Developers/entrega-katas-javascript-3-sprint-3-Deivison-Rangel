const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function kata1() {
    
    let contar = 0

    let listak1=[]

    while(contar<25){
        contar+=1

        listak1.push(contar) 
    } 

    return listak1
    
    showResults(listak1);
}
      
function kata2() {
    
    let listak2 = [];

    for(let x = 25; x > 0; x--){
        
        listak2.push(x);
    }

    return listak2

    showResults(listak2);
}

function kata3() {
    
    let listak3 = [];

    for(let x = 1; x > 25; x--){
       
        listak3.push(x*(-1));
    }

    return listak3

    showResults(listak3);
}

function kata4() {
  
    let listak4 = [];

    for(let x = 25; x > 0; x--){
        
        listak4.push(x*(-1));
    }

    return listak4

    showResults(listak4);
}

function kata5() {
    
    let listak5 = [];

    for(let x = -25; x <= 25; x++){
    
    if(x % 2 !== 0){
       
        listak5.push(x);
    }

    }
    return listak5

    showResults(listak5);
}

function kata6() {
    
    let listak6 = [];

    for(let x = 1; x <= 100; x++){
        
        if(x % 3 === 0){
            
            listak6.push(x);
        }
    }

    return listak6

    showResults(listak6);
}

function kata7() {
    
    let listak7 = [];

    for(let x = 1; x <= 100; x++){
       
        if(x % 7 === 0){
            
            listak7.push(x);
        }
    }

    return listak7

    showResults(listak7);
}

function kata8() {
    
    let listak8 = [];

    for(let x = 1; x <= 100; x++){
        
        if(x % 3 === 0 || x % 7 === 0){
            
            listak8.push(x);
        }
    }
    return listak8

    showResults(listak8);
}

function kata9() {
    
    let listak9 = [];

    for(let x = 1; x <= 100; x++){
        
        if(x % 2 !== 0 && x % 5 === 0){
            
            listak9.push(x);
        }
    }

    return listak9

    showResults(listak9);
}

function kata10() {
    
    return sampleArray

    showResults(sampleArray);
}

function kata11() {
    
    let listak11 = [];

    for(let x = 0; x < sampleArray.length; x++){
        
        if(sampleArray[x] % 2 === 0){
            
            listak11.push(sampleArray[x]);
        }
    }

    return listak11

    showResults(listak11);
}

function kata12() {
    
    let listak12 = [];

    for(let x = 0; x < sampleArray.length; x++){
       
        if(sampleArray[x] % 2 === 1){
            
            listak12.push(sampleArray[x]);
        }
    }

    return listak12

    showResults(listak12);
}

function kata13() {
    
    let listak13 = [];

    for(let x = 0; x < sampleArray.length; x++){
        
        if(sampleArray[x] % 8 === 0){
            
            listak13.push(sampleArray[x]);
        }
    }

    return listak13

    showResults(listak13);
}

function kata14() {
    
    let listak14 = [];

    for(let x = 0; x < sampleArray.length; x++){
        
        listak14.push(sampleArray[x] ** 2);
    }
    
    return listak14

    showResults(listak14);
}

function kata15() {
   
    let soma = 0;

    for(let x = 1; x <= 20; x++){
        
        soma += x;
    }

    return soma

    showResults(soma);
}

function kata16() {
  
    let soma = 0;

    for(let x = 0; x < sampleArray.length; x++){
        
        soma += sampleArray[x];
    }

    return soma

    showResults(soma);
}

function kata17() {
   
    let listak17 = sampleArray[0];

    for(let x = 0; x < sampleArray.length; x++){
        
        if(sampleArray[x] < listak17){
            
            listak17 = sampleArray[x];
        }
    }

    return listak17

    showResults(listak17);

}

function kata18() {
   
    let listak18 = sampleArray[0];

    for(let x =0; x < sampleArray.length; x++){
        
        if(sampleArray[x] > listak18){
            
            listak18 = sampleArray[x];
        }
    }

    return listak18

    showResults(listak18);
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

/*function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}*/
