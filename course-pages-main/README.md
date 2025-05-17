# **Code Documentation**

## React Course Pages - Vidyaichuk

This will be a simple description of the folder structure and the code itself to provide clarity on how to navigate and modify the React codebase effectively. The documentation is aimed at developers who will be working on maintaining or enhancing the course pages for Vidyaichuk. It explains the purpose of each file and folder in the structure, the functionality of different components, and the process for making changes such as adding new course content, modifying the assessment tab, or customizing the UI.


### Tabbed Navigation

- The `renderTabs` function manages navigation between the "Course Outcomes," "Resources," and "Assessment" sections.
- Tabs dynamically highlight the active section.


#### Course Outcomes Tab

- Displays the course outcomes and approach.
- Automatically converts URLs in text into clickable links.


#### Resources Tab

- Includes references with external links, styled using Tailwind CSS classes.
- Separate handling for "Course References" and "Video References."


#### Assessment Tab

- Interactive MCQs and other question types.
- `handleCheckAnswer` manages user answers and displays explanations for questions.


### State Management

The component uses several useState hooks:

- `activeTab`: Controls which tab is currently displayed.
- `openAccordion`: Manages expandable sections in the Resources tab.
- `answers`: Stores user responses to assessment questions.
- `showExplanation`: Controls visibility of answer explanations once clicked on `Check Answer`  button.


### Main Data Structure

All course content is stored in the `courseData` object with the following structure:

```javascript
courseData = {
  title: string,
  description: string,
  outcomes: string[],
  approach: string[],
  courseLinks: Array<{name: string, url: string, icon: ReactComponent}>,
  videoReferences: Array<{title: string, url: string, platform: string}>,
  questionnaire: {
    mcq: Array<{question: string, options: string[], correctAnswer: string, explanation: string}>,
    shortAnswer: Array<{question: string, maxLimit: number, explanation: string}>,
    longAnswer: Array<{question: string, maxLimit: number, explanation: string}>
  }
}
```

`title` and `description` are self-explanatory strings that will be shown on the header of the course page:

![Title And Description](https://github.com/user-attachments/assets/390fda39-89b9-4c81-a67d-72ac4b48ab16)


`outcomes` and `approach` are list of strings that will be shown on Course Outcomes tab:

![Course Outcomes](https://github.com/user-attachments/assets/67f31f8a-6b66-44ba-8286-5b2faccd2d7b)

`courseLinks` is an array of objects where each object contains **name** of the course reference, the **url** to the same and an **icon**, this will redirect the user to the course reference. Lucide-React icons have been used, they can be searched and previewed before implementing at [lucide.dev/icons](https://lucide.dev/icons/).

```javascript
import { ExternalLink, Youtube, FileText, Code, Book, School, Network } from "lucide-react";
```

`videoReferences` is also an array of object where each object contains the **title** of the video, the **url** to the same and the platform to which it's been posted (all video references so far have been on Youtube).

![Course References](https://github.com/user-attachments/assets/7a8aebaa-903a-4a19-9a30-4c9901f90b9a)

`questionnaire` contains three objects: `mcq`, `shortAnswer` and sometimes `longAnswer`, each containing questions and explanations for the sections in the questionnaire.

Each question contains a `explanation` key whose value will be a string that will be the explanation of the solution for the corresponding question, this will be displayed when the user clicks on `Check Answer` button.

![Check Answer](https://github.com/user-attachments/assets/ec7d89b9-b2e9-4fc4-bd90-e114f729e8cc)

`mcq` is a array of objects where each object (corresponding to a question) contains a **question**, a list of strings **options**, one of these options stored at `correctAnswer` and `explanation`.

`shortAnswer` (as well as `longAnswer`) is a array of objects where each object (corresponding to a question) contains a **question**, a number **maxLimit** for the expected word length of the solution and `explanation`.


### Adding questions or course references

To add a question, just add one object in the list of the corresponding section (`mcq`, `shortAnswer` or `longAnswer` for questions and in `courseReferences` or `videoReferences` for course references) and fill the fields in the said object.


### Removing a section from questionnaire or course reference

You can simply comment out the div for the section from the `renderResources` (in case of omittion of `videoReferences`) or `renderAssessment` (in case of omittion of `longAnswer`).



## Folder Structure


### Root Directory

- `package.json` - Contains project dependencies and scripts
- `package-lock.json` - Locks dependency versions
- `README.md` - Project documentation
- `tailwind.config.js` - Tailwind CSS configuration

For future changes, you won't need to alter the files here (except for customization using tailwind config to create defined themes).


### /public

Standard React public folder containing static assets:

- `favicon.ico` - Website favicon
- `index.html` - Main HTML file
- `logo192.png`, `logo512.png` - React logo assets
- `manifest.json` - Web app manifest
- `robots.txt` - Search engine crawling rules

For future changes, you won't need to alter the files here


### /src

Main source code directory:

- `App.js` - Root React component
- `index.css` - Global styles
- `index.js` - Application entry point
- `reportWebVitals.js` - Performance monitoring


#### App.js

The `COURSE_ID` constant retrieves the course identifier from the environment variable `REACT_APP_COURSE_ID`. This ID determines which course component will be rendered.

The environment variable `REACT_APP_COURSE_ID` controls which course is displayed without modifying the code. For each course's deployment we add a environment variable `REACT_APP_COURSE_ID` and it's value to the corresponding course's key (used course title's initials in most cases).


#### /src/assets

Contains static assets used in the application. Here we can add images in case needed for any questions. Create a folder based on the key of the course here (for example "IP" for the courese "Introduction to Programming"


#### /src/courses

Contains all course-specific components, organized into three main categories:

- Fundamental
- Industry
- Additional



## Adding a new course


### Changes in Codebase

Firstly, decide a key that will act as your environment variable (`REACT_APP_COURSE_ID`) for the netlify deployment of the course.

Now create the course page in `src/courses/<Category>`. Let's say you want to add a course "**New Course**" in the **Fundamental** category and it's key be "**nc**". 

We first create `NewCourse.js` in `src/courses/Fundamental`. 

Now we need add the switch case in `App.js` to make sure this page is rendered when the env var is set to the key **nc.** Make sure this switch case returns `<NewCourse />` imported from `src/courses/Fundamental/NewCourse.js.`

After making these changes, commit and push your code changes to the github repository. 


### Deploying

Add a new site and then 'Import an existing project'. Select Github and then the course-pages repository.

By convention set the **site name** as **vidyaichuk-&lt;course key&gt;**. For this example, vidyaichuk-nc.

Change the **build command** to `CI= npm run build.`

Add an environment variable `REACT_APP_COURSE_ID` and set it's value as the course key (without qoutation marks). For this example, nc.

Click on deploy.
