import { useState, useEffect } from "react";
import { LocationApi } from "../services/locationApi";

export const useLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const data = await LocationApi.getAllLocations();
        setLocations(data);
      } catch (err) {
        setError("Failed to fetch locations");
        console.error("Error fetching locations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const getLocationsByCategory = (category) => {
    return locations.filter((location) => location.category === category);
  };

  return {
    locations,
    loading,
    error,
    getLocationsByCategory,
  };
};
