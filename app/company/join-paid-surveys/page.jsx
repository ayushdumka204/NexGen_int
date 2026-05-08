"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Edit2,
  User,
  Globe,
  MessageSquare,
  GraduationCap,
  Briefcase,
  FileText,
  Lock,
} from "lucide-react";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  Gender: "",
  residence: "",
  birthCountry: "",
  birthPlace: "",
  timeBefore18: "",
  Pincode: "",
  firstLanguage: "",
  fluentLanguages: "",
  dialects: "",
  educationLevel: "",
  gradYear: "",
  isStudent: "",
  studentLevel: "",
  degreeSubject: "",
  employmentStatus: "",
  experienceYears: "",
  sector: "",
  jobRole: "",
  agreedToTerms: false,
  agreedToEmail: false,
  pincode: undefined,
};

const STEPS = [
  { id: 0, title: "Profile", icon: User },
  { id: 1, title: "Address", icon: Globe },
  { id: 2, title: "Languages", icon: MessageSquare },
  { id: 3, title: "Education", icon: GraduationCap },
  { id: 4, title: "Work", icon: Briefcase },
  { id: 5, title: "Confirmation", icon: FileText },
];

const MultiStepOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(INITIAL_DATA);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          agreedToTerms: formData.agreedToTerms ? 1 : 0,
        }),
      });

      const result = await response.json();
      console.log("Server Response:", result);

      if (result.status) {
        alert("Profile submitted successfully!");
        setCurrentStep(5);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Check console.");
    }
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep((prev) => prev + 1);
  };
  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };
  const jumpToStep = (index) => setCurrentStep(index);

  const labelClass =
    "block text-sm font-bold text-slate-800 mb-2 tracking-wide";
  const inputClass =
    "w-full h-12 px-4 text-base font-medium text-slate-900 bg-white border border-slate-300 rounded-lg focus:border-[#0060af] focus:ring-2 focus:ring-blue-500/20 transition-all outline-none placeholder:text-slate-400 shadow-sm";
  const selectClass =
    "w-full h-12 px-4 text-base font-medium text-slate-900 bg-white border border-slate-300 rounded-lg focus:border-[#0060af] focus:ring-2 focus:ring-blue-500/20 transition-all outline-none appearance-none cursor-pointer shadow-sm";

  const renderRightPanel = () => {
    if (currentStep === 5) {
      return (
        <div className="h-full bg-primary p-12 flex flex-col justify-center items-center text-center relative overflow-hidden text-white">
          <div className="relative z-10 max-w-md">
            <div className="w-20 h-20 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-900/20">
              <Check className="w-10 h-10" strokeWidth={3} />
            </div>
            <h2 className="text-3xl font-bold mb-4">You're All Set!</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Thank you for completing your profile. Our team will review your
              details and you'll receive a confirmation email shortly.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full bg-[#0f172a] p-12 flex flex-col items-center justify-center relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ y: [0, -30, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[10%] text-blue-400"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[15%] right-[5%] text-indigo-500"
          >
            <svg
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] right-[15%] text-blue-300 opacity-10"
          >
            <svg
              width="90"
              height="90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            >
              <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
            </svg>
          </motion.div>
        </div>

        {/* Content - Fully Centered */}
        <div className="relative z-10 text-center max-w-lg">
          {/* Version Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-10"
          >
            NexGen
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold leading-[1.1] mb-8 tracking-tight">
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
                Human Intuition.
              </span>
            </h1>

            <div className="w-12 h-1 bg-linear-to-r from-blue-500 to-transparent mx-auto mb-8 rounded-full"></div>

            <p className="text-xl font-medium leading-relaxed">
              "Your unique data contributes to a safer, more intelligent world.
              Verify, confirm, and lead the way."
            </p>
          </motion.div>

          <div className="mt-20 flex justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="w-1.5 h-1.5 rounded-full bg-blue-500"
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 text-[9px] font-black uppercase tracking-[0.6em]">
          © 2026 NexGen Academic Research
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <div className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-480 mx-auto px-8 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center w-48">
            <Link href="/">
              <div className="relative h-10 w-32">
                <Image
                  src="/logo.png"
                  alt="NexGen Logo"
                  fill
                  className="object-contain cursor-pointer"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center">
              {STEPS.map((step, index) => {
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                const isLast = index === STEPS.length - 1;

                return (
                  <React.Fragment key={step.id}>
                    <div className="relative flex flex-col items-center group cursor-default">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 z-10
                                        ${
                                          isActive
                                            ? "bg-primary text-white ring-4 ring-blue-50 scale-110"
                                            : isCompleted
                                              ? "bg-primary text-white"
                                              : "bg-slate-200 text-slate-600 border border-slate-400"
                                        }
                                    `}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>

                      <span
                        className={`absolute top-9 text-xs uppercase font-bold tracking-wider whitespace-nowrap transition-colors duration-300 ${isActive ? "text-[#0060af]" : "text-slate-500"}`}
                      >
                        {step.title}
                      </span>
                    </div>

                    {!isLast && (
                      <div className="w-12 sm:w-16 md:w-24 h-1 mx-1 relative">
                        <div className="absolute inset-0 bg-slate-300 rounded-full"></div>
                        <div
                          className={`absolute inset-0 bg-primary rounded-full transition-all duration-500 ease-out origin-left ${index < currentStep ? "scale-x-100" : "scale-x-0"}`}
                        ></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="w-48 flex justify-end">
            <button className="text-sm font-bold hover:text-primary cursor-pointer">
              Help?
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-480 mx-auto min-h-[calc(100vh-80px)]">
        <div className="grid lg:grid-cols-2 h-full">
          <div className="p-8 lg:p-16 flex flex-col justify-between h-full bg-white relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl w-full mx-auto"
              >
                {currentStep === 0 && (
                  <div className="space-y-8">
                    {/* Date Calculation Logic (Put this inside component or keep it here) */}
                    {(() => {
                      const today = new Date();
                      const eighteenYearsAgo = new Date(
                        today.getFullYear() - 18,
                        today.getMonth(),
                        today.getDate(),
                      );
                      const maxDate = eighteenYearsAgo
                        .toISOString()
                        .split("T")[0];

                      const validateEmail = (email) =>
                        email.includes("@") && email.includes(".");

                      return (
                        <>
                          <div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">
                              Let's create your profile
                            </h2>
                            <div className="flex gap-3 bg-blue-50/50 p-4 rounded-lg border border-blue-100 text-sm leading-relaxed">
                              <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                              <p>
                                Enter your name <strong>exactly</strong> as it
                                appears on your government ID.
                              </p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-1">
                              <label className={labelClass}>First Name</label>
                              <input
                                type="text"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateField("firstName", val);
                                }}
                                className={`${inputClass} ${formData.firstName.length > 0 && formData.firstName.length < 3 ? "border-red-500" : ""}`}
                              />
                              {formData.firstName.length > 0 &&
                                formData.firstName.length < 3 && (
                                  <p className="text-xs text-red-500">
                                    Minimum 3 characters required
                                  </p>
                                )}
                            </div>

                            <div className="space-y-1">
                              <label className={labelClass}>Last Name</label>
                              <input
                                type="text"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={(e) =>
                                  updateField("lastName", e.target.value)
                                }
                                className={`${inputClass} ${formData.lastName.length > 0 && formData.lastName.length < 3 ? "border-red-500" : ""}`}
                              />
                              {formData.lastName.length > 0 &&
                                formData.lastName.length < 3 && (
                                  <p className="text-xs text-red-500">
                                    Minimum 3 characters required
                                  </p>
                                )}
                            </div>

                            <div className="space-y-1 md:col-span-2">
                              <label className={labelClass}>
                                Email Address
                              </label>
                              <input
                                type="email"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={(e) =>
                                  updateField("email", e.target.value)
                                }
                                className={`${inputClass} ${formData.email.length > 0 && !validateEmail(formData.email) ? "border-red-500" : ""}`}
                              />
                              {formData.email.length > 0 &&
                                !validateEmail(formData.email) && (
                                  <p className="text-xs text-red-500">
                                    Enter a valid email (must include @ and .)
                                  </p>
                                )}
                            </div>

                            <div className="space-y-1">
                              <label className={labelClass}>
                                Date of Birth
                              </label>
                              <input
                                type="date"
                                max={maxDate}
                                value={formData.dob}
                                onChange={(e) =>
                                  updateField("dob", e.target.value)
                                }
                                className={inputClass}
                              />
                              <p className="text-[10px] ">
                                Must be at least 18 years old
                              </p>
                            </div>

                            <div className="space-y-1">
                              <label className={labelClass}>Gender</label>
                              <div className="relative">
                                <select
                                  value={formData.Gender}
                                  onChange={(e) =>
                                    updateField("Gender", e.target.value)
                                  }
                                  className={`${selectClass} appearance-none w-full pr-10`}
                                >
                                  <option value="" disabled hidden>
                                    Select Gender
                                  </option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Custom">Custom</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                                  <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">
                        Address
                      </h2>
                      <p className="text-base font-medium">
                        Some details can’t be changed later.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <label className={labelClass}>
                          Country of residence
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. India"
                          value={formData.residence}
                          onChange={(e) =>
                            updateField("residence", e.target.value)
                          }
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className={labelClass}>State</label>
                        <input
                          type="text"
                          value={formData.birthPlace}
                          onChange={(e) =>
                            updateField("birthPlace", e.target.value)
                          }
                          className={inputClass}
                          placeholder="e.g. Uttar Pradesh"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className={labelClass}>Pincode/Zip Code</label>
                        <input
                          type="text"
                          placeholder="e.g. 110001"
                          value={formData.Pincode}
                          onChange={(e) =>
                            updateField("Pincode", e.target.value)
                          }
                          className={inputClass}
                          maxLength={6} // Pincode usually 6 digits ka hota hai
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">
                        Languages
                      </h2>
                      <p className="text-base text-slate-500 font-medium">
                        We use this to match you with relevant studies.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <label className={labelClass}>
                          Which languages are you fluent in?
                        </label>
                        <input
                          type="text"
                          value={formData.fluentLanguages}
                          onChange={(e) =>
                            updateField("fluentLanguages", e.target.value)
                          }
                          className={inputClass}
                          placeholder="e.g. English, Hindi"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">
                        Education
                      </h2>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <label className={labelClass}>
                          Highest level of education completed
                        </label>
                        <div className="relative">
                          <select
                            value={formData.educationLevel}
                            onChange={(e) =>
                              updateField("educationLevel", e.target.value)
                            }
                            className={`${selectClass} appearance-none w-full pr-10`}
                          >
                            {/* Placeholder style option */}
                            <option value="" disabled hidden>
                              Select Education Level
                            </option>
                            <option value="Below 10th">Below 10th</option>
                            <option value="10th">
                              10th (Secondary School)
                            </option>
                            <option value="12th">
                              12th (Senior Secondary)
                            </option>
                            <option value="Diploma">Diploma</option>
                            <option value="Undergraduate">
                              Undergraduate (BA/BSc/BCom/BTech)
                            </option>
                            <option value="Postgraduate">
                              Postgraduate (MA/MSc/MCom/MTech)
                            </option>
                            <option value="Doctorate">Doctorate (PhD)</option>
                          </select>

                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {formData.isStudent === "Yes" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-6"
                        >
                          <div className="space-y-1">
                            <label className={labelClass}>
                              Current Degree Subject
                            </label>
                            <input
                              type="text"
                              value={formData.degreeSubject}
                              onChange={(e) =>
                                updateField("degreeSubject", e.target.value)
                              }
                              className={inputClass}
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">
                        Occupation
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {/* Employment Status Dropdown */}
                      <div className="space-y-1">
                        <label className={labelClass}>Employment Status</label>
                        <div className="relative">
                          <select
                            value={formData.employmentStatus}
                            onChange={(e) => {
                              updateField("employmentStatus", e.target.value);

                              if (e.target.value === "Unemployed") {
                                updateField("experienceYears", "0-1 year");
                              }
                            }}
                            className={`${selectClass} appearance-none w-full pr-10`}
                          >
                            <option value="" disabled hidden>
                              Select Employment Status
                            </option>

                            <option value="Employed Full-Time">
                              Employed (Full-Time)
                            </option>
                            <option value="Employed Part-Time">
                              Employed (Part-Time)
                            </option>
                            <option value="Self-Employed">Self-Employed</option>

                            <option value="Student">Student</option>
                            <option value="Homemaker">Homemaker</option>

                            <option value="Unemployed">
                              Unemployed (Looking for work)
                            </option>

                            <option value="Retired">Retired</option>
                            <option value="Freelancer">
                              Freelancer / Gig Worker
                            </option>

                            <option value="Other">Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {formData.employmentStatus !== "Unemployed" && (
                        <div className="space-y-1">
                          <label className={labelClass}>
                            Years of Experience
                          </label>
                          <div className="relative">
                            <select
                              value={formData.experienceYears}
                              onChange={(e) =>
                                updateField("experienceYears", e.target.value)
                              }
                              className={`${selectClass} appearance-none w-full pr-10`}
                            >
                              <option value="" disabled hidden>
                                Select Experience Range
                              </option>
                              <option value="0-1 year">upto to 5 years</option>
                              <option value="1–2 years">6 to 10 years</option>
                              <option value="3–5 years">10 to 15 years</option>
                              <option value="5+ years">15+ years</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="space-y-1">
                        <label className={labelClass}>Industry</label>
                        <input
                          type="text"
                          value={formData.sector}
                          onChange={(e) =>
                            updateField("sector", e.target.value)
                          }
                          className={inputClass}
                          placeholder={
                            formData.employmentStatus === "Unemployed"
                              ? "Desired Sector (e.g. Technology)"
                              : "e.g. Technology, Healthcare"
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-12 font-sans max-w-4xl mx-auto pb-10">
                    {/* Header Section */}
                    <div className="text-center md:text-left border-b border-slate-100 pb-10">
                      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
                        Review Your <span className="text-accent">Profile</span>
                      </h2>
                      <p className="text-lg font-medium max-w-2xl">
                        Please review your details carefully. You can click
                        'Edit' to make changes to any section before final
                        submission.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                      {[
                        {
                          title: "Personal Profile",
                          fields: [
                            {
                              label: "Full Name",
                              val: `${formData.firstName || ""} ${formData.lastName || ""}`.trim(),
                            },
                            { label: "Email Address", val: formData.email },
                            {
                              label: "Date of Birth",
                              val: formData.dob,
                            },
                            { label: "Gender Identity", val: formData.Gender },
                          ],
                          stepIdx: 0,
                        },
                        {
                          title: "Address & Origin",
                          fields: [
                            {
                              label: "Country of residence",
                              val: formData.residence,
                            },
                            {
                              label: "Place of birth",
                              val: formData.birthPlace,
                            },
                            {
                              label: "Pincode",
                              val: formData.Pincode || formData.pincode,
                            }, // Dono check krr liye capital aur small P
                          ],
                          stepIdx: 1,
                        },
                        {
                          title: "Languages",
                          fields: [
                            {
                              label: "First Language",
                              val: formData.firstLanguage,
                            },
                            {
                              label: "Fluent In",
                              val: formData.fluentLanguages,
                            },
                          ],
                          stepIdx: 2,
                        },
                        {
                          title: "Education",
                          fields: [
                            {
                              label: "Highest Qualification",
                              val: formData.educationLevel,
                            },
                            {
                              label: "Currently a Student?",
                              val: formData.isStudent,
                            },
                            ...(formData.isStudent === "Yes"
                              ? [
                                  {
                                    label: "Current Degree Subject",
                                    val: formData.degreeSubject,
                                  },
                                ]
                              : []),
                          ],
                          stepIdx: 3,
                        },
                        {
                          title: "Work Experience",
                          fields: [
                            {
                              label: "Employment Status",
                              val: formData.employmentStatus,
                            },
                            ...(formData.employmentStatus !== "Unemployed"
                              ? [
                                  {
                                    label: "Years of Experience",
                                    val: formData.experienceYears,
                                  },
                                ]
                              : []),
                            { label: "Job Sector", val: formData.sector },
                          ],
                          stepIdx: 4,
                        },
                      ].map((section, idx) => (
                        <div key={idx} className="relative group">
                          {/* Section Header */}
                          <div className="flex justify-between items-end mb-5 px-4">
                            <h3 className="text-sm font-black text-primary uppercase tracking-[0.25em]">
                              {section.title}
                            </h3>
                            <button
                              onClick={() => jumpToStep(section.stepIdx)}
                              className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300 font-bold text-xs uppercase tracking-widest"
                            >
                              Edit <Edit2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover:shadow-[0_10px_30px_-5px_rgba(0,96,175,0.1)] transition-all duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
                              {section.fields.map((f, i) => (
                                <div key={i} className="space-y-2">
                                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                    {f.label}
                                  </p>
                                  <p className="text-xl font-bold text-slate-900 leading-tight">
                                    {/* Safe String Check for TS and empty data */}
                                    {f.val !== undefined &&
                                    f.val !== null &&
                                    String(f.val).trim() !== ""
                                      ? String(f.val)
                                      : "—"}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8">
                      <label className="flex items-start gap-6 cursor-pointer p-10 bg-blue-50/30 rounded-[3rem] border-2 border-dashed border-blue-100">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            className="h-7 w-7 rounded-xl border-2 border-slate-300 text-primary focus:ring-primary transition-all cursor-pointer"
                            checked={formData.agreedToTerms}
                            onChange={(e) =>
                              updateField("agreedToTerms", e.target.checked)
                            }
                          />
                        </div>
                        <span className="text-lg font-medium leading-relaxed">
                          I declare that the information provided is accurate
                          and I agree to
                          <a
                            href="#"
                            className="text-primary hover:underline font-extrabold ml-1"
                          >
                            NexGen's Terms & Conditions
                          </a>
                          .
                        </span>
                      </label>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between max-w-xl mx-auto w-full">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-8 py-3.5 text-base font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer
            ${currentStep === 0 ? "opacity-0 pointer-events-none" : "text-black hover:bg-slate-100"}
        `}
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>

              {currentStep < STEPS.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="px-10 py-3.5 text-base font-bold text-white bg-primary rounded-xl hover:bg-accent transition-all shadow-lg flex items-center gap-2 transform hover:scale-[1.02] cursor-pointer"
                >
                  Next Step <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  // Logic: Agar agreedToTerms false hai toh button disabled rahega
                  disabled={!formData.agreedToTerms}
                  className={`px-10 py-3.5 text-base font-bold text-white rounded-xl shadow-lg flex items-center gap-2 transform transition-all
                ${
                  formData.agreedToTerms
                    ? "bg-slate-900 hover:bg-black hover:scale-[1.02] cursor-pointer"
                    : "bg-slate-300 cursor-not-allowed opacity-70"
                }
            `}
                >
                  Submit Profile <Check className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* --- RIGHT HALF: CONTEXT / VISUALS --- */}
          <div className="hidden lg:block h-full relative">
            <div className="sticky top-20 h-[calc(100vh-80px)]">
              {renderRightPanel()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepOnboarding;
