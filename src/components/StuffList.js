import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';
import PropTypes from 'prop-types';
import React from 'react';

//bindActionCreators is for when you want to pass some action creators down to a component
//connect used to allow the component access to the redux application state we have implemented.

class stuffList extends React.Component {
    componentWillMount() {
        this.props.actions.fetchStuff();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>;
    }

    render() {
        if(!this.props.stuff){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="">
                    {
                        this.props.stuff.map((item, index) => {
                            return (
                                this.renderData(item)
                            );
                        })
                    }
                </div>
            )
        }
    }
}

stuffList.propTypes = {
    actions: PropTypes.object,
    stuff: PropTypes.array
};

function mapStateToProps(state) {
    return {
        stuff: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(stuffList);