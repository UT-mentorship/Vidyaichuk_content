import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network, Github } from "lucide-react";

const IntroductionToProgramming = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Introduction to Programming",
    description: "Learn fundamental programming concepts like arrays, loops, functions, and recursion, with hands-on projects to build problem-solving skills and practical experience.",
    outcomes: [
      "Problem-solving and logic building",
      "Getting familiar with basic things like arrays, strings, functions, dictionaries, loops, conditionals, etc.",
      "Introduction to recursion, big-O notation, and optimization.",
    ],
    approach: [
      "Use some tools for quick testing, e.g., https://makecode.microbit.org/",
      "Have a large project to achieve at the end - perhaps making a game.",
    ],
    courseLinks: [
      {
        name: "MITx: Intro to CS and Prog in Python",
        url: "https://www.edx.org/learn/computer-science/massachusetts-institute-of-technology-introduction-to-computer-science-and-programming-using-python",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "Microsoft MakeCode",
        url: "https://www.microsoft.com/en-us/makecode/get-started?activetab=pivot1%3aprimaryr2&oneroute=true",
        icon: <Code className="mr-2 h-4 w-4" />,
      },
      {
        name: "FreeCodeCamp",
        url: "https://www.youtube.com/watch?v=zOjov-2OZ0E",
        icon: <Code className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL",
        url: "https://archive.nptel.ac.in/courses/106/106/106106182/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
    ],
    videoReferences: [
      { title: "MIT OpenSourceWare: 6.0001 Introduction to Computer Science and Programming in Python ", url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63WbdFxL8giv4yhgdMGaZNA", platform: "YouTube" },
      { title: "FreeCodeCamp: Learn Python by Building Five Games - Full Course", url: "https://www.youtube.com/watch?v=XGf2GcyHPhc", platform: "YouTube" }
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
    questionnaire: {
      mcq: [
        {
          "question": "What is the output of the following code snippet?\n\nx = [1, 2, 3, 4]\nprint(x[1:3])",
          "options": ["[1, 2]", "[2, 3]", "[3, 4]", "[2, 3, 4]"],
          "correctAnswer": "[2, 3]",
          "explanation": "The slicing operation x[1:3] returns elements from index 1 to index 2 (3 is excluded), so the output is [2, 3]."
        },
        {
          "question": "Which of the following is a mutable data type in Python?",
          "options": ["Tuple", "String", "List", "Integer"],
          "correctAnswer": "List",
          "explanation": "Lists are mutable in Python, meaning their elements can be modified after the list is created. Tuples, strings, and integers are immutable."
        },
        {
          "question": "What is the purpose of the self keyword in Python classes?",
          "options": ["To refer to the class itself", "To refer to the instance of the class", "To refer to the superclass", "To refer to a global variable"],
          "correctAnswer": "To refer to the instance of the class",
          "explanation": "The 'self' keyword is used in Python to refer to the instance of the class, allowing access to the instance variables and methods."
        },
        {
          "question": "Which of the following methods can be used to add an element to a set in Python?",
          "options": ["append()", "add()", "insert()", "extend()"],
          "correctAnswer": "add()",
          "explanation": "The 'add()' method is used to add an element to a set in Python. The other methods like append() and extend() are used for lists."
        },
        {
          "question": "What is the output of the following code snippet?\n\nx = [1]\ny = [1, 2]\nprint(x, y)",
          "options": ["[1] [2]", "[1, 2] [1, 2]", "[1] [1, 2]", "[1, 2] [2]"],
          "correctAnswer": "[1] [1, 2]",
          "explanation": "The print statement outputs the two lists x and y as they are. x remains [1], and y remains [1, 2], so the output is '[1] [1, 2]'."
        }
      ],
      shortAnswer: [
        {
          question: "Explain the difference between deepcopy and shallow copy in Python.",
          maxWords: 150,
          explanation: "A shallow copy creates a new object but does not recursively copy the objects it references. Changes made to mutable objects inside the copied object will reflect in the original. A deepcopy creates a new object and recursively copies all objects it references, ensuring that changes in the copy do not affect the original object."
        },
        {
          question: "What is a lambda function in Python and when would you use it?",
          maxWords: 150,
          explanation: "A lambda function in Python is an anonymous function defined using the `lambda` keyword. It can have any number of arguments but only one expression. Lambda functions are commonly used when a simple function is needed temporarily, such as in map, filter, or sort operations. Example: `lambda x: x + 1` creates a function that increments a number by 1."
        },
        {
          question: "Describe the difference between __init__ and __new__ methods in Python classes.",
          maxWords: 150,
          explanation: "`__init__` is a constructor method that initializes an instance of the class after it has been created. `__new__` is a method that creates a new instance of the class and is called before `__init__`. You override `__new__` when you need to control the instance creation process, such as for implementing singleton patterns."
        },
        {
          question: "What are Python decorators and how do they work?",
          maxWords: 200,
          explanation: "Decorators in Python are functions that modify the behavior of another function or method. They are applied using the `@decorator_name` syntax above the target function. Decorators are useful for tasks like logging, access control, and memoization. Example: `@my_decorator` wraps a function with additional functionality provided by `my_decorator`."
        },
        {
          question: "Explain the concept of list comprehensions and provide an example.",
          maxWords: 150,
          explanation: "List comprehensions are a concise way to create lists in Python using a single line of code. They consist of an expression followed by a `for` clause and optional `if` clauses. Example: `[x**2 for x in range(10) if x % 2 == 0]` creates a list of squares of even numbers from 0 to 9."
        }
      ],
      longAnswer: [
        {
          question: "Write a Python function to check if a given string is a palindrome.",
          maxWords: 500,
          explanation: "def is_palindrome(s):\n\t# Remove spaces and convert to lowercase for uniform comparison\n\ts = s.replace(' ', '').lower()\n\n\t# Iterate over the string to check if it is equal to its reverse\n\tstart, end = 0, len(s) - 1\n\twhile start < end:\n\t\tif s[start] != s[end]:\n\t\t\treturn False\n\t\tstart += 1\n\t\tend -= 1\n\n\treturn True\n\nOR\n\ndef alternate_is_palindrome(s):\n\t# Remove spaces and convert to lowercase for uniform comparison\n\ts = s.replace(' ', '').lower()\n\n\t# Check if the string is equal to its reverse\n\treturn s == s[::-1]"
          ,
        },
        {
          question: "Implement a function to find the factorial of a number using recursion.",
          maxWords: 500,
          explanation: "def factorial(n):\n\tif n == 0 or n == 1:\n\t\treturn 1\n\treturn n * factorial(n - 1)\n"
        },
        {
          question: "Write a Python function to find the maximum element in a list without built-in functions.",
          maxWords: 500,
          explanation: "def find_max(lst):\n\t# Initialize the maximum element to be the first element of the list\n\tmax_element = lst[0]\n\n\t# Iterate through the list to find the maximum element\n\tfor element in lst:\n\t\tif element > max_element:\n\t\t\tmax_element = element\n\n\treturn max_element"
        }
      ],
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

export default IntroductionToProgramming;
