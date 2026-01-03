// src/routes/department/+page.server.ts
import type { PageServerLoad } from './$types';
import { getDepartments } from '$lib/server/department';

export const load: PageServerLoad = async () => {
    const departments = await getDepartments();
    return { departments };
};
