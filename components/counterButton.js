import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native'

import { connect } from 'react-redux'
import { incrementAC, decrementAC } from "../reducers/actionMakers"

class CounterButton extends Component {
    render() {
        return (
            <View>
                <Button
                onPress={() => this.props.onClickInc()}
                title="Increase"
                />
                <Button
                onPress={() => this.props.onClickDec()}
                title="Decrease"
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    count: state
});

const mapDispatchToProps = dispatch => ({
    onClickInc: () => {
        dispatch(incrementAC())
    },
    onClickDec: () => {
        dispatch(decrementAC())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterButton)