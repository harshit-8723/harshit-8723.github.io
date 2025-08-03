import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Clear error if user fixes input
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const validateEmail = (email) => {
        const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        return pattern.test(email.toLowerCase());
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(formData.email)) {
            setErrors((prev) => ({
                ...prev,
                email: "Please enter a valid email address.",
            }));
            return;
        }

        // log data
        console.log("Form submitted:", formData);

        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            // Reset form
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.log("Email js error ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                Get in Touch
            </h3>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-xl p-6 text-white bg">
                {/* Contact Form */}
                <div className="bg-black p-5 rounded-xl border border-neutral-200">
                    <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
                        <div>
                            <label className="block text-sm mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-white/50 rounded-md outline-none text-white placeholder:text-white/50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-white/50 rounded-md outline-none text-white placeholder:text-white/50"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                placeholder="Type your message..."
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-white/50 rounded-md outline-none text-white placeholder:text-white/50"
                            ></textarea>
                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="mt-2 px-6 py-2 rounded-full border border-white bg-white text-black hover:bg-transparent hover:text-white transition hover:cursor-pointer"
                        >
                            <span className="flex gap-2 items-center">
                                {loading ? "Sending....." : "Send Message"} <FaArrowRight />
                            </span>
                        </button>
                    </form>
                </div>

                {/* Image on large screens */}
                <div className="hidden lg:flex items-center justify-center bg-black rounded-xl border border-neutral-200">
                    <img
                        src="./others/contact.jpg"
                        alt="Contact illustration"
                        className="h-full w-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
