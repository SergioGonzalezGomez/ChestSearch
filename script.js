const imgXUrl = "./images/x.png";
const imgChestUrl = "./images/chest.png";
const imgSkullUrl = "./images/skull.png";

const attempts$$ = document.querySelector('[data-function="attempts"]');
const board$$ = document.querySelector('[data-function="board"]');

const resetButton$$ = document.querySelector('button');
resetButton$$.addEventListener('click', reset);

function reset() {
    board$$.innerHTML = "";
    let gameOver = false;
    attempts$$.innerText = 0;
    let maxRows = 0;
    let maxCols = 0;
    while (maxRows > 20 || maxRows == 0) {
        maxRows = prompt('Introduce el número de filas(máx 20)');
    };
    while (maxCols > 10 || maxCols == 0) {
        maxCols = prompt('Introduce el número de columnas(máx 10)');
    };
    

    let chestCoord = {x: 0, y: 0};
    chestCoord.x = Math.floor(Math.random()*maxRows);
    chestCoord.y = Math.floor(Math.random()*maxCols);

    for (let i = 0; i < maxRows; i++) {
        const tr$$ = document.createElement('tr');
        board$$.appendChild(tr$$);
        for (let j = 0; j < maxCols; j++) {
            const td$$ = document.createElement('td');
            const img$$ = document.createElement('img');
            img$$.setAttribute('src', imgXUrl);
            
            img$$.addEventListener('click', () => {
                if (img$$.outerHTML == `<img src=\"./images/x.png\">` && !gameOver) {
                    attempts$$.innerText++;
                    if(i == chestCoord.x && j == chestCoord.y){
                        img$$.setAttribute('src', imgChestUrl);
                        alert("Felicidades, lo has conseguido con " + attempts$$.innerText + " intentos!")
                        gameOver = true;

                    } else {
                        img$$.setAttribute('src', imgSkullUrl);
                    };
                };
                
            });
            td$$.appendChild(img$$);
            tr$$.appendChild(td$$);
        };
    };

    
};

reset();