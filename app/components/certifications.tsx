"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconAward,
  IconCalendar,
  IconCertificate,
  IconExternalLink,
  IconSchool,
  IconBrain,
  IconCode,
  IconDeviceLaptop,
  IconPhoto,
} from "@tabler/icons-react";

// Interface for certification data
interface CertificationData {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string; 
  completionDate?: string;
  credentialURL?: string;
  skills?: string[];
  description: string[];
  backgroundColor?: string; // For customizing the card color
  icon: React.ReactNode; // Icon for the certification
}

// Actual certification data from Omar's resume
const certificationData: CertificationData[] = [
  {
    id: "ml-specialization",
    name: "Machine Learning Specialization",
    issuingOrganization: "DeepLearning.AI",
    issueDate: "July 2024",
    credentialURL: "https://www.coursera.org/account/accomplishments/specialization/YVQ8BGHMHQSX", // Add your actual credential URL if available
    icon: <IconBrain size={30} className="text-green-400" />,
    skills: [
      "Supervised Learning", 
      "Linear Regression", 
      "Logistic Regression", 
      "Neural Networks", 
      "Decision Trees",
      "Unsupervised Learning",
      "Clustering",
      "Anomaly Detection",
      "Recommender Systems",
      "Collaborative Filtering"
    ],
    description: [
      "Learned foundational concepts of supervised learning, including linear regression, logistic regression, neural networks, and decision trees. Gained expertise in unsupervised learning techniques like clustering and anomaly detection to analyze and model unlabeled data.",
      "Applied advanced techniques to build recommender systems, leveraging collaborative filtering and content-based methods. Explored practical applications of deep learning with projects on CNNs, optimization algorithms, and reinforcement learning."
    ],
    backgroundColor: "rgba(16, 185, 129, 0.1)", // Green tint
  },
  {
    id: "nlp-specialization",
    name: "Natural Language Processing (NLP) Specialization",
    issuingOrganization: "DeepLearning.AI",
    issueDate: "November 2024",
    credentialURL: "https://www.coursera.org/account/accomplishments/specialization/2N148T8RM3A2", 
    icon: <IconCode size={30} className="text-blue-400" />,
    skills: [
      "Sentiment Analysis", 
      "Word Vectors",
      "Logistic Regression",
      "Naïve Bayes",
      "Word Embeddings",
      "Hidden Markov Models",
      "RNNs",
      "LSTMs",
      "GRUs",
      "Siamese Networks",
      "Named Entity Recognition",
      "Encoder-Decoder Models",
      "Attention Mechanisms"
    ],
    description: [
      "Mastered techniques including logistic regression, naïve Bayes, and word vectors to implement sentiment analysis, complete analogies, and translate words. Used dynamic programming, hidden Markov models, and word embeddings to build autocorrect, autocomplete, and identify part-of-speech tags for words.",
      "Developed advanced models like recurrent neural networks (RNNs), LSTMs, GRUs, and Siamese networks for sentiment analysis, text generation, and named entity recognition. Applied encoder-decoder models, causal, and self-attention mechanisms for tasks like machine translation, text summarization, and question answering."
    ],
    backgroundColor: "rgba(59, 130, 246, 0.1)", // Blue tint
  },
  {
    id: "cnn-course",
    name: "Convolutional Neural Networks (CNN) Course",
    issuingOrganization: "DeepLearning.AI",
    issueDate: "July 2024",
    credentialURL: "https://www.coursera.org/account/accomplishments/verify/LV3YNQ5SWVGD", // Add your actual credential URL if available
    icon: <IconPhoto size={30} className="text-purple-400" />,
    skills: [
      "CNNs", 
      "ResNets", 
      "MobileNet", 
      "EfficientNet", 
      "Object Detection",
      "YOLO",
      "U-Net",
      "Semantic Segmentation",
      "Face Recognition",
      "One-Shot Learning",
      "Siamese Networks",
      "Neural Style Transfer",
      "Transfer Learning"
    ],
    description: [
      "Built convolutional neural networks (CNNs), including advanced models like Residual Networks (ResNets), MobileNet, and EfficientNet. Applied CNNs to tasks such as object detection, recognition, and landmark detection, leveraging techniques like YOLO and U-Net for semantic segmentation and bounding box predictions.",
      "Explored advanced applications of CNNs, including face recognition using one-shot learning, Siamese networks, and triplet loss. Developed neural style transfer models to generate art and applied convolutional techniques to image, video, and 3D data through transfer learning and data augmentation."
    ],
    backgroundColor: "rgba(167, 139, 250, 0.1)", // Purple tint
  },
  {
    id: "tensorflow-developer",
    name: "TensorFlow Developer Professional Certificate",
    issuingOrganization: "DeepLearning.AI",
    issueDate: "Present",
    credentialURL: undefined, // Add your actual credential URL if available
    icon: <IconDeviceLaptop size={30} className="text-orange-400" />,
    skills: [
      "TensorFlow",
      "Neural Networks",
      "Computer Vision",
      "Data Augmentation",
      "Dropout",
      "NLP",
      "RNNs",
      "GRUs",
      "LSTMs",
      "Text Generation",
      "Sentiment Analysis"
    ],
    description: [
      "Learned best practices for using TensorFlow to train neural networks for computer vision applications. Handled real-world image data and implemented strategies to prevent overfitting, including data augmentation and dropout.",
      "Built natural language processing systems using TensorFlow, applying RNNs, GRUs, and LSTMs to train models on text repositories for tasks such as text generation and sentiment analysis."
    ],
    backgroundColor: "rgba(249, 115, 22, 0.1)", // Orange tint
  },
  {
    id: "docker-kubernetes",
    name: "Docker and Kubernetes Complete Guide",
    issuingOrganization: "Udemy",
    issueDate: "March 2024",
    completionDate: undefined,
    credentialURL: undefined, // Add your actual credential URL if available
    icon: <IconCode size={30} className="text-blue-500" />,
    skills: [
      "Docker",
      "Containerization",
      "Docker Compose",
      "Kubernetes",
      "Container Orchestration",
      "Cluster Management",
      "Deployments",
      "Scaling",
      "Service Configuration",
      "High Availability"
    ],
    description: [
      "Mastered containerization concepts with Docker, including building, deploying, and managing containerized applications, and leveraging Docker Compose for multi-container environments.",
      "Learned orchestration with Kubernetes, including setting up clusters, managing deployments, scaling applications, and configuring services using best practices for high availability and fault tolerance."
    ],
    backgroundColor: "rgba(28, 100, 242, 0.1)", // Docker blue tint
  }
];

const Certifications = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificationData | null>(
    certificationData.length > 0 ? certificationData[0] : null
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="z-50 min-h-screen w-full p-4 md:p-8 lg:p-12 snap-center bg-gradient-to-b from-black/30 to-transparent"
      id="certifications"
    >
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-8 ml-1">My Certifications</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Certificate navigation sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-black/50 border border-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-blue-400">My Credentials</h2>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {certificationData.map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer p-3 rounded-lg transition-all duration-200 ${
                      selectedCert?.id === cert.id
                        ? "bg-blue-900/50 border-l-4 border-blue-400"
                        : "bg-gray-900/50 hover:bg-gray-800/50"
                    }`}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2 flex-1 min-w-0">
                        <IconCertificate 
                          size={20} 
                          className={`${selectedCert?.id === cert.id ? "text-blue-400" : "text-gray-400"} mt-0.5 flex-shrink-0`} 
                        />
                        <div className="min-w-0">
                          <h3 className="font-medium break-words leading-tight pr-2">{cert.name}</h3>
                          <p className="text-xs text-gray-400 mt-1">{cert.issuingOrganization}</p>
                        </div>
                      </div>
                      {selectedCert?.id === cert.id && (
                        <motion.div
                          className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 ml-2 mt-1.5"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate details */}
          <div className="w-full lg:w-2/3">
            {selectedCert ? (
              <div 
                className="bg-black/50 border border-gray-700 rounded-lg p-6 h-full"
                style={{ background: `linear-gradient(to right, rgba(0,0,0,0.7), ${selectedCert.backgroundColor || 'rgba(0,0,0,0.5)'})` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-black/30 flex-shrink-0">
                    {selectedCert.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                      {selectedCert.name}
                    </h2>
                    <p className="text-lg text-gray-300">{selectedCert.issuingOrganization}</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-6">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <IconCalendar className="text-blue-400" size={20} />
                      <div>
                        <span className="text-gray-400 text-sm">Issued</span>
                        <p className="text-white">{selectedCert.issueDate}</p>
                      </div>
                    </div>
                    
                    {selectedCert.completionDate && (
                      <div className="flex items-center gap-2">
                        <IconCalendar className="text-blue-400" size={20} />
                        <div>
                          <span className="text-gray-400 text-sm">Completed</span>
                          <p className="text-white">{selectedCert.completionDate}</p>
                        </div>
                      </div>
                    )}
                    
                    {selectedCert.credentialURL && (
                      <div>
                        <a 
                          href={selectedCert.credentialURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <IconExternalLink size={16} />
                          <span>View Credential</span>
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {/* Description */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">About this certification</h3>
                    <div className="space-y-4">
                      {selectedCert.description.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-200 leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  {selectedCert.skills && selectedCert.skills.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-blue-300 mb-3">Skills Gained</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-blue-900/30 rounded-full text-blue-300 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-black/50 border border-gray-700 rounded-lg p-6 flex items-center justify-center h-60">
                <p className="text-gray-400 italic">No certifications available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications; 