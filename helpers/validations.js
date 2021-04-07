const valChain = (arr, point) => {
    let val = {
        x:  3,
        y:  3,
        xy: 3,
        yx: 3
    }; 
    const { x, y } = point;
    const length = arr.length;
    let tmp = arr[x][y];
    for( let i = 1; i < 4 ; i++ ){
        if( y < length - 3 && (val.x != 3 || i === 1) ){
            (arr[x][y+i] != tmp) ? val.x = 3 : val.x --;
        }
        if( x < length - 3 && (val.y != 3 || i === 1)){
            (arr[x+i][y] != tmp) ? val.y = 3 : val.y --;
        }
        if( x < length - 3 && y < length - 3 && (val.xy != 3 || i === 1)){
            (arr[x+i][y+i] != tmp) ? val.xy = 3 : val.xy --;
        }
        if( x > 3 && y < length - 3 && (val.yx != 3 || i === 1)){
            (arr[x-i][y+i] != tmp) ? val.yx = 3 : val.yx --;
        }
        if( val.x === 3 && val.y === 3 && val.xy === 3 && val.yx === 3 )
            break;
    } 
    if (val.x === 0 || val.y === 0 || val.xy === 0 || val.yx === 0) return { res: true, arr }
    
    return { res: false, arr }
}

const isMutant = (dna) => {
    const genes = dna.map(i => i.split(''));
    let countIsMutant = 0;
    for (let i = 0; i < genes.length; i++){
        for (let j = 0; j < genes.length; j++){
            if (countIsMutant == 2) break;
            const { res } = valChain(genes, { x: i, y: j });
            if (res) countIsMutant++ 
        }
    }
    if (countIsMutant == 2) return true

    return false
}

module.exports = {
    isMutant
}