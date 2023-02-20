import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Session1Interface {
	task1: {
		coordinates: [number, number][];
	};
	task2: {
		values: string[];
	};
	task3: {
		phases: string[];
	};
	task4: {
		value: string;
	};
	task5: {
		states: ("+" | "-" | "")[];
	};
	task6: {
		value: string;
	};
	task7: {
		rows: number;
		advantages: string[];
        disadvantages: string[];
	};
    task8: {
        states: [number, string][];
    };
    task9: {
        funcs: [number, string][];
    };
    task11: {
        expiry: number | null;
        value: string;
    };
    task12: {
		rows: number;
		advantages: string[];
        disadvantages: string[];
	};
    task13: {
        value: string
    };
    task14: {
        value: string
    }
}

const initialState: Session1Interface = {
	task1: {
		coordinates: [],
	},
	task2: {
		values: [],
	},
	task3: {
		phases: ["", "", ""],
	},
	task4: {
		value: "",
	},
	task5: {
		states: [],
	},
	task6: {
		value: "",
	},
    task7: {
        rows: 3,
        advantages: ["", "", ""],
        disadvantages: ["", "", ""],
    },
    task8: {
        states: []
    },
    task9: {
        funcs: []
    },
    task11: {
        expiry: null,
        value: "",
    },
    task12: {
        rows: 3,
        advantages: ["", "", ""],
        disadvantages: ["", "", ""],
    },
    task13: {
        value: "",
    },
    task14: {
        value: "",
    }
};

export const session1Slice = createSlice({
	name: "session1",
	initialState,
	reducers: {
		startTask11: (state) => {
			const date = new Date(new Date().getTime() + 10 * 60000); //10 minutes
			state.task11.expiry = date.getTime()
		},
		updateCoordinateTask1: (state, action) => {
			return {
				...state,
				task1: {
					...state.task1,
					coordinates: action.payload,
				},
			};
		},
		updateValueTask2: (state, action: PayloadAction<string[]>) => {
			return {
				...state,
				task2: {
					...state.task2,
					values: action.payload,
				},
			};
		},
		updatePhasesTask3: (state, action: PayloadAction<string[]>) => {
			return {
				...state,
				task3: {
					...state.task3,
					phases: action.payload,
				},
			};
		},
		updateValueTask4: (state, action: PayloadAction<string>) => {
			return {
				...state,
				task4: {
					...state.task4,
					value: action.payload,
				},
			};
		},
		updateStatesTask5: (
			state,
			action: PayloadAction<("+" | "-" | "")[]>
		) => {
			return {
				...state,
				task5: {
					...state.task5,
					state: action.payload,
				},
			};
		},
		updateValueTask6: (state, action: PayloadAction<string>) => {
			return {
				...state,
				task6: {
					...state.task6,
					value: action.payload,
				},
			};
		},
        task7AddRow: (state) => {
            if (state.task7.rows >= 10) return state
            state.task7.rows = state.task7.rows + 1;
            state.task7.advantages = [...state.task7.advantages, ""]
            state.task7.disadvantages = [...state.task7.disadvantages, ""]
        },
        task7DeleteRow: (state, action: PayloadAction<number>) => {
            if (state.task7.rows <= 3) return state
            state.task7.rows = state.task7.rows - 1
            state.task7.advantages.splice(action.payload, 1)
            state.task7.disadvantages.splice(action.payload, 1)
        },
        task7ChangeAdvantages: (state, action: PayloadAction<{ index: number, value: string }>) => {
            state.task7.advantages[action.payload.index] = action.payload.value
        },
        task7ChangeDisadvantages: (state, action: PayloadAction<{ index: number, value: string }>) => {
            state.task7.disadvantages[action.payload.index] = action.payload.value
        },
        task8UpdateStates: (state, action: PayloadAction<Map<number,string>>) => {
            const funcs = new Map(state.task9.funcs)
            const arr = Array.from(action.payload)
            state.task8.states = arr
            state.task9.funcs = arr.map(([z]) => [z, funcs.get(z) ?? ""])
        },
        task9UpdateFunction: (state, action: PayloadAction<{z: number, value: string }>) => {
            const funcs = new Map(state.task9.funcs)
            funcs.set(action.payload.z, action.payload.value)
            state.task9.funcs = Array.from(funcs)
        },
        task11UpdateValue: (state, action: PayloadAction<string>) => {
            state.task11.value = action.payload
        },
        task12AddRow: (state) => {
            if (state.task12.rows >= 10) return state
            state.task12.rows = state.task12.rows + 1;
            state.task12.advantages = [...state.task12.advantages, ""]
            state.task12.disadvantages = [...state.task12.disadvantages, ""]
        },
        task12DeleteRow: (state, action: PayloadAction<number>) => {
            if (state.task12.rows <= 3) return state
            state.task12.rows = state.task12.rows - 1
            state.task12.advantages.splice(action.payload, 1)
            state.task12.disadvantages.splice(action.payload, 1)
        },
        task12ChangeAdvantages: (state, action: PayloadAction<{ index: number, value: string }>) => {
            state.task12.advantages[action.payload.index] = action.payload.value
        },
        task12ChangeDisadvantages: (state, action: PayloadAction<{ index: number, value: string }>) => {
            state.task12.disadvantages[action.payload.index] = action.payload.value
        },
        task13Update: (state, action: PayloadAction<string>) => {
            state.task13.value = action.payload
        },
        task14Update: (state, action: PayloadAction<string>) => {
            state.task14.value = action.payload
        }
	},
});

export const {
	startTask11,
	updateCoordinateTask1,
	updateValueTask2,
	updatePhasesTask3,
	updateValueTask4,
	updateStatesTask5,
	updateValueTask6,
    task7AddRow,
    task7DeleteRow,
    task7ChangeAdvantages,
    task7ChangeDisadvantages,
    task8UpdateStates,
    task9UpdateFunction,
    task11UpdateValue,
    task12AddRow,
    task12DeleteRow,
    task12ChangeAdvantages,
    task12ChangeDisadvantages,
    task13Update,
    task14Update,
} = session1Slice.actions;

export default session1Slice.reducer;
