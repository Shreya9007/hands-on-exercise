================================================================================
DIGITAL NURTURE 5.0 - ANGULAR (v20.0) HANDS-ON EXERCISE BOOK
STUDENT COURSE PORTAL - NOTES & FILE EXPLORATION
================================================================================

Task 1: Angular Project generated files & purpose explanation:

1. angular.json:
   The main configuration file for the Angular CLI workspace. Defines build targets, serve configurations, assets, styles, scripts, test options, and environment setups for the project.

2. tsconfig.json:
   The root TypeScript configuration file. Configures compiler options like target JavaScript version, module resolution, strict type checking, and paths shared across all sub-projects.

3. tsconfig.app.json:
   Application-specific TypeScript configuration extending tsconfig.json. Defines compilation options specifically for compiling the Angular application source files (excludes test spec files).

4. package.json:
   NPM project manifest file. Lists project dependencies, devDependencies, metadata (name, version), and CLI scripts (npm start, npm run build, npm run test, npm run server).

5. src/main.ts:
   The entry point for the Angular application. Initializes the browser platform and bootstraps either the root AppModule or root AppComponent using app.config.ts in standalone mode.

6. src/app/app.config.ts (or app.module.ts):
   Application configuration file (in standalone mode). Configures global providers, application routing (provideRouter), HTTP client (provideHttpClient), NgRx store (provideStore), and other root-level services.

7. src/app/app.component.ts:
   The root component of the Angular application. Contains the top-level layout host template and component logic for rendering the app shell (<app-header> and <router-outlet>).

8. src/index.html:
   The single main HTML page of the SPA. Contains the HTML skeleton, meta tags, external font imports, title tag, and <app-root> selector where Angular dynamically mounts components.


--------------------------------------------------------------------------------
Angular Build & Budget Configurations (angular.json):
--------------------------------------------------------------------------------
In angular.json, under architect > build > configurations > production > budgets:
- maximumWarning: Specifies the maximum file bundle size threshold (e.g. 500kB) before the Angular CLI build process emits a compilation warning.
- maximumError: Specifies the maximum allowable file bundle size threshold (e.g. 1MB) before the Angular CLI build process fails with a hard compilation error.

Purpose of Budgets:
Build budgets prevent unexpected performance degradation by alerting developers when JavaScript and CSS bundles grow too large due to unoptimized imports, heavy dependencies, or missing code splitting.


--------------------------------------------------------------------------------
Angular Compiled Output (dist/ folder):
--------------------------------------------------------------------------------
Running 'ng build' compiles TypeScript and Angular templates into optimized vanilla JavaScript, HTML, and CSS bundles inside the 'dist/student-course-portal/browser/' directory.
- The compiled application code resides in main-[hash].js.
- Polyfills and Angular framework utilities reside in polyfills-[hash].js.
- Styles reside in styles-[hash].css.
