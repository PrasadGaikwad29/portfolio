import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";

const initialForm = { name: "", email: "", message: "" };

// ✅ API BASE URL (PRODUCTION + LOCAL SUPPORT)
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const contactItems = [
  {
    icon: MdEmail,
    label: "Email",
    value: "prasadgaikwad099@gmail.com",
    href: "mailto:prasadgaikwad099@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/prasadgaikwad29/",
    href: "https://www.linkedin.com/in/prasadgaikwad29/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "https://github.com/prasadGaikwad29",
    href: "https://github.com/prasadGaikwad29",
  },
];

function Contact() {
  const { ref: animRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.contact || {},
  );

  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch({ type: "ui/setActiveSection", payload: "contact" });
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-80px 0px -50% 0px",
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [dispatch]);

  useEffect(() => {
    return () => dispatch({ type: "contact/reset" });
  }, [dispatch]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errors.email = "Enter valid email";
    if (!form.message.trim()) errors.message = "Message is required";
    else if (form.message.length < 10) errors.message = "Too short";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length) return setFormErrors(errors);

    try {
      dispatch({ type: "contact/loading" });

      const res = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      dispatch({ type: "contact/success" });

      toast.success("Email sent successfully!");

      setForm(initialForm);

      setTimeout(() => {
        dispatch({ type: "contact/reset" });
      }, 3000);
    } catch (err) {
      toast.error(err.message);
      dispatch({ type: "contact/error", payload: err.message });
    }
  };

  const inputClass = (field) =>
    `w-full bg-white/5 border ${
      formErrors[field] ? "border-red-500" : "border-white/10"
    } rounded-lg px-4 py-3 font-body text-sm text-white placeholder-netflix-gray/50 focus:outline-none focus:border-accent transition-colors duration-200`;

  return (
    <section id="contact" className="py-24" aria-label="Contact section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={animRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* LEFT */}
          <div>
            <p className="section-subtitle">Get in touch</p>
            <h2 className="section-title mb-6">Contact Me</h2>

            <div className="space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <Icon /> {value}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="glass rounded-xl p-6">
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={inputClass("name")}
              />
              {formErrors.name && <p>{formErrors.name}</p>}

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={inputClass("email")}
              />
              {formErrors.email && <p>{formErrors.email}</p>}

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={inputClass("message")}
              />
              {formErrors.message && <p>{formErrors.message}</p>}

              <button disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {error && <p>{error}</p>}
              {success && <p>Message sent!</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
