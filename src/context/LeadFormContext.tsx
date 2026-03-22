"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface LeadFormContextType {
  isOpen: boolean;
  openLeadForm: () => void;
  closeLeadForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextType>({
  isOpen: false,
  openLeadForm: () => {},
  closeLeadForm: () => {},
});

export function useLeadForm() {
  return useContext(LeadFormContext);
}

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadForm = () => setIsOpen(true);
  const closeLeadForm = () => setIsOpen(false);

  return (
    <LeadFormContext.Provider value={{ isOpen, openLeadForm, closeLeadForm }}>
      {children}
    </LeadFormContext.Provider>
  );
}
