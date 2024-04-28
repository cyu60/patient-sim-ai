import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");
        
        await db.delete(schema.courses);
        await db.delete(schema.clinicalCases);
        await db.delete(schema.users);

        await db.insert(schema.courses).values([
            {
                id: 1,
                courseName: "Occupational Therapy 1",
                timePeriod: "Fall 2025",
                students: 6,
                cases: 7,
            },
            {
                id: 2,
                courseName: "Occupational Therapy 2",
                timePeriod: "Spring 2026",
                students: 2,
                cases: 4,
            },
            {
                id: 3,
                courseName: "Physical Therapy 1",
                timePeriod: "Fall 2024",
                students: 3,
                cases: 2,
            },
        ]);

        await db.insert(schema.clinicalCases).values([
            {
                id: 1,
                patientName: "Jakob Blite",
                age: 30,
                gender: "Male",
                raceEthnicity: "",
                weight: 200,
                height: "6 Feet",
                importantPhysicalDetails: "",
                chiefComplaint: "Headaches",
                patientMedicalHistory: "",
                patientHealthBelief: "Cancer",
                patientPrimaryConcern: "Death",
                pastMedicalHistory: "", 
                obGynHistory: "",
                medications: "None",
                allergies: "",
                exposureHistory: "Exposed to pollution",
                immunizations: "Up to date",
                preventiveHealthcare: "Diet Plan",
                previousImportantTests: "",
                familyHistory: "",
                socialHistory: "Good Socials",
                habits: "Playing Basketball",
                patientBehavior: "Erratic",
                responsiveness: "Fine",
                workingDiagnosis: "Whining",
                diagnosisRationale: "Migraines",
                differentialDiagnosis: "No",
                differentialDiagnosisRationales: "None",
            }
        ]);

        await db.insert(schema.users).values([
            {
                userId: 1,
                username: "haxodrat",
                role: "Teacher",
            },
            {
                userId: 2,
                username: "Chinat",
                role: "Student",
            },
            {
                userId: 3,
                username: "Yoshi",
                role: "Teacher",
            },
            {
                userId: 4,
                username: "Chloe",
                role: "Student",
            },
            {
                userId: 5,
                username: "Kailey",
                role: "Teacher",
            },
        ]);

        console.log("Seeding finished");
    }   catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
};

main();
