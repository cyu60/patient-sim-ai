import { relations } from "drizzle-orm";
import {
  serial,
  text,
  pgTable,
  pgSchema,
  integer,
  uuid,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  userId: uuid("user_id").primaryKey(),
  username: text("username").notNull(),
  role: text("role").notNull(), // Assume 'student' or 'teacher'
});

export const clinicalCases = pgTable("clinical_cases", {
  id: uuid("id").primaryKey(),
  patientName: text("patient_name").notNull(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  raceEthnicity: text("race_ethnicity"),
  identification: text("identification"),
  physicalTraits: text("physical_traits"),
  medicalHistory: text("medical_history"),
  patientBehavior: text("patient_behavior"),
  diagnosis: text("diagnosis"),
});

export const courses = pgTable("courses", {
  id: uuid("id").primaryKey(),
  courseName: text("course_name").default("Untitled").notNull(),
  timePeriod: text("time_period").notNull(),
});

// Define associations if required
// You might need additional tables for many-to-many relationships
