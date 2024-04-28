import { Datagrid, List, TextField, NumberField } from "react-admin";

export const CourseList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id" />
                <TextField source="name" />
                <TextField source="timePeriod" />
                <NumberField source="students" />
                <NumberField source="cases" />
            </Datagrid>
        </List>
    );
};