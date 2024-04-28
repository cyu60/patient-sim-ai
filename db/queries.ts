import { cache } from "react";
import db from "./drizzle";
import { eq } from "drizzle-orm";
//import { auth } from "@clerk/nextjs";

import { clinicalCases, courses, users } from "@/db/schema";

// export const getUsers = cache(async () => {
//     const { userId } = await auth();

//     if (!userId) {
//         return null;
//     }

//     const data = await db.query.users.findFirst({
//         where: eq(users.userId, userId),
//         with: {
//             activeCourse: true,
//         }
//     });

//     return data;
// })
export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();

    return data;
})

export const getCourseById = cache(async (courseId: number) => {
    const data = await db.query.courses.findFirst({
        where: eq(courses.id, courseId),
        // populate cases / lessons
    });

    return data;
});

export const getClinicalCases = cache(async () => {
    const data = await db.query.clinicalCases.findMany();
    
    return data;
})

export const getClinicalCaseById = cache(async (clinicalCaseId: number) => {
    const data = await db.query.clinicalCases.findFirst({
        where: eq(clinicalCases.id, clinicalCaseId),
    });

    return data;
});

// export const getClinical = cache(async (id?: number) => {
//     const { courseId } = await auth();

//     if (!courseId) {
//         return null;
//     }

//     const clinicalCaseId = id || courseId.activeCourseId;

//     if (!clinicalCaseId) {
//         return null;
//     }
// })

// export const deleteCourseId = cache(async (courseId: number) => {
//     const data = await db.query.users.findFirst({
//         where: eq(courses.id)
//     })
// })