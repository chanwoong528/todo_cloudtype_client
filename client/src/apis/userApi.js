import { BASE_URL } from "./_commonApi"


export async function fetchPostUser(email) {
    try {
        const fetchPostUser = await fetch(`${BASE_URL}/user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        const data = await fetchPostUser.json();
        return data;
    } catch (error) {
        console.warn("fetchPostUser[error]: ", error)
    }

}