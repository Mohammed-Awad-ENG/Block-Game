let player = document.querySelector(".player");
let walls = document.querySelectorAll(".wall");
let speed = 10;
let gameEnd = false;
let levelsContainer = document.querySelector(".levels-container");
let levelNumper = 1;
document.querySelector("#speed-input").addEventListener("input", (event) => {
    speed = parseInt(event.target.value);
});
document.querySelector(".level-numper").addEventListener("click", () => {
    menu.style.display = "block";
});
let levels = document.querySelectorAll(".levels-container span");
levels.forEach((level) => {
    level.addEventListener("click", () => {
        gameEnd = false;
        levelNumper = parseInt(level.innerHTML.trim());
        setLevel(levelNumper - 1);
    });
});
let menu = document.querySelector(".control-game");

let icons = document.querySelectorAll(".icon");
icons.forEach((e) =>
    e.addEventListener("click", (e) => {
        icons.forEach((e) => e.classList.remove("active"));
        e.target.classList.add("active");
    })
);

function setLevel(levelNum) {
    document.querySelector(".level-numper span").innerHTML = levelNum + 1;

    document.querySelector(".game-container").innerHTML =
        levelsMap[levelNum][0];
    walls = document.querySelectorAll(".wall");
    player = document.querySelector(".player");
    menu.style.display = "none";
    if (levelNum !== 8) {
        try {
            player.style.backgroundImage =
                document.querySelector(".active").style.backgroundImage;
            player.style.backgroundColor = "transparent";
            if (
                document.querySelector(".active").style.backgroundImage ===
                `url("imgs/Batman.png")`
            )
                document.getElementById("Batman").play();
            else {
                document.getElementById("Batman").pause();
            }
        } catch {
            console.log("You didn't chose avatar");
        }
    } else {
        player.style.backgroundImage = none;
    }
}
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            case "ArrowUp":
                movePlayer(0, -speed);
                break;
                case "a":
                    case "ArrowLeft":
                        movePlayer(-speed, 0);
                        break;
                        case "d":
                            case "ArrowRight":
                                movePlayer(speed, 0);
                                break;
                                case "s":
                                    case "ArrowDown":
                                        movePlayer(0, speed);
                                        break;
                                    }
                                });
                                function movePlayer(dx, dy) {
                                    if (gameEnd) return;
                                    
                                    let CurrentX = parseFloat(player.style.left) || levelsMap[levelNumper][1];
                                    let CurrentY = parseFloat(player.style.top) || levelsMap[levelNumper][3];
                                    
                                    player.style.left = `${CurrentX + dx}px`;
                                    player.style.top = `${CurrentY + dy}px`;
                                    checkCollisions();
                                }
                                function checkCollisions() {
                                    const playerRect = player.getBoundingClientRect();
                                    
                                    for (let i = 0; i < walls.length; i++) {
                                        const wall = walls[i];
                                        const wallRect = wall.getBoundingClientRect();
                                        
                                        const isColliding =
            playerRect.left < wallRect.right &&
            playerRect.right > wallRect.left &&
            playerRect.top < wallRect.bottom &&
            playerRect.bottom > wallRect.top;
            
            if (isColliding) {
                if (wall.id === "finish-line") {
                    endGame(true);
                } else {
                    endGame(false);
                }
                return;
            }
        }
    }
    let playAgainBtn = document.querySelector(".playAgain");
    function endGame(isWinner) {
        gameEnd = true;
        if (isWinner) {
            document.getElementById("end").play();
            setTimeout(() => {
                menu.style.display = "block";
            }, 1500);
        } else {
            playAgainBtn.style.display = "block";
            document.getElementById("death").play();
            playAgainBtn.addEventListener("click", (e) => {
                setLevel(levelNumper - 1);
                e.target.style.display = "none";
                gameEnd = false;
            });
        }
    }
    
    let levelsMap = [
        [
            `<div class="wall" style="  width: 100%; height: 20px; top: 0; left: 0;"></div>
            <div class="wall" style="  width: 100%; height: 20px; top: 450px; left: 0;"></div>
            <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 980px;"></div>
            <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 0;"></div>
            <!-- In -->
            <div class="wall" style="  width: 800px; height: 20px; top: 340px; left: 180px;"></div>
            <div class="wall" style="  width: 20px; height: 200px; top: 140px; left: 180px;"></div>
            <div class="wall" style="  width: 700px; height: 20px; top: 140px; left: 180px;"></div>
            <div class="wall" id="finish-line"
            style="   width: 90px; height: 90px; top: 360px; left: 890px; z-index: 0;"></div>
            <div class="player" style="top: 230px;left: 260px;"></div>`,
            260,
            230,
        ],
        [
            `<div class="wall" style="  width: 100%; height: 20px; top: 0; left: 0;"></div>
            <div class="wall" style="  width: 100%; height: 20px; top: 450px; left: 0;"></div>
            <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 980px;"></div>
            <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 0;"></div>
            <!-- In -->
            <div class="wall" style="  width: 800px; height: 20px; top: 340px; left: 180px;"></div>
            <div class="wall" style="  width: 20px; height: 180px; top: 170px; left: 180px;"></div>
            <div class="wall moving-block-lOne"></div>
            <div class="wall" style="  width: 700px; height: 20px; top: 170px; left: 280px;"></div>
            <div class="wall" style="  width: 700px; height: 20px; top: 255px; left: 180px;"></div>
            
            <div class="wall" id="finish-line"
            style="   width: 90px; height: 90px; top: 360px; left: 890px; z-index: 0;">
            </div>
            <div class="player" style="top: 282px;left: 210px;"></div>`,
            282,
            210,
        ],
        [
            `<div class="wall" style="  width: 100%; height: 20px; top: 0; left: 0;"></div>
            <div class="wall" style="  width: 100%; height: 20px; top: 450px; left: 0;"></div>
            <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 980px;"></div>
            <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 0;"></div>
            
            <div class="wall" style="  width: 20px; height: 350px; top: 0; left: 200px;"></div>
            <div class="wall" style="  width: 20px; height: 350px; top: 120px; left: 400px;"></div>
            <div class="wall" style="  width: 20px; height: 350px; top: 0; left: 600px;"></div>
            <div class="wall" style="  width: 20px; height: 350px; top: 120px; left: 800px;"></div>
            
            <div class="wall" id="finish-line" style="   width: 80px; height: 80px; top: 370px; left: 900px;"></div>
            <div class="player" style="top: 220px; left: 50px;"></div>`,
            50,
            220,
        ],
        [
            `<div class="wall" style="  width: 100%; height: 20px; top: 0; left: 0;"></div>
            <div class="wall" style="  width: 100%; height: 20px; top: 450px; left: 0;"></div>
            <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 980px;"></div>
            <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 0;"></div>
            
            <div class="wall" style="  width: 880px; height: 20px; top: 100px; left: 20px;"></div>
            <div class="wall" style="  width: 20px; height: 270px; top: 100px; left: 900px;"></div>
            <div class="wall" style="  width: 700px; height: 20px; top: 350px; left: 200px;"></div>
            <div class="wall" style="  width: 20px; height: 170px; top: 200px; left: 200px;"></div>
            <div class="wall" style="  width: 400px; height: 20px; top: 200px; left: 200px;"></div>
            <div class="wall" id="finish-line" style="   width: 60px; height: 60px; top: 250px; left: 240px;"></div>
            <div class="player" style="top: 35px; left: 50px;"></div>`,
            50,
            35,
        ],
    [
        `<div class="wall" style="  width: 100%; height: 20px; top: 0; left: 0;"></div>
        <div class="wall" style="  width: 100%; height: 20px; top: 450px; left: 0;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 980px;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 0;"></div>
        
        <div class="wall" style="  width: 850px; height: 20px; top: 100px; left: 0;"></div>
        <div class="wall" style="  width: 850px; height: 20px; top: 200px; left: 130px;"></div>
        <div class="wall" style="  width: 850px; height: 20px; top: 300px; left: 0;"></div>
        <div class="wall" id="finish-line" style="   width: 50px; height: 50px; top: 360px; left: 49px;"></div>
        <div class="player" style="top: 30px; left: 30px;"></div>`,
        30,
        30,
    ],
    [
        `<div class="wall" style="width: 100%; height: 20px; top: 0; left: 0;"></div>
        <div class="wall" style="width: 100%; height: 20px; top: 450px; left: 0;"></div>
        <div class="wall" style="width: 20px; height: 100%; top: 0; left: 980px;"></div>
        <div class="wall" style="width: 20px; height: 100%; top: 0; left: 0;"></div>
        <div class="wall" style="width: 20px; height: 350px; top: 0; left: 200px;"></div>
        <div class="wall" style="width: 20px; height: 350px; top: 120px; left: 400px;"></div>
        <div class="wall" style="width: 20px; height: 350px; top: 0; left: 600px;"></div>
        <div class="wall" style="width: 20px; height: 350px; top: 120px; left: 800px;"></div>
        <div class="wall" id="finish-line" style="width: 80px; height: 80px; top: 370px; left: 900px;"></div>
        <div class="wall level-5" style=" background-color:rgb(153, 3, 3) ; width: 350px; height: 20px; top: 240px; left: 600px;"></div>
        <div class="player" style="top: 220px; left: 50px;"></div>`,
        50,
        220,
    ],
    [
        `
        <div class="wall" style="  width: 100%; height: 20px; top: 0; left: 0;"></div>
        <div class="wall" style="  width: 100%; height: 20px; top: 450px; left: 0;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 980px;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 0;"></div>
        
        <div class="wall" style="  width: 880px; height: 20px; top: 100px; left: 20px;"></div>
        <div class="wall" style="  width: 20px; height: 270px; top: 100px; left: 900px;"></div>
        <div class="wall" style="  width: 700px; height: 20px; top: 350px; left: 200px;"></div>
        <div class="wall" style="  width: 20px; height: 170px; top: 200px; left: 200px;"></div>
        <div class="wall" style="  width: 400px; height: 20px; top: 200px; left: 200px;"></div>
        <div class="wall" id="finish-line" style="   width: 60px; height: 60px; top: 250px; left: 240px;"></div>
        
        <div class="wall level-5" style=" background-color: rgb(153, 3, 3); z-index: -1; width: 400px; height: 20px; top: 100px; left: 600px;"></div>
        <div class="wall level-5" style=" background-color: rgb(153, 3, 3); z-index: -1; width: 700px; height: 20px; top: 350px; left: 300px;"></div>
        <div class="wall I-lost-the-name-plot " style="background-color: rgb(153, 3, 3); width:20px; height: 100px; top: 351px; left: 400px;"></div>
        <div class="player" style="top: 35px; left: 50px;"></div>`,
        50,
        35,
    ],
    [
        `<div class="wall" style="  width: 100%; height: 20px; top: 0; left: 0;"></div>
        <div class="wall" style="  width: 100%; height: 20px; top: 450px; left: 0;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 980px;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 0;"></div>
        <!-- In -->
        <div class="wall" style="  width: 800px; height: 20px; top: 340px; left: 180px;"></div>
        <div class="wall" style="  width: 20px; height: 200px; top: 140px; left: 180px;"></div>
        <div class="wall" style="  width: 700px; height: 20px; top: 140px; left: 180px;"></div>
        <div class="wall" id="finish-line" style="   width: 90px; height: 90px; top: 360px; left: 890px; z-index: 0;"></div>
        <div class="game-overlay"></div>
        <div class="player" style="top: 230px;left: 260px; background-image: none; !important"></div>`,
        260,
        230,
    ],
    [
        `
        <div class="wall" style="  width: 100%; height: 20px; top: 0; left: 0;"></div>
        <div class="wall" style="  width: 100%; height: 20px; top: 450px; left: 0;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 980px;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 0;"></div>
        <!-- In -->
        <div class="wall" style="  width: 800px; height: 20px; top: 340px; left: 180px;"></div>
        <div class="wall" style="  width: 20px; height: 200px; top: 140px; left: 180px;"></div>
        <div class="wall" style="  width: 700px; height: 20px; top: 140px; left: 180px;"></div>
        <div class="wall" id="finish-line" style="   width: 90px; height: 90px; top: 360px; left: 890px; z-index: 0;"></div>
        <div class="game-overlay tow"></div>
        <div class="player" style="top: 230px;left: 260px;background-image: none !important; "></div>
        
        `,
        260,
        230,
    ],
    [
        `<div class="wall" style="  width: 100%; height: 20px; top: 0; left: 0;"></div>
        <div class="wall" style="  width: 100%; height: 20px; top: 450px; left: 0;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 980px;"></div>
        <div class="wall" style="  width: 20px; height: 100%; top: 0; left: 0;"></div>
        <div class="finally">
        <p>Thank you for playing</p>
        <span>I hope you enjoyed it and had fun</span>
        <a class="Return" href="https://github.com/Mohammed-Awad-ENG">See More Like This</a>
        </div>`,
    ],
];
// mobile Control
let isHolding = false;
let currentDirection = null;
let holdInterval = null;

function startHolding(direction) {
    if (isHolding) return;

    isHolding = true;
    currentDirection = direction;

    holdInterval = setInterval(() => {
        switch (currentDirection) {
            case "ArrowUp":
                movePlayer(0, -speed);
                break;
            case "ArrowLeft":
                movePlayer(-speed, 0);
                break;
            case "ArrowRight":
                movePlayer(speed, 0);
                break;
            case "ArrowDown":
                movePlayer(0, speed);
                break;
        }
    }, 30);
}

function stopHolding() {
    isHolding = false;
    currentDirection = null;
    clearInterval(holdInterval);
    holdInterval = null;
}

document.querySelectorAll("#game-btn").forEach((btn) => {
    const direction = btn.className;

    btn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        startHolding(direction);
    });

    btn.addEventListener("touchend", stopHolding);
    btn.addEventListener("touchcancel", stopHolding);
});

// mobile Control
