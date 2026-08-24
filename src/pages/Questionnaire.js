import React, { useState } from 'react';
import './Questionnaire.css';

function Questionnaire() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    address: '',
    email: '',
    phone: '',
    socialMedia: '',
    preferredContact: '',

    // Current Situation
    currentIssues: '',
    changesNeeded: '',
    keepSame: '',

    // Intended Use
    primaryUse: '',
    goals: '',
    usersOfSpace: '',
    eventsHosted: '',
    multifunctional: '',
    smartHome: '',
    storageNeeds: '',
    accessibilityNeeds: '',

    // Design Style
    likedStyles: '',
    dislikedStyles: '',
    visualExamples: '',

    // Client Fit
    likedAboutWork: '',
    workingPreference: '',
    decisionSpeed: '',
    softwareComfort: '',

    // Budget
    maxBudget: '',
    budgetFlexibility: '',

    // Additional Notes
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Questionnaire submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        address: '',
        email: '',
        phone: '',
        socialMedia: '',
        preferredContact: '',
        currentIssues: '',
        changesNeeded: '',
        keepSame: '',
        primaryUse: '',
        goals: '',
        usersOfSpace: '',
        eventsHosted: '',
        multifunctional: '',
        smartHome: '',
        storageNeeds: '',
        accessibilityNeeds: '',
        likedStyles: '',
        dislikedStyles: '',
        visualExamples: '',
        likedAboutWork: '',
        workingPreference: '',
        decisionSpeed: '',
        softwareComfort: '',
        maxBudget: '',
        budgetFlexibility: '',
        additionalNotes: ''
      });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="questionnaire">
      <div className="container">
        <h2>Interior Design New Client Questionnaire</h2>
        <p className="questionnaire-intro">Help us understand your vision. Please complete this questionnaire so we can provide you with the best design recommendations.</p>

        {submitted ? (
          <div className="success-message">
            <h3>Thank You!</h3>
            <p>Your questionnaire has been received. We'll review your responses and contact you soon to discuss your project.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="questionnaire-form">
            {/* CONTACT INFORMATION SECTION */}
            <section className="form-section">
              <h3>Contact Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address/Location</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="socialMedia">Social Media Profiles (if relevant)</label>
                  <input
                    type="text"
                    id="socialMedia"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleChange}
                    placeholder="e.g., @instagram_handle"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preferredContact">Preferred Method of Contact *</label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text/SMS</option>
                  </select>
                </div>
              </div>
            </section>

            {/* ASSESS CURRENT SITUATION SECTION */}
            <section className="form-section">
              <h3>Assess the Current Situation</h3>
              
              <div className="form-group">
                <label htmlFor="currentIssues">What are the current issues with the space? *</label>
                <textarea
                  id="currentIssues"
                  name="currentIssues"
                  value={formData.currentIssues}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="changesNeeded">What needs to be changed/altered? *</label>
                <textarea
                  id="changesNeeded"
                  name="changesNeeded"
                  value={formData.changesNeeded}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="keepSame">What can be kept the same/maintained?</label>
                <textarea
                  id="keepSame"
                  name="keepSame"
                  value={formData.keepSame}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>
            </section>

            {/* INTENDED USE SECTION */}
            <section className="form-section">
              <h3>Determine Intended Use of Space</h3>
              
              <div className="form-group">
                <label htmlFor="primaryUse">What is the primary use of the space? *</label>
                <input
                  type="text"
                  id="primaryUse"
                  name="primaryUse"
                  value={formData.primaryUse}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="goals">What are your goals for this space? *</label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="usersOfSpace">Who will be using the space? *</label>
                <textarea
                  id="usersOfSpace"
                  name="usersOfSpace"
                  value={formData.usersOfSpace}
                  onChange={handleChange}
                  rows="3"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="eventsHosted">Do you host events or programs? How do you use this space in the evening?</label>
                <textarea
                  id="eventsHosted"
                  name="eventsHosted"
                  value={formData.eventsHosted}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="multifunctional">Is this a multifunctional space (e.g., home gym/office)? If so, describe:</label>
                <textarea
                  id="multifunctional"
                  name="multifunctional"
                  value={formData.multifunctional}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="smartHome">Do you need smart home integration?</label>
                <select
                  id="smartHome"
                  name="smartHome"
                  value={formData.smartHome}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">Unsure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="storageNeeds">What are your storage pain points?</label>
                <textarea
                  id="storageNeeds"
                  name="storageNeeds"
                  value={formData.storageNeeds}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="accessibilityNeeds">Are there any technical or accessibility needs?</label>
                <textarea
                  id="accessibilityNeeds"
                  name="accessibilityNeeds"
                  value={formData.accessibilityNeeds}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
            </section>

            {/* DESIGN STYLE SECTION */}
            <section className="form-section">
              <h3>Assess Design Style</h3>
              
              <div className="form-group">
                <label htmlFor="likedStyles">Which design style(s) do you like? *</label>
                <textarea
                  id="likedStyles"
                  name="likedStyles"
                  value={formData.likedStyles}
                  onChange={handleChange}
                  rows="3"
                  placeholder="e.g., Modern, Traditional, Minimalist, Eclectic, etc."
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="dislikedStyles">Which design style(s) do you dislike?</label>
                <textarea
                  id="dislikedStyles"
                  name="dislikedStyles"
                  value={formData.dislikedStyles}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="visualExamples">Can you share some visual examples of what you envision for your space?</label>
                <textarea
                  id="visualExamples"
                  name="visualExamples"
                  value={formData.visualExamples}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Describe images, Pinterest boards, or references you like"
                ></textarea>
              </div>
            </section>

            {/* CLIENT FIT SECTION */}
            <section className="form-section">
              <h3>Determine Client Fit</h3>
              
              <div className="form-group">
                <label htmlFor="likedAboutWork">What did you like about my work and how do you see that incorporated into your space? *</label>
                <textarea
                  id="likedAboutWork"
                  name="likedAboutWork"
                  value={formData.likedAboutWork}
                  onChange={handleChange}
                  rows="3"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="workingPreference">How would you prefer to work together? *</label>
                <select
                  id="workingPreference"
                  name="workingPreference"
                  value={formData.workingPreference}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="very_involved">Very involved in all decisions</option>
                  <option value="collaborative">Collaborative approach</option>
                  <option value="more_handoff">More hands-off, trust your expertise</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="decisionSpeed">What's your decision-making speed approach? *</label>
                <select
                  id="decisionSpeed"
                  name="decisionSpeed"
                  value={formData.decisionSpeed}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="fast">Fast/decisive</option>
                  <option value="moderate">Moderate</option>
                  <option value="slow">Slow/hesitant</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="softwareComfort">What's your comfort level with project management software? *</label>
                <select
                  id="softwareComfort"
                  name="softwareComfort"
                  value={formData.softwareComfort}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="very_comfortable">Very comfortable</option>
                  <option value="somewhat_comfortable">Somewhat comfortable</option>
                  <option value="prefer_traditional">Prefer traditional methods (phone, email)</option>
                </select>
              </div>
            </section>

            {/* BUDGET SECTION */}
            <section className="form-section">
              <h3>Determine Budget</h3>
              
              <div className="form-group">
                <label htmlFor="maxBudget">What is your maximum budget for this project? *</label>
                <input
                  type="text"
                  id="maxBudget"
                  name="maxBudget"
                  value={formData.maxBudget}
                  onChange={handleChange}
                  placeholder="e.g., $15,000 - $25,000"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="budgetFlexibility">Are you open to cutting down on your ideal vision to achieve your budget? *</label>
                <select
                  id="budgetFlexibility"
                  name="budgetFlexibility"
                  value={formData.budgetFlexibility}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes, absolutely</option>
                  <option value="somewhat">Somewhat flexible</option>
                  <option value="no">No, budget is flexible not vision</option>
                </select>
              </div>
            </section>

            {/* ADDITIONAL NOTES SECTION */}
            <section className="form-section">
              <h3>Additional Information</h3>
              
              <div className="form-group">
                <label htmlFor="additionalNotes">Any other questions or details to note that might come up during your pre-consultation?</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>
            </section>

            <button type="submit" className="submit-btn">Submit Questionnaire</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Questionnaire;
