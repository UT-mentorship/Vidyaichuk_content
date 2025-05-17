import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network, Github } from "lucide-react";

const AdvancedMathematics = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Advanced Mathematics",
    description: "Deepen your mathematical foundation with this course, exploring eigenvalues, SVD, multivariate calculus, and probability concepts like Markov chains and hypothesis testing. Apply numerical methods and error analysis practically using Python and Jupyter notebooks. Use tools like Desmos for visualization and work on real-world datasets to understand statistical metrics and their applications effectively.",
    outcomes: [
        "Understand concepts like eigenvalues, eigenvectors, diagonalization, SVD, and orthogonal projections along with their applications in Computer Science.",
        "Learn important numerical methods, error analysis, solving recurrences, and least squares problems practically through Python.",
        "Understand the fundamentals of multivariate calculus, PDE, and their applications.",
        "Build on previous probability foundation and understand joint, marginal PDF, Markov chains, random processes, and hypothesis testing."
    ],
    approach: [
        "Use practical exercises through Jupyter notebooks and various libraries to apply the concepts to standard real-life problems or to understand the concepts in a better way.",
        "Utilize online tools like Desmos and Wolfram Alpha to visualize numerical methods and PDE for a clearer understanding.",
        "Find real-life datasets and perform calculations and visualizations of various probability and statistical metrics using Python libraries."
    ],
    courseLinks: [
      {
        name: "Coursera: Linear Algebra from Elementary to Advanced",
        url: "https://www.coursera.org/specializations/linear-algebra-elementary-to-advanced",
        icon: <Book className="mr-2 h-5 w-5" />,
      },
      {
        name: "Coursera: Probability & Statistics for ML & DS",
        url: "https://www.coursera.org/learn/machine-learning-probability-and-statistics",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "MIT OCW: Multivariable Calculus",
        url: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
      {
        name: "Coursera: Differential Equations for Engineers",
        url: "https://www.coursera.org/learn/differential-equations-engineers",
        icon: <Book className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL: Applied Linear Algebra in AI and ML ",
        url: "https://archive.nptel.ac.in/courses/111/105/111105165/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
    ],
    // videoReferences: [
    //   { 
    //     title: "NPTEL: NOC Jan 2019: Engineering Mathematics - I | IIT Kharagpur", 
    //     url: "https://www.youtube.com/playlist?list=PLbRMhDVUMngeVrxtbBz-n8HvP8KAWBpI5", 
    //     platform: "YouTube" 
    //   },
    // ],
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
          question: "What is the geometric interpretation of an eigenvector?",
          options: [
            "A vector that changes direction when transformed",
            "A vector that maintains its direction and only scales when transformed",
            "A vector that rotates 90 degrees when transformed",
            "A vector that becomes zero when transformed"
          ],
          correctAnswer: "A vector that maintains its direction and only scales when transformed",
          explanation: "An eigenvector maintains its direction under transformation, only changing in magnitude by the eigenvalue."
        },
        {
          question: "Which statement about SVD is TRUE?",
          options: [
            "SVD only works for square matrices",
            "SVD can be used for dimensionality reduction",
            "Singular values are always negative",
            "Left and right singular vectors are always equal"
          ],
          correctAnswer: "SVD can be used for dimensionality reduction",
          explanation: "SVD allows dimensionality reduction by keeping only the largest singular values and corresponding vectors."
        },
        {
          question: "For a Markov chain to be ergodic, it must be:",
          options: [
            "Reducible and periodic",
            "Irreducible and aperiodic",
            "Reducible and aperiodic",
            "Irreducible and periodic"
          ],
          correctAnswer: "Irreducible and aperiodic",
          explanation: "Ergodicity requires both irreducibility (can reach any state from any state) and aperiodicity."
        },
        {
          question: "What does 'ill-conditioned' mean in numerical analysis?",
          options: [
            "The system has no solution",
            "Small input changes cause large output changes",
            "The matrix is not square",
            "The system has infinite solutions"
          ],
          correctAnswer: "Small input changes cause large output changes",
          explanation: "An ill-conditioned system is highly sensitive to small input perturbations."
        },
        {
          question: "When does gradient descent converge to a local minimum?",
          options: [
            "Always",
            "When the learning rate is sufficiently small",
            "Only for convex functions",
            "When starting close to the minimum"
          ],
          correctAnswer: "When the learning rate is sufficiently small",
          explanation: "With a sufficiently small learning rate, gradient descent will converge to a local minimum under mild conditions."
        },
        {
          question: "What is the primary purpose of regularization in least squares?",
          options: [
            "Speed up computation",
            "Prevent overfitting",
            "Ensure a unique solution",
            "Make the problem linear"
          ],
          correctAnswer: "Prevent overfitting",
          explanation: "Regularization adds a penalty term to prevent overfitting by controlling parameter magnitudes."
        },
        {
          question: "For joint PDF f(x, y), when are X and Y independent?",
          options: [
            "When f(x, y) = f(x)f(y)",
            "When f(x, y) = f(x) + f(y)",
            "When f(x, y) = max(f(x), f(y))",
            "When f(x, y) = min(f(x), f(y))"
          ],
          correctAnswer: "When f(x, y) = f(x)f(y)",
          explanation: "Random variables are independent if their joint PDF equals the product of their marginal PDFs."
        },
        {
          question: "What characterizes a positive definite matrix?",
          options: [
            "All eigenvalues are positive",
            "Determinant is positive",
            "Trace is positive",
            "All elements are positive"
          ],
          correctAnswer: "All eigenvalues are positive",
          explanation: "A matrix is positive definite if and only if all its eigenvalues are positive."
        },
        {
          question: "In numerical integration, the trapezoidal rule:",
          options: [
            "Is always more accurate than Simpson's rule",
            "Has error O(h)",
            "Has error O(h²)",
            "Is exact for linear functions"
          ],
          correctAnswer: "Is exact for linear functions",
          explanation: "The trapezoidal rule gives exact results for linear functions as it uses linear interpolation."
        },
        {
          question: "A PDE is hyperbolic if:",
          options: [
            "Its characteristics are real and distinct",
            "Its characteristics are complex",
            "It has no characteristics",
            "Its characteristics are real and equal"
          ],
          correctAnswer: "Its characteristics are real and distinct",
          explanation: "Hyperbolic PDEs have real and distinct characteristic curves."
        }
      ],
      shortAnswer: [
        {
          question: "Explain how PCA uses eigendecomposition for dimensionality reduction.",
          maxWords: 100,
          explanation: "PCA uses eigendecomposition for dimensionality reduction by first computing the covariance matrix of the centered data. It then finds eigenvalues and eigenvectors, where the eigenvectors represent the principal components and the eigenvalues indicate the variance explained by each component. The top k components are selected for projection to a lower-dimensional space. PCA is widely used in data compression, visualization, and feature extraction."
        },
        {
          question: "Compare forward and backward error analysis in numerical computations.",
          maxWords: 90,
          explanation: "Forward error is the difference between the true and computed solution, while backward error is the smallest perturbation to the input that results in the computed solution. Forward error is difficult to compute because the true solution is often unknown, whereas backward error is more practical to calculate. For example, in solving Ax=b, backward error is the minimum perturbation ΔA such that (A+ΔA)x̂=b."
        },
        {
          question: "Explain how Markov chains model real-world processes.",
          maxWords: 100,
          explanation: "Markov chains model real-world processes by representing states as system conditions and transitions as state changes. The memoryless property implies that future states depend only on the current state, not on past ones. They are used to model processes like weather patterns, customer behavior, and more. The steady-state distribution describes long-term behavior, and Markov chains have applications in PageRank, weather forecasting, and financial modeling."
        },
        {
          question: "Describe the relationship between eigenvalues and matrix stability.",
          maxWords: 90,
          explanation: "A system is stable if all eigenvalues have negative real parts, marginally stable if the largest real part is zero, and unstable if any eigenvalue has a positive real part. This relationship is important in understanding the stability of systems modeled by differential equations, especially in control systems and dynamics. For example, predator-prey models and mechanical systems are analyzed using eigenvalue stability."
        },
        {
          question: "Explain how least squares optimization works in curve fitting.",
          maxWords: 100,
          explanation: "Least squares optimization minimizes the sum of squared residuals to find the best-fit curve for data. It involves forming normal equations, A^TAx = A^Tb, and solving for the parameters x. This method is used to handle overdetermined systems and can incorporate a regularization term. Statistically, it is interpreted as maximum likelihood estimation under Gaussian noise, making it a fundamental tool in curve fitting."
        }
      ],
      longAnswer: [
        {
          question: "Find the eigenvalues and eigenvectors of A = [[3, 1], [1, 3]]. \nIs A diagonalizable?",
          maxWords: 120,
          explanation: "To find the eigenvalues of A, we solve the characteristic equation |A - λI| = 0, which gives λ² - 6λ + 8 = 0, with eigenvalues λ₁ = 4 and λ₂ = 2. For λ₁ = 4, we solve (3-4)x + y = 0 and x + (3-4)y = 0,\n yielding eigenvector v₁ = [1, 1]. For λ₂ = 2, we solve (3-2)x + y = 0 and x + (3-2)y = 0,\n yielding eigenvector v₂ = [1, -1].\n Since A has distinct eigenvalues, it is diagonalizable with P = [[1, 1], [1, -1]] and D = [[4, 0], [0, 2]]."
        },
        {
          question: "For joint PDF f(x, y) = kxy for 0 ≤ x ≤ 1, 0 ≤ y ≤ 2:\n a) Find k \nb) Calculate marginal PDF f_X(x) \nc) Are X and Y independent?",
          maxWords: 150,
          explanation: "To find k, we use the normalization condition ∫∫f(x, y) dxdy = 1. \nThis gives k∫₀¹∫₀²xy dy dx = 1. \nSolving this results in k = 1/2. \nTo find the marginal PDF f_X(x), we integrate f(x, y) with respect to y: f_X(x) = ∫₀²(1/2)xy dy = x for 0 ≤ x ≤ 1. \n\nFor independence, we calculate f_Y(y) by integrating with respect to x: f_Y(y) = ∫₀¹(1/2)xy dx = y/4 for 0 ≤ y ≤ 2. Since f_X(x)f_Y(y) ≠ f(x, y), X and Y are not independent."
        }
      ]
      ,
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
      {/* <div className="bg-white shadow rounded-lg p-6">
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
      </div> */}


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

export default AdvancedMathematics;
