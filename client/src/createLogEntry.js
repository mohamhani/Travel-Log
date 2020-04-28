import { BACKEND_URL } from "./API";
export async function createLogEntry(entry) {
    const response = await fetch(`${BACKEND_URL}/api/logs`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(entry)
    });
    return response.json();
}
