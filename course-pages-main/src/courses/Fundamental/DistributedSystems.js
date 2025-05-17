import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network, Github } from "lucide-react";

const DistributedSystems = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Distributed Systems",
    description: "Explore the essentials of distributed systems, from concurrency and parallelism to scaling and load balancing, while mastering communication and data management techniques. Gain hands-on experience with cloud platforms, distributed databases, and real-world projects to design reliable, high-availability systems that meet modern computing demands.",
    outcomes: [
      "Understand the basic concepts, needs, and models of distributed systems, including their operation and importance in modern computing.",
      "Learn the principles of concurrency and parallelism within distributed environments.",
      "Understand techniques for effective communication and data management across distributed components.",
      "Explore concepts like system reliability, scaling, load balancing, and distributed file storage systems.",
      "Integrate cloud computing and data engineering concepts to develop practical distributed systems applications."
    ],
    approach: [
      "Implement small-scale projects to practice concepts of concurrency, parallelism, and distributed communication.",
      "Leverage cloud platforms' managed services (AWS, GCP, Azure) for hands-on experience with distributed databases, storage, and computing resources.",
      "Design systems with high availability, implement redundancy, failover mechanisms, and use tools like Chaos Monkey to introduce faults.",
      "Build real-world applications using concepts from cloud computing, advanced databases, data engineering, and web development."
    ],
    courseLinks: [
      {
        name: "edX: Modern Distributed Systems | TU Delft",
        url: "https://www.edx.org/learn/computer-science/delft-university-of-technology-modern-distributed-systems",
        icon: <Code className="mr-2 h-4 w-4" />,
      },
      {
        name: "LearnCS: 6.824 Distributed Systems | MIT",
        url: "https://learncs.me/mit/6.824",
        icon: <Code className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL: Distributed Systems | IIT Patna",
        url: "https://archive.nptel.ac.in/courses/106/106/106106168/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
    ],
    videoReferences: [
      {
        title: " MIT 6.824: Distributed Systems (Spring 2020)",
        url: "https://www.youtube.com/watch?v=jR5E5Kz9A-k",
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
    questionnaire: {
      mcq: [
        {
          question: "Which characteristic is essential for a distributed system?",
          options: ["Transparency", "Scalability", "Concurrency", "All of the above"],
          correctAnswer: "All of the above",
          explanation: "A distributed system must exhibit transparency, scalability, and concurrency to function effectively and meet modern computing requirements."
        },
        {
          question: "Which cloud service model provides virtual machines and storage solutions?",
          options: ["SaaS", "PaaS", "IaaS", "DaaS"],
          correctAnswer: "IaaS",
          explanation: "Infrastructure as a Service (IaaS) offers virtualized computing resources such as virtual machines, storage, and networks on demand."
        },
        {
          question: "Which type of failure in distributed systems involves nodes acting unpredictably, potentially with conflicting responses?",
          options: ["Node Failure", "Network Failure", "Software Failure", "Byzantine Failure"],
          correctAnswer: "Byzantine Failure",
          explanation: "Byzantine failures occur when nodes act erratically, sometimes providing conflicting or incorrect responses, making them one of the most challenging issues in distributed systems."
        },
        {
          question: "Which consistency model guarantees that any read operation will return the most recent write?",
          options: ["Eventual Consistency", "Strong Consistency", "Causal Consistency", "Weak Consistency"],
          correctAnswer: "Strong Consistency",
          explanation: "Strong consistency ensures that all read operations reflect the most recent write, providing a strict guarantee of data accuracy and reliability."
        },
        {
          question: "What is the purpose of barriers in synchronization?",
          options: ["To prevent processes from accessing a resource", "To ensure all processes reach a certain point before continuing", "To manage access to shared resources", "To handle failures in distributed systems"],
          correctAnswer: "To ensure all processes reach a certain point before continuing",
          explanation: "Barriers are synchronization mechanisms that make all processes pause at a specific point until each process has reached it, ensuring coordinated execution in distributed systems."
        }
      ],
      shortAnswer: [
        {
          question: "Explain the CAP theorem and its implications in designing a distributed system.",
          maxWords: 150,
          explanation: "The CAP theorem states that a distributed system can only guarantee two of three properties: Consistency, Availability, and Partition Tolerance.\nIf a system is consistent and available, it may not tolerate network partitions.\nIf it is available and partition-tolerant, consistency may be sacrificed.\nThis helps developers prioritize system properties based on specific requirements."
        },
        {
          question: "Explain the differences between IaaS, PaaS, and SaaS, and provide an example of each.",
          maxWords: 150,
          explanation: "IaaS offers virtual machines and storage for custom configurations (e.g., AWS EC2).\nPaaS provides platforms for app development without managing infrastructure (e.g., Google App Engine).\nSaaS delivers software over the internet, accessible via a browser (e.g., Salesforce).\nThese models provide varying levels of abstraction and management for cloud services."
        },
        {
          question: "Explain the difference between vertical and horizontal scaling. Which is more commonly used in distributed systems, and why?",
          maxWords: 150,
          explanation: "Vertical scaling increases the capacity of a single node by adding resources like CPU and RAM.\nHorizontal scaling adds more nodes to distribute the workload.\nHorizontal scaling is more commonly used in distributed systems because it offers better scalability and avoids hardware limitations of single machines."
        },
        {
          question: "Explain the difference between TCP and HTTP protocols in terms of their use in distributed systems.",
          maxWords: 150,
          explanation: "TCP is a reliable, connection-oriented protocol ensuring data packets are delivered in the same order they are sent.\nIt is used for low-level, reliable data transmission.\nHTTP is an application-layer protocol built on TCP, designed for stateless web communication to request and transfer web content."
        },
        {
          question: "List and explain different models of parallelism with examples.",
          maxWords: 200,
          explanation: "The three main models of parallelism are:\n1) Data Parallelism: Splits data across processors to perform the same operation (e.g., batch processing large datasets).\n2) Task Parallelism: Assigns different tasks to separate processors (e.g., web servers handling multiple requests).\n3) Pipeline Parallelism: Divides tasks into stages processed in sequence (e.g., assembly line processing in production).\nEach model optimizes resource use for specific workloads."
        }
      ],
      longAnswer: [
        {
          question: "Assume a client-server model where the server has an average response time of 100 ms and the network latency is 20 ms. Calculate the total round-trip time for a client request.",
          maxWords: 150,
          explanation: "Total round-trip time = 2 * (Network Latency + Server Response Time) = 2 * (20 ms + 100 ms) = 240 ms."
        },
        {
          question: "Given a distributed file storage system with a replication factor of 3, calculate the data availability assuming each replica has a failure probability of 1%.",
          maxWords: 150,
          explanation: "Availability of each replica = 1 - Failure Probability = 0.99.\nAvailability of data = 1 - (Failure Probability of all replicas failing) = 1 - (0.01^3) = 0.999999."
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
          <Code className="mr-2 h-6 w-6" />  Numerical Questions
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

export default DistributedSystems;
