/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhYjVkMjkyNy1kMTVkLTRmYjQtYWY2NC1lN2QyMGUzZDM5YWUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NTEyNTcxNCwiZXhwIjoxNjY1NzMwNTE0fQ.ctwRsWrjkTRnKaCcw1x6Xkl7zkyADK3nsZ4Rhud3uFM';
// API call to create meeting
export const createMeeting = async ({ token }) => {
    const res = await fetch('https://api.videosdk.live/v1/meetings', {
        method: 'POST',
        headers: {
            authorization: `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ region: 'sg001' }),
    });

    const { meetingId } = await res.json();
    console.log("meetingId", meetingId);
    return meetingId;
};
