## Git Hidden Folder

There is a hidden folder called `.git` which tells you that our project is a git repo.

If we want to create a git repo in a new prject we' create the folder and initialize that repo using `git init`

```sh
mkdir /workspaces/tmp/new-project
cd /workspaces/tmp/new-project
git init
touch README.md
code README.md
git status
git add README.md
# make changes to README.md
git commit -m "add readme file"
```

## Cloning

We can clone three ways: HTTPS, SSH, Github CLI

Since we are using GitHub Codespaces we'll create a temporary directory in our workspace

```sh
mkdir /workspace/tmp
cd /workspace/tmp
```

### HTTPS

```sh
git clone https://github.com/A-3llam/Github-Examples.git
cd GitHub-Examples
```

> You'll need to generate a Personal Access Token (PAT)
https://github.com/settings/token

You will use the PAT as your password when you loging

- Give it access to Contents for Commits

## SSH

```ssh
git@github.com:A-3llam/Github-Examples.git
cd GitHub-Examples
```

We will need to create our own SSH rsa key pair

```sh
ssh-keygen -t rsa
```

For WSL users and if you create a non default key you might need to add it

```sh
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/github-alt_id_rsa
```

We can test our connection here
```sh
ssh -T git@github.com
```

### Github CLI

Install the CLI
eg. Linux (Ubuntu)
```

```

## Commits

When we want to commit code we write we can write git commit which will open up the commit edit message in the editor of choice.

```sh
git commit
```

Set the global editor
```sh
git config --global core.editor emacs
```

## Branches

List of branches
```sh
git branch
```

Create a new branch
```sh
git branch branch-name
```

Checkout the branch
```sh
git checkout dev
```

## Remotes

We can add remote but often you will just add remote via upstream when adding a branch

```sh
git remote add ...
git branch -u origin new-feature
```

## Stashing

```sh
git stash list
git stash
git stash save my-name
git stash apply
git stash pop
```

## Merging

```sh
git checkout dev
git merge main
```

## Add

When we want to stage changes that will be included in the commit
We can use the . to add all possible files.

```sh
git add README.md
git add .
```

## Reset

Reset allowss you to move Staged changes to be unstaged.
This is useful when you want to revert all files not to be commited.

```sh
git add .
git reset
```

> git reset will revert a git add .

## Status

Git status shows you what files will or will not be commited.

```
git status
```

## Gitconfig file

The gitconfig file is what stores your global configurations for git such as email, name, editor and more.

Showing the contents of our .gitconfig file
```sh
git config --list
```

When you first install Git on a machine you are suppose to set up your name and email

```sh
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Make a commit and a commit message without opening an editor
```sh
git commit -m "add another exclamation"
```

## Log

git log will show recent git commits to the git tree

## Push

When we want to push a repo to our remote origin

```sh
git push
```