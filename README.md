# ngus dev

#### A dev environment for ngus based off ngus-seed.

v0.0.2

###Getting Started

Fork the repo and then clone it.

Use the following command if you wish to write and compile Typescript.

```
npm install -g typescript

```

To quickly create a development environment, install live-server.

```
npm install -g live-server

```

### Start the dev server

In the project directory, use the `live-server` command.

### Dev it out.

Run the following commands in the root directory.

```
live-server
tsc --watch
cd /ngus
gulp dev

```

### Commit changes

To make a bug fix or feature, checkout a new branch in the `ngus` submodule.

```
git checkout -b feature/new
git checkout -b bug/new
git checkout -b hotfix/new

```

### Make a pull request

Make a pull request to merge your changes into the `develop` branch of the `ngus` repo.
