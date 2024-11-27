require('dotenv').config()
const express = require('express') // module
// import express from "express"
const app = express()
const port = 4000

const githubData = {
    "login": "Pratham3105",
    "id": 128934981,
    "node_id": "U_kgDOB69kRQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/128934981?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Pratham3105",
    "html_url": "https://github.com/Pratham3105",
    "followers_url": "https://api.github.com/users/Pratham3105/followers",
    "following_url": "https://api.github.com/users/Pratham3105/following{/other_user}",
    "gists_url": "https://api.github.com/users/Pratham3105/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Pratham3105/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Pratham3105/subscriptions",
    "organizations_url": "https://api.github.com/users/Pratham3105/orgs",
    "repos_url": "https://api.github.com/users/Pratham3105/repos",
    "events_url": "https://api.github.com/users/Pratham3105/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Pratham3105/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Pratham Tamrakar",
    "company": null,
    "blog": "",
    "location": "Jabapur,India",
    "email": null,
    "hireable": null,
    "bio": "CSE'26 | Java | C++ | C | Learning Web Dev | Coding Enthusiast | Learner",
    "twitter_username": "pratham_tam",
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-03-25T20:43:58Z",
    "updated_at": "2024-11-09T10:09:29Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/global', (req, res) => {
    res.send('My Global')
})

app.get('/login', (req, res) => {
    res.send('<h1>Pratham Tamrakar</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> This is Youtube </h2>')
})

app.get('/github',(req,res) => {
    res.json(githubData)
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})


