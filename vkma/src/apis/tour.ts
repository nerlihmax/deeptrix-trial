import { api } from '@/apis';
import { Tour } from '@/entities/tour';
import useSWR from 'swr';

export const useAllTours = () =>
    useSWR('/tours', async (url: string) => {
        const { data } = await api.get<Tour[]>(url);
        return data;
    });

export const useTour = (id: string) =>
    useSWR(`/tours/${id}`, async (url: string) => {
        const { data } = await api.get<Tour>(url);
        return data;
    });
