import { relations } from "drizzle-orm";
import { primaryKey } from "drizzle-orm/mysql-core";
import {
  serial,
  text,
  pgTable,
  pgSchema,
  integer,
  uuid,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  userId: serial("user_id").primaryKey(),
  username: text("username").notNull(),
  role: text("role").notNull(), // Assume 'student' or 'teacher'
});

export const clinicalCases = pgTable("clinical_cases", {
  id: serial("id").primaryKey(),
  patientName: text("patient_name").notNull(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  raceEthnicity: text("race_ethnicity").default("Not Specified").notNull(),
  weight: integer("weight").notNull(),
  height: text("height").notNull(),
  importantPhysicalDetails: text("important_physical_details")
    .default("Not Specified")
    .notNull(),
  chiefComplaint: text("chief_complaint").notNull(),
  patientMedicalHistory: text("patient_medical_history")
    .default("None")
    .notNull(),
  patientHealthBelief: text("patient_health_belief").notNull(),
  patientPrimaryConcern: text("patient_primary_concern").notNull(),
  pastMedicalHistory: text("past_medical_history")
    .default(
      "No previous hospitalizations, no chronic diseases, no past surgeries, no previous accidents or injuries"
    )
    .notNull(),
  obGynHistory: text("ob/gyn_history").default("None").notNull(),
  medications: text("medications").notNull(),
  allergies: text("allergies").default("None").notNull(),
  exposureHistory: text("exposure_history").notNull(),
  immunizations: text("immunizations").notNull(),
  preventiveHealthcare: text("preventive_healthcare").notNull(),
  previousImportantTests: text("previous_important_tests")
    .default("None")
    .notNull(),
  familyHistory: text("family_history").default("Healthy").notNull(),
  socialHistory: text("social_history").notNull(),
  habits: text("habits").notNull(),
  patientBehavior: text("patient_behavior").notNull(),
  responsiveness: text("responsiveness").notNull(),
  workingDiagnosis: text("working_diagnosis").notNull(),
  diagnosisRationale: text("diagnosis_rationale").notNull(),
  differentialDiagnosis: text("differential_diagnosis").notNull(),
  differentialDiagnosisRationales: text(
    "differential_diagnosis_rationales"
  ).notNull(),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  courseName: text("course_name").default("Untitled").notNull(),
  timePeriod: text("time_period").notNull(),
  students: integer("students").default(0).notNull(),
  cases: integer("cases").default(0).notNull(),
});

export const chat = pgTable("chat", {
  messageId: uuid("message_id").primaryKey(), // Unique identifier for each message
  roomId: uuid("room_id")
    .references(() => rooms.id, { onDelete: "cascade" })
    .notNull(), // Foreign key linking to Rooms table
  userId: uuid("user_id")
    .references(() => users.userId, { onDelete: "cascade" })
    .notNull(), // Foreign key linking to Users table
  userInput: text("user_input").notNull(), // The content of the message
  assistantResponse: text("assistant_response"), // The response from the assistant
  assistantName: text("assistant_name"), // The name of the assistant
  timeCreated: timestamp("time_created").notNull(), // Timestamp of when the message was created
});

// Define associations if required
// You might need additional tables for many-to-many relationships
