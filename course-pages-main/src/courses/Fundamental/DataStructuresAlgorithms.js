import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School } from "lucide-react";

const DataStructuresAlgorithms = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Data Structures and Algorithms",
    description: "Learn core data structures and algorithms, and develop problem-solving skills through hands-on practice. Optimize solutions for efficiency and gain experience with platforms like Leetcode, Hackerrank, and Codeforces.",
    outcomes: [
      "Develop strong analytical skills to approach problems, think critically about multiple solutions, and choose the most efficient one.",
      "Gain a thorough understanding of fundamental data structures like arrays, linked lists, stacks, queues, heap, trees, and graphs, and their applications in computing.",
      "Understand key algorithms for searching, sorting, and hashing, as well as graph algorithms, recursion, dynamic programming, and greedy techniques.",
      "Learn to optimize solutions for better performance in terms of time and space complexity, crucial for efficient software development."
    ],
    approach: [
      "Utilize platforms like Hackerrank, Leetcode, and Codeforces to practice problem-solving and trying multiple solutions and optimizing them.",
      "Participate in global contests on Leetcode, Codeforces, and Hackerrank to know your current understanding and shortcomings.",
      "Use online sites like Visualgo and Algoviz to visualize different algorithms and understand them in a practical way.",
      "Practice some interesting problems from the CS primer to enhance your concepts on DSA."
    ],
    courseLinks: [
      {
        name: "edX (Georgia Tech) DSA I",
        url: "https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-i-arraylists-linkedlists-stacks-and-queues",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "edX (Georgia Tech) DSA II",
        url: "https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-ii-binary-trees-heaps-skiplists-and-hashmaps",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "edX (Georgia Tech) DSA III",
        url: "https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-iii-avl-and-2-4-trees-divide-and-conquer-algorithms",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "edX (Georgia Tech) DSA IV",
        url: "https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-iv-pattern-matching-dijkstras-mst-and-dynamic-programming-algorithms",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "CS Primer",
        url: "https://csprimer.com/courses/algorithms/ ",
        icon: <Code className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL (IIT Kharagpur)",
        url: "https://archive.nptel.ac.in/courses/106/105/106105225/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
      {
        name: "Algo Visualiser",
        url: "https://visualgo.net/en",
        icon: <Code className="mr-2 h-4 w-4" />,
      },
    ],
    videoReferences: [
      {
        title: "CodeHelp Love Babber: Complete C++ Placement DSA Course",
        url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
        platform: "YouTube"
      },
      {
        title: "ApnaCollege: DSA Course in C++",
        url: "https://youtu.be/VTLCoHnyACE?si=wmZRWVNfVO3LUN0E",
        platform: "YouTube"
      },
      {
        title: "Aditya Verma: Dynamic Programming Playlist",
        url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go",
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
          question: "Which of the following data structures is used to implement recursion?",
          options: ["Queue", "Stack", "Linked List", "Tree"],
          correctAnswer: "Stack",
          explanation: "Recursion is implemented using the call stack, which keeps track of function calls and their local variables."
        },
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
          correctAnswer: "O(log n)",
          explanation: "Binary search divides the search space in half at each step, resulting in a logarithmic time complexity."
        },
        {
          question: "Which of the following sorting algorithms has the best average-case time complexity?",
          options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
          correctAnswer: "Merge Sort",
          explanation: "Merge Sort has an average-case time complexity of O(n log n), which is better than Bubble Sort, Insertion Sort, and Selection Sort."
        },
        {
          question: "In a max-heap, the parent node is always:",
          options: ["Smaller than its children", "Larger than its children", "Equal to its children", "None of the above"],
          correctAnswer: "Larger than its children",
          explanation: "In a max-heap, the value of the parent node is always greater than or equal to the values of its child nodes."
        },
        {
          question: "Which data structure is used for Breadth-First Search (BFS) in a graph?",
          options: ["Stack", "Queue", "Priority Queue", "Hash Table"],
          correctAnswer: "Queue",
          explanation: "BFS uses a queue to explore nodes level by level, ensuring all neighbors of a node are visited before moving to the next level."
        },
        {
          question: "What is the time complexity of the following code snippet?\nfor i in range(n):\n\tfor j in range(i, n):\n\t\t print(i, j)",
          options: ["O(n)", "O(n log n)", "O(n^2)", "O(n^3)"],
          correctAnswer: "O(n^2)",
          explanation: "The outer loop runs n times, and the inner loop runs progressively fewer times, resulting in an overall time complexity of O(n^2)."
        },
        {
          question: "Which of the following algorithms is used to find the shortest path in a weighted graph?",
          options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
          correctAnswer: "Dijkstra's Algorithm",
          explanation: "Dijkstra's Algorithm is specifically designed to find the shortest path in a weighted graph."
        },
        {
          question: "What is the time complexity of inserting an element into a binary heap?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
          correctAnswer: "O(log n)",
          explanation: "Inserting an element into a binary heap involves adding the element and then restoring the heap property, which takes O(log n) time."
        }
      ],
      shortAnswer: [
        {
          question: "Explain the difference between a stack and a queue.",
          maxWords: 150,
          explanation: "A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning the last element added is the first to be removed. Operations are performed at one end, called the top. Common stack operations include push (adding an element) and pop (removing an element). A queue, on the other hand, follows the First-In-First-Out (FIFO) principle, where the first element added is the first to be removed. It has two ends: the front (where elements are dequeued) and the rear (where elements are enqueued)."
        },
        {
          question: "What is the purpose of a hash function in a hash table?",
          maxWords: 150,
          explanation: "A hash function in a hash table is used to map data (keys) to specific indices (or buckets) in the table. The purpose is to efficiently retrieve, insert, or delete data. The hash function processes the key and generates an index that determines where the value associated with the key is stored. A good hash function distributes keys uniformly across the table to minimize collisions (when two keys map to the same index), ensuring fast access times for operations like search, insert, and delete."
        },
        {
          question: "Describe the process of inserting an element into a binary search tree.",
          maxWords: 150,
          explanation: "To insert an element into a binary search tree (BST), start at the root. Compare the element with the current node's value. If the element is smaller, move to the left child; if it's larger, move to the right child. Continue this process recursively until reaching a null position where the new element can be inserted. The BST maintains its property where the left child is smaller than the parent and the right child is larger. The insertion ensures that the tree remains ordered, facilitating efficient search operations."
        },
        {
          question: "What is the difference between depth-first search (DFS) and breadth-first search (BFS) in graph traversal?",
          maxWords: 150,
          explanation: "In depth-first search (DFS), traversal starts from a node and explores as far as possible along each branch before backtracking. DFS uses a stack (either explicitly or via recursion) to keep track of nodes to visit next. In contrast, breadth-first search (BFS) explores all neighbors at the current level before moving to the next level, using a queue to manage nodes to visit. DFS is suited for problems requiring exploration of deep paths, while BFS is typically used to find the shortest path in an unweighted graph."
        },
        {
          question: "How does dynamic programming improve the efficiency of solving problems compared to a naive recursive approach?",
          maxWords: 200,
          explanation: "Dynamic programming (DP) improves the efficiency of solving problems by storing the results of subproblems (memoization) and reusing them instead of recalculating them multiple times, as in a naive recursive approach. In problems like the Fibonacci sequence or knapsack problem, the naive recursive approach repeatedly solves the same subproblems, leading to exponential time complexity. DP optimizes this by breaking the problem into overlapping subproblems, solving each only once, and storing the results for future use. This reduces the time complexity from exponential to polynomial time, making it much more efficient."
        }
      ],
      longAnswer: [
        {
          question: "Reverse a Linked List",
          maxWords: 200,
          explanation: "To reverse a linked list, we iterate through the list, adjusting the next pointer of each node to point to the previous node. Initially, the previous pointer is set to None, and the current pointer starts at the head of the list. At each step, we save the next node, change the current node's next pointer to point to the previous node, and move the previous and current pointers forward. Here's the Python code to reverse a singly linked list:\n\n\tclass ListNode:\n\t\tdef __init__(self, val=0, next=None):\n\t\t\tself.val = val\n\t\t\tself.next = next\n\n\tdef reverse_linked_list(head):\n\t\tprev = None\n\t\tcurrent = head\n\t\twhile current:\n\t\t\tnext_node = current.next\n\t\t\tcurrent.next = prev\n\t\t\tprev = current\n\t\t\tcurrent = next_node\n\t\treturn prev\n\n# Example usage:\n# head = ListNode(1, ListNode(2, ListNode(3)))\n# reversed_head = reverse_linked_list(head)"
        },
        {
          question: "Find the maximum subarray sum using Kadane's Algorithm",
          maxWords: 150,
          explanation: "Kadane's Algorithm is used to find the maximum sum of a contiguous subarray within a one-dimensional numerical array. The idea is to maintain a running sum of the current subarray and compare it with the global maximum sum. If the running sum becomes negative, it's reset to 0. Here's the Python code for Kadane's Algorithm:\n\n\tdef max_subarray_sum(nums):\n\t\tmax_sum = float('-inf')\n\t\tcurrent_sum = 0\n\t\tfor num in nums:\n\t\t\tcurrent_sum = max(num, current_sum + num)\n\t\t\tmax_sum = max(max_sum, current_sum)\n\t\treturn max_sum\n\n# Example usage:\n# nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]\n# print(max_subarray_sum(nums))  # Output: 6"
        },
        {
          question: "Implement a function to check if a given binary tree is a valid Binary Search Tree (BST)",
          maxWords: 200,
          explanation: "To check if a binary tree is a valid BST, we need to ensure that for every node, all nodes in its left subtree have smaller values, and all nodes in its right subtree have larger values. This can be done by recursively checking the left and right subtrees and passing down the valid range for each node's value. Here's the Python code for this check:\n\n\tclass TreeNode:\n\t\tdef __init__(self, val=0, left=None, right=None):\n\t\t\tself.val = val\n\t\t\tself.left = left\n\t\t\tself.right = right\n\n\tdef is_valid_bst(root, low=float('-inf'), high=float('inf')):\n\t\tif not root:\n\t\t\treturn True\n\t\tif root.val <= low or root.val >= high:\n\t\t\treturn False\n\t\treturn (is_valid_bst(root.left, low, root.val) and\n\t\t\t\tis_valid_bst(root.right, root.val, high))\n\n# Example usage:\n# root = TreeNode(2, TreeNode(1), TreeNode(3))\n# print(is_valid_bst(root))  # Output: True"
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

export default DataStructuresAlgorithms;
