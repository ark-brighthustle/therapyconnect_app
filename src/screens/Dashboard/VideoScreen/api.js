// import { REACT_APP_VIDEOSDK_TOKEN, REACT_APP_AUTH_URL } from "@env";
const REACT_APP_VIDEOSDK_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwOWVjOTg3MS1mN2ZlLTRhZWUtOGNiOC05NWQ1YTA0YTRhMjQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NDQ0OTQ0NiwiZXhwIjoxNjY1MDU0MjQ2fQ.9Whdbe6BoSidNxblb_mf8Sh8uIb5nLurr-xEuIt-41Y";
const REACT_APP_AUTH_URL = "";
const API_BASE_URL = "https://api.videosdk.live/v1";
const API_AUTH_URL = REACT_APP_AUTH_URL;

export const getToken = async () => {
    if (REACT_APP_VIDEOSDK_TOKEN && API_AUTH_URL) {
        console.error(
            "Error: Provide only ONE PARAMETER - either Token or Auth API"
        );
    } else if (REACT_APP_VIDEOSDK_TOKEN) {
        return REACT_APP_VIDEOSDK_TOKEN;
    } else if (API_AUTH_URL) {
        const res = await fetch(`${API_AUTH_URL}/get-token`, {
            method: "GET",
        });
        const { token } = await res.json();
        return token;
    } else {
        console.error("Error: ", Error("Please add a token or Auth Server URL"));
    }
};

export const createMeeting = async () => {
    const url = `${API_BASE_URL}/meetings`;
    const options = {
        method: "POST",
        headers: { Authorization: REACT_APP_VIDEOSDK_TOKEN, "Content-Type": "application/json" },
    };

    const { meetingId } = await fetch(url, options)
        .then((response) => response.json())
        .catch((error) => console.error("error", error));

    return meetingId;
};

export const validateMeeting = async ({ meetingId, }) => {
    const url = `${API_BASE_URL}/meetings/${meetingId}`;

    const options = {
        method: "POST",
        headers: { Authorization: REACT_APP_VIDEOSDK_TOKEN },
    };

    const result = await fetch(url, options)
        .then((response) => response.json()) //result will have meeting id
        .catch((error) => console.error("error", error));

    return result ? result.meetingId : false;
};