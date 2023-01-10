import { BASE_URL } from "./_commonApi"


export async function fetchGetAllTodosByUserId(userId) {
    try {
        const fetchGetAllTodosByUserId = await fetch(`${BASE_URL}/todo/${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },

        })
        const data = await fetchGetAllTodosByUserId.json();
        return data;
    } catch (error) {
        console.warn("fetchPostUser[error]: ", error)
    }

}

export async function fetchPostNewTodo(userId, content) {
    try {
        const fetchPostNewTodo = await fetch(`${BASE_URL}/todo/new`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: userId, content })
        })
        const data = await fetchPostNewTodo.json();
        return data;
    } catch (error) {
        console.warn("fetchPostNewTodo[error]: ", error)
    }

}