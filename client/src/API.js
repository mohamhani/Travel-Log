export const BACKEND_URL = 'http://localhost:5000';

export async function listLogEntries() {
    const response = await fetch(`${BACKEND_URL}/api/logs`);
    return response.json();
}

