import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network, Github } from "lucide-react";

const AdvancedProgramming = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Advanced Programming",
    description: "Advance your programming skills in this course by mastering object-oriented concepts like inheritance, polymorphism, and encapsulation. Learn to apply design patterns, utilize IDE features like debugging and refactoring, and align with industry standards in Java development. Build real-world applications, perform automated testing with JUnit, and refine your expertise through hands-on projects.",
    outcomes: [
        "Get proficient in object-oriented programming concepts like inheritance, polymorphism, abstraction, and encapsulation.",
        "Understand common design patterns and their application in software development.",
        "Get familiar with features of IDE for development like debugging and refactoring.",
        "Have the ability to write and execute unit tests using the JUnit framework for automated testing.",
        "Get familiar with Java language aligning with industry standards."
    ],
    approach: [
        "Understand OOP concepts through real-life applications and requirements of users.",
        "Check standard industry practices for application development.",
        "Build real-world applications as a project using all the knowledge of OOP while leveraging IDE tools for debugging and other features. It can be a game or software.",
        "Perform unit and automated testing using JUnit for the real-life application created."
    ],
    courseLinks: [
      {
        name: "Coursera: Intro to Java and Object-Oriented Programming",
        url: "https://www.coursera.org/learn/java-object-oriented-programming",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "Coursera: Inheritance and Data Structures in Java",
        url: "https://www.coursera.org/learn/java-inheritance-data-structures",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "VSCode: Refactoring, Debugging, Source Control of IDEs",
        url: "https://code.visualstudio.com/docs/editor/refactoring",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL: Programming in Java | IIT KGP",
        url: "https://archive.nptel.ac.in/courses/106/105/106105191/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
    ],
    videoReferences: [
      { 
        title: "Kunal Kushwaha: Object Oriented Programming (OOP) in Java", 
        url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk", 
        platform: "YouTube" 
      },
    ],
    // videoReferencesWithSubcategories: [
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
    questionnaire: {
      mcq: [
        {
          question: "Which of the following best describes encapsulation in OOP?",
          options: [
            "Bundling data and methods that operate on the data into a single unit",
            "Hiding methods from other objects",
            "Inheriting properties from a parent class",
            "Allowing multiple methods with the same name"
          ],
          correctAnswer: "Bundling data and methods that operate on the data into a single unit",
          explanation: "Encapsulation ensures that data (attributes) and behavior (methods) are bundled together and can only be accessed in controlled ways."
        },
        {
          question: "Which design pattern is best suited for creating only one instance of a class?",
          options: [
            "Factory",
            "Observer",
            "Singleton",
            "Adapter"
          ],
          correctAnswer: "Singleton",
          explanation: "The Singleton design pattern ensures that only one instance of a class is created and provides a global access point to it."
        },
        {
          question: "What is polymorphism in Java?",
          options: [
            "A method can have multiple forms with the same functionality",
            "A subclass can replace the implementation of a method in the parent class",
            "The ability of a class to define multiple constructors",
            "The ability of different classes to be treated as objects of a common superclass"
          ],
          correctAnswer: "The ability of different classes to be treated as objects of a common superclass",
          explanation: "Polymorphism allows objects of different classes to be treated as instances of the same superclass, typically achieved through method overriding or interfaces."
        },
        {
          question: "What is the primary purpose of JUnit in Java?",
          options: [
            "To refactor code",
            "To write graphical interfaces",
            "To perform automated testing",
            "To handle runtime exceptions"
          ],
          correctAnswer: "To perform automated testing",
          explanation: "JUnit is a framework specifically designed for unit testing in Java. It allows developers to automate the testing process."
        },
        {
          question: "Which of the following IDE tools helps in identifying and fixing errors in code during execution?",
          options: [
            "Compiler",
            "Debugger",
            "Version Control",
            "Code Formatter"
          ],
          correctAnswer: "Debugger",
          explanation: "The debugger in an IDE allows developers to pause the execution, inspect variables, and fix errors during runtime."
        },
        {
          question: "What is abstraction in Java?",
          options: [
            "Exposing all details of an object to the outside world",
            "Providing implementation of methods in an interface",
            "Hiding implementation details and exposing only essential features",
            "Allowing a class to have multiple constructors"
          ],
          correctAnswer: "Hiding implementation details and exposing only essential features",
          explanation: "Abstraction hides the implementation details and exposes only the necessary aspects of an object."
        },
        {
          question: "In the Factory design pattern, what is the role of the Factory class?",
          options: [
            "To create objects without specifying the exact class",
            "To implement business logic",
            "To act as a blueprint for derived classes",
            "To control access to certain parts of a program"
          ],
          correctAnswer: "To create objects without specifying the exact class",
          explanation: "The Factory class is responsible for creating objects by abstracting the instantiation logic."
        },
        {
          question: "Which principle of OOP does the 'is-a' relationship represent?",
          options: [
            "Encapsulation",
            "Abstraction",
            "Inheritance",
            "Polymorphism"
          ],
          correctAnswer: "Inheritance",
          explanation: "The 'is-a' relationship represents inheritance, where a subclass derives properties from a superclass."
        }
      ],
      shortAnswer: [
        {
          question: "Explain the key benefits of using IDE tools like debugging and refactoring in software development.",
          maxWords: 80,
          explanation: "IDE tools like debugging and refactoring enhance software development by identifying and resolving runtime issues efficiently and improving code quality without altering its functionality. Features such as breakpoints, variable watches, and call stack inspection ensure optimized and maintainable code, fostering a cleaner development process."
        },
        {
          question: "How does inheritance support code reuse in Java?",
          maxWords: 70,
          explanation: "Inheritance in Java promotes code reuse by allowing new classes to inherit attributes and methods from existing classes. It reduces redundancy by reusing common functionalities of base classes and enables subclasses to introduce specific features without modifying the parent class, ensuring modularity and maintainability."
        },
        {
          question: "What are the advantages of automated testing with JUnit?",
          maxWords: 100,
          explanation: "Automated testing with JUnit saves time by handling repetitive test cases and ensures that code changes do not break existing functionality. It provides instant feedback to developers and supports test-driven development practices, which improves code reliability and robustness."
        },
        {
          question: "Compare abstraction and encapsulation in Java.",
          maxWords: 90,
          explanation: "Abstraction focuses on exposing only the essential details to the user and hiding the implementation, whereas encapsulation involves bundling data and methods together and restricting direct access to the data. Abstraction is implemented using abstract classes and interfaces, while encapsulation is achieved through access modifiers like private, protected, and public."
        },
        {
          question: "Explain the role of polymorphism in building real-world applications.",
          maxWords: 100,
          explanation: "Polymorphism allows for flexibility and scalability by enabling different implementations of the same method, which helps in adapting to changing requirements. It supports dynamic method dispatch, making runtime behavior changes possible. Polymorphism also simplifies code maintenance by adhering to a common interface, such as in a payment system where credit card, PayPal, or bank transfers can be processed through a single interface."
        }
      ],
      longAnswer: [],
    },
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
    const tabs = [
      { id: 'overview', label: 'Course Outcomes' },
      { id: 'resources', label: 'Resources' },
      { id: 'assessment', label: 'Assessment' }
    ];

    return (
      <div className="flex border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab.id
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


      {/* Video References Section with Subcategories */}
      {/* <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#2596be] mb-4 flex items-center">
          <Youtube className="mr-2 h-6 w-6" /> Video References
        </h2>
        {courseData.videoReferencesWithSubcategories.map((section, index) => (
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
                    className={`flex items-center p-2 rounded-lg ${
                      isCorrect
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
          <Code className="mr-2 h-6 w-6" />  Coding Questions
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

export default AdvancedProgramming;
