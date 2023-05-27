function rot13(str) {
    let alph=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let b='';
    for(let i=0;i<str.length;i++){
      if(alph.includes(str[i]) && alph.indexOf(str[i])<13){
        b+=(alph[alph.indexOf(str[i])+13]);
      }else if(alph.includes(str[i]) && alph.indexOf(str[i])>=13){
        b+=(alph[alph.indexOf(str[i])-13]);
      }else{
        b+=(str[i])
      }
    }
    
    return b;
  }
  
  console.log(rot13("SERR PBQR PNZC"));