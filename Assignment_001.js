
function diamond(n){
     for(let i=1; i<=n; i++){
        
        let row =" ";

        for(let j=1; j<=n-i; j++){
            row +=" ";
        }

        row +="*";

        if(i>1){
            for(let j = 1; j<=(2*i-3); j++){
                row +=" ";
            }
            row +="*";
        }
        console.log(row);
    }

    for(let i=n-1; i>=1; i--){
        let row =" ";

        for(let j=1; j<=n-i; j++){
            row +=" ";
        }

        row +="*";

        if(i>1){
            for(let j = 1; j<=2*(i-1)-1; j++){
                row +=" ";
            }
            row +="*";
        }
        console.log(row);
    }
}

diamond(5);