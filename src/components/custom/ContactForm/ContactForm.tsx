import {
  Mail, MapPin, Phone,
  AlertCircle, ArrowRight, User,
  MessageSquare, CheckCircle, Captions
} from "lucide-react";
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { RedHatBuildingAddressLabel } from "@/utils/data";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "complete">("idle");
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set());

  const getInputClasses = (field: keyof FormData) => {
    const hasError = touched.has(field) && errors[field];
    const base = "w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-offset-2 bg-white text-gray-900 placeholder-gray-500";
    return hasError
      ? `${base} border-red-400 focus:border-red-600 focus:ring-red-600`
      : `${base} border-gray-300 focus:border-blue-500 focus:ring-blue-500`;
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  const validateForm = (data = formData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = "Name is required.";
    else if (data.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!data.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(data.email)) newErrors.email = "Please enter a valid email address";
    if (!data.subject.trim()) newErrors.subject = "Subject is required.";
    else if (data.subject.trim().length < 5) newErrors.subject = "Subject must be at least 5 characters";
    if (!data.message.trim()) newErrors.message = "Message is required.";
    else if (data.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    else if (data.message.length > 4000) newErrors.message = "Message must be less than 4000 characters";
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(e => ({ ...e, [name]: undefined }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched(prev => new Set(prev).add(e.target.name as keyof FormData));

    const field = e.target.name as keyof FormData;
    const val = e.target.value;
    let fieldError = "";
    if (field === "email" && !validateEmail(val)) fieldError = "Please enter a valid email address";
    if (field === "name" && (!val.trim() || val.trim().length < 2)) fieldError = "Name must be at least 2 characters";
    if (field === "subject" && (!val.trim() || val.trim().length < 5)) fieldError = "Subject must be at least 5 characters";
    if (field === "message" && (!val.trim() || val.trim().length < 10)) fieldError = "Message must be at least 10 characters";

    const requiredFields: (keyof FormData)[] = ["name", "email", "subject", "message"];
    if (!val.trim() && requiredFields.includes(field)) {
      fieldError = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    }
    setErrors(e => ({ ...e, [field]: fieldError !== "" ? fieldError : undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    setTouched(new Set(Object.keys(formData) as (keyof FormData)[]));
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      await emailjs.send(

        "service_1yvil4k",
        "template_bwx2q44",
        formData
      )

      setStatus("complete");
      setFormData(initialForm);
      setTouched(new Set());
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {status === 'complete' ? (
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Message Sent Successfully
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you for contacting us.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ):(
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 py-16">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600 mb-1">thomas.daniel.galligan@ibm.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                        <p className="text-gray-600 mb-1">Ask for Thomas Galligan</p>
                        <div>
                          <RedHatBuildingAddressLabel block />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Reach out over Whatsapp</h3>
                        <div>
                          <p className="text-gray-600 mb-1">You will be added to the group on your kid's first day.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Email Response</h4>
                        <p className="text-sm text-blue-800">We typically respond to questions within 24 hours during the working week.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-900 to-blue-700 px-8 py-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Send us a message.</h2>
                    <p className="text-gray-300">Fill out the form below and we'll get back to you soon.</p>
                  </div>
                  <form className="p-8" onSubmit={handleSubmit} noValidate>
                    {status === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3 mb-6">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <span className="text-red-700 font-medium text-sm">Something went wrong. Please try again.</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                        <div className="relative">
                          <User className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className={`${getInputClasses("name")} pl-10`}
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            autoComplete="name"
                          />
                          {touched.has("name") && errors.name && (
                            <p id="name-error" className="text-red-600 text-sm flex items-center mt-2">
                              <AlertCircle className="w-4 h-4 mr-1" /> {errors.name}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address*</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className={`${getInputClasses("email")} pl-10`}
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            autoComplete="email"
                          />
                          {touched.has("email") && errors.email && (
                            <p id="email-error" className="text-red-600 text-sm flex items-center mt-2">
                              <AlertCircle className="w-4 h-4 mr-1" /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className={`${getInputClasses("phone")} pl-10`}
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            autoComplete="tel"
                          />
                          {touched.has("phone") && errors.phone && (
                            <p id="phone-error" className="text-red-600 text-sm flex items-center mt-2">
                              <AlertCircle className="w-4 h-4 mr-1" /> {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject*</label>
                      <div className="relative">
                        <Captions className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className={`${getInputClasses("subject")} pl-10`}
                          placeholder="What's your inquiry?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                        />
                        {touched.has("subject") && errors.subject && (
                          <p id="subject-error" className="text-red-600 text-sm flex items-center mt-2">
                            <AlertCircle className="w-4 h-4 mr-1" /> {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message*</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          className={`${getInputClasses("message")} pl-10`}
                          placeholder="Details about your inquiry?"
                          value={formData.message}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          rows={5}
                          maxLength={4000}
                        />
                        {touched.has("message") && errors.message && (
                          <p id="message-error" className="text-red-600 text-sm flex items-center mt-2">
                            <AlertCircle className="w-4 h-4 mr-1" /> {errors.message}
                          </p>
                        )}
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-sm text-gray-500">Maximum 4000 Characters</p>
                          <p className="text-xs text-gray-400">*Required Fields</p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-sm"
                      disabled={status === "loading"}
                      aria-busy={status === "loading"}
                    >
                      {status === "loading" ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default ContactForm;