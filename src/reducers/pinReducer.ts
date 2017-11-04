// Action Names
export const ActionNames = {
    PinChanged: 'PIN_CHANGED',
};

export const changePin = (nextPin: string): INumberReducerAction => {
    return {
        type: ActionNames.PinChanged,
        pin: nextPin,
    };
};

export interface INumberState {
    pin: string;
}

interface INumberReducerAction extends Pick<INumberState, keyof INumberState> {
    type: string;
}

const DefaultState: INumberState = {
    pin: '',
};

const numberReducer = (state: INumberState = DefaultState, action: INumberReducerAction): INumberState => {
    switch (action.type) {
        case ActionNames.PinChanged:
            return {...state, pin: action.pin };
        default:
            return state;
    }
}

export default numberReducer;