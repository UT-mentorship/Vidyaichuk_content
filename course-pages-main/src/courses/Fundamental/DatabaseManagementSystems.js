import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network, Github } from "lucide-react";

const DatabaseManagementSystems = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Database Management Systems",
    description: "Master database management with this course by exploring SQL and NoSQL systems for creating, querying, and managing data. Focus on advanced queries, efficient schema design, transactions, indexing, and query optimization. Use tools like MySQL Workbench and MongoDB Atlas for hands-on practice, integrating databases with web projects to solve real-world problems effectively.",
    outcomes: [
      "Get familiar with using SQL and NoSQL-based databases for creating, querying, and managing data.",
      "Focus on writing and understanding queries, including advanced and nested queries, in both SQL and NoSQL.",
      "Learn efficient schema design for real-world applications, understanding fundamental concepts like transactions, concurrency, database security, indexing, B+ trees, query optimization, and triggers for SQL databases, along with document design and scalability in NoSQL databases.",
      "Apply database concepts to integrate them with the website created in Web Development with Django."
    ],
    approach: [
      "Utilize tools like MySQL Workbench and MongoDB Atlas for practical exercises, focusing on schema creation, query writing, and data manipulation.",
      "Use platforms like HackerRank, LeetCode, and SQLZoo to practice writing complex and nested queries.",
      "Integrate previous web development projects with SQL/NoSQL databases and solve real-world problems.",
      "Use concepts learned, like indexing, triggers, query optimization, security, and schema design, to create optimized real-world applications."
    ],
    courseLinks: [
      {
        name: "edX: Relational Database Basics | IBM",
        url: "https://www.coursera.org/learn/linear-algebra-machine-learning",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "edX: Introduction to SQL | IBM",
        url: "https://www.edx.org/learn/sql/ibm-introduction-to-sql",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "edX: NoSQL Database Basics | IBM",
        url: "https://www.coursera.org/learn/applied-calculus-with-python",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "edX: Mathematics for CS",
        url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/video_galleries/video-lectures/",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL: Intro to Database Systems",
        url: "https://archive.nptel.ac.in/courses/106/106/106106220/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
    ],
    videoReferences: [
      { 
        title: "Simplilearn: Introduction To MySQL | MySQL Workbench Tutorial", 
        url: "https://www.youtube.com/watch?v=fUK94jOFwBc", 
        platform: "YouTube" 
      },
      { 
        title: " MongoDB: MongoDB Atlas", 
        url: "https://www.youtube.com/playlist?list=PL4RCxklHWZ9vmzBP7lybE08CxbIU17PIf", 
        platform: "YouTube" 
      },
    ],
    videoReferencesWithSubcategories: [
      {
        topic: "FreeCodeCamp: Database Systems - Cornell University Course (SQL, NoSQL, Large-Scale Data Analysis)", 
        platform: "YouTube",
        videos: [
          { title: "Part 1", url: "https://www.youtube.com/watch?v=4cWkVbC2bNE", platform: "YouTube" },
          { title: "Part 2", url: "https://www.youtube.com/watch?v=lxEdaElkQhQ", platform: "YouTube" }
        ]
      },
    ],
    questionnaire: {
      mcq: [
        {
          question: "Which of the following is true about the ACID properties of a transaction?",
          options: [
            "They ensure redundancy.",
            "They ensure no data is lost during a transaction.",
            "They ensure data consistency and integrity.",
            "They minimize query time."
          ],
          correctAnswer: "They ensure data consistency and integrity.",
          explanation: "The ACID properties ensure that transactions are processed reliably and maintain data consistency and integrity."
        },
        {
          question: "Which of the following is true for an OUTER JOIN?",
          options: [
            "Returns only matching rows from both tables.",
            "Returns all rows from one table and matching rows from the other.",
            "Returns all rows from both tables regardless of a match.",
            "Does not return any rows if there is no match."
          ],
          correctAnswer: "Returns all rows from one table and matching rows from the other.",
          explanation: "An OUTER JOIN returns all rows from one table and the matching rows from the other table, or NULL if no match exists."
        },
        {
          question: "Which of the following ensures the Atomicity property of a transaction in DBMS?",
          options: [
            "Ensuring all operations are executed or none are executed.",
            "Ensuring one operation is done at a time.",
            "Ensuring data is readable after commit.",
            "Ensuring simultaneous access to data."
          ],
          correctAnswer: "Ensuring all operations are executed or none are executed.",
          explanation: "The Atomicity property ensures that a transaction is fully completed or fully rolled back, guaranteeing that no partial operations remain."
        },
        {
          question: "Consider the SQL query: SELECT COUNT(*) FROM Students WHERE Age > 18;",
          options: [
            "Counts all rows in the Students table.",
            "Counts rows where the age of the student is 18.",
            "Counts rows where the age of the student is greater than 18.",
            "Updates the age of students above 18."
          ],
          correctAnswer: "Counts rows where the age of the student is greater than 18.",
          explanation: "The query counts the number of students whose age is greater than 18."
        },
        {
          question: "Consider the schedules S for transactions T1, T2 and T3 below. S: r1(X); r2(Y); r3(Y); w2(Y); w1(X); w3(X); r2(X); w2(X). This schedule is conflict serializable. What would be its equivalent serial schedule?",
          options: [
            "T2 -> T3 -> T1",
            "T3 -> T2 -> T1",
            "T1 -> T3 -> T2",
            "S1 is not conflict serializable"
          ],
          correctAnswer: "T1 -> T3 -> T2",
          explanation: "The schedule can be made conflict serializable with the order T1 -> T3 -> T2, as there are no conflicting operations."
        },
        {
          question: "In a relation, a functional dependency X → Y implies that:",
          options: [
            "Y uniquely determines X.",
            "X uniquely determines Y.",
            "X and Y are independent.",
            "X can contain duplicate values."
          ],
          correctAnswer: "X uniquely determines Y.",
          explanation: "In a functional dependency, X uniquely determines Y, meaning for every value of X, there is a unique corresponding value of Y."
        },
        {
          question: "If a relation R(A, B) contains 5 tuples, and another relation S(B, C) contains 6 tuples, what is the maximum number of tuples in the natural join of R and S?",
          options: [
            "30",
            "5",
            "6",
            "11"
          ],
          correctAnswer: "30",
          explanation: "In the natural join of R and S, the maximum number of tuples is the product of the number of tuples in R and S, which is 5 * 6 = 30."
        },
        {
          question: "Which of the following is true about a primary key?",
          options: [
            "It must be unique.",
            "It can contain NULL values.",
            "It can have duplicate values.",
            "It is used only for foreign key relationships."
          ],
          correctAnswer: "It must be unique.",
          explanation: "A primary key must uniquely identify each record in a table and cannot contain NULL values."
        },
        {
          question: "Which of the statement(s) is(are) true wrt the RAID?",
          options: [
            "In RAID 1, if you lose a drive, you lose all data and therefore you cannot recover the data from other disks.",
            "RAID architecture is used for data backup solution.",
            "RAID 5 is typically preferred when data update frequency is low.",
            "In RAID 5, you need at least 3 disks and writing the data on a disk is bit slower than RAID 1."
          ],
          correctAnswer: "RAID 5 is typically preferred when data update frequency is low. In RAID 5, you need at least 3 disks and writing the data on a disk is bit slower than RAID 1.",
          explanation: "RAID 5 provides a good balance of performance and redundancy with lower data update frequency. It requires at least 3 disks and has slower write speeds compared to RAID 1."
        },
        {
          question: "The magnetic disk rotates at a speed of 6000 rotations per minute and the average seek time is 5ms. What would be the average access time (seek time + rotational time) for one block?",
          options: [
            "25ms",
            "10ms",
            "12ms",
            "15ms"
          ],
          correctAnswer: "10ms",
          explanation: "The average rotational time is the time it takes for the disk to rotate to the correct position, which is approximately 10ms at 6000 RPM."
        }
      ]
      ,
      shortAnswer: [
        {
          question: "Consider relation R(A,B,C,D,E) with FDs set F = {A-> B, AB->CD, D->ABCE, A->C}. Which of the following are super-keys of the relation R?\na) A\nb) AB\nc) CD",
          maxWords: 120,
          explanation: "a) The closure of A is {A,B, C,D,E}. Therefore, A is a super-key. \nb) Since A is a super-key, AB is also a super-key. \nc) The closure of CD is {A,B,C,D,E}, making CD a super-key."
        },
        {
          question: "Construct a B-tree for the following set of key values: (2, 3, 5, 7, 11, 17, 19, 23, 29, 31). Assume that the tree is initially empty, values are added in ascending order, and the fanout is n = 3. We split a node whenever necessary. We do NOT borrow the space from a sibling for a new record. Which of the following is true after the tree has been constructed?\na ) Key values 29 and 31 are in the same leaf node.\nb) Key values 7 and 11 are in the same leaf node.\nc) Key value 2 is in a leaf node by itself.\nd) The height of the tree (not including the records) is 4.",
          maxWords: 100,
          explanation: "After constructing the B-tree with the given keys, option a) is true: Key values 29 and 31 will be in the same leaf node. This can be confirmed by constructing the tree according to the basic B-tree insertion rules, ensuring that nodes are split when necessary."
        },
        {
          question: "Explain how you would implement a many-to-many relationship between Students and Courses in a relational database.",
          maxWords: 90,
          explanation: "To implement a many-to-many relationship between Students and Courses, create a junction table, such as StudentCourses, with two foreign keys: StudentID referencing the Students table and CourseID referencing the Courses table. This allows each student to be associated with multiple courses and each course to be associated with multiple students."
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
        {courseData.videoReferencesWithSubcategories.map((section, index) => (
          <div key={index} className="mb-4">
             <button 
             className="w-full text-left p-2 bg-gray-100 rounded-lg hover:bg-[#2596be]/10"
             onClick={() => setOpenAccordion(openAccordion === index ? null : index)} 
             >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Youtube className="h-5 w-5 mr-2 text-red-600" />
                  <div>
                    <span className="font-semibold ">{section.topic}</span>
                    <p className="text-sm text-gray-500">{section.platform}</p>
                  </div>
                </div>
                <span>{openAccordion === index ? '▲' : '▼'}</span> 
              </div>
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
      {/* <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#2596be] mb-4 flex items-center">
          <Code className="mr-2 h-6 w-6" />  Numericals & Coding Questions
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
      </div> */}


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

export default DatabaseManagementSystems;
