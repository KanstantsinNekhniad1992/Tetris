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

