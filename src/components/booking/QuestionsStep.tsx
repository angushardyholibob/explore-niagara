"use client";

import { useState, useEffect } from "react";
import { ClipboardList, Loader2 } from "lucide-react";
import { fetchBookingQuestions } from "@/lib/holibob/client-api";
import type { BookingQuestion } from "@/lib/holibob/types";

interface QuestionsStepProps {
  bookingId: string;
  onComplete: () => void;
}

export default function QuestionsStep({
  bookingId,
  onComplete,
}: QuestionsStepProps) {
  const [questions, setQuestions] = useState<BookingQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const result = await fetchBookingQuestions(bookingId);
        setQuestions(result.questions);

        // Pre-fill answers from autoComplete or existing values
        const prefilled: Record<string, string> = {};
        result.questions.forEach((q) => {
          if (q.answerValue) prefilled[q.id] = q.answerValue;
          else if (q.autoCompleteValue) prefilled[q.id] = q.autoCompleteValue;
        });
        setAnswers(prefilled);
      } catch (err) {
        console.error("Failed to load questions:", err);
        setError("Unable to load booking details.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [bookingId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Build lead passenger name from given + family name questions
      let givenName = "";
      let familyName = "";

      questions.forEach((q) => {
        const format = q.dataFormat?.toUpperCase() || "";
        const type = q.type?.toUpperCase() || "";
        if (format === "GIVEN_NAME" || type === "NAME_GIVEN") {
          givenName = answers[q.id] || "";
        }
        if (format === "FAMILY_NAME" || type === "NAME_FAMILY") {
          familyName = answers[q.id] || "";
        }
      });

      const leadPassengerName =
        givenName && familyName
          ? `${familyName.toUpperCase()}, ${givenName}`
          : undefined;

      // Format phone numbers — prepend +1 for US if needed
      const answerList = questions
        .filter((q) => answers[q.id])
        .map((q) => {
          let value = answers[q.id];
          const format = q.dataFormat?.toUpperCase() || "";
          if (format === "PHONE" || format === "PHONE_NUMBER") {
            if (!value.startsWith("+")) {
              value = `+1${value.replace(/^0/, "")}`;
            }
          }
          return { questionId: q.id, value };
        });

      const result = await fetchBookingQuestions(bookingId, {
        leadPassengerName,
        answerList,
      });

      if (result.booking.canCommit) {
        onComplete();
      } else {
        // Check if there are new unanswered questions
        setQuestions(result.questions);
        setError(
          "Please complete all required fields before continuing."
        );
      }
    } catch (err) {
      console.error("Failed to submit answers:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Loader2 className="w-8 h-8 animate-spin mb-3" />
        <p>Loading booking details...</p>
      </div>
    );
  }

  // Group questions by level
  const bookingQs = questions.filter((q) => q.level === "booking");
  const personQs = questions.filter((q) => q.level === "person");
  const availQs = questions.filter((q) => q.level === "availability");

  // Get unanswered required questions
  const unansweredRequired = questions.filter(
    (q) => q.isRequired && !answers[q.id] && !q.answerValue
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 mb-6">
        <ClipboardList className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-dark">Your details</h2>
      </div>

      {/* Booking-level questions (lead passenger) */}
      {bookingQs.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bookingQs.map((q) => (
              <QuestionField
                key={q.id}
                question={q}
                value={answers[q.id] || ""}
                onChange={(val) =>
                  setAnswers((prev) => ({ ...prev, [q.id]: val }))
                }
              />
            ))}
          </div>
        </div>
      )}

      {/* Person-level questions */}
      {personQs.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
            Traveler Details
          </h3>
          {/* Group by personId */}
          {Object.entries(
            personQs.reduce(
              (acc, q) => {
                const key = q.personId || "unknown";
                if (!acc[key]) acc[key] = { label: q.personLabel || "Traveler", questions: [] };
                acc[key].questions.push(q);
                return acc;
              },
              {} as Record<string, { label: string; questions: BookingQuestion[] }>
            )
          ).map(([personId, group]) => (
            <div key={personId} className="mb-6">
              <p className="text-sm font-medium text-dark mb-3">
                {group.label}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.questions.map((q) => (
                  <QuestionField
                    key={q.id}
                    question={q}
                    value={answers[q.id] || ""}
                    onChange={(val) =>
                      setAnswers((prev) => ({ ...prev, [q.id]: val }))
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Availability-level questions */}
      {availQs.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
            Additional Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availQs.map((q) => (
              <QuestionField
                key={q.id}
                question={q}
                value={answers[q.id] || ""}
                onChange={(val) =>
                  setAnswers((prev) => ({ ...prev, [q.id]: val }))
                }
              />
            ))}
          </div>
        </div>
      )}

      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      <button
        type="submit"
        disabled={submitting || unansweredRequired.length > 0}
        className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {submitting ? "Saving..." : "Continue to Payment"}
      </button>
    </form>
  );
}

function QuestionField({
  question,
  value,
  onChange,
}: {
  question: BookingQuestion;
  value: string;
  onChange: (value: string) => void;
}) {
  const format = question.dataFormat?.toUpperCase() || "";

  const selectId = `question-${question.id}`;

  // Dropdown for questions with available options
  if (question.availableOptions && question.availableOptions.length > 0) {
    return (
      <div>
        <label htmlFor={selectId} className="block text-sm font-medium text-dark mb-1.5">
          {question.label}
          {question.isRequired && (
            <span className="text-red-400 ml-0.5">*</span>
          )}
        </label>
        <select
          id={selectId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm bg-white"
          required={question.isRequired}
        >
          <option value="">Select...</option>
          {question.availableOptions.map((ao) => (
            <option key={ao.value} value={ao.value}>
              {ao.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Determine input type and helper text
  let inputType = "text";
  let placeholder = "";
  let helperText = "";

  if (format === "EMAIL") {
    inputType = "email";
    placeholder = "name@example.com";
  } else if (format === "PHONE" || format === "PHONE_NUMBER") {
    inputType = "tel";
    placeholder = "+1 555 123 4567";
    helperText = "Include country code (e.g., +1 for US/Canada)";
  } else if (format === "GIVEN_NAME" || question.type?.toUpperCase() === "NAME_GIVEN") {
    placeholder = "First name";
  } else if (format === "FAMILY_NAME" || question.type?.toUpperCase() === "NAME_FAMILY") {
    placeholder = "Last name / surname";
  } else if (question.dataType === "DATE") {
    inputType = "date";
  }

  const inputId = `question-${question.id}`;

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-dark mb-1.5">
        {question.label}
        {question.isRequired && (
          <span className="text-red-400 ml-0.5">*</span>
        )}
      </label>
      <input
        id={inputId}
        type={inputType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm"
        placeholder={placeholder || question.label}
        required={question.isRequired}
        aria-describedby={helperText ? `${inputId}-hint` : undefined}
      />
      {helperText && (
        <p id={`${inputId}-hint`} className="text-xs text-gray-400 mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
}
