import React from 'react';
import {connect} from 'react-redux';
import { addTask } from '../../firebase/firebaseInit';

class TaskBox extends React.Component {
    constructor() {
        super();

    }

    addTaskHandler = (e) => {
        e.preventDefault();
        console.log(e.target.querySelector('[name=title]').value);
        let taskDataToDB = {
            dayTimestamp: this.props.dayTimestamp,
            taskTitle: e.target.querySelector('[name=title]').value
        };
        //addTask()
    }

    render() {
        return (
            <div className='taskBox'>
                <p>add task and stuff</p>
                <div>
                    <form onSubmit={this.addTaskHandler}>
                        <input type="text" name="title"/>
                        <input type="submit"/>
                    </form>
                    <p>currentDaySelected node e inutil aici</p>
                    <p>de setat un prop cu data pt fiecare zi si de bagat prop-ul in TaskBox</p>
                    <p>add task to component Day and to firebase</p>
                </div>
            </div>
        );
    }  
    
}

const stateToProps = (state) => ({
    currentDaySelected: state.task.setCurrentDayClicked,
    dayTimestamp: state.task.dayTimestamp
});

export default connect(stateToProps)(TaskBox);