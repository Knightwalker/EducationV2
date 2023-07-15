import tasksSlice, { addTask, removeTask, createTask } from "./tasks-slice";

describe("tasksSlice", () => {
    const initialState = {
        entities: [
            createTask({ title: "Write test" }),
            createTask({ title: "Make them pass" }),
        ]
    };
    it(`should add a task when the ${addTask}`, () => {
        const task = createTask({ title: "Profit" });
        const action = addTask(task);
        const store = tasksSlice.reducer(initialState, action);

        expect(store.entities).toEqual([task, ...initialState.entities]);
    });
});