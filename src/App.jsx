import {useReducer} from "react";
import {Button} from "flowbite-react";

const App = () => {
    const initialState = {
        todo: [],
        taskTitle: "",
    };

    const reducer = (state, action) => {
        console.log("state --->", state);
        console.log("action --->", action);
        switch (action.type) {
            case "SET_INPUT":
                return {...state, taskTitle: action.payload};
            case "OK":
                return {...state, todo: [...state.todo, action.payload]};
            case "CLEAR_INPUT":
                return {...state, taskTitle: ""};
            default:
                state;
        }
        return state;
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const addTask = (e) => {
        // e.prevent.default();
        const newTask = {
            title: state.taskTitle,
            id: Date.now(),
        };
        if (newTask.title.trim().length > 0) {
            dispatch({type: "OK", payload: newTask});
            dispatch({type: "CLEAR_INPUT"});
        }
    };

    return (
        <>
            <div className="container bg-green-300">
                <h1>This is todo app</h1>
                <div className="w-2/3 mx-auto my-4 bg-green-200 p-5 rounded-md min-h-[500px]">
                    <div>
                        <label htmlFor="taskName">
                            <h1 className="text-2xl uppercase">task name</h1>
                            <input
                            value={state.taskTitle}
                                onChange={(e) => dispatch({type: "SET_INPUT", payload: e.target.value})}
                                className="w-full border-none rounded-md mt-1"
                                type="text"
                            />
                        </label>
                        <Button onClick={() => addTask()} type="submit" className="mt-3">
                            Add task
                        </Button>
                    </div>
                    <ul>
                        {state.todo.length && state.todo?.map((el) => 
                        <li className="p-2 hover:shadow-2xl bg-white rounded-md border border-gray-300 my-3" key={el.id}>{el.title}</li>
                        )}
                       
                    </ul>
                </div>
            </div>
        </>
    );
};

export default App;
