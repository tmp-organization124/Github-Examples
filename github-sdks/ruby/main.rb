require 'octokit'
client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])


client.create_ref("A-3llam/Github-Examples",
"heads/sdks-2",
"802ab4ea5d9467b331ce4a1f60416bf7071f9dd5"
)