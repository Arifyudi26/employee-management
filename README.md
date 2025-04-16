```markdown
# Employee Management App

This is an Angular-based Employee Management application where you can view and manage employee details. The app includes features like employee list, employee detail view, and more.

**Login with username `admin` and password `12345` to access the app.**

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (Recommended version: 16.x.x or higher)
- **Angular CLI** (Global package)

To check if you have Node.js and Angular CLI installed, you can run the following commands:

node -v
ng version
```

If you don't have these installed, follow the instructions below:

1. **Install Node.js:**
   Download and install Node.js from [here](https://nodejs.org/).

2. **Install Angular CLI:**
   Run the following command to install Angular CLI globally:

   ```bash
   npm install -g @angular/cli
   ```

## Getting Started

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Arifyudi26/employee-management
cd <repository-folder>
```

### 2. Install dependencies

After cloning the repository, run the following command to install all the required dependencies:

```bash
npm install
```

This will install all the packages listed in `package.json`.

### 3. Running the Application

Once the dependencies are installed, you can run the Angular application by using the following command:

```bash
ng serve
```

This will start the development server, and the application will be available at [http://localhost:4200](http://localhost:4200).

You should see a message in your terminal that looks like this:

```bash
ng serve
   
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200 **
```

### 4. Building the Application

To build the application for production, run the following command:

```bash
ng build --prod
```

This will create a `dist/` folder with all the optimized production files.

## Directory Structure

- `src/`
- `app/` - Contains the main application code.
- `pages/` - Contains page components, such as views for different routes (e.g., employee list, employee details).
- `layouts/` - Contains layout components, such as headers, and footers, that are used on different pages.
- `components/` - Contains reusable UI components such as navbars
- `index.html` - The main entry HTML file.
- `styles.scss` - Global styles for the application.

## Troubleshooting

- **Issue:** `ng serve` not starting correctly.
  - **Solution:** Try deleting the `node_modules/` folder and running `npm install` again.
  
- **Issue:** API calls not working in the production environment.
  - **Solution:** Ensure that the API base URL in `environment.prod.ts` is correctly configured.

```
### Explanation
- **Prerequisites**: Lists what is needed to run the application, such as Node.js and Angular CLI.
- **Installation Steps**: The process of installing and running the application locally.
- **Running the Application**: How to serve the application and build it for production.
- **Directory Structure**: A brief explanation of the project's structure.
- **Troubleshooting**: Common issues that may arise and their solutions.

With this README, other users can easily follow the steps to run and develop your application.
