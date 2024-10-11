import { useState } from "react";
import youngPartnerImage from "../Assets/yp.jpg";
import familyBlessingImage from "../Assets/fbp.jpg";
import businessBlessingImage from "../Assets/bbp.jpg";
import demo1 from "../Assets/jbp.jpg";
import demo2 from "../Assets/tvc.jpg";
import "./Blessingplan.css";

// Define the structure of the feature item
interface Feature {
  title: string;
  image: string;
  description: string;
}

const FeaturesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const features = [
    {
      title: "Young Partner Plan",
      image: youngPartnerImage,
      description:
        "Young Partners plan has been operated in Jesus Calls since 1985 for the protection and blessing of each child who is enrolled in this plan.",
    },
    {
      title: "Family Blessing Plan",
      image: familyBlessingImage,
      description:
        "Prayers are offered for families to be blessed, enjoy peace, and for every member to be in good health.",
    },
    {
      title: "Business Blessing Plan",
      image: businessBlessingImage,
      description:
        "The Almighty Lord will surely grant you and your business divine protection and prosperity.",
    },
    {
      title: "Job Blessing Plan",
      image: demo1,
      description:
        "The Lord will surely grant you the suitable job and bless your employer, your office, and your co-employees for your sake.",
    },
    {
      title: "Jesus Calls TV Club",
      image: demo2,
      description:
        "Jesus Calls TV Club members play a crucial role in spreading the love of Christ through media.",
    },
  ];

  // Function to open modal and show feature details
  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
    setIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedFeature(null);
  };

  return (
    <div className="features-section">
      <h2 style={{ color: "white" }}>Blessing Plans</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className="feature-box"
            key={index}
            onClick={() => handleFeatureClick(feature)}
          >
            <h3 className="para">{feature.title}</h3>
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-image"
            />
            <p className="para">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Modal popup */}
      {isOpen && selectedFeature && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedFeature.title}</h2>
            <img
              src={selectedFeature.image}
              alt={selectedFeature.title}
              className="modal-image"
            />
            <p>{selectedFeature.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturesSection;
