interface XY {
    x: number;
    y: number;
}

export const DIRECTIONS = {
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right",
    UP: "up",
} as const;
type SwipeDirectionType = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];

class Gestures {
    static async checkIfDisplayedWithSwipe({
        scrollContainer,
        searchableElement,
        maxScrolls,
        amount = 0,
        direction = DIRECTIONS.DOWN,
        percentage = 0.99,
    }: {
        scrollContainer: WebdriverIO.Element;
        searchableElement: WebdriverIO.Element;
        maxScrolls: number;
        amount?: number;
        direction?: SwipeDirectionType;
        percentage?: number;
    }) {
        if (!(await searchableElement.isDisplayed()) && amount <= maxScrolls) {
            let scrollPercentage;
            if (isNaN(percentage)) {
                console.log("\nThe percentage to scroll should be a number.\n");
                scrollPercentage = 0.99;
            } else if (percentage > 1) {
                console.log(
                    "\nThe percentage to scroll should be a number between 0 and 1.\n"
                );
                scrollPercentage = 0.99;
            } else {
                scrollPercentage = 1 - percentage;
            }

            const { x, y, width, height } = await driver.getElementRect(
                scrollContainer.elementId
            );
            const scrollRectangles = {
                top: {
                    x: Math.round(x + width / 2),
                    y: Math.round(y + height * scrollPercentage),
                },
                right: {
                    x: Math.round(x + width - width * scrollPercentage),
                    y: Math.round(y + height / 2),
                },
                bottom: {
                    x: Math.round(x + width / 2),
                    y: Math.round(y + height - height * scrollPercentage),
                },
                left: {
                    x: Math.round(x + width * scrollPercentage),
                    y: Math.round(y + height / 2),
                },
            };

            if (direction === DIRECTIONS.DOWN) {
                await this.executeGesture({
                    from: scrollRectangles.top,
                    to: scrollRectangles.bottom,
                });
            } else if (direction === DIRECTIONS.LEFT) {
                await this.executeGesture({
                    from: scrollRectangles.right,
                    to: scrollRectangles.left,
                });
            } else if (direction === DIRECTIONS.RIGHT) {
                await this.executeGesture({
                    from: scrollRectangles.left,
                    to: scrollRectangles.right,
                });
            } else if (direction === DIRECTIONS.UP) {
                await this.executeGesture({
                    from: scrollRectangles.bottom,
                    to: scrollRectangles.top,
                });
            } else {
                console.log(
                    "\nThe direction to scroll should be one of the following: down, left, right or up.\n"
                );
            }

            await this.checkIfDisplayedWithSwipe({
                scrollContainer,
                searchableElement,
                maxScrolls,
                amount: amount + 1,
                direction,
                percentage,
            });
        } else if (amount > maxScrolls) {
            throw new Error(
                `The element '${searchableElement}' could not be found or is not visible.`
            );
        }
    }

    static async executeGesture({ from, to }: { from: XY; to: XY }) {
        await driver
            .action("pointer")
            .move(from.x, from.y)
            .down()
            .pause(100)
            .move({ duration: 1000, x: to.x, y: to.y })
            .up()
            .perform();

        await driver.pause(1000);
    }
}

export default Gestures;
