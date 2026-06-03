import "./styles/Projects.css";

const projects = [
  {
    number: "01",
    title: "Sentiment Analysis on Amazon Food Reviews",
    category: "NLP / Machine Learning",
    description:
      "Built a text preprocessing pipeline using tokenization, lemmatization, and TF-IDF. Applied Naive Bayes and XGBoost for sentiment classification, achieving 85% F1 score. Enhanced performance to 89% F1 by leveraging pre-trained models (RoBERTa, VADER) and extracted insights to refine product documentation.",
    tools: ["Naive Bayes", "XGBoost", "RoBERTa", "VADER", "TF-IDF", "Python"],
  },
  {
    number: "02",
    title: "AI-Powered E-Commerce Product Recommender",
    category: "Recommendation System",
    description:
      "Developed a hybrid recommendation system using collaborative and content-based filtering, achieving 88% precision. Deployed via FastAPI and Docker on AWS. Assessed model performance through A/B testing, resulting in a 15% uplift in customer engagement and optimized scalability for 1M+ users.",
    tools: [
      "Collaborative Filtering",
      "FastAPI",
      "Docker",
      "AWS",
      "A/B Testing",
    ],
  },
  {
    number: "03",
    title: "AI-Driven Customer Churn Predictor",
    category: "Predictive Modeling / ML",
    description:
      "Led a capstone project building an AI-driven customer churn predictor with 89% accuracy. Applied predictive modeling techniques using Scikit-learn and TensorFlow, along with NLP and MLOps best practices on AWS with Docker.",
    tools: ["Scikit-learn", "TensorFlow", "NLP", "MLOps", "AWS", "Docker"],
  },
];

const Projects = () => {
  return (
    <div className="projects-section section-container" id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>
            <h3>{project.title}</h3>
            <div className="project-category">{project.category}</div>
            <p className="project-description">{project.description}</p>
            <div className="project-tools-label">Tools & Tech</div>
            <div className="project-tags">
              {project.tools.map((tool) => (
                <span className="project-tag" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
