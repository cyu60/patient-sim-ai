import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_2fk8MDScOdf3FUluT92t0f1fIjd",
];
export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};