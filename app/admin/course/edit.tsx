import { SimpleForm, Edit, NumberInput, TextInput, required } from "react-admin";

export const CourseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput
                    source="id"
                    validate={[required()]}
                    label="Id" 
                />
                <TextInput
                    source="name"
                    validate={[required()]}
                    label="Name" 
                />
                <TextInput 
                    source="timePeriod" 
                    validate={[required()]} 
                    label="Time Period"
                />
                <TextInput 
                    source="students" 
                    validate={[required()]} 
                    label="Total Students"
                />
                <TextInput 
                    source="cases" 
                    validate={[required()]} 
                    label="Total Cases"
                />
            </SimpleForm>
        </Edit>
    );
};