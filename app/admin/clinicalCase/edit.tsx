import { SimpleForm, Edit, TextInput, NumberInput, required } from "react-admin";

export const ClinicalCaseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput 
                    source="id" 
                    validate={[required()]} 
                    label="Id"
                />
                <TextInput 
                    source="patient_name" 
                    validate={[required()]} 
                    label="Patient Name"
                />
                <NumberInput 
                    source="age" 
                    validate={[required()]} 
                    label="Age"
                />
                <TextInput 
                    source="gender" 
                    validate={[required()]} 
                    label="Gender"
                />
                <TextInput 
                    source="race_ethnicity" 
                    validate={[required()]} 
                    label="Race/Ethnicity"
                />
                <NumberInput 
                    source="weight" 
                    validate={[required()]} 
                    label="Weight"
                />
                <TextInput 
                    source="height" 
                    validate={[required()]} 
                    label="Height"
                />
                <TextInput 
                    source="important_physical_details" 
                    validate={[required()]} 
                    label="Important Physical Details"
                />
                <TextInput 
                    source="chief_complaint" 
                    validate={[required()]} 
                    label="Chief Complaint"
                />
                <TextInput 
                    source="patient_medical_history" 
                    validate={[required()]} 
                    label="Patient Medical History"
                />
                <TextInput 
                    source="patient_health_belief" 
                    validate={[required()]} 
                    label="Patient Health Belief"
                />
                <TextInput 
                    source="patient_primary_concern" 
                    validate={[required()]} 
                    label="Patient Primary Concern"
                />
                <TextInput 
                    source="past_medical_history" 
                    validate={[required()]} 
                    label="Past Medical History"
                />
                <TextInput 
                    source="ob/gyn_history" 
                    validate={[required()]} 
                    label="Ob/Gyn History"
                />
                <TextInput 
                    source="medications" 
                    validate={[required()]} 
                    label="Medications"
                />
                <TextInput 
                    source="allergies" 
                    validate={[required()]} 
                    label="Allergies"
                />
                <TextInput 
                    source="exposure_history" 
                    validate={[required()]} 
                    label="Exposure History"
                />
                <TextInput 
                    source="immunizations" 
                    validate={[required()]} 
                    label="Immunizations"
                />
                <TextInput 
                    source="preventive_healthcare" 
                    validate={[required()]} 
                    label="Preventive Healthcare"
                />
                <TextInput 
                    source="previous_important_tests" 
                    validate={[required()]} 
                    label="Previous Important Tests"
                />
                <TextInput 
                    source="family_history" 
                    validate={[required()]} 
                    label="Family History"
                />
                <TextInput 
                    source="social_history" 
                    validate={[required()]} 
                    label="Social History"
                />
                <TextInput 
                    source="habits" 
                    validate={[required()]} 
                    label="Habits"
                />
                <TextInput 
                    source="patient_behavior" 
                    validate={[required()]} 
                    label="Patient Behavior"
                />
                <TextInput 
                    source="responsiveness" 
                    validate={[required()]} 
                    label="Responsiveness"
                />
                <TextInput 
                    source="working_diagnosis" 
                    validate={[required()]} 
                    label="Working Diagnosis"
                />
                <TextInput 
                    source="diagnosis_rationale" 
                    validate={[required()]} 
                    label="Diagnosis Rationale"
                />
                <TextInput 
                    source="differential_diagnosis" 
                    validate={[required()]} 
                    label="Differential Diagnosis"
                />
                <TextInput 
                    source="differential_diagnosis_rationales" 
                    validate={[required()]} 
                    label="Differential Diagnosis Rationales"
                />
            </SimpleForm>
        </Edit>
    );
};