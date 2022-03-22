
const auth_link = "https://www.strava.com/oauth/token"

function getActivites(){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=2204c89ead37f6368c7d69aa8da30ba976f4aaf2`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}
getActivites()

// function reAuthorize(){
//     fetch(auth_link,{
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'

//         },

//         body: JSON.stringify({

//             client_id: '79984',
//             client_secret: 'cd8eacd26bec38d4729324ded24080d25d0a6cf5',
//             refresh_token: '701ef1db968b503b19f959fd1e5e9957e0ba9fc6',
//             grant_type: 'refresh_token'
//         })
//     }).then(res => res.json())
//         .then(res => getActivites(res))  
// }

// reAuthorize()
