import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network } from "lucide-react";
import ShortQ3 from '../../assets/CO/Short_Q3.png';
import ShortQ4 from '../../assets/CO/Short_Q4.png';
import ShortQ5 from '../../assets/CO/Short_Q5.png';
import ShortQ6 from '../../assets/CO/Short_Q6.png';

const ComputerOrganisationArchitecture = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Computer Organisation and Architecture",
    description: "Master the fundamentals of computer networks, including protocols, VPNs, and network security, with hands-on experience in socket programming, real-time data transmission, and network application development.",
    outcomes: [
      "Understand the basics of computer networks, including how webpages load, LAN operations, VPN setup, and access control mechanisms.",
      "Gain hands-on experience with socket programming and Inter-Process Communication (IPC), essential for creating networked applications like chatbots or custom DNS servers.",
      "Understand concepts of essential networking protocols such as HTTP, MQTT, DNS, TCS, IP, QUIC, ICMP and AMQP, and explore the advancements in wireless technologies like 5G/6G.",
      "Understand the various layers and their importance in networking.",
      "Learn the fundamentals of network security, focusing on encryption protocols like SSL/TLS, and understand the differences and applications of IPv6 and IPv4."
    ],
    approach: [
      "Set up your own VPNs and access controls.",
      "Develop server-client applications using socket programming, guiding students through creating practical network applications like a local chatbot or a DNS server.",
      "Use tools like Wireshark to understand and observe network packets and requests.",
      "Understand the workings of real-time data transmission using MQTT or AMQP.",
      "Understand the practical implementation and working of multiple security protocols.",
      "Implement the theoretical concepts learned using practical problems from the CS primer on the topics above."
    ],
    courseLinks: [
      {
        name: "Coursera: Computer Architecture",
        url: "https://www.coursera.org/learn/comparch",
        icon: <Network className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL: Computer Architecture | IIT D",
        url: "https://archive.nptel.ac.in/courses/106/102/106102157/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL: Computer Organisation and Architecture | IIT M",
        url: "https://archive.nptel.ac.in/courses/106/106/106106166/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
      {
        name: "CS Primer",
        url: "https://csprimer.com/courses/systems/ ",
        icon: <Code className="mr-2 h-4 w-4" />,
      },
    ],
    videoReferences: [
      {
        title: "Neso Academy: Computer Organization & Architecture (COA)",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q",
        platform: "YouTube"
      },
      {
        title: "OliveStern: Learn MESSAGE QUEUING TELEMETRY TRANSPORT(MQTT)",
        url: "https://www.youtube.com/playlist?list=PL2EF13wm-hWCoj6tUBGUmrkJmH1972dBB",
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
          question: "To reduce the memory access time we generally make use of:",
          options: ["SDRAM's", "Heaps", "Cache's", "Higher capacity RAM's"],
          correctAnswer: "Cache's",
          explanation: "Caches are small, high-speed storage mechanisms located close to the CPU. They store frequently accessed data and instructions to reduce the memory access time."
        },
        {
          question: "What is the main difference between DRAM (Dynamic RAM) and SRAM (Static RAM)?",
          options: [
            "DRAM is faster but more expensive, while SRAM is slower and cheaper",
            "SRAM requires constant refreshing to retain data, while DRAM does not",
            "DRAM requires constant refreshing to retain data, while SRAM does not",
            "SRAM is non-volatile, while DRAM is volatile"
          ],
          correctAnswer: "DRAM requires constant refreshing to retain data, while SRAM does not",
          explanation: "DRAM uses capacitors to store data, which require periodic refreshing, while SRAM uses flip-flops, which do not require refreshing."
        },
        {
          question: "Arrange the following levels in the memory hierarchy in order of increasing access speed (slowest to fastest): L1 Cache, L2 Cache, Main Memory (RAM), Register",
          options: [
            "Main Memory (RAM), L2 Cache, L1 Cache, Register",
            "Register, L1 Cache, L2 Cache, Main Memory (RAM)",
            "L2 Cache, Main Memory (RAM), Register, L1 Cache",
            "Main Memory (RAM), Register, L1 Cache, L2 Cache"
          ],
          correctAnswer: "Main Memory (RAM), L2 Cache, L1 Cache, Register",
          explanation: "In the memory hierarchy, registers have the fastest access, followed by L1 Cache, L2 Cache, and then Main Memory."
        },
        {
          question: "What does 'normalized' mean in the context of IEEE-754 floating-point numbers?",
          options: [
            "The exponent is zero, and the mantissa is adjusted",
            "The leading digit of the mantissa is non-zero",
            "The sign bit is zero",
            "The exponent is in its maximum range"
          ],
          correctAnswer: "The leading digit of the mantissa is non-zero",
          explanation: "Normalized numbers in IEEE-754 format have a leading non-zero digit in the mantissa to maximize precision."
        },
        {
          question: "The RISC processor has a more complicated design than CISC.",
          options: ["True", "False"],
          correctAnswer: "False",
          explanation: "RISC processors have simpler designs compared to CISC, focusing on a reduced set of instructions for higher efficiency."
        },
        {
          question: "A processor performing fetch or decoding of different instruction during the execution of another instruction is called:",
          options: ["Super-scaling", "Pipe-lining", "Parallel Computation", "None of the mentioned"],
          correctAnswer: "Pipe-lining",
          explanation: "Pipelining is a technique where multiple instruction stages (fetch, decode, execute) are overlapped to improve performance."
        },
        {
          question: "Which of the following are NOT true in a pipelined processor?\nI. Bypassing can handle all RAW hazards.\nII. Register renaming can eliminate all register carried WAR hazards.\nIII. Control hazard penalties can be eliminated by dynamic branch prediction.",
          options: [
            "I and II only",
            "I and III only",
            "II and III only",
            "I, II and III only"
          ],
          correctAnswer: "I and III only",
          explanation: "Bypassing cannot handle all RAW hazards, and dynamic branch prediction reduces but cannot completely eliminate control hazard penalties."
        },
        {
          question: "Consider an instruction pipeline with five stages without any branch prediction: Fetch Instruction (FI), Decode Instruction (DI), Fetch Operand (FO), Execute Instruction (EI), and Write Operand (WO). The stage delays for FI, DI, FO, EI, and WO are 5 ns, 7 ns, 10 ns, 8 ns, and 6 ns, respectively. There are intermediate storage buffers after each stage, and the delay of each buffer is 1 ns. A program consisting of 12 instructions I1, I2, I3, …, I12 is executed in this pipelined processor. Instruction I4 is the only branch instruction, and its branch target is I9. If the branch is taken during the execution of this program, the time (in ns) needed to complete the program is:",
          options: ["132", "165", "176", "328"],
          correctAnswer: "176",
          explanation: "The branch instruction causes pipeline stalls, which adds to the total time. Accounting for the delays and stalls, the program completes in 176 ns."
        }
      ],
      shortAnswer: [
        {
          question: "What are the following registers used for in the x86 assembly language: EAX, EBX, ECX, EDX, ESI, EDI, EBP, ESP?",
          maxWords: "100",
          explanation: "In x86 assembly, EAX is the accumulator, EBX is the base register, ECX is the counter, EDX is used for I/O and multiplication, ESI and EDI are source and destination index registers, EBP is the base pointer for stack frames, and ESP is the stack pointer."
        },
        {
          question: "Can the following registers be broken down into smaller registers? ESP, EBP, ESI, EDI",
          maxWords: "100",
          explanation: "ESP and EBP cannot be broken into smaller registers. ESI and EDI can be broken into 16-bit (SI, DI) and 8-bit components in certain cases (SIL, DIL in x86-64)."
        },
        {
          question: "Consider the following IEEE-754 Single Precision Floating Point Number: 0100_0000_1011_0100_0000_0000_0000_0000. Compute the following: \n a. What is the sign of this number (+ve or -ve)? \n b. What is the exponent part (in decimal)? \n c. What is the mantissa part (in binary)? \n d. Convert the number to decimal notation.",
          maxWords: "100",
          explanation: "The sign is positive (0). The exponent (biased by 127) is 133 - 127 = 6 in decimal. The mantissa is 1.0110100... in binary (implicit leading 1). The value is 1.6875 * 2^6 = 108 in decimal.",
          images: [ShortQ3]
        },
        {
          question: "",
          maxWords: "100",
          explanation: "",
          images: [ShortQ4]
        },
        {
          question: "",
          maxWords: "100",
          explanation: "",
          images: [ShortQ5]
        },
        {
          question: "",
          maxWords: "100",
          explanation: "",
          images: [ShortQ6]
        },
      ],
      longAnswer: [
        {
          question: "Write a Python script to perform a simple HTTP GET request to a given URL and print the response status code.",
          maxWords: 150,
          explanation: "\nimport requests\n\n# URL to send GET request to\nurl = 'http://example.com'\n\n# Send GET request\nresponse = requests.get(url)\n\n# Print response status code\nprint(f'Response Status Code: {response.status_code}')\n \nThis script uses the `requests` library to send a GET request to a URL and prints the status code of the response. A status code of 200 means the request was successful."
        },
        {
          question: "Implement a basic TCP client in Python that connects to a server, sends a message, and prints the response.",
          maxWords: 200,
          explanation: "\nimport socket\n\n# Create a TCP/IP socket\nclient_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n# Connect to the server\nserver_address = ('localhost', 65432)\nclient_socket.connect(server_address)\n\n# Send a message to the server\nmessage = 'Hello, Server!'\nclient_socket.sendall(message.encode())\n\n# Receive the response from the server\nresponse = client_socket.recv(1024)\n\n# Print the response\nprint(f'Received response: {response.decode()}')\n\n# Close the socket\nclient_socket.close()\n \nThis script creates a TCP client that connects to a server on `localhost` and port `65432`. It sends a message and prints the response received from the server."
        },
        {
          question: "Write a Python function to resolve a domain name to its IP address using the socket library.",
          maxWords: 150,
          explanation: "\nimport socket\n\n# Function to resolve domain name to IP address\ndef resolve_domain(domain):\n\ttry:\n\t\t# Get IP address from domain name\n\t\tip_address = socket.gethostbyname(domain)\n\t\treturn ip_address\n\texcept socket.gaierror:\n\t\treturn 'Invalid domain name'\n\n# Example usage\nprint(resolve_domain('example.com'))\n \nThis function takes a domain name and returns its corresponding IP address using `socket.gethostbyname()`. If the domain name is invalid, it returns an error message."
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

            {question.images && question.images.length > 0 && (
                <div className="mt-2 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.images.map((imageUrl, imgIndex) => (
                    <div key={imgIndex} className="relative">
                    <img
                        src={imageUrl}
                        alt={`Question ${index + 1} image ${imgIndex + 1}`}
                        className="w-full h-auto rounded-lg shadow-sm"
                    />
                    </div>
                ))}
                </div>
            )}
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
      {/*<div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#2596be] mb-4 flex items-center">
          <Code className="mr-2 h-6 w-6" /> Coding Questions
        </h2>
        {courseData.questionnaire.longAnswer.map((question, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
            <p className="font-medium mb-2">
              {formatQuestionText(question.question)}
            </p>

            {question.images && question.images.length > 0 && (
                <div className="mt-2 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.images.map((imageUrl, imgIndex) => (
                    <div key={imgIndex} className="relative">
                    <img
                        src={imageUrl}
                        alt={`Question ${index + 1} image ${imgIndex + 1}`}
                        className="w-full h-auto rounded-lg shadow-sm"
                    />
                    </div>
                ))}
                </div>
            )}

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

export default ComputerOrganisationArchitecture;
