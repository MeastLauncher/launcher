<p align="center"><img src="./.github/images/logo.png" width="429" height="152" alt="Meast logo"></p>

<h1 align="center">Meast</h1>

Meast is a highly customizable game launcher used as a replacement for launchers like Steam, Epic Games, and many
others.

## Features
- Supports for most used launchers like Steam, Epic Games, and GOG
- The module system to use only launchers that you need
- Theme system allows you to change colors, dispositions and create a completely customized launcher interface
- Local games support : like any others launcher for play games installed on your PC

## Downloads
You can download Meast on the [Releases](https://github.com/MeastLauncher/launcher/releases) page

### Latest Release
![Latest Release](https://img.shields.io/github/v/release/MeastLauncher/launcher.svg?style=flat-square)

### Latest Pre-release
![Latest Pre-release](https://img.shields.io/github/release/MeastLauncher/launcher/all.svg?style=flat-square)

## TODO
You can watch the progress of the upcoming features & bugs resolution on the TODO list of the project [here](https://sharing.clickup.com/9003201019/b/h/6-900302692910-2/86c329e22c200f8)

## Contributing
Meast is an open-source project released under the **GNU General Public License v3.0**. If you want to help me and contribute to the project, just clone the repository and prepare the workspace with the following commands

### Prerequisites
- [NodeJS](https://nodejs.org) (a recent version)
- [pnpm](https://pnpm.io)

```bash
# Clone the repository
git clone https://github.com/MeastLauncher/launcher

# Install the dependencies
pnpm install

# To start the Storybook (optional, if you are developing new UI components & want to add some stories)
cd tools/storybook && pnpm storybook

# To start the desktop app
cd apps/desktop && pnpm dev
```
**Note**: The toolkit for developing module is not released yet, so only contributions to the launcher are allowed for the moment.