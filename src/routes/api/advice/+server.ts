import { json, type RequestHandler } from '@sveltejs/kit';
import type { Advice } from '$lib/types/Advice';

export const GET: RequestHandler = async () => {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        return json({ advice: data.slip as Advice });
}