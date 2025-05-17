import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network, Github } from "lucide-react";

const BasicMathematics = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Basic Mathematics",
    description: "Master essential mathematical concepts like Linear Algebra, Calculus, Probability, and Discrete Mathematics, with hands-on projects using Python to solve real-world problems and build computational skills.",
    outcomes: [
      "Understand fundamentals of Linear Algebra like matrix operations, solving linear equations, row reduction, LU decomposition, inverse, vector space, subspace, dependence, independence and dimension",
      "Understand concepts of calculus like limits, continuity, differentiation and integration.",
      "Understand concepts of probability and stats like distributions, conditional probability, Bayes theoram, Data summarization, correlation and regression analysis.",
      "Understand concepts of set theory, graphs, propositional logic and counting for Computer science.",
      "Understand the practical applications of each mathematical topic."
    ],
    approach: [
      "Use Jupyter notebooks and Python libraries like Numpy and Scipy to apply concepts of Linear Algebra and Calculus to practical problems.",
      "For Probability and Statistics, work with real-world datasets and use Python libraries like pandas to calculate various metrics and visualize data.",
      "For Discrete Mathematics, solve algorithmic problems using the learned concepts through Python after understanding the basics."
    ],
    courseLinks: [
      {
        name: "Coursera: Math for ML - Linear Algebra",
        url: "https://www.coursera.org/learn/linear-algebra-machine-learning",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "MIT OCW: Linear Algebra",
        url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/video_galleries/video-lectures/",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "Coursera: Prob & Stats for ML & DS",
        url: "https://www.coursera.org/learn/machine-learning-probability-and-statistics",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "Coursera: Applied Calculus with Python",
        url: "https://www.coursera.org/learn/applied-calculus-with-python",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "MIT OCW: Mathematics for CS",
        url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/video_galleries/video-lectures/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL: Intro to Prob. Theory and Stats.",
        url: "https://archive.nptel.ac.in/courses/111/102/111102160/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
    ],
    videoReferences: [
      { 
        title: "NPTEL: NOC Jan 2019: Engineering Mathematics - I | IIT Kharagpur", 
        url: "https://www.youtube.com/playlist?list=PLbRMhDVUMngeVrxtbBz-n8HvP8KAWBpI5", 
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
          question: "Given matrices 𝐴 and 𝐵, when is matrix multiplication 𝐴𝐵 = 𝐵𝐴 valid?",
          options: ["When 𝐴 and 𝐵 are both square matrices of the same size", "When 𝐴 and 𝐵 have the same dimensions", "When 𝐴 and 𝐵 are both diagonal matrices", "When 𝐴 and 𝐵 are invertible"],
          correctAnswer: "When 𝐴 and 𝐵 are both square matrices of the same size",
          explanation: "Matrix multiplication 𝐴𝐵 = 𝐵𝐴 is only valid when 𝐴 and 𝐵 are square matrices of the same size, as matrix multiplication is not commutative in general."
        },
        {
          question: "Which of the following steps is part of Gaussian elimination (row reduction) to solve a system of linear equations?",
          options: ["Replacing rows to achieve a triangular matrix form", "Adding columns to the matrix", "Multiplying each row by zero", "Dividing columns by their mean value"],
          correctAnswer: "Replacing rows to achieve a triangular matrix form",
          explanation: "In Gaussian elimination, rows are manipulated to form an upper triangular matrix, which helps in solving systems of linear equations."
        },
        {
          question: "What condition must a square matrix meet to be invertible?",
          options: ["The determinant is non-zero", "All entries are positive", "The trace of the matrix is zero", "The matrix is diagonal"],
          correctAnswer: "The determinant is non-zero",
          explanation: "For a square matrix to be invertible, its determinant must be non-zero."
        },
        {
          question: "In a vector space, which of the following statements about a set of vectors is true if they are linearly dependent?",
          options: ["One of the vectors can be written as a linear combination of the others", "They span the entire vector space", "They are all orthogonal to each other", "They form a basis for the space"],
          correctAnswer: "One of the vectors can be written as a linear combination of the others",
          explanation: "If a set of vectors is linearly dependent, one of the vectors can be expressed as a linear combination of the others."
        },
        {
          question: "If two events 𝐴 and 𝐵 are independent, which of the following is true?",
          options: ["𝑃(𝐴∩𝐵) = 𝑃(𝐴)+𝑃(𝐵)", "𝑃(𝐴∩𝐵)=𝑃(𝐴)⋅𝑃(𝐵)", "𝑃(𝐴∣𝐵)=0", "𝑃(𝐴∣𝐵)=𝑃(𝐵)"],
          correctAnswer: "𝑃(𝐴∩𝐵)=𝑃(𝐴)⋅𝑃(𝐵)",
          explanation: "If two events 𝐴 and 𝐵 are independent, their joint probability is the product of their individual probabilities: 𝑃(𝐴∩𝐵)=𝑃(𝐴)⋅𝑃(𝐵)."
        },
        {
          question: "Bayes’ Theorem is used to find which of the following?",
          options: ["The conditional probability of an event", "The independence of two events", "The mean of a distribution", "The expected value of a random variable"],
          correctAnswer: "The conditional probability of an event",
          explanation: "Bayes' Theorem is used to calculate the conditional probability of an event based on prior knowledge and new evidence."
        },
        {
          question: "In statistics, correlation measures:",
          options: ["The causation between two variables", "The strength and direction of a linear relationship between two variables", "The variance within a single variable", "The probability of two events occurring together"],
          correctAnswer: "The strength and direction of a linear relationship between two variables",
          explanation: "Correlation measures the strength and direction of the linear relationship between two variables, but does not imply causation."
        }
      ],
      shortAnswer: [
        {
          question: "Define the rank of a matrix. Why is it significant in solving systems of linear equations?",
          maxWords: 120,
          explanation: "The rank of a matrix is the maximum number of linearly independent rows or columns in the matrix. It represents the dimension of the row space or column space of the matrix. The rank is significant in solving systems of linear equations because it determines the consistency of the system. If the rank of the coefficient matrix equals the rank of the augmented matrix, the system is consistent. Additionally, if the rank equals the number of unknowns, the system has a unique solution; otherwise, it may have infinitely many solutions or none."
        },
        {
          question: "Explain the difference between a vector space and a subspace with examples.",
          maxWords: 150,
          explanation: "A vector space is a set of vectors that satisfies certain axioms, such as closure under addition and scalar multiplication, and contains the zero vector. For example, the set of all two-dimensional vectors, R^2, is a vector space. A subspace is a subset of a vector space that itself forms a vector space under the same operations. For instance, the set of all vectors in R^2 that lie on the x-axis forms a subspace of R^2 because it satisfies all the axioms of a vector space."
        },
        {
          question: "How can LU decomposition be used to solve linear equations?",
          maxWords: 120,
          explanation: "LU decomposition factorizes a matrix A into the product of a lower triangular matrix L and an upper triangular matrix U. To solve the system Ax = b, we first solve Ly = b for y using forward substitution, then solve Ux = y for x using back substitution. This method is computationally efficient and particularly useful when solving multiple systems with the same A but different b."
        },
        {
          question: "Explain the concept of a limit and provide an example where a limit does not exist.",
          maxWords: 150,
          explanation: "A limit is a fundamental concept in calculus that describes the value a function approaches as the input approaches a certain point. For example, the limit of x^2 as x approaches 2 is 4. A limit does not exist if the function approaches different values from different directions. For instance, the function f(x) = |x|/x has no limit at x = 0 because it approaches 1 from the right and -1 from the left."
        },
        {
          question: "What is the geometric interpretation of the definite integral?",
          maxWords: 100,
          explanation: "The definite integral of a function f(x) over an interval [a, b] represents the signed area under the curve y = f(x) and above the x-axis, between x = a and x = b. If f(x) is positive, the integral gives the area above the x-axis; if f(x) is negative, it gives the area below the x-axis as a negative value."
        },
        {
          question: "State and explain Bayes’ Theorem with an example.",
          maxWords: 150,
          explanation: "Bayes’ Theorem describes the probability of an event based on prior knowledge of conditions that might affect the event. It is expressed as:\nP(A|B) = (P(B|A) * P(A)) / P(B),\nwhere P(A|B) is the probability of A given B, P(B|A) is the probability of B given A, P(A) is the prior probability of A, and P(B) is the probability of B. For example, if 1% of a population has a disease (P(A) = 0.01), and a test detects it with 99% accuracy (P(B|A) = 0.99), but has a false positive rate of 5% (P(B|A') = 0.05), Bayes’ Theorem can be used to find the probability that a person has the disease given a positive test result."
        },
        {
          question: "Write the logical negation of the statement: 'If it rains, then I will carry an umbrella.'",
          maxWords: 50,
          explanation: "The logical negation of the statement is: 'It rains and I will not carry an umbrella.' In formal logic, the negation of p -> q is p AND not q."
        },
        {
          question: "What is the degree of a vertex in a graph? Give an example.",
          maxWords: 100,
          explanation: "The degree of a vertex in a graph is the number of edges connected to it. For example, in a graph where vertex A is connected to vertices B, C, and D, the degree of A is 3. For undirected graphs, loops are counted twice."
        }
      ],
      longAnswer: [
        {
          question: "Find the inverse of the matrix A = [[2, 3], [1, 4]].",
          maxWords: 150,
          explanation: "To find the inverse of a 2x2 matrix A = [[a, b], [c, d]], the formula is:\nInverse(A) = (1/det(A)) * [[d, -b], [-c, a]],\nwhere det(A) = ad - bc. For A = [[2, 3], [1, 4]], det(A) = (2*4 - 3*1) = 8 - 3 = 5.\nThe inverse is:\n(1/5) * [[4, -3], [-1, 2]] = [[0.8, -0.6], [-0.2, 0.4]]."
        },
        {
          question: "Solve the system of linear equations using LU decomposition:\n2x + 3y = 8\nx + 4y = 10.",
          maxWords: 200,
          explanation: "Step 1: Write the equations in matrix form: A = [[2, 3], [1, 4]], b = [8, 10].\nStep 2: Perform LU decomposition: A = L * U, where L = [[1, 0], [0.5, 1]] and U = [[2, 3], [0, 2.5]].\nStep 3: Solve Ly = b using forward substitution:\nL * y = b -> y = [8, 6].\nStep 4: Solve Ux = y using backward substitution:\nU * x = y -> x = [2, 2].\nThus, the solution is x = 2, y = 2."
        },
        {
          question: "Write Python code to compute the derivative of the function f(x) = x^3 - 5x^2 + 6x at x = 2 using SymPy.",
          maxWords: 200,
          explanation: "from sympy import symbols, diff\nx = symbols('x')\nf = x**3 - 5*x**2 + 6*x\nderivative = diff(f, x)\nvalue_at_2 = derivative.subs(x, 2)\nprint(f'Derivative at x=2: {value_at_2}')"
        },
        {
          question: "Evaluate the integral of f(x) = 3x^2 - 2x + 1 over the interval [1, 3] using Python.",
          maxWords: 200,
          explanation: "from sympy import symbols, integrate\nx = symbols('x')\nf = 3*x**2 - 2*x + 1\nintegral = integrate(f, (x, 1, 3))\nprint(f'Definite integral from 1 to 3: {integral}')"
        },
        {
          question: "A bag contains 3 red, 5 blue, and 2 green balls. What is the probability of picking a red ball? Show your calculations.",
          maxWords: 150,
          explanation: "The total number of balls is 3 (red) + 5 (blue) + 2 (green) = 10.\nThe probability of picking a red ball is:\nP(red) = Number of red balls / Total balls = 3 / 10 = 0.3.\nThus, the probability is 0.3 or 30%."
        },
        {
          question: "Write Python code to calculate the mean and standard deviation of the dataset [10, 15, 20, 25, 30].",
          maxWords: 200,
          explanation: "import numpy as np\ndata = [10, 15, 20, 25, 30]\nmean = np.mean(data)\nstd_dev = np.std(data)\nprint(f'Mean: {mean}, Standard Deviation: {std_dev}')"
        },
        {
          question: "Prove using Python that the sum of degrees of all vertices in a graph is twice the number of edges.",
          maxWords: 200,
          explanation: "from collections import defaultdict\n# Define the graph as an adjacency list\ngraph = {\n\t'A': ['B', 'C'],\n\t'B': ['A', 'C'],\n\t'C': ['A', 'B', 'D'],\n\t'D': ['C']\n}\n# Calculate the degree of each vertex\ndegrees = {node: len(neighbors) for node, neighbors in graph.items()}\ntotal_degrees = sum(degrees.values())\nnum_edges = total_degrees // 2\nprint(f'Sum of degrees: {total_degrees}, Number of edges: {num_edges}')"
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

export default BasicMathematics;
