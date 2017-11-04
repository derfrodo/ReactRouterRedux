import * as React from 'react';
import { connect } from 'react-redux';

import { INumberState, changePin } from '../reducers/pinReducer';

// import {
//     loadPostsRequest,
//     loadPostsSuccess,
//     loadPostsFailure
// } from './actionCreators'

// tslint:disable-next-line:no-any
const PinInput = (props: { dispatch: any; pinState: INumberState; }) => {
    return (
        <input
            type="text"
            value={props.pinState.pin}
            onChange={(e) => props.dispatch(changePin(e.target.value))}
        />
    );
};

export default connect(state => ({
    pinState: state.pinState,
}))(PinInput);