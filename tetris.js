window.onload = function () {

    var game = document.getElementById('game'),
        gameContext = game.getContext('2d'),
        area = new Area(0, 0, 150, 300, '#a1a1a1', '#000'),
        car2 = new Car(60, 10, 10, 10, '#000'),
        car1 = new Car(10, 10, 10, 10, '#000'),
        car3 = new Car(110, 10, 10, 10, '#000'),
        cars = [car1, car2, car3],
        player = new Car(60, 250, 10, 10, '#000');
    game.width = '156';
    game.height = '300';

    function Car(x, y, oneBlockWidth, oneBlockHeight, backgroundColor) {
        var self = this;
        self.x = x;
        self.y = y;
        self.oneBlockWidth = oneBlockWidth;
        self.oneBlockHeight = oneBlockHeight;

        self.draw = function () {
            gameContext.fillStyle = backgroundColor;
            gameContext.fillRect(this.x + this.oneBlockWidth, this.y, this.oneBlockWidth, this.oneBlockHeight);
            gameContext.fillRect(this.x + 2 * this.oneBlockWidth, this.y + this.oneBlockHeight, this.oneBlockWidth, this.oneBlockHeight);
            gameContext.fillRect(this.x, this.y + this.oneBlockHeight, this.oneBlockWidth, this.oneBlockHeight);
            gameContext.fillRect(this.x + this.oneBlockWidth, this.y + 2 * this.oneBlockHeight, this.oneBlockWidth, this.oneBlockHeight);
            gameContext.fillRect(this.x, this.y + 3 * this.oneBlockHeight, this.oneBlockWidth, this.oneBlockHeight);
            gameContext.fillRect(this.x + 2 * this.oneBlockWidth, this.y + 3 * this.oneBlockHeight, this.oneBlockWidth, this.oneBlockHeight);
        };

        self.moveToRight = function () {
            self.x += 30;
            if (self.x + 30 <= area.x + area.width) {
                draw();
            } else {
                self.x -= 30;
            }
        };

        self.moveToLeft = function () {
            self.x -= 30;
            if (self.x >= area.x) {
                draw();
            } else {
                self.x += 30;
            }
        };

        self.moveDown = function () {
            self.y += 10;
            if (self.y >= area.height) {
                self.y = -getRandomInt(40, 12 * car1.oneBlockHeight);
            }
            draw();
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCarByIndex(index) {
        return cars[index];
    }

    function setStart() {
        car1.y = getRandomInt(area.x-40, 12 * car1.oneBlockHeight);
        car2.y = getRandomInt(area.x-40, 12 * car1.oneBlockHeight);
        car2.y = getRandomInt(area.x-40, 12 * car1.oneBlockHeight);
    }

    function Area(x, y, width, height, backgroundColor, borderColor) {
        var self = this;
        self.x = x;
        self.y = y;
        self.width = width;
        self.height = height;
        self.backgroundColor = backgroundColor;
        self.borderColor = borderColor;

        self.draw = function () {
            gameContext.beginPath();
            gameContext.rect(self.x, self.y, self.width, self.height);
            gameContext.fillStyle = backgroundColor;
            gameContext.fill();
            gameContext.lineWidth = 2;
            gameContext.strokeStyle = borderColor;
            gameContext.stroke();
        }
    }

    function draw() {
        area.draw();
        car1.draw();
        car2.draw();
        car3.draw();
        player.draw();
    }

    function init() {
        area.draw();
        car1.draw();
        car2.draw();
        car3.draw();
        player.draw();

        window.addEventListener('keydown', function (e) {
            if (e.keyCode == '37') {
                player.moveToLeft();
            } else {
                if (e.keyCode == '39') {
                    player.moveToRight();
                }
            }
        });

        setStart();
        setInterval(function () {
            car1.moveDown();
            car2.moveDown();
            car3.moveDown();
        }, 500);

    }

    init();
};