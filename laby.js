const main = document.querySelector('main');
document.querySelector('main').innerHTML = "";

const multiline =
    `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`

const AllMaze = document.createElement('div')
AllMaze.className = "AllMaze"
main.appendChild(AllMaze)

const ninja = document.createElement('div')
ninja.className = 'ninja'


for (let i = 0; i < multiline.length; i++) {

    if (multiline[i].split('') == '*') {
        const wall = document.createElement('div')
        wall.className = "wall" 
        AllMaze.appendChild(wall)

    } else if (multiline[i].split('') == '.') {
        const way = document.createElement('div')
        
        way.id = i 
        way.className = "way"
        AllMaze.appendChild(way)

    } else if (multiline[i].split('') == 'S') {
        const start = document.createElement('div')
        start.className = "start"
        start.id = i 
        AllMaze.appendChild(start)
        start.appendChild(ninja)

    } else if (multiline[i].split('') == 'T') {
        const end = document.createElement('div')
        end.className = "end"
        end.id = i 
        AllMaze.appendChild(end)
    }
}

let ninjaPosition = 15 


document.body.addEventListener('keyup', function (e) {

    switch (e.key) 
    {
        case "ArrowUp":
            decalTop();
            break;

        case "ArrowDown":
            decalDown();
            break;

        case "ArrowRight":
            decalRight();
            break;

        case "ArrowLeft":
            decalLeft();
            break;

        default:
            break;
    }
    if(ninjaPosition == 26 )
{
    alert('You find Jiraya Sensei');
}

})

function decalRight() {
    let play = ninjaPosition + 1
    if (multiline[play].split('') != '*') 
    {
        ninjaPosition = play
        document.getElementById(ninjaPosition).appendChild(ninja)

    } else 
    {
        console.log('There are a wall');
    }
}

function decalLeft() {
    let play = ninjaPosition - 1
    if (multiline[play].split('') != '*') 
    {
        ninjaPosition = play
        document.getElementById(ninjaPosition).appendChild(ninja)

    } else 
    {
        console.log('There are a wall');

    }


}

function decalDown() {
    let play = ninjaPosition + 14 
    if (multiline[play].split('') != '*') 
    {
        ninjaPosition = play
        document.getElementById(ninjaPosition).appendChild(ninja) 

    } else 
    {
        console.log('There are a wall');
    }
}


function decalTop() {
    let play = ninjaPosition - 14 
    if (multiline[play].split('') != '*') 
    {
        ninjaPosition = play
        document.getElementById(ninjaPosition).appendChild(ninja)

        
    } else 
    {
        console.log('There are a wall');
    }
}



