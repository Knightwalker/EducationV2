import { Card } from '@twilio-paste/card';
import { Flex } from '@twilio-paste/flex';
import { Label } from '@twilio-paste/label';
import { useDispatch, useSelector } from 'react-redux';
import { SelectHuman } from './SelectHuman';
import { tasksSlice, toggleTask } from '../store/tasksSlice';
import { current } from '@reduxjs/toolkit';

export const Task = ({ taskId }) => {
    const dispatch = useDispatch();

    const task = useSelector((state) => {
        const currTask = state.tasks.find((task) => task.id === taskId);
        return currTask;
    });
    return (
        <Card>
            <Flex marginBottom="space40">
                <input
                    id={`task-${taskId}`}
                    type="checkbox"
                    checked={task.completed}
                    onChange={(event) => {
                        dispatch(toggleTask(taskId, event.target.checked))
                        //  dispatch(tasksSlice.actions.toggle({
                        //      taskId: taskId,
                        //      completed: event.target.checked
                        //  }))
                    }}
                />
                <Label htmlFor={`task-${taskId}`}>{task.title}</Label>
            </Flex>
            <Flex>
                <SelectHuman task={task} />
            </Flex>
        </Card>
    );
};
