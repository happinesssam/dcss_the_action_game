import { DungeonGenerators } from "./dungeon-generators";

let dungeonGenerator: DungeonGenerators | null = null;

function executeFunction<T extends DungeonGenerators>(target: T, func: keyof T, args: any): void {
    (target[func] as unknown as Function)(args);
}

self.addEventListener('message', e => {
    const message = e.data || e;

    switch (message.type) {
        case 'init':
            dungeonGenerator = new DungeonGenerators();
            break;

        case 'exec':
            if (dungeonGenerator) {
                executeFunction(dungeonGenerator, message.func, message.args);
            }
            break;

        default:
            break;
    }
});