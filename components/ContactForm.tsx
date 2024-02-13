"use client";

import { useState, FormEvent } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data successfully sent");
        toast.success("Tack! Vi återkommer så snart om möjligt");
        setFormData({
          name: "",
          email: "",
          tel: "",
          subject: "",
          message: "",
        });
      } else {
        console.log("Failed to send form data. PLease try again");
      }
    } catch (error) {
      toast.error("Wops! Något gick fel. Prova igen");
      console.error(
        `An error has occurred while sending the form data: ${error}`
      );
    }
  };

  return (
    <form onSubmit={onSubmit} id="contact">
      <fieldset className="form-group">
        <label htmlFor="name">Namn</label>
        <input
          className="form-control"
          name="name"
          type="text"
          required
          minLength={3}
          maxLength={100}
          autoComplete="off"
          placeholder="Fullständigt namn"
          value={formData.name}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="Email">Email</label>
        <input
          className="form-control"
          name="email"
          type="email"
          required
          minLength={3}
          maxLength={100}
          autoComplete="off"
          placeholder="Din epost adress"
          value={formData.email}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="PhoneNumber">Telefonnummer</label>
        <input
          className="form-control"
          name="tel"
          type="tel"
          minLength={3}
          maxLength={100}
          autoComplete="off"
          placeholder="Ditt telefonnummer"
          value={formData.tel}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="Subject">Rubrik</label>
        <input
          className="form-control"
          name="subject"
          type="text"
          minLength={3}
          maxLength={100}
          autoComplete="off"
          placeholder="Ämne"
          value={formData.subject}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="message">Meddelande</label>
        <textarea
          className="form-control"
          name="message"
          required
          placeholder="Skriv ditt meddelande..."
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </fieldset>
      <button type="submit" id="contact-submit">
        Skicka
      </button>
    </form>
  );
}
