 
 function liida1 (number1,number2){
    const summa = number1+number2
    return summa;
 }

 //console.log('liida1:',liida1(3,5));

 const liida2=(number1,number2) =>{     //eelistakse esimesele
    const summa= number1 + number2;
    return summa;
 }

 //console.log('liida2:',liida2(4,3));

 const liida3 =(number1,number2) => number1+number2;  //täpselt sama mis liida2

 // console.log('liida3:',liida3(1,4));


 const inimene1= {
    eesnimi: 'Natalja',
    perenimi: 'Gnatjuk'
 }
 const paneNimiKokku1 = (inimene) => {
    return inimene.eesnimi + ' ' + inimene.perenimi;
 }

// console.log(paneNimiKokku1(inimene1));

 const paneNimiKokku2 = (inimene) => {
    const eesnimi= inimene.eesnimi;
    const perenimi= inimene.perenimi;

    return eesnimi + ' ? ' + perenimi;
 }

 //console.log(paneNimiKokku2(inimene1));

 const paneNimiKokku3 = (inimene) => {
    const{ eesnimi, perenimi} = inimene;
    return eesnimi + ' ! ' + perenimi;
 }

// console.log(paneNimiKokku3(inimene1));

const paneNimiKokku4 = ({ eesnimi, perenimi}) =>  eesnimi + ' : ' + perenimi; //palju elegantsem kui 1 
//console.log(paneNimiKokku4(inimene1));

const inimene2= {
    eesnimi: 'Artur',
    perenimi: 'Gnatjuk'
 }
 const inimene3= {
    eesnimi: 'Markel',
    perenimi: 'Gnatjukk'
 }

 const inimesed = [inimene2,inimene3]
 const [person1, person2] =inimesed;
 
 //console.log (person1);

 const inimene4= {
    eesnimi: 'Erik',
    perenimi: 'Petrovits'
 }
 const inimene5= {
    eesnimi: 'Emi',
    perenimi: 'Saba'
 }

 const inimesed1 = [inimene4,inimene5]
 
 console.log (inimesed1);

   // for (let i=0; i< inimesed1.length; i++){
   //  inimesed1[i] = inimesed1[i].eesnimi + ' ' + inimesed1[i].perenimi;
   //}
   
   // või siis ühelaine:

   // inimesed1.forEach((inimene, index, array) => array[index] = inimene.eesnimi + ' + ' + inimene.perenimi);
  // inimesed1.forEach((inimene, i, array) => array[i] = inimene.eesnimi + ' + ' + inimene.perenimi); // see on elegantsem

  //see on kõige elegantsem:

  //const inimesteNimed=[]
     //for (let i=0; i< inimesed1.length; i++){
    //  inimesteNimed[i] = inimesed1[i].eesnimi + ' ' + inimesed1[i].perenimi;
    // }
   // või siis ühe reaga:
    
   const inimesteNimed= inimesed1.map((inimene) =>inimene.eesnimi + inimene.perenimi); // ilus viis

    console.log(inimesed1);
    console.log(inimesteNimed);