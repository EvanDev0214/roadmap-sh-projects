# Task Tracker CLI
---

A solution to the [task-tracker](https://roadmap.sh/projects/task-tracker) project from [roadmap.sh](https://roadmap.sh/).

A command-line tool for tracking and managing your tasks.

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/installation)

## ⚡️ Install

1. **Clone the repository and move into the directory**
    ```bash
    git clone git@github.com:EvanDev0214/roadmap-sh-projects.git
    cd roadmap-sh-projects/backend/task-tracker-cli
    ```

2. **Install dependencies and build the CLI**
    ```bash
    pnpm install
    pnpm run build
    ```

3. **Link the CLI globally so `task-cli` is available in your terminal**
    ```bash
    pnpm link --global
    ```

## 🚀 Usage

```bash
# Adding a new task with description
task-cli add "Buy groceries"

# Updating a task description by id
task-cli update 1 "Buy groceries and cook dinner"

# Deleting a task by id
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list todo
task-cli list in-progress
task-cli list done

# Showing the help message
task-cli --help
task-cli -h

# Showing the CLI version
task-cli --version
task-cli -v
```