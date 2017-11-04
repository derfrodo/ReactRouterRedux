import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import PinInput from './PinInput';

// tslint:disable-next-line:no-any
const About = (props: { dispatch: any; }) => {
    return (
        <div>
            <p>About is awesome! </p>
            <a href="javascript:void(0)" onClick={() => props.dispatch(push('/'))}>Back To Home</a>
            <PinInput />
        </div>
    );
};

export default connect(state => ({}))(About);