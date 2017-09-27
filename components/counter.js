import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <Text>
                { this.props.count }
            </Text>
        )
    }
}
const mapStateToProps = state => ({
    count: state
});

export default connect(
    mapStateToProps
)(Counter)