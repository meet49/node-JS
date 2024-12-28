require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const gitHub = {
    "login": "meet49",
    "id": 86903849,
    "node_id": "MDQ6VXNlcjg2OTAzODQ5",
    "avatar_url": "https://avatars.githubusercontent.com/u/86903849?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/meet49",
    "html_url": "https://github.com/meet49",
    "followers_url": "https://api.github.com/users/meet49/followers",
    "following_url": "https://api.github.com/users/meet49/following{/other_user}",
    "gists_url": "https://api.github.com/users/meet49/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/meet49/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/meet49/subscriptions",
    "organizations_url": "https://api.github.com/users/meet49/orgs",
    "repos_url": "https://api.github.com/users/meet49/repos",
    "events_url": "https://api.github.com/users/meet49/events{/privacy}",
    "received_events_url": "https://api.github.com/users/meet49/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Meet Sojitra",
    "company": null,
    "blog": "meetsojitra.netlify.app",
    "location": "Surat",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 23,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-07-04T05:08:44Z",
    "updated_at": "2024-11-09T11:40:29Z"
  }

app.get('/github', (req, res) => {
  res.json(gitHub)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})