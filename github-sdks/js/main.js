const {Octokit, App} = require("octokit");

console.log(`Token: ${process.env.GH_TOKEN}`)

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
})

octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'A-3llam',
    repo: 'Github-Examples',
    ref: 'refs/heads/sdksjs',
    sha: '802ab4ea5d9467b331ce4a1f60416bf7071f9dd5',
    headers: {
        'X-Github-Api-Version': '2022-11-28'
    }
}

)