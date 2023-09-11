export let advice = '';
export let adviceId = '';

export async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        advice = data.slip.advice;
        adviceId = data.slip.id;
    } catch (error) {
        console.error('Error al obtener el consejo:', error);
    }
    }
