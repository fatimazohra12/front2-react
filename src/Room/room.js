import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./room.css";

// Importation des images
import chambre1 from "../img/chambre1.webp";
import chambre2 from "../img/chambre2.jpg";
import chambre3 from "../img/chambre3.jpeg";
import chambre4 from "../img/chambre4.jpg";
import chambre5 from "../img/chambre5.jpg";

const hotels = [
  {
    id: 1,
    name: "The Trafalgar",
    address: "2 Spring Gardens, London SW1A 2TS",
    image: chambre1,
  },
  {
    id: 2,
    name: "Hotel London Allocation",
    address: "25 King Charles Street, London SW1A 2",
    image: chambre2,
  },
  {
    id: 3,
    name: "London Leicester Square",
    address: "1 Leicester Place, Leicester Square, London WC2H 7BP",
    image: chambre3,
  },
  {
    id: 4,
    name: "Premier Inn London",
    address: "2 Docklands, London E16 1FR",
    image: chambre4,
  },
  {
    id: 5,
    name: "Travelodge London Central",
    address: "12 High Street, London WC1N 1DR",
    image: chambre5,
  },
];

function SearchRooms() {
  const [searchTerm, setSearchTerm] = useState(""); // État pour stocker la saisie de recherche
  const [selectedHotel, setSelectedHotel] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Met à jour l'état à chaque saisie
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici une action si nécessaire, par ex. un appel API
    console.log(`Recherche lancée pour : ${searchTerm}`);
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReserveClick = (id) => {
    setSelectedHotel(selectedHotel === id ? null : id);
  };

  const handleBookNow = (id) => {
    navigate("/reservation");
  };

  return (
    <div className="search-rooms-container">
      <h2>Rechercher des Chambres</h2>
      <form className="search-bar" onSubmit={handleSearchClick}>
        <input
          type="text"
          placeholder="Ville ou hôtel"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">
          Rechercher
        </button>
      </form>

      <div className="hotel-list">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-item">
              <img src={hotel.image} alt={`${hotel.name} thumbnail`} />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.address}</p>
              </div>
              <div className="hotel-actions">
                <button
                  className="reserve-button"
                  onClick={() => handleReserveClick(hotel.id)}
                >
                  ▼
                </button>
                {selectedHotel === hotel.id && (
                  <button
                    className="book-now-button"
                    onClick={() => handleBookNow(hotel.id)}
                  >
                    Réserver maintenant
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Aucun hôtel trouvé pour votre recherche.</p>
        )}
      </div>
    </div>
  );
}

export default SearchRooms;
