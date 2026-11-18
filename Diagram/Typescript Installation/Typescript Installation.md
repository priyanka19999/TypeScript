# TypeScript Installation Guide (Windows)

A beginner-friendly guide to installing TypeScript, setting up a
project, compiling `.ts` files, and running the generated JavaScript.

## 1. What you need

TypeScript runs on the Node.js runtime and is commonly installed using
npm.

-   **Node.js:** Runs JavaScript outside the browser.
-   **npm:** Installs and manages packages. It is included with Node.js.
-   **TypeScript (`tsc`):** The TypeScript compiler. It checks
    TypeScript code and converts it into JavaScript.
-   **VS Code:** An editor you can use to write TypeScript. It is
    optional.

> Important: VS Code provides TypeScript editing support, but you still
> need the TypeScript compiler to compile files.

## 2. Install Node.js and npm

1.  Visit the [official Node.js website](https://nodejs.org/).
2.  Download the recommended **LTS** release for Windows.
3.  Run the `.msi` installer.
4.  Follow the installer steps and keep the standard options selected.
5.  Close and reopen PowerShell or the VS Code terminal.

Check that both tools are installed:

``` powershell
node -v
npm -v
```

Both commands should print version numbers. If either command is not
recognised, reopen the terminal first. If it still fails, check that
Node.js was installed correctly and is available on your system `PATH`.

## 3. Create a TypeScript project

Open PowerShell and move to the folder where you want to create your
project. For example:

``` powershell
cd Desktop
mkdir typescript-practice
cd typescript-practice
```

Initialize the project:

``` powershell
npm init -y
```

This creates a `package.json` file. It stores project information and
the packages the project depends on.

## 4. Install TypeScript in the project

Run this inside the project folder:

``` powershell
npm install --save-dev typescript / npm i -D typescript
```

Short form:

``` powershell
npm install -D typescript
```

This installs TypeScript locally in the current project and records it
under `devDependencies` in `package.json`.

### Why use `-D`?

`-D` is short for `--save-dev`. TypeScript is generally a
development/build tool: it is used to check and compile your source
code. The resulting JavaScript is what you run in a normal Node.js
application.

A local installation also lets each project use its own TypeScript
version, which makes projects more reproducible across computers.

## 5. Verify the TypeScript installation

Run:

``` powershell
npx tsc --version
```

You should see the installed TypeScript version.

**Why `npx`?** It runs the TypeScript compiler installed in this
project, without requiring a global installation.

## 6. Create the TypeScript configuration file

Run:

``` powershell
npx tsc --init
```

This creates:

``` text
tsconfig.json
```

The `tsconfig.json` file contains compiler settings for your TypeScript
project, such as the JavaScript version to output, module system, strict
type checking, and source/output folders.

A newly generated configuration may contain many options. You can keep
its defaults while learning and adjust them as your project grows.

## 7. Create your first TypeScript file

Create a file named:

``` text
hello.ts
```

Add this code:

``` typescript
const message: string = "Hello, TypeScript!";
console.log(message);
```

Here:

-   `const` declares a variable.
-   `: string` tells TypeScript that `message` must contain a string.
-   `console.log()` prints the message.

## 8. Compile TypeScript into JavaScript

Run:

``` powershell
npx tsc hello.ts
```

The compiler creates:

``` text
hello.js
```

TypeScript code is compiled into JavaScript because standard Node.js
execution uses JavaScript.

## 9. Run the generated JavaScript

Run:

``` powershell
node hello.js
```

Expected output:

``` text
Hello, TypeScript!
```

You have now installed TypeScript, compiled a `.ts` file, and run the
resulting `.js` file.

## 10. Useful commands

  -----------------------------------------------------------------------
  Command                             Purpose
  ----------------------------------- -----------------------------------
  `node -v`                           Check Node.js version

  `npm -v`                            Check npm version

  `npm init -y`                       Create a default `package.json`

  `npm install -D typescript`         Install TypeScript in the current
                                      project

  `npx tsc --version`                 Check the project's TypeScript
                                      version

  `npx tsc --init`                    Create `tsconfig.json`

  `npx tsc hello.ts`                  Compile one TypeScript file

  `npx tsc`                           Compile the project using
                                      `tsconfig.json`

  `node hello.js`                     Run the generated JavaScript file
  -----------------------------------------------------------------------

## 11. Global installation vs project installation

There are two common ways to install TypeScript.

### Option A: Install globally

``` powershell
npm install -g typescript
```

-   Installs TypeScript globally on your computer.
-   Makes the `tsc` command available from terminals across projects.
-   Does not add TypeScript to the current project's `package.json`.

Verify it with:

``` powershell
tsc --version
```

### Option B: Install locally in a project (recommended)

``` powershell
npm install -D typescript
```

-   Installs TypeScript in the current project.
-   Adds it to `devDependencies`.
-   Lets the project use a specific TypeScript version.
-   Run its compiler with `npx tsc`.

**Recommendation:** Use the local `-D` installation for normal projects.
You do not need both global and local installations.

## 12. Common error: `EBADENGINE` (Unsupported engine)

You may see an error similar to:

``` text
npm ERR! code EBADENGINE
npm ERR! engine Unsupported engine
npm ERR! notsup Required: {"node":"^22.22.2 || ^24.15.0 || >=26.0.0"}
npm ERR! notsup Actual:   {"npm":"10.4.0","node":"v24.14.1"}
```

This means the npm version you are trying to install declares that it
needs a different Node.js version.

For example, if the requirement says `^24.15.0`, Node.js `24.14.1` does
not satisfy it. Update Node.js to a compatible release, then reopen
PowerShell and check:

``` powershell
node -v
npm -v
```

Use the official [Node.js download page](https://nodejs.org/) to install
a suitable LTS release.

**You do not need to update npm to the newest version just to install
TypeScript.** If your current Node.js and npm work, you can normally
proceed directly with the project setup in sections 3--9.

## 13. Typical project structure

After following this guide, your project may look like this:

``` text
typescript-practice/
│
├── node_modules/
│   └── typescript/
│
├── hello.ts
├── hello.js
├── package.json
├── package-lock.json
└── tsconfig.json
```

-   `node_modules/`: Installed project packages.
-   `hello.ts`: Your TypeScript source file.
-   `hello.js`: JavaScript generated by the compiler.
-   `package.json`: Project details and dependency declarations.
-   `package-lock.json`: Records the resolved dependency versions.
-   `tsconfig.json`: TypeScript compiler configuration.

Do not normally commit `node_modules/` to Git. It can be recreated by
running `npm install`.

## 14. Official resources

-   [TypeScript installation
    documentation](https://www.typescriptlang.org/download/)
-   [TypeScript
    Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
-   [Node.js official website](https://nodejs.org/)
-   [npm documentation](https://docs.npmjs.com/)

------------------------------------------------------------------------

## Quick setup checklist

For a new project, these are the essential commands in order:

``` powershell
# 1. Check Node.js and npm
node -v
npm -v

# 2. Create and enter a project folder
mkdir typescript-practice
cd typescript-practice

# 3. Initialize npm
npm init -y

# 4. Install TypeScript locally
npm install -D typescript

# 5. Create TypeScript configuration
npx tsc --init

# 6. Check TypeScript version
npx tsc --version
```

Then create `hello.ts`, compile it with `npx tsc hello.ts`, and run the
generated file with `node hello.js`.
