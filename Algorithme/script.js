algorithme phrase
var 
ph, text : string;
c : char;
i, j, k, nbr,nbmot : integer;

begin
//write an algorithm that read a sentence, which ends with a point, character by character
do write ("donner une phrase");
   read ("ph");
while (c=".");
return(ph:= ph+".");

do write ("donner un caractere");
   read ("c");
while (c<>".");
ph=ph+c;


// The length of the sentence (the number of characters).
k:=0;
c:=ph [k] ;
k:= length[ph]-1;
c:=ph[k] ;
return("k");

//The number of words in the sentence (assuming that the words are separated by a single space).

nbmot=1;
i:=0;
while i<leng(ph);
if ph[i] =="" and ph!=""
nbmot:=nbmot+1;
else ph=="";
nbmot:=0;
i++;
return(nbmot);

//The number of vowels in the sentence.

nbr:=0;
for(j=0 ; j<leng(text)-1 ; j++);
if text[j]in {A,E,U,O,Y,I} and text[j]in {a,e,u,o,y,i}
then nbr:=nbr+1;
return(nbr);


