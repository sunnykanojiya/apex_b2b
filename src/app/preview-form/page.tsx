"use client";

import { useState } from "react";
import "./PreviewForm.css";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CHECKOUT_URL =
  "https://courses.apexschoolofbusiness.com/s/preview/courses/AI-Powered-Sales-System-Training-for-B2B-69bf9eb18d8b3db3693ecb84#69b4ee21dec50bb1d4f08d2b";

interface FormData {
  fullName: string;
  designation: string;
  companyName: string;
  workEmail: string;
  phone: string;
  teamSize: string;
}

const initialForm: FormData = {
  fullName: "",
  designation: "",
  companyName: "",
  workEmail: "",
  phone: "",
  teamSize: "",
};

export default function PreviewFormPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // Navigate to checkout URL only if the submission was fully successful
        window.location.href = CHECKOUT_URL;
      } else {
        console.error("Failed to submit form to Google Sheets");
        setError("There was an error saving your structure preview request. Please try again. Or directly connect to support if the issue persists.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="preview-form-page">
        <div className="preview-form-container">
          {/* Content */}
          <div className="preview-form-card">
            <h1 className="preview-form-title">Access Program Preview</h1>
            <p className="preview-form-subtitle">
              Enter your details to view the program structure and see how it fits your team.
              <br />
              Our team will also connect with you to understand your requirements and guide you further.
            </p>

            {/* Form */}
            <form className="preview-form" onSubmit={handleSubmit}>
              <div className="preview-form-grid">
                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-fullName">Full Name</label>
                  <input
                    id="pf-fullName"
                    className="preview-form-input"
                    type="text"
                    name="fullName"
                    placeholder="Enter your name"
                    value={form.fullName}
                    onChange={handleChange}
                    pattern="^[A-Za-z\s]+$"
                    title="Please enter a valid name (letters and spaces only)"
                    required
                  />
                </div>

                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-designation">Designation</label>
                  <input
                    id="pf-designation"
                    className="preview-form-input"
                    type="text"
                    name="designation"
                    placeholder="Your role in the company"
                    value={form.designation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-companyName">Company Name</label>
                  <input
                    id="pf-companyName"
                    className="preview-form-input"
                    type="text"
                    name="companyName"
                    placeholder="Enter your company name"
                    value={form.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-workEmail">Work Email ID</label>
                  <input
                    id="pf-workEmail"
                    className="preview-form-input"
                    type="email"
                    name="workEmail"
                    placeholder="Enter your official email"
                    value={form.workEmail}
                    onChange={handleChange}
                    pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address"
                    required
                  />
                </div>

                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-phone">Phone Number</label>
                  <input
                    id="pf-phone"
                    className="preview-form-input"
                    type="tel"
                    name="phone"
                    placeholder="Enter your contact number"
                    value={form.phone}
                    onChange={handleChange}
                    pattern="^\d{10}$"
                    title="Phone number must be exactly 10 digits"
                    required
                  />
                </div>

                <div className="preview-form-field">
                  <label className="preview-form-label" htmlFor="pf-teamSize">Team Size</label>
                  <input
                    id="pf-teamSize"
                    className="preview-form-input"
                    type="text"
                    name="teamSize"
                    placeholder="How many employees are you planning to enroll?"
                    value={form.teamSize}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <p className="preview-form-disclaimer">
                We will use your contact details only to share program details and assist you with next steps. Your information will remain confidential and will not be shared with any third party.
              </p>

              <button type="submit" className="preview-form-submit" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Unlock Program Preview"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {error && (
        <div className="preview-form-error-modal">
          <div className="preview-form-error-content">
            <h3 className="preview-form-error-title">Submission Failed</h3>
            <p className="preview-form-error-text">{error}</p>
            <button className="preview-form-error-close" onClick={() => setError(null)}>
              Try Again
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
