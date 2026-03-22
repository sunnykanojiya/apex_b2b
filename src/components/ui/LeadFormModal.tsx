"use client";

import { useState } from "react";
import { useLeadForm } from "@/context/LeadFormContext";
import "./LeadFormModal.css";

const CHECKOUT_URL =
  "https://courses.apexschoolofbusiness.com/t/p/checkout/V4/course/69b4e7024a302be139825d6c/p1?callback_url=/courses/69b4e7024a302be139825d6c";

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

export default function LeadFormModal() {
  const { isOpen, closeLeadForm } = useLeadForm();
  const [form, setForm] = useState<FormData>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open checkout in new tab
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
    // Reset & close
    setForm(initialForm);
    closeLeadForm();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLeadForm();
    }
  };

  return (
    <div
      className={`lead-modal__overlay${isOpen ? " open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="lead-modal" role="dialog" aria-modal="true">
        {/* Close */}
        <button
          type="button"
          className="lead-modal__close"
          onClick={closeLeadForm}
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <h2 className="lead-modal__title">Access Program Preview</h2>
        <p className="lead-modal__subtitle">
          Enter your details to view the program structure and see how it fits your team.
          <br />
          Our team will also connect with you to understand your requirements and guide you further.
        </p>

        {/* Form */}
        <form className="lead-modal__form" onSubmit={handleSubmit}>
          <div className="lead-modal__field">
            <label className="lead-modal__label" htmlFor="lf-fullName">Full Name</label>
            <input
              id="lf-fullName"
              className="lead-modal__input"
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="lead-modal__field">
            <label className="lead-modal__label" htmlFor="lf-designation">Designation</label>
            <input
              id="lf-designation"
              className="lead-modal__input"
              type="text"
              name="designation"
              placeholder="Your role in the company"
              value={form.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="lead-modal__field">
            <label className="lead-modal__label" htmlFor="lf-companyName">Company Name</label>
            <input
              id="lf-companyName"
              className="lead-modal__input"
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={form.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="lead-modal__field">
            <label className="lead-modal__label" htmlFor="lf-workEmail">Work Email ID</label>
            <input
              id="lf-workEmail"
              className="lead-modal__input"
              type="email"
              name="workEmail"
              placeholder="Enter your official email"
              value={form.workEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="lead-modal__field">
            <label className="lead-modal__label" htmlFor="lf-phone">Phone Number</label>
            <input
              id="lf-phone"
              className="lead-modal__input"
              type="tel"
              name="phone"
              placeholder="Enter your contact number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="lead-modal__field">
            <label className="lead-modal__label" htmlFor="lf-teamSize">Team Size</label>
            <input
              id="lf-teamSize"
              className="lead-modal__input"
              type="text"
              name="teamSize"
              placeholder="How many employees are you planning to enroll?"
              value={form.teamSize}
              onChange={handleChange}
              required
            />
          </div>

          <p className="lead-modal__disclaimer">
            We will use your contact details only to share program details and assist you with next steps. Your information will remain confidential and will not be shared with any third party.
          </p>

          <button type="submit" className="lead-modal__submit">
            Unlock Program Preview
          </button>
        </form>
      </div>
    </div>
  );
}
