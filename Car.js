function Car(x, y, oneBlockWidth, oneBlockHeight) {

    var self = this;
    self.x = x;
    self.y = y;
    self.oneBlockWidth = oneBlockWidth;
    self.oneBlockHeight = oneBlockHeight;

    self.draw = function () {
        gameContext.fillRect(self.x + self.oneBlockWidth, self.y, self.oneBlockWidth, self.oneBlockHeight);
        gameContext.fillRect(self.x + 2 * self.oneBlockWidth, self.y + self.oneBlockHeight, self.oneBlockWidth, self.oneBlockHeight);
        gameContext.fillRect(self.x, self.y + self.oneBlockHeight, self.oneBlockWidth, self.oneBlockHeight);
        gameContext.fillRect(self.x + self.oneBlockWidth, self.y + 2 * self.oneBlockHeight, self.oneBlockWidth, self.oneBlockHeight);
        gameContext.fillRect(self.x, self.y + 3 * self.oneBlockHeight, self.oneBlockWidth, self.oneBlockHeight);
        gameContext.fillRect(self.x + 2 * self.oneBlockWidth, self.y + 3 * self.oneBlockHeight, self.oneBlockWidth, self.oneBlockHeight);
    };

    self.moveToRight = function () {
        self.x += 30;
        self.draw();
    };

    self.moveToLeft = function () {
        self.x -= 30;
        self.draw();
    }
}

var car1 = new Car(10, 10, 10, 10);
car1.draw();

var car2 = new Car(60, 10, 10, 10);
car2.draw();

var car3 = new Car(110, 10, 10, 10);
car3.draw();

var player = new Car(60, 250, 10, 10);
player.draw();
