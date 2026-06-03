import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>DIGI3 Inc, Remote, India</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing AI-powered chatbot applications for SMS, WhatsApp, and
              RCS platforms. Achieved 91% intent classification accuracy with
              NLP models and increased automated customer query resolution by
              45%, improving engagement rates by 35%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence Engineer</h4>
                <h5>Micro 1, Toronto, Canada</h5>
              </div>
              <h3>2024–Pres</h3>
            </div>
            <p>
              Built backend microservices using Python, FastAPI, and Docker to
              process 6,000+ monthly financial documents via Google Document AI
              OCR. Delivered a SQL-RAG chatbot and designed intelligent agents
              using LangChain and GPT-4 Vision, contributing to a $1M contract
              renewal.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>Sahana Defence Limited, India</h5>
              </div>
              <h3>2019–2022</h3>
            </div>
            <p>
              Developed an AI-powered crop health monitoring system by fine-tuning
              VGG16 and ResNet-50 models on 20TB of satellite imagery, achieving
              94% accuracy. Reduced model drift by 60% with automated MLflow
              retraining workflows, and deployed on AWS using Docker and Flask.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
