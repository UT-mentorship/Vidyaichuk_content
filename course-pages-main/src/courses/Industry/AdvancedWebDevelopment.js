import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network, Github } from "lucide-react";

const AdvancedWebDevelopment = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [openAccordion, setOpenAccordion] = useState(null);
    const [answers, setAnswers] = useState({});
    const [showExplanation, setShowExplanation] = useState({});

    const courseData = {
        title: "Advanced Web Development",
        description: "Master React.js for dynamic, responsive front-end interfaces, and dive into Node.js and Express.js for server-side programming and RESTful APIs. Build full-stack applications, integrate databases, ensure security with user authentication, and test reliability using Selenium. Learn best practices for API development and microservices architecture.",
        outcomes: [
            "Master React.js to create dynamic and responsive web interfaces for front-end development, including state management, component lifecycle, and reusability.",
            "Understand the principles of server-side programming with Node.js and Express.js, including building RESTful APIs, server-side routing, etc.",
            "Gain the skills to develop full-stack web applications by integrating databases with frontend and backend.",
            "Understand web application security fundamentals, implement user authentication, and apply end-to-end testing with tools like Selenium to ensure application reliability and security.",
            "Learn API development best practices and embrace microservices architecture."
        ],
        approach: [
            "Experiment with public APIs to do interesting things, build your own RESTful APIs, host them over various hosting platforms, and share them with relevant audiences.",
            "Build practical applications integrating frontend, backend, and database along with secure authentication and incorporating things like OAuth.",
            "Built applications can be tested for reliability through Selenium."
        ],
        courseLinks: [
            {
                name: "Coursera: Developing Front-End Apps with React",
                url: "https://www.coursera.org/learn/developing-frontend-apps-with-react?specialization=ibm-full-stack-cloud-developer",
                icon: <Code className="mr-2 h-4 w-4" />,
            },
            {
                name: "Coursera: Developing Back-End Apps with Node.js and Express",
                url: "https://www.coursera.org/learn/developing-backend-apps-with-nodejs-and-express?specialization=ibm-full-stack-cloud-developer",
                icon: <Code className="mr-2 h-4 w-4" />,
            },
            {
                name: "Coursera: Node.js & MongoDB: Developing Back-end Database Applications",
                url: "https://www.coursera.org/learn/intermediate-back-end-development-with-node-js-mongodb?specialization=ibm-full-stack-javascript-developer",
                icon: <Code className="mr-2 h-4 w-4" />,
            },
            {
                name: "Coursera: Web and Mobile Testing with Selenium",
                url: "https://www.coursera.org/learn/web-mobile-testing?specialization=software-testing-automation",
                icon: <Code className="mr-2 h-4 w-4" />,
            },
        ],
        videoReferences: [
            {
                title: "Academind: Building a RESTful API with Node.js",
                url: "https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q",
                platform: "YouTube"
            },
            {
                title: "Piyush Garg: Auth0 authentication in Reactjs using OAuth2",
                url: "https://www.youtube.com/watch?v=oA-K3DfG1QY",
                platform: "YouTube"
            },
        ],

        // videoReferences2: [
        //   {
        //     topic: "Linked Lists",
        //     videos: [
        //       { title: "MIT OpenSourceWare: 6.0001 Introduction to Computer Science and Programming in Python ", url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63WbdFxL8giv4yhgdMGaZNA", platform: "YouTube" },
        //       { title: "FreeCodeCamp: Learn Python by Building Five Games - Full Course", url: "https://www.youtube.com/watch?v=XGf2GcyHPhc", platform: "YouTube" }
        //     ]
        //   },
        //   {
        //     topic: "Stacks",
        //     videos: [
        //       { title: "-", url: "", platform: "YouTube" },
        //       // { title: "Express.js Tutorials", url: "https://www.youtube.com/watch?v=L72fhGm1yRo", platform: "YouTube" }
        //     ]
        //   }
        // ],    

        // questionnaire: {
        //   mcq: [
        //     {
        //       question: "What is the primary function of an operating system?",
        //       options: ["Manage hardware resources", "Compile programs", "Design software architecture", "Provide internet connectivity"],
        //       correctAnswer: "Manage hardware resources",
        //       explanation: "The primary function of an operating system is to manage hardware resources, including CPU, memory, and input/output devices, and provide a platform for running software applications."
        //     },
        //     {
        //       question: "Which of the following is NOT a type of operating system?",
        //       options: ["Real-time Operating System (RTOS)", "Distributed Operating System", "Batch Operating System", "Application Operating System"],
        //       correctAnswer: "Application Operating System",
        //       explanation: "Application Operating System is not a valid category of operating systems. The types include Real-time, Distributed, and Batch Operating Systems."
        //     },
        //     {
        //       question: "Which process scheduling algorithm selects the process with the smallest next CPU burst?",
        //       options: ["Round-Robin", "First-Come, First-Served", "Shortest Job Next", "Priority Scheduling"],
        //       correctAnswer: "Shortest Job Next",
        //       explanation: "Shortest Job Next (SJN) selects the process with the smallest CPU burst next, aiming to minimize average waiting time."
        //     },
        //     {
        //       question: "What does the 'fork()' system call do in Unix-based systems?",
        //       options: ["Terminates a process", "Creates a new process", "Allocates memory", "Loads the kernel"],
        //       correctAnswer: "Creates a new process",
        //       explanation: "The 'fork()' system call creates a new process by duplicating the calling process. The new process is a child of the caller."
        //     },
        //     {
        //       question: "Which of the following is NOT a mechanism used by operating systems to prevent deadlock?",
        //       options: ["Mutual Exclusion", "Resource Allocation Graph", "Banker's Algorithm", "Preemption"],
        //       correctAnswer: "Mutual Exclusion",
        //       explanation: "Mutual Exclusion is a necessary condition for deadlock, but it is not a prevention mechanism. Other methods, such as Resource Allocation Graph and Banker's Algorithm, help prevent deadlocks."
        //     },
        //     {
        //       question: "In a system with virtual memory, which component is responsible for mapping virtual addresses to physical addresses?",
        //       options: ["Page table", "Swap space", "Disk scheduler", "File system"],
        //       correctAnswer: "Page table",
        //       explanation: "The page table is responsible for mapping virtual addresses to physical addresses in a system with virtual memory."
        //     },
        //     {
        //       question: "Which scheduling policy is most suitable for a time-sharing system?",
        //       options: ["First-Come, First-Served", "Round-Robin", "Shortest Job First", "Priority Scheduling"],
        //       correctAnswer: "Round-Robin",
        //       explanation: "Round-Robin is most suitable for time-sharing systems because it allocates a fixed time slice to each process, ensuring fair sharing of CPU resources."
        //     },
        //     {
        //       question: "In the context of file systems, what does the term 'inode' refer to?",
        //       options: ["An index of file contents", "An index of file metadata", "A type of file system block", "A disk partition"],
        //       correctAnswer: "An index of file metadata",
        //       explanation: "An inode is a data structure that stores metadata about a file, such as file size, owner, permissions, and location on disk."
        //     }
        //   ],
        //   shortAnswer: [
        //     {
        //       question: "Explain the difference between a process and a thread.",
        //       maxWords: 150,
        //       explanation: "A process is an independent program in execution, with its own memory space and resources. It is the fundamental unit of execution in an operating system. A thread, on the other hand, is the smallest unit of execution within a process. Multiple threads within a process share the same memory space but can execute independently. Threads are lightweight compared to processes and are used for tasks that need to run concurrently within the same application."
        //     },
        //     {
        //       question: "What is virtual memory and how does it improve system performance?",
        //       maxWords: 150,
        //       explanation: "Virtual memory is a memory management technique that creates an illusion of a larger main memory than physically available. It allows programs to use more memory than the system's physical RAM by swapping data between RAM and disk storage. Virtual memory improves performance by enabling multitasking, efficient use of available memory, and preventing system crashes when memory resources are exhausted."
        //     },
        //     {
        //       question: "Define deadlock and provide an example.",
        //       maxWords: 150,
        //       explanation: "Deadlock is a situation in which two or more processes are blocked forever, each waiting for resources held by the other. It occurs when four conditions are met: mutual exclusion, hold and wait, no preemption, and circular wait. For example, Process A holds Resource 1 and waits for Resource 2, while Process B holds Resource 2 and waits for Resource 1. This creates a circular dependency, resulting in a deadlock."
        //     },
        //     {
        //       question: "What is the role of the kernel in an operating system?",
        //       maxWords: 150,
        //       explanation: "The kernel is the core part of an operating system that manages system resources such as CPU, memory, and input/output devices. It acts as an intermediary between user applications and hardware. The kernel is responsible for process management, memory management, device management, and security. It provides services like multitasking, handling system calls, and enforcing access control to system resources."
        //     },
        //     {
        //       question: "How does a system prevent a process from accessing the memory of another process?",
        //       maxWords: 150,
        //       explanation: "A system prevents a process from accessing the memory of another process using memory isolation and protection mechanisms. Each process is allocated a separate address space, and the operating system uses hardware features like the Memory Management Unit (MMU) to enforce this isolation. Virtual memory ensures that processes cannot access each other’s memory, and any unauthorized access attempt results in a memory access violation, which is handled by the operating system."
        //     }
        //   ],
        //   longAnswer: [
        //     {
        //       question: "Consider a system with the following processes and burst times. Calculate the average waiting time using First-Come, First-Served (FCFS) scheduling: Process A: 5 ms, Process B: 8 ms, Process C: 3 ms, Process D: 2 ms.",
        //       maxWords: 300,
        //       explanation: "To calculate the average waiting time using FCFS scheduling, we first compute the waiting time for each process. The waiting time is the amount of time a process has been in the ready queue before it gets executed. FCFS scheduling executes processes in the order they arrive. For this case, assuming processes arrive in the order A, B, C, D, the waiting times are as follows:\n\n- Process A: 0 ms (as it is the first to execute).\n- Process B: 5 ms (Process A runs for 5 ms before Process B starts).\n- Process C: 13 ms (Process A runs for 5 ms, and Process B runs for 8 ms before Process C starts).\n- Process D: 16 ms (Process A runs for 5 ms, Process B runs for 8 ms, and Process C runs for 3 ms before Process D starts).\n\nNow, calculate the average waiting time:\n\n(0 + 5 + 13 + 16) / 4 = 34 / 4 = 8.5 ms. Therefore, the average waiting time is 8.5 ms."
        //     },
        //     {
        //       question: "In a virtual memory system, assume a page size of 4 KB. How many pages would a 32 MB process require?",
        //       maxWords: 300,
        //       explanation: "To determine how many pages a 32 MB process would require with a 4 KB page size, we perform the following calculation:\n\nFirst, convert the process size from megabytes to kilobytes:\n32 MB = 32 * 1024 KB = 32768 KB.\n\nNow, divide the total process size by the page size to determine the number of pages:\n32768 KB / 4 KB = 8192 pages.\n\nThus, the process would require 8192 pages to store its data in virtual memory."
        //     },
        //     {
        //       question: "If a system uses the Banker's Algorithm for deadlock avoidance, explain how it would allocate resources to avoid a deadlock in the following scenario: Available: {A: 3, B: 3, C: 2}, Maximum Allocation: P1: {A: 4, B: 2, C: 2}, P2: {A: 2, B: 1, C: 1}, P3: {A: 3, B: 1, C: 2}.",
        //       maxWords: 300,
        //       explanation: "In this scenario, the Banker's Algorithm helps avoid deadlock by ensuring that resource allocation always leaves the system in a safe state. The algorithm checks if it is possible to allocate resources to processes without causing a deadlock. Here's how the allocation would proceed:\n\n1. First, calculate the remaining resource needs for each process. The remaining need is the difference between the maximum allocation and the resources already allocated.\n\n- P1 needs {A: 0, B: 0, C: 0} (Maximum allocation equals allocated resources).\n- P2 needs {A: 0, B: 0, C: 0}.\n- P3 needs {A: 0, B: 0, C: 0}.\n\n2. Next, check if the system has enough available resources to meet the needs of any process. In this case, the available resources are {A: 3, B: 3, C: 2}, which are sufficient to meet the needs of all processes.\n\n3. The system will proceed to allocate resources to each process. Since all processes have no remaining resource needs, the allocation proceeds without causing deadlock.\n\nThus, the system remains in a safe state and avoids deadlock."
        //     },
        //     {
        //       question: "Design a simple semaphore-based solution to solve the Producer-Consumer problem.",
        //       maxWords: 300,
        //       explanation: "The Producer-Consumer problem can be solved using semaphores to synchronize the access to a shared buffer. The solution involves two semaphores: one for counting the number of full slots in the buffer (`full`), and another for counting the number of empty slots (`empty`). Additionally, a mutex (`mutex`) is used to ensure mutual exclusion when accessing the shared buffer.\n\n1. Initialize the semaphores:\n\n- `full` is initialized to 0, representing that the buffer is initially empty.\n- `empty` is initialized to the total number of buffer slots (say N), representing that all slots are empty.\n- `mutex` is initialized to 1, ensuring mutual exclusion during access.\n\n2. Producer process:\n\n- The producer waits for an empty slot (`empty.wait()`), ensuring that there is space to produce.\n- It then locks the buffer using `mutex.wait()` to ensure exclusive access to the buffer.\n- After adding an item to the buffer, the producer signals that a slot is now full (`full.signal()`), and releases the lock (`mutex.signal()`).\n\n3. Consumer process:\n\n- The consumer waits for a full slot (`full.wait()`), ensuring that there is an item to consume.\n- It locks the buffer (`mutex.wait()`), consumes the item, and then signals that a slot is now empty (`empty.signal()`), releasing the lock (`mutex.signal()`).\n\nThis ensures that producers and consumers work efficiently without interfering with each other, and the shared buffer is accessed in a synchronized manner."
        //     },
        //     {
        //       question: "Describe the steps involved when a process switches from user mode to kernel mode during a system call.",
        //       maxWords: 300,
        //       explanation: "When a process switches from user mode to kernel mode during a system call, the following steps are involved:\n\n1. The process executes an instruction that triggers a system call, such as reading from a file or allocating memory.\n\n2. The processor switches from user mode to kernel mode. This is done by saving the current state of the process (such as the program counter, registers, and flags) and loading the state of the kernel.\n\n3. The kernel verifies the validity of the system call and checks any necessary permissions. It may also check the parameters passed by the process to ensure they are valid.\n\n4. The kernel performs the required task, such as accessing hardware or managing system resources. The kernel has full access to system resources, unlike user mode, which has limited access.\n\n5. Once the system call is complete, the kernel prepares the process to return to user mode by saving its state and restoring the state of the process that made the system call.\n\n6. Finally, the processor switches back to user mode, and the process resumes execution from the point where it left off before the system call.\n\nThis mode switch ensures that processes are executed securely and efficiently, with the kernel managing system-level tasks."
        //     }
        //   ],
        // },

    };

    const handleCheckAnswer = (type, questionIndex) => {
        const key = `${type}-${questionIndex}`;

        // Show the explanation for the specific question
        setShowExplanation((prev) => ({ ...prev, [key]: true }));

        if (type === "mcq") {
            const correctAnswer = courseData.questionnaire.mcq[questionIndex].correctAnswer;
            const userAnswer = answers[`mcq-${questionIndex}`];

            if (userAnswer !== undefined) {
                const isCorrect = userAnswer === correctAnswer;
                setAnswers((prev) => ({ ...prev, [`mcq-${questionIndex}-correct`]: isCorrect }));
            }
        }
    };

    const formatQuestionText = (text) => {
        if (typeof text !== "string" || (!text.includes("\n") && !text.includes("\t"))) {
            return <React.Fragment>{text}</React.Fragment>;
        }

        const lines = text.split("\n");
        return lines.map((line, i) => (
            <React.Fragment key={i}>
                {line.split("\t").map((part, j) => (
                    <React.Fragment key={j}>
                        {part}
                        {j < line.split("\t").length - 1 && <span>&emsp;</span>} {/* Adds tab spacing */}
                    </React.Fragment>
                ))}
                <br />
            </React.Fragment>
        ));
    };



    const renderTabs = () => {
        {/* Uncomment to include the assessment tab and page*/ }
        const tabs = [
            { id: 'overview', label: 'Course Outcomes' },
            { id: 'resources', label: 'Resources' },
            // { id: 'assessment', label: 'Assessment' }
        ];

        return (
            <div className="flex border-b mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 font-semibold ${activeTab === tab.id
                                ? 'border-b-2 border-[#2596be] text-[#2596be]'
                                : 'text-gray-600 hover:text-gray-800'
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        );
    };

    const renderOverview = () => (
        <div>
            <div className="p-4 bg-white shadow rounded-lg">
                <h2 className="text-2xl font-bold text-[#2596be] mb-4"> Course Outcomes </h2>
                <ul className="list-disc pl-5">
                    {courseData.outcomes.map((outcome, index) => {
                        // Check if the outcome contains a URL (simple check for "http")
                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                        const isLink = outcome.match(urlRegex);

                        return (
                            <li key={index}>
                                {isLink ? (
                                    <a href={isLink[0]} target="_blank" rel="noopener noreferrer">
                                        {outcome}
                                    </a>
                                ) : (
                                    outcome
                                )}
                            </li>
                        );
                    })}
                </ul>

            </div>

            <div className="p-4 mt-5 bg-white shadow rounded-lg">
                <h2 className="text-2xl font-bold text-[#2596be] mb-4"> Approach </h2>
                <ul className="list-disc pl-5">
                    {courseData.approach.map((approaches, index) => {
                        const urlRegex = /(https?:\/\/[^\s]+)/g;

                        const parts = approaches.split(urlRegex);

                        return (
                            <li key={index}>
                                {parts.map((part, idx) => {
                                    if (part.match(urlRegex)) {
                                        return (
                                            <a key={idx} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                                {part}
                                            </a>
                                        );
                                    }
                                    return part;
                                })}
                            </li>
                        );
                    })}
                </ul>

            </div>

        </div>
    );

    const renderResources = () => (
        <div className="space-y-6">
            {/* Course Links */}
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#2596be] mb-4 flex items-center">
                    <ExternalLink className="mr-2 h-6 w-6" /> Course References
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {courseData.courseLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-[#2596be]/10 transition-colors"
                        >
                            {link.icon}
                            <span className="font-medium">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Video References without SubCategories*/}
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#2596be] mb-4 flex items-center">
                    <Youtube className="mr-2 h-6 w-6" /> Video References
                </h2>
                <div className="mt-2 space-y-2 pl-4">
                    {courseData.videoReferences.map((video, vidIndex) => (
                        <a
                            key={vidIndex}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-2 bg-gray-100 rounded-lg hover:bg-[#2596be]/10"
                        >
                            <Youtube className="mr-2 h-5 w-5 text-red-600" />
                            <div>
                                <p className="font-medium">{video.title}</p>
                                <p className="text-sm text-gray-500">{video.platform}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>


            {/* Video References with Subcategories */}
            {/* <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#2596be] mb-4 flex items-center">
          <Youtube className="mr-2 h-6 w-6" /> Video References
        </h2>
        {courseData.videoReferences2.map((section, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-left p-3 bg-gray-100 rounded-lg flex justify-between items-center ${
                openAccordion === index ? 'bg-[#2596be]/10' : ''
              }`}
              onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
            >
              <span className="font-semibold text-[#2596be]">{section.topic}</span>
              <span>{openAccordion === index ? '▲' : '▼'}</span>
            </button>
            {openAccordion === index && (
              <div className="mt-2 space-y-2 pl-4">
                {section.videos.map((video, vidIndex) => (
                  <a 
                    key={vidIndex}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 bg-gray-100 rounded-lg hover:bg-[#2596be]/10"
                  >
                    <Youtube className="mr-2 h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">{video.title}</p>
                      <p className="text-sm text-gray-500">{video.platform}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div> */}


        </div>
    );



    const renderAssessment = () => (
        <div className="space-y-6">
            {/* MCQ Section */}
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#2596be] mb-4 flex items-center">
                    <FileText className="mr-2 h-6 w-6" /> Multiple Choice Questions
                </h2>
                {courseData.questionnaire.mcq.map((mcq, index) => (
                    <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                        <p className="font-medium mb-2">
                            {formatQuestionText(mcq.question)}
                        </p>
                        <div className="space-y-2">
                            {mcq.options.map((option, optIndex) => {
                                const isSelected = answers[`mcq-${index}`] === option;
                                const isCorrect =
                                    showExplanation[`mcq-${index}`] &&
                                    option === mcq.correctAnswer &&
                                    answers[`mcq-${index}-correct`] !== false;
                                const isWrong =
                                    showExplanation[`mcq-${index}`] &&
                                    option !== mcq.correctAnswer &&
                                    isSelected;

                                return (
                                    <div
                                        key={optIndex}
                                        className={`flex items-center p-2 rounded-lg ${isCorrect
                                                ? "bg-green-100"
                                                : isWrong
                                                    ? "bg-red-100"
                                                    : isSelected
                                                        ? "bg-gray-200"
                                                        : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name={`mcq-${index}`}
                                            id={`mcq-${index}-${optIndex}`}
                                            className="mr-2"
                                            onChange={() =>
                                                setAnswers((prev) => ({ ...prev, [`mcq-${index}`]: option }))
                                            }
                                            disabled={showExplanation[`mcq-${index}`]}
                                        />
                                        <label htmlFor={`mcq-${index}-${optIndex}`}>{option}</label>
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            onClick={() => handleCheckAnswer("mcq", index)}
                            className="mt-4 px-4 py-2 bg-[#2596be] text-white rounded-lg"
                        >
                            Check Answer
                        </button>
                        {showExplanation[`mcq-${index}`] && (
                            <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                                <p className="text-sm font-medium text-gray-800">Explanation:</p>
                                <p className="text-sm">{formatQuestionText(mcq.explanation)}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Short Answer/Coding Section */}
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#2596be] mb-4 flex items-center">
                    <FileText className="mr-2 h-6 w-6" /> Short Answer Questions
                </h2>
                {courseData.questionnaire.shortAnswer.map((question, index) => (
                    <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                        <p className="font-medium mb-2">
                            {formatQuestionText(question.question)}
                        </p>
                        <textarea
                            className="w-full p-2 border rounded-lg focus:ring-[#2596be] focus:border-[#2596be]"
                            rows={4}
                            placeholder={
                                question.type === "coding"
                                    ? "Write your code here..."
                                    : `Answer in max ${question.maxWords} words`
                            }
                        />
                        <button
                            onClick={() => handleCheckAnswer("shortAnswer", index)}
                            className="mt-4 px-4 py-2 bg-[#2596be] text-white rounded-lg"
                        >
                            Check Answer
                        </button>
                        {showExplanation[`shortAnswer-${index}`] && (
                            <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                                <p className="text-sm font-medium text-gray-800">Explanation:</p>
                                <p className="text-sm">
                                    {formatQuestionText(question.explanation)}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Long Answer Section */}
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#2596be] mb-4 flex items-center">
                    <Code className="mr-2 h-6 w-6" />  Logical and Analytical Questions
                </h2>
                {courseData.questionnaire.longAnswer.map((question, index) => (
                    <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                        <p className="font-medium mb-2">
                            {formatQuestionText(question.question)}
                        </p>
                        <textarea
                            className="w-full p-2 border rounded-lg focus:ring-[#2596be] focus:border-[#2596be]"
                            rows={6}
                            placeholder={
                                question.type === "design"
                                    ? "Describe your design approach..."
                                    : `Answer in max ${question.maxWords} words`
                            }
                        />
                        <button
                            onClick={() => handleCheckAnswer("longAnswer", index)}
                            className="mt-4 px-4 py-2 bg-[#2596be] text-white rounded-lg"
                        >
                            Check Answer
                        </button>
                        {showExplanation[`longAnswer-${index}`] && (
                            <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                                <p className="text-sm font-medium text-gray-800">Explanation:</p>
                                <p className="text-sm">
                                    {formatQuestionText(question.explanation)}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </div>
    );




    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <div className="container mx-auto px-4 py-8">
                {/* Course Title and Header */}
                <div className="bg-[#2596be] text-white p-6 rounded-lg shadow-md mb-8">
                    <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
                    <p className="text-lg">{courseData.description}</p>
                </div>

                {/* Tabs Navigation */}
                {renderTabs()}

                {/* Tab Content */}
                <div>
                    {activeTab === 'overview' && renderOverview()}
                    {activeTab === 'resources' && renderResources()}
                    {activeTab === 'assessment' && renderAssessment()}
                </div>
            </div>
        </div>
    );
};

export default AdvancedWebDevelopment;
