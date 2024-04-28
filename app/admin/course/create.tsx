import { SimpleForm, Create, TextInput, required } from "react-admin";

export const CourseCreate = () => {
    return (
        <Create>
            <SimpleForm>
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
        </Create>
    );
};