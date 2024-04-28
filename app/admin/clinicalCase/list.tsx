import { Datagrid, List, TextField, NumberField } from "react-admin";

export const ClinicalCaseList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id" />
                <TextField source="patient_name" />
                <NumberField source="age" />
                <TextField source="gender" />
                <TextField source="race_ethnicity" />
                <NumberField source="weight" />
                <TextField source="height" />
                <TextField source="important_physical_details" />
                <TextField source="chief_complaint" />
                <TextField source="patient_medical_history" />
                <TextField source="patient_health_belief" />
                <TextField source="patient_primary_concern" />
                <TextField source="past_medical_history" />
                <TextField source="ob/gyn_history" />
                <TextField source="medications" />
                <TextField source="allergies" />
                <TextField source="exposure_history" />
                <TextField source="immunizations" />
                <TextField source="preventive_healthcare" />
                <TextField source="previous_important_tests" />
                <TextField source="family_history" />
                <TextField source="social_history" />
                <TextField source="habits" />
                <TextField source="patient_behavior" />
                <TextField source="responsiveness" />
                <TextField source="working_diagnosis" />
                <TextField source="diagnosis_rationale" />
                <TextField source="differential_diagnosis" />
                <TextField source="differential_diagnosis_rationales" />
            </Datagrid>
        </List>
    );
};