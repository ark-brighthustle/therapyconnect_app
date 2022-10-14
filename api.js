/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0YjJhODk3My05MzBiLTQxMTQtOTE4NC0yZWQ5NzM5YzYwMmIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NTczMzQyNywiZXhwIjoxNjY2MzM4MjI3fQ.EfQGtrImrZqaj1B6G1ipq2awccH5Xmdh_tq5ZWEufJo';
// API call to create meeting
export const createMeeting = async ({ token }) => {
    const res = await fetch('https://api.videosdk.live/v1/meetings', {
        method: 'POST',
        headers: {
            authorization: `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ region: "sg001" }),
    });

    const { meetingId } = await res.json();
    // console.log("error", res);
    console.log("meetingId", meetingId);
    return meetingId;
};
