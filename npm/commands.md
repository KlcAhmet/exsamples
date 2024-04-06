### Install package  

    npm install <package_name>

  
*Shortcut:** `npm i <package_name>`

### Install devDependencies  

    npm install --save-dev <package_name>  

*Shortcut:** `npm i -D <package_name>`

### Install dependencies (This is default)  

    npm install --save-prod <package_name>

  
*Shortcut:** `npm i -P <package_name>`

### Install packages globally  

    npm install --global <package_name> 

 
*Shortcut:** `npm i -g <package_name>`

**Install multiple packages in one command —**

    npm i express cheerio axios

**Install multiple packages having the same prefix —**

    npm i **eslint-{plugin-import,plugin-react,loader}** express

# NPM scripts

NPM scripts are the most useful feature. It supports custom-scripts apart from the pre-defined pre/post hooks (generally called lifecycle scripts) like —

-   `preinstall`  — which runs before any package is installed.

`npm run env`  lists all the npm environment variables present in our package. It also contains the package properties prefixed with  **npm_package_.**

    npm run env
The output will be —

    npm_config_save_dev=  
    npm_config_legacy_bundling=  
    npm_config_dry_run=  
    npm_config_viewer=man  
    .  
    .  
    npm_package_license=ISC                # Package properties  
    npm_package_author_name=Ankit Jain  
    npm_package_name=npm-tips-and-tricks   # Name of our package  
    .  
    .

We can also access the above env variables in our code by  **process.env.npm_package_name**  and similarly other variables.

## Configure own variables in package.json

We can pass our own variables as npm environment variables with the  **npm_package_config_**  prefix by defining them in package.json file under  `config`  object. Let’s define the variable  `myvariable`  in our package.json file.

    "config": {  
        "myvariable": "Hello World"  
    },

Now, let’s check it in env variable —

    npm run env | grep npm_package_config_

We can see something like this —

    npm_package_config_myvariable=Hello World

## Define our custom scripts

`npm run`  command shows all the scripts that we have defined in our  `package.json`  file. Let’s add some custom-scripts to our package.json —

    "scripts": {  
        "test": "echo \"Error: no test specified\" && exit 1",  
        "start": "node index.js",  
        "echo-hello": "echo \"Hello\"",  
        "echo-helloworld": "echo \"Helloworld\"",  
        "echo-both": "npm run echo-hello && npm run echo-helloworld",  
        "echo-both-in-parallel": "npm run echo-hello & npm run echo-helloworld",  
        "echo-packagename": "echo $npm_package_name",  
        "echo-myvariable": "echo $npm_package_config_myvariable",  
        "echo-passargument": "npm run echo-packagename -- \"hello\"",  
        "echo-pipedata": "cat ./package.json | jq .name > package-name.txt"  
    },

Now, we can see all commands added above by running this command —

    npm run

The output will be —

    ## npm-tips-and-tricks (name of our package)  
    Lifecycle scripts included in npm-tips-and-tricks:  
      test  
        echo "Error: no test specified" && exit 1  
      start  
        node index.jsavailable via `npm run-script`:  
      echo-hello  
        echo "Hello"  
      echo-helloworld  
        echo "Helloworld"  
      echo-both  
        npm run echo-hello && npm run echo-helloworld  
      echo-both-in-parallel  
        npm run echo-hello & npm run echo-helloworld  
      echo-packagename  
        echo $npm_package_name  
      echo-myvariable  
        echo $npm_package_config_myvariable  
      echo-passargument  
        npm run echo-packagename -- "hello"  
      echo-pipedata  
        cat ./package.json | jq .name > package-name.txt

**Run a simple npm script —**

npm run echo-hello# Output  
> echo "Hello"Hello

**Run multiple scripts in a single npm script —**

We can run multiple scripts using “**&&”**. Both the scripts run in series i.e one after the other.

    npm run echo-both# Output  
    > npm run echo-hello && npm run echo-helloworld> npm-tips-and-tricks@1.0.0 echo-hello   
    > echo "Hello"Hello> npm-tips-and-tricks@1.0.0 echo-helloworld  
    > echo "Helloworld"Helloworld

**We can also run multiple scripts in parallel using “**&”**.**

    npm run echo-both-in-parallel# Output  
    > npm run echo-hello & npm run echo-helloworld> npm-tips-and-tricks@1.0.0 echo-hello  
    > echo "Hello"> npm-tips-and-tricks@1.0.0 echo-helloworld  
    > echo "Helloworld"Hello  
    Helloworld

**Use npm environment variable in npm script —**

    npm run echo-packagename# Output  
    > echo $npm_package_namenpm-tips-and-tricks-------------npm run echo-myvariable  
    # Output  
    > echo $npm_package_config_myvariableHello World

**Pass arguments to another npm script —**

We can use “ **—** ” to pass arguments to npm script. In the below example, we pass “**hello**” as an argument to  `echo-packagename`  script.

    npm run echo-passargument# Output  
    > npm run echo-packagename -- "hello"> npm-tips-and-tricks@1.0.0 echo-packagename  
    > echo $npm_package_name "hello"npm-tips-and-tricks hello

**Use Pipe to pass data from one npm script to another —**

    npm run echo-pipedata# Output  
    > cat ./package.json | jq .name > package-name.txt# Let's cat package-name.txt  
    cat package-name.txt# Output  
    "npm-tips-and-tricks"

# Quickly navigate to package docs

We can quickly navigate to docs of any npm package by simply running this command —

    npm docs <package-name>  
    OR  
    npm home <package-name>

If we want to check for any open issues or file any bug to npm package, we can also navigate to the website by running this command —

    npm bug <package-name>

Similarly,  `npm repo <package-name>`  opens the GitHub repo page in the browser.

## Removes duplicate packages

We can remove the duplicate dependencies by running  `**npm dedupe**`  command. It simplifies the overall structure by removing the duplicate packages and effectively sharing the common dependency across the multiple dependent packages. It results in a flat and deduplicated tree.

    npm dedupe or npm ddp

## Scan your application for vulnerabilities

we can run  `**npm audit**`  command to scan our project for any vulnerabilities in any of the dependency. It beautifully generates an output in a table format (we can also get the output in JSON) and also display, with other packages are dependent on this package if it is a multi-level/multi dependency.

`**npm audit fix**`  automatically installs the patched version (if available) of all the vulnerable packages.

    npm audit fix

## Check outdated packages

We can use  `**npm outdated**`  command to check for all the outdated npm packages. It also shows the latest version which should be installed for any outdated package.

    npm outdated --long or **npm outdated -l**

We can also check for the latest version for any npm package by simply running this command —

### Shows the package information  

    npm view <package-name> or **npm v <package-name>**# Shows the latest version only  
    npm v <package-name> version# Shows the list of all versions  
    npm v <package-name> versions

## List all the installed packages

We can list all the npm packages installed in our project simply by running  `**npm list**`  command. It will create a tree-structure showing the installed package and its dependencies.

    npm list or **npm ls**

We can make use of  `--depth`  flag to limit the search depth

    npm ls --depth=1

##  Remove unused packages
Sometimes we forget to remove packages that are defined in `package.json` but no longer needed.
You can check those items by running `npx depcheck`.
