import React, { useState } from "react";
import { ExternalLink, Youtube, FileText, Code, Book, School, Network, Github } from "lucide-react";

const MachineLearning = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const courseData = {
    title: "Machine Learning",
    description: "Learn the fundamentals of machine learning, including core principles like overfitting, loss functions, and backpropagation, while exploring key algorithms across supervised, unsupervised, and reinforcement learning. Gain hands-on experience applying models to real-world data through projects, Kaggle competitions, and interactive tools like Jupyter Notebooks or Google Colab.",
    outcomes: [
      "Explore core machine learning principles, including loss functions, overfitting/underfitting, backpropagation for neural networks, and the mathematics behind these models.",
      "Gain knowledge of standard algorithms in supervised, unsupervised, and reinforcement learning, along with their use cases and limitations.",
      "Learn to apply machine learning models to real-world data, including techniques for fine-tuning and evaluating models to achieve optimal performance."
    ],
    approach: [
      "Explore Jupyter Notebooks or Google Colab for interactive ML projects and experiment with various libraries.",
      "Participate in Kaggle competitions to enhance your skills and apply learned concepts to global-level challenges.",
      "Develop machine learning projects to solve real-world problems and contribute to initiatives like ML in India's stack project or similar challenges."
    ],
    courseLinks: [
      {
        name: "Coursera: ML Specialization | Stanford",
        url: "https://www.coursera.org/specializations/machine-learning-introduction",
        icon: <Code className="mr-2 h-4 w-4" />,
      },
      {
        name: "NPTEL: Intro to ML | IIT KGP",
        url: "https://archive.nptel.ac.in/courses/106/105/106105152/",
        icon: <School className="mr-2 h-4 w-4" />,
      },
    ],
    videoReferences: [
      {
        title: "FreeCodeCamp: Machine Learning with Python and Scikit-Learn – Full Course",
        url: "https://www.youtube.com/watch?v=hDKCxebp88A",
        platform: "YouTube"
      },
      {
        title: "StatQuest with Josh Starmer: Machine Learning",
        url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF",
        platform: "YouTube"
      },
      {
        title: "Stanford Online: Stanford CS229 - Machine Learning Course by Andrew Ng",
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
          question: "Which of the following is a type of supervised learning?",
          options: ["K-Means Clustering", "Principal Component Analysis", "Linear Regression", "Apriori Algorithm"],
          correctAnswer: "Linear Regression",
          explanation: "Linear Regression is a supervised learning method where the model learns from labeled data to predict outcomes."
        },
        {
          question: "What is the purpose of a validation set in machine learning?",
          options: ["To train the model", "To test the model", "To tune the model's hyperparameters", "To store the model"],
          correctAnswer: "To tune the model's hyperparameters",
          explanation: "The validation set is used to tune the hyperparameters of a model, ensuring that it performs well on unseen data."
        },
        {
          question: "Which of the following is not a common activation function used in neural networks?",
          options: ["ReLU", "Sigmoid", "Tanh", "Euclidean"],
          correctAnswer: "Euclidean",
          explanation: "Euclidean is not an activation function; it refers to a mathematical distance metric."
        },
        {
          question: "Which metric is commonly used to evaluate classification models?",
          options: ["Mean Squared Error", "R-squared", "Accuracy", "Log-Loss"],
          correctAnswer: "Accuracy",
          explanation: "Accuracy is a commonly used metric for classification models, measuring the proportion of correct predictions."
        },
        {
          question: "Which of the following is true about Gradient Descent?",
          options: ["It is used to find the maximum of a function", "It is used to find the minimum of a function", "It is used to find the median of a function", "It is used to find the mode of a function"],
          correctAnswer: "It is used to find the minimum of a function",
          explanation: "Gradient Descent is an optimization algorithm used to minimize a function by iteratively moving in the direction of the steepest descent."
        },
        {
          question: "In logistic regression, the output is:",
          options: ["A continuous value", "A discrete value", "A probability", "A cluster"],
          correctAnswer: "A probability",
          explanation: "Logistic regression outputs probabilities, which can be thresholded to determine discrete class labels."
        },
        {
          question: "What is the main purpose of bagging in ensemble methods?",
          options: ["To reduce bias", "To reduce variance", "To increase bias", "To increase variance"],
          correctAnswer: "To reduce variance",
          explanation: "Bagging reduces variance by averaging predictions from multiple models trained on different subsets of the data."
        },
        {
          question: "Bootstrap sampling is used to:",
          options: ["Increase the size of the dataset", "Decrease the size of the dataset", "Create multiple datasets from the original dataset", "None of the above"],
          correctAnswer: "Create multiple datasets from the original dataset",
          explanation: "Bootstrap sampling creates multiple datasets by sampling with replacement from the original dataset."
        },
        {
          question: "What is the main concept behind the K-Nearest Neighbors algorithm?",
          options: ["It clusters data points based on distance.", "It finds the closest labeled data points to make predictions.", "It calculates a line to separate data classes.", "It assigns a weight to each feature for classification."],
          correctAnswer: "It finds the closest labeled data points to make predictions.",
          explanation: "KNN makes predictions by finding the closest labeled data points to the input and using them for classification or regression."
        },
        {
          question: "What does the 'K' in KNN represent?",
          options: ["Number of classes", "Number of nearest neighbors to consider for classification", "Number of features in the dataset", "Number of test samples"],
          correctAnswer: "Number of nearest neighbors to consider for classification",
          explanation: "The 'K' in KNN represents the number of nearest neighbors considered when making predictions."
        },
        {
          question: "Which of the following terms is associated with SVM and indicates the points closest to the hyperplane?",
          options: ["Kernel points", "Support vectors", "Margin points", "Outliers"],
          correctAnswer: "Support vectors",
          explanation: "Support vectors are the data points closest to the hyperplane and are critical in defining the decision boundary in SVM."
        },
        {
          question: "In SVM, what is the effect of a high C value?",
          options: ["It allows more misclassification to reduce the margin.", "It narrows the margin but penalizes misclassifications heavily.", "It increases the margin width.", "It reduces the impact of support vectors"],
          correctAnswer: "It narrows the margin but penalizes misclassifications heavily.",
          explanation: "A high C value in SVM leads to a narrower margin and places more emphasis on correctly classifying training data, reducing tolerance for misclassification."
        }
      ],
      shortAnswer: [
        {
          question: "Explain the difference between supervised and unsupervised learning.",
          maxWords: 150,
          explanation: "Supervised learning involves training a model using labeled data, where each input is paired with the correct output. The goal is to learn a mapping from inputs to outputs to make predictions on new, unseen data. Examples include classification and regression. Unsupervised learning, on the other hand, deals with unlabeled data. The model tries to identify patterns, structures, or relationships within the data without explicit guidance. Common tasks include clustering (e.g., K-Means) and dimensionality reduction (e.g., PCA)."
        },
        {
          question: "What is overfitting, and how can it be prevented?",
          maxWords: 150,
          explanation: "Overfitting occurs when a machine learning model learns the noise or random fluctuations in the training data instead of the underlying patterns. This leads to high accuracy on the training data but poor performance on unseen data. Overfitting can be prevented by using techniques such as cross-validation, reducing model complexity, applying regularization (e.g., L1 or L2 penalties), using more training data, or employing dropout in neural networks."
        },
        {
          question: "Describe the process of cross-validation and its importance in machine learning.",
          maxWords: 150,
          explanation: "Cross-validation is a technique used to assess the performance of a machine learning model. It involves dividing the dataset into multiple subsets or 'folds'. The model is trained on some folds and validated on the remaining fold. This process is repeated multiple times, and the results are averaged to provide a robust estimate of the model's performance. Cross-validation helps detect overfitting and ensures that the model generalizes well to unseen data."
        },
        {
          question: "What is the bias-variance tradeoff?",
          maxWords: 150,
          explanation: "The bias-variance tradeoff refers to the balance between two sources of error in a machine learning model. Bias represents errors due to overly simplistic models that fail to capture the underlying patterns (underfitting). Variance refers to errors caused by models that are too complex and overly sensitive to fluctuations in the training data (overfitting). The goal is to find a model complexity that minimizes both bias and variance to achieve optimal performance."
        },
        {
          question: "Explain the concept of a confusion matrix and how it is used to evaluate the performance of a classification model.",
          maxWords: 150,
          explanation: "A confusion matrix is a table used to evaluate the performance of a classification model. It displays the counts of true positives (correctly predicted positives), true negatives (correctly predicted negatives), false positives (incorrectly predicted positives), and false negatives (incorrectly predicted negatives). Metrics such as accuracy, precision, recall, and F1-score can be derived from the confusion matrix to provide insights into the model's performance on different classes."
        },
        {
          question: "What are the key differences between a decision tree and a random forest?",
          maxWords: 150,
          explanation: "A decision tree is a single predictive model that splits the data into branches based on feature values to make predictions. It is prone to overfitting, especially with complex datasets. A random forest, on the other hand, is an ensemble method that combines multiple decision trees. Each tree is trained on a random subset of the data and features, and their outputs are aggregated (via voting for classification or averaging for regression). Random forests are more robust and less prone to overfitting compared to individual decision trees."
        },
        {
          question: "Given the following dataset, draw a decision tree by calculating information gain for all the root node.",
          maxWords: 150,
          explanation: "To be added..."
        }
      ],
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
      {/* <div className="bg-white shadow rounded-lg p-6">
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

export default MachineLearning;
