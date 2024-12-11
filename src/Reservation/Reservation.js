import React, { useState } from "react";
import "./Reservation.css";

function Reservation() {
  const [formData, setFormData] = useState({
    NomComplet: "",
    address: "",
    email: "",
    hotel: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Réservation enregistrée avec succès !");
  };

  return (
    <div className="reservation-container">
      <form className="reservation-form" onSubmit={handleSubmit}>
        <h2>Formulaire de Réservation</h2>

        <div className="form-group">
          <label htmlFor="NomComplet">Nom Complet</label>
          <input
            type="text"
            id="NomComplet"
            name="NomComplet"
            placeholder="Votre Nom Complet"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Adresse</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Votre adresse"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemple@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hotel">Choisissez une chambre</label>
          <select
            id="hotel"
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez...</option>
            <option value="Hotel A"> 1 Pers</option>
            <option value="Hotel B"> 2 Pers</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="checkIn">Date début</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkOut">Date fin</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="adults">Adultes</label>
          <input
            type="number"
            id="adults"
            name="adults"
            min="1"
            value={formData.adults}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="children">Enfants</label>
          <input
            type="number"
            id="children"
            name="children"
            min="0"
            value={formData.children}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Enregistrer et continuer
        </button>
      </form>
    </div>
  );
}

export default Reservation;
