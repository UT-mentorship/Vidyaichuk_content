import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network } from "lucide-react";

const ComputerNetworks = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Computer Networks",
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
        name: "Coursera: Bits and Bytes of CN",
        url: "https://www.coursera.org/learn/computer-networking",
        icon: <Network className="mr-2 h-4 w-4" />,
      },
      {
        name: "Coursera: Networks and Network Security",
        url: "https://www.coursera.org/learn/networks-and-network-security",
        icon: <Network className="mr-2 h-4 w-4" />,
      },
      {
        name: "CS Primer",
        url: "https://csprimer.com/courses/networking/ ",
        icon: <Code className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL (IIT Kharagpur)",
        url: "https://archive.nptel.ac.in/courses/106/105/106105183/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
    ],
    videoReferences: [
      {
        title: "Neso Academy: Computer Networks",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx",
        platform: "YouTube"
      },
      {
        title: "ProgrammingKnowledge: Learn MESSAGE QUEUING TELEMETRY TRANSPORT(MQTT)",
        url: "https://www.youtube.com/playlist?list=PLS1QulWo1RIbQWue3zzwEuV2pSASiDxvv",
        platform: "YouTube"
      },
      {
        title: "Chris Greer: Wireshark Masterclass",
        url: "https://www.youtube.com/playlist?list=PLW8bTPfXNGdC5Co0VnBK1yVzAwSSphzpJ",
        platform: "YouTube"
      },
      {
        title: "Nicholas Day: Network Programming in C++",
        url: "https://www.youtube.com/watch?v=gntyAFoZp-E&list=PLP4HW-Si40UJzLuDPmpPbvOt9KI7Il5IM",
        platform: "YouTube"
      }
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
          question: "Which layer of the OSI model is responsible for end-to-end communication and error-free delivery of data?",
          options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
          correctAnswer: "Transport Layer",
          explanation: "The Transport Layer (Layer 4) is responsible for end-to-end communication and error-free delivery of data, ensuring reliable transmission between devices."
        },
        {
          question: "Which protocol is used for secure communication over a computer network?",
          options: ["HTTP", "FTP", "SSH", "Telnet"],
          correctAnswer: "SSH",
          explanation: "SSH (Secure Shell) is a protocol used for secure communication over a network, ensuring encrypted and authenticated connections between devices."
        },
        {
          question: "What is the primary purpose of the Domain Name System (DNS)?",
          options: ["To translate IP addresses into domain names", "To translate domain names into IP addresses", "To manage network traffic", "To provide email services"],
          correctAnswer: "To translate domain names into IP addresses",
          explanation: "The primary function of DNS is to resolve human-readable domain names (e.g., www.example.com) into IP addresses, enabling devices to locate each other on the network."
        },
        {
          question: "Which of the following is a connection-oriented protocol?",
          options: ["UDP", "IP", "TCP", "ICMP"],
          correctAnswer: "TCP",
          explanation: "TCP (Transmission Control Protocol) is a connection-oriented protocol that establishes a reliable, error-checked connection between sender and receiver before data transmission."
        },
        {
          question: "What is the default port number for HTTP?",
          options: ["21", "22", "80", "443"],
          correctAnswer: "80",
          explanation: "The default port number for HTTP (Hypertext Transfer Protocol) is 80. Port 443 is used for HTTPS (secure HTTP)."
        }
      ],
      shortAnswer: [
        {
          question: "Explain the difference between TCP and UDP.",
          maxWords: 200,
          explanation: "TCP (Transmission Control Protocol) is a connection-oriented protocol, meaning it ensures reliable, ordered, and error-checked delivery of data. It establishes a connection before data transfer and uses acknowledgment packets to confirm data receipt. On the other hand, UDP (User Datagram Protocol) is connectionless, offering faster transmission without guaranteeing delivery or order. It is often used for applications like streaming or online gaming, where speed is more critical than reliability."
        },
        {
          question: "What is the purpose of a subnet mask in an IP network?",
          maxWords: 150,
          explanation: "A subnet mask is used to divide an IP address into two parts: the network address and the host address. It helps devices determine if another device is on the same network or a different one. The mask contains a series of 1s for the network portion and 0s for the host portion. By performing a bitwise AND operation between the IP address and the subnet mask, a device can identify the network to which the IP address belongs."
        },
        {
          question: "Describe the process of a three-way handshake in TCP.",
          maxWords: 200,
          explanation: "The three-way handshake is a process that establishes a TCP connection between a client and server. It involves three steps: 1) SYN: The client sends a synchronization (SYN) packet to the server to initiate the connection. 2) SYN-ACK: The server responds with a synchronization-acknowledgment (SYN-ACK) packet to acknowledge the client's request. 3) ACK: The client sends an acknowledgment (ACK) packet to the server, confirming the connection. After this, data transfer begins."
        },
        {
          question: "What is the difference between a switch and a router?",
          maxWords: 150,
          explanation: "A switch operates at the Data Link Layer (Layer 2) of the OSI model and is used to connect devices within the same network. It forwards data frames based on MAC addresses. A router, on the other hand, operates at the Network Layer (Layer 3) and is used to connect different networks, forwarding data packets based on IP addresses. Routers determine the best path for data to travel between networks, while switches only handle traffic within a single network."
        },
        {
          question: "How does Network Address Translation (NAT) work?",
          maxWords: 150,
          explanation: "Network Address Translation (NAT) is a technique used to modify the IP address information in packet headers as they pass through a router or firewall. It allows multiple devices within a private network to share a single public IP address when accessing the internet. NAT maps internal IP addresses to a public IP address and vice versa, which helps conserve public IP addresses and provides an additional layer of security by hiding internal network structures."
        }
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
          <Code className="mr-2 h-6 w-6" /> Coding Questions
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

export default ComputerNetworks;
