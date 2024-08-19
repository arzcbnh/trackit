import axios from "axios";

async function login(body) {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
}

async function signUp(body) {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    try {
        await axios.post(url, body);
    } catch (err) {
        throw new Error(err.response.data.message);
    }
}

async function getAllHabits(token) {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    try {
        const response = await axios.get(url, config)
        return response.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
}

async function createHabit(body, token) {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    try {
        const response = await axios.post(url, body, config)
        return response.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
}

async function getTodayHabits(token) {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    try {
        const response = await axios.get(url, config)
        return response.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
}

async function checkHabit(id, token) {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    try {
        await axios.post(url, {}, config);
    } catch (err) {
        throw new Error(err.response.data.message);
    }
}

async function uncheckHabit(id, token) {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    try {
        await axios.post(url, {}, config)
    } catch (err) {
        throw new Error(err.response.data.message);
    }
}

export {
    login,
    signUp,
    getAllHabits,
    getTodayHabits,
    createHabit,
    checkHabit,
    uncheckHabit,
};
