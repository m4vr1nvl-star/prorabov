import { useState } from "react";

export default function ContactForm({ variant = "default" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "",
    task: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phone = "+79138907262";
    const text = `Новая заявка с сайта:%0A%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AРайон: ${formData.district}%0A${formData.task ? `Задача: ${formData.task}%0A` : ""}${formData.message ? `Сообщение: ${formData.message}` : ""}`;
    
    window.open(`https://wa.me/${phone.replace(/\D/g, "")}?text=${text}`, "_blank");
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label" htmlFor="name">
          Имя
        </label>
        <input
          className="input"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Как к вам обращаться"
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="phone">
          Телефон
        </label>
        <input
          className="input"
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Ваш номер телефона"
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="district">
          Район
        </label>
        <input
          className="input"
          id="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="Сочи, Адлер, Дагомыс, Красная Поляна..."
          required
        />
      </div>
      {variant === "contact" ? (
        <div className="form-group">
          <label className="label" htmlFor="message">
            Кратко опишите задачу
          </label>
          <textarea
            className="textarea"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Например: нужны 2 разнорабочих на погрузку строительных материалов завтра к 10:00"
          />
        </div>
      ) : (
        <div className="form-group">
          <label className="label" htmlFor="task">
            {variant === "pricing" ? "Количество рабочих и смен" : "Какие работы нужны"}
          </label>
          <input
            className="input"
            id="task"
            value={formData.task}
            onChange={handleChange}
            placeholder={
              variant === "pricing"
                ? "Например: 2 разнорабочих на 3 смены"
                : "Погрузка, подсобные работы, помощь на стройке..."
            }
          />
        </div>
      )}
      <button className="btn-primary" type="submit">
        {variant === "contact" ? "Отправить" : variant === "pricing" ? "Рассчитать стоимость" : "Оставить заявку"}
      </button>
      <p className="hero-note" style={{ marginTop: 8 }}>
        Свяжемся с вами в течение 15–30 минут{variant === "contact" ? " в рабочее время" : ""}.
      </p>
    </form>
  );
}
