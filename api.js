// export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwOWVjOTg3MS1mN2ZlLTRhZWUtOGNiOC05NWQ1YTA0YTRhMjQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NDQ0OTQ0NiwiZXhwIjoxNjY1MDU0MjQ2fQ.9Whdbe6BoSidNxblb_mf8Sh8uIb5nLurr-xEuIt-41Y";
// // API call to create meeting
// export const createMeeting = async ({ token }) => {
//     const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
//         method: "POST",
//         headers: {
//             authorization: `${token}`,
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ region: "sg001" }),
//     });

//     const { meetingId } = await res.json();
//     console.log("meeting", meetingId);
//     return meetingId;
// };

