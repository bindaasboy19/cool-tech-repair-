"use client";

import { useState } from "react";
import { CalendarDays, Send } from "lucide-react";
import { services } from "@/lib/site";

type LeadFormProps = {
  variant: "contact" | "booking";
};

type FormState = {
  type: "idle" | "success" | "error";
  message: string;
};

const fieldClassName =
  "w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

const labelClassName =
  "mb-2 block text-sm font-semibold tracking-wide text-stone-700";

export function LeadForm({ variant }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<FormState>({
    type: "idle",
    message: ""
  });

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
  const isConfigured =
    Boolean(endpoint) && !endpoint.includes("your-form-id");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      setState({
        type: "error",
        message:
          "Formspree is not configured yet. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to activate submissions."
      });
      return;
    }

    setIsSubmitting(true);
    setState({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "_subject",
      variant === "booking"
        ? "New booking request from Cool Tech Repair website"
        : "New contact enquiry from Cool Tech Repair website"
    );
    formData.append("formType", variant);
    formData.append("source", "cool-tech-repair-website");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setState({
        type: "success",
        message:
          variant === "booking"
            ? "Your service request has been sent. We will contact you shortly."
            : "Your message has been sent. We will get back to you soon."
      });
    } catch {
      setState({
        type: "error",
        message:
          "Something went wrong while sending your request. Please call or WhatsApp us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const isBooking = variant === "booking";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[2rem] border border-brand-100 bg-white p-6 shadow-[0_20px_60px_rgba(29,19,13,0.06)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor={`${variant}-name`} className={labelClassName}>
            Name
          </label>
          <input
            id={`${variant}-name`}
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className={fieldClassName}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${variant}-phone`} className={labelClassName}>
            Phone Number
          </label>
          <input
            id={`${variant}-phone`}
            name="phone"
            type="tel"
            required
            placeholder="+91"
            className={fieldClassName}
          />
        </div>
      </div>

      {isBooking ? (
        <>
          <div>
            <label htmlFor={`${variant}-address`} className={labelClassName}>
              Address
            </label>
            <input
              id={`${variant}-address`}
              name="address"
              type="text"
              required
              placeholder="Enter your service address"
              className={fieldClassName}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={`${variant}-service`} className={labelClassName}>
                Service Type
              </label>
              <select
                id={`${variant}-service`}
                name="serviceType"
                required
                defaultValue=""
                className={fieldClassName}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor={`${variant}-date`} className={labelClassName}>
                Preferred Date
              </label>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
                <input
                  id={`${variant}-date`}
                  name="preferredDate"
                  type="date"
                  className={`${fieldClassName} pr-12`}
                />
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div>
        <label htmlFor={`${variant}-message`} className={labelClassName}>
          Message
        </label>
        <textarea
          id={`${variant}-message`}
          name="message"
          required
          rows={isBooking ? 5 : 4}
          placeholder={
            isBooking
              ? "Describe the appliance issue, landmark, and preferred time."
              : "Tell us which appliance needs help and how we can contact you."
          }
          className={`${fieldClassName} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-5 w-5" />
        {isSubmitting
          ? "Sending..."
          : isBooking
            ? "Submit Booking Request"
            : "Send Message"}
      </button>

      <p className="text-xs leading-6 text-stone-500">
        By submitting this form, you allow Cool Tech Repair to contact you by
        call or WhatsApp regarding your service request.
      </p>

      {state.message ? (
        <div
          className={`rounded-2xl px-4 py-3 text-sm font-medium ${
            state.type === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700"
          }`}
        >
          {state.message}
        </div>
      ) : null}
    </form>
  );
}
