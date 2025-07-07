import { useState, useEffect } from "react";
import { MapboxApi } from "../services/mapboxApi";

export const useMapboxStudio = ({
  datasetId,
  styleId,
  autoFetch = true,
} = {}) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data từ Mapbox Dataset
  const fetchDatasetData = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const data = await MapboxApi.getDatasetFeatures(id);
      setLocations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch data");
      console.error("Error fetching dataset:", err);
    } finally {
      setLoading(false);
    }
  };

  // Upload data lên Mapbox Dataset
  const uploadToDataset = async (id, data) => {
    setLoading(true);
    setError(null);

    try {
      await MapboxApi.uploadToDataset(id, data);
      // Refresh data sau khi upload
      await fetchDatasetData(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload data");
      console.error("Error uploading to dataset:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filter locations theo categories
  const getLocationsByCategories = (categories) => {
    return locations.filter((location) =>
      categories.includes(location.category)
    );
  };

  // Auto fetch khi component mount
  useEffect(() => {
    if (autoFetch && datasetId) {
      fetchDatasetData(datasetId);
    }
  }, [datasetId, autoFetch]);

  return {
    locations,
    loading,
    error,
    fetchDatasetData,
    uploadToDataset,
    getLocationsByCategories,
    refetch: () => datasetId && fetchDatasetData(datasetId),
  };
};
