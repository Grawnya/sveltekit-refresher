import { prisma } from '$lib/server/prisma';

export interface IDepartment {
    id: number;
    name: string;
}

export interface ValidationError {
    error: string;
}

export const Department = () => {
    const api = {
        getAll: async (): Promise<IDepartment[]> => {
            return await prisma.department.findMany({
                orderBy: { name: 'asc' }
            });
        },
        getSingle: async (id: number): Promise<IDepartment | null> => {
            return await prisma.department.findUnique({
                where: { id }
            });
        },
        insert: async (record: { name: string }): Promise<IDepartment | ValidationError> => {
            if (!record.name.trim()) return { error: 'Please provide a department name' };
            return await prisma.department.create({ data: { name: record.name } });
        },
        // 'update' function is async because Prisma operations return Promises as accesses a DB (Promise is a JS object that 
        // represents the eventual result of an asynch operation, like a “placeholder” for a value that you will have later
        update: async (record: { id: number; name: string }): Promise<IDepartment | ValidationError> => {
            if (!record.name.trim()) return { error: 'Please provide a department name' };
            return await prisma.department.update({
                where: { id: record.id },
                data: { name: record.name }
            });
        },
        delete: async (id: number): Promise<void> => {
            await prisma.department.delete({ where: { id } });
        }
    };
    return api;
};
