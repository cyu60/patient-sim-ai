"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

import { ClinicalCaseList } from "./clinicalCase/list";
import { ClinicalCaseCreate } from "./clinicalCase/create";
import { ClinicalCaseEdit } from "./clinicalCase/edit";

const dataProvider = simpleRestProvider("/api");


const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource 
                name="courses"
                list={CourseList}
                create={CourseCreate}
                edit={CourseEdit}
                recordRepresentation="title"
            />
            <Resource 
                name="clinicalCases"
                list={ClinicalCaseList}
                create={ClinicalCaseCreate}
                edit={ClinicalCaseEdit}
                recordRepresentation="title"
            />
        </Admin>
    );
};

export default App;