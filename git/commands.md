### 1) `git init`: Initializing a New Repository
The `git init` command is the inception of version control for your project. Execute it in the project directory to
transform it into a Git repository.
```
$ git init
```
### 2) `git clone`: Cloning a Repository 
Clone an existing repository from a remote source using `git clone`. This creates a local copy of the repository on 
your machine.
```
$ git clone https://github.com/example/repo.git
```
### 3. `git add`: Staging Changes
Before committing changes, use `git add` to stage files for inclusion in the next commit. You can stage specific files 
or all changes.
```
$ git add filename.txt # Stage a specific file
$ git add . # Stage all changes
```
### 4. `git commit`: Recording Changes
Commit your staged changes with `git commit`. Include a meaningful commit message to describe the purpose of the commit.
```
$ git commit -m "Added new feature"
```
### 5. `git status`: Checking Repository Status
Stay informed about the status of your repository with `git status`. It reveals information about modified files, 
untracked files, and the current branch.
```
$ git status
```
### 6. `git pull`: Updating Your Local Repository
Sync your local repository with changes from the remote repository using `git pull`. This is crucial for 
staying up-to-date in a collaborative environment.
```
$ git pull origin main
```
### 7. `git push`: Pushing Changes to a Remote Repository
Share your local commits with the remote repository using `git push`.
```
$ git push origin main
```
### 8. `git branch`: Managing Branches
Create, list, or delete branches with `git branch`. Branching is fundamental for parallel development.
```
$ git branch new-feature # Create a new branch
$ git branch # List all branches
$ git branch -d old-feature # Delete a branch
```
### 9. `git merge`: Merging Changes
Combine changes from different branches using `git merge`. It integrates changes seamlessly.
```
$ git merge new-feature
```
### 10. `git log`: Viewing Commit History
Explore the commit history of your repository using `git log`. It provides a detailed log of all commits.
```
$ git log
```