![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Deployment of MERN app on Heroku

## 1. Create an account with Heroku

We will use Heroku to deploy both our Django and Node applications. If you have already set up a Heroku account with a previous project you can skip this step.

- Sign up for an account [Heroku | Sign up](https://signup.heroku.com/)

- Add a payment method to your account, we will use a free database tier in this guide which will not charge you, you need a fair amount of traffic before any costs will be incurred.

- Install the Heroku Command Line Tools with Homebrew `brew tap heroku/brew && brew install heroku`
<br><br>
## Mongo Atlas

​We need to setup an account with Mongo Atlas so that we can have a working database once we deploy to Heroku.</br>

### Make an account

Create MongoDB Atlas account at mongodb.com

### Create a Database & Cluster

1. When you have signed up and you are on your dashboard you should see a big green button labelled "Create Database". Click it.

2. From here, select the "Shared" tier and click "Create"

3. Next you will see the "Create a Shared Cluster" screen. Here we want to select the following options. The provider should be Amazon, and under the europe region, select "Ireland (eu-west-1)"

4. Finally click "Create Cluster". This may take a while so just wait until it's complete.​

### Getting connected

6. When the cluster is complete, you should see a button that says "Connect". Click it.

7. Under "Add a connection IP address", select ‘Allow access from anywhere’, then click Add IP Address without changing anything. Once added, you should see a message that says "An IP address has been added to the IP Access List".

8. Create a user and password. Make sure you make a note of the user and the password. The password should be strong, so you could use the "autogenerate secure password" option. Don't forget to click the "Create Database User" button once you've filled out the username and password fields. Again you should get a message like the following when added: "A MongoDB user has been added to this project"

9. Click 'Choose a connection method' and then 'Connect your application'

10. The final page will present you with a connection string, but will have placeholder values in it, **you should make a copy of this**. It will look something like:

```
mongodb+srv://samharris:<password>@cluster0.tzyg4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
​
To sum up, make sure you’ve made a note of:

- Your username
- Your password
- Your connection string

​<br>
## Preparing for deployment

#### Make sure your main/master branch is checked out in your terminal and up to date. Heroku always used the main/master despite whether you run all the below from development or a feature branch

### Setup

- **All of the below is in relation to your server directory (root directory). cd into it.**

- In your `package.json` (server directory) add the following commands to your scripts. If you already have commands in there, just add these to the end:

  ```json
  "scripts": {
    "start": "node index.js",
    "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
  }
  ```

- If you haven't been using a .env file to store your environment variables, in the root, add the “dotenv” package by running `yarn add dotenv`, this will allow our application to read values from a `.env` file.

- The app now needs to be prepared to serve your backend. Update `index.js` to be like the following.

- Below your existing imports, add:
```js
import 'dotenv/config' // only needs to be added if it doesn't already exist
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

```

- Then below your router in your startServer function, add **IN ORDER**:
```js
// Router
app.use('/api', router)

// ** New lines **
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
```

- If the above aren't in order, then it could break the routing.

<br>

## Deployment to Heroku

- Run all of the commands from the **server(root) directory** of the project.

- Login to Heroku through the Heroku CLI `heroku login`

- Create a new Heroku project, replacing project name with one of your choice `heroku create —-region=eu project-name` _ensure there is a double dash before region_ (if there is an error regarding the project name not being a valid command, omit the --region flag)

- Heroku doesn't have your .env file so we need to create environment variables so it can create one for us. We'll do this now. Heroku takes specific names for things, so your config variables should be named in all caps in the way we do it below, and also wherever you reference the PORT, DB_URI & SECRET in your code, you need to change that to `process.env.PORT`, `process.env.DB_URI` & `process.env.SECRET` (usually /index.js, /seeds/seeds.js, /config/secureRoute.js & /controllers/auth.js). This is a vital step.

- **PORT variable**: `heroku config:set PORT=4000`

- It's important that you set it as PORT not port, as this is what heroku looks for. 

- **DB_URI variable** (you should have this written down from when we created the cluster on MongoAtlas. Remember to pass in your username, password & db name in place of the placeholder - there is a full example how this should look below the next header in the code block): `heroku config:set DB_URI="mongodb+srv://<username>:<password>@cluster0.8y00m.mongodb.net/<database_name>?retryWrites=true&w=majority"`

- **SECRET variable**: `SECRET='your secret goes here'`

- You can check all of your set environment variables by running the command `heroku config` and should get an output that looks something like this:

  ```sh
  === sei-3-test Config Vars
  DB_URI:    mongodb://heroku_825rmnpr:ehe8i1d871jv4tqp49lbvqh1i0@ds235078.mlab.com:35078/heroku_825rmnpr
  PORT:      4000
  SECRET:    jgoirejfoijeriof
  ```

- now git add and git commit as you would usually with your git repos, but don't push yet.

- Once you've added and commited, you can push to heroku: `git push heroku main`

- If the deployment does not produce and error, test with `heroku open`. This should open your browser at your website. Take note of the production URL.

- To run your seeds command on your production site, from your project root run `heroku run npm run seed`

<br>

## Redeployment to Heroku

- If you need to redeploy (in case of an error etc) then it's the same process as deployment. There needs to be a fresh commit though, so you need to make sure you update something in the files, add and commit it, before running `git push heroku main` again. Even if this is just adding/removing a comment to force it.

- If you get a message saying it failed to start, then you can run `heroku logs --tail` to see a log of any errors that have occurred.

### Common Errors

#### ECONNREFUSED 
- this is to do with mongodb not being able to connect but there could be many reasons. Common ones are that you've not set up the config variable correctly. Remember you need to replace the `<username>`, `<password>` & `<database_name>` with the actual username, password and db name you set up. If in doubt, go to Atlas, and on your cluster click connect->connect your application -> and copy the uri string, replacing the password.
- Another cause for this error could be that you haven't correctly replaced the variables in the code. Remember everywhere we use these variables should now be written: `process.env.PORT`, `process.env.DB_URI` & `process.env.SECRET`

#### 'start' or "heroku-postbuild" script not found
- This is when you haven't added the commands to the scripts key in the package.json in the root directory. Remember it has to be inside the scripts key like:
```json
"scripts": {
  "start": "node index.js",
  "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
}
```

#### It's up but it's empty
- This may be because you haven't seeded yet. To run your seeds command on your production site, from your project root run `heroku run npm run seed`

#### Make sure you are making your changes on the main/master branch
- Remember that if you make changes on your development branch and push changes from there, it will still use your main/master branch. Make sure you've checked out your main/master before doing all of the above.

<br>

## Fin

At this point, your app should be live. Both servers will be hosted on the same url, with your express server statically serving your React files, rather than proxying. Test your site and make sure everything is working as expected, if it's not you can check for errors by running the following command from your project root: `heroku logs --tail`