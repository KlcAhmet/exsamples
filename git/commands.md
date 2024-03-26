### `git init`: Initializing a New Repository
The `git init` command is the inception of version control for your project. Execute it in the project directory to
transform it into a Git repository.
```
$ git init
```
### `git clone`: Cloning a Repository 
Clone an existing repository from a remote source using `git clone`. This creates a local copy of the repository on 
your machine.
```
$ git clone https://github.com/example/repo.git
```
### `git add`: Staging Changes
Before committing changes, use `git add` to stage files for inclusion in the next commit. You can stage specific files 
or all changes.
```
$ git add filename.txt # Stage a specific file
$ git add . # Stage all changes
```
### `git commit`: Recording Changes
Commit your staged changes with `git commit`. Include a meaningful commit message to describe the purpose of the commit.
```
$ git commit -m "Added new feature"
```
### `git status`: Checking Repository Status
Stay informed about the status of your repository with `git status`. It reveals information about modified files, 
untracked files, and the current branch.
```
$ git status
```
### `git pull`: Updating Your Local Repository
Sync your local repository with changes from the remote repository using `git pull`. This is crucial for 
staying up-to-date in a collaborative environment.
```
$ git pull origin main
```
### `git push`: Pushing Changes to a Remote Repository
Share your local commits with the remote repository using `git push`.
```
$ git push origin main
```
### `git branch`: Managing Branches
Create, list, or delete branches with `git branch`. Branching is fundamental for parallel development.
```
$ git branch new-feature # Create a new branch
$ git branch # List all branches
$ git branch -d old-feature # Delete a branch
```
### `git merge`: Merging Changes
Combine changes from different branches using `git merge`. It integrates changes seamlessly.
```
$ git merge new-feature
```
### `git log`: Viewing Commit History
Explore the commit history of your repository using `git log`. It provides a detailed log of all commits.
```
$ git log
```
### `git restore`
```
# Unstage changes made to a file, same as "git reset some-file.py"
$ git restore --staged some-file.py

# Unstage and discard changes made to a file, same as "git checkout some-file.py"
$ git restore --staged --worktree some-file.py

# Revert a file to some previous commit, same as "git reset commit -- some-file.py"
$ git restore --source HEAD~2 some-file.py
```
### `git log`
The `git log` command is one of the most useful Git commands you should be familiar with. When you need to look at your
commit history, you use the `git log` command. 
The git log command displays the most recent commits as well as the current state of the HEAD.
You can scroll through your log history by pressing the `k` key to move up and the `j` key to move down. 
Press `q` to exit.
```
$ git log
# You can also view your logs as a graph just by adding the --graph option:
$ git log --graph
```
### `git revert`
The **revert** command allows you to undo changes made to a repository’s commit history on the current branch.

To use `git revert`, Simply give the commit you wish to reverse to the command, and it will undo all modifications made
since that commit.
```
$ git revert <commit id>
# You can also use this if you want to revert the latest commit:
$ git revert HEAD
```
### `git clean`
The git clean command requires you to use either the `-f` or `-n` flag when running it. If you don’t use either of these 
flags, the command will fail with an error message similar to “no f’s given”. For example, if you try to run `git clean` 
without any flags, you might see an error message.

The `-n` flag is used to show a dry run of the command, which means it will display the files and directories that would
be removed, but it won’t actually remove them.
```
$ git clean -n
```
`$ git clean -f`: This flag is used to force the removal of untracked files and directories from your Git repository.
`$git clean -f -d`: This combination of flags will forcefully remove untracked directories from your Git repository,
but it will not remove any untracked files.