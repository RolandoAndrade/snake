import { InputKey } from "./input-key";

document.addEventListener("keydown", (e) => {
    InputManager.emit(e.key);
});

export class InputManager {
    static keyMap: { [key: string]: string[] } = {
        [InputKey.UP]: ["ArrowUp", "w", "W"],
        [InputKey.DOWN]: ["ArrowDown", "s", "S"],
        [InputKey.LEFT]: ["ArrowLeft", "a", "A"],
        [InputKey.RIGHT]: ["ArrowRight", "d", "D"],
        [InputKey.ENTER]: [" ", "Enter"],
    };

    static listeners: { [key: string]: Function[] } = {
        [InputKey.UP]: [],
        [InputKey.DOWN]: [],
        [InputKey.LEFT]: [],
        [InputKey.RIGHT]: [],
        [InputKey.ENTER]: [],
    };

    static keyPressed(key: InputKey, callback: Function) {
        this.listeners[key].push(callback);
    }

    static emit(key: string) {
        for (const i in InputManager.keyMap) {
            if (InputManager.keyMap[i].some((k) => k == key)) {
                for (const callback of InputManager.listeners[i]) {
                    callback();
                }
            }
        }
    }
}
