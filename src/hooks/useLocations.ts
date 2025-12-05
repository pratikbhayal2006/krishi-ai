import { useState, useEffect, useCallback } from "react";
import {
  getStates,
  getDistricts,
  getTehsils,
  getVillages,
} from "@/services/locationService";

export const useLocations = () => {
  const [states, setStates] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [tehsils, setTehsils] = useState<string[]>([]);
  const [villages, setVillages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load states on mount
  useEffect(() => {
    setStates(getStates());
  }, []);

  // Load districts when state changes
  const loadDistricts = useCallback((state: string) => {
    setIsLoading(true);
    const districtList = getDistricts(state);
    setDistricts(districtList);
    setTehsils([]);
    setVillages([]);
    setIsLoading(false);
  }, []);

  // Load tehsils when district changes
  const loadTehsils = useCallback((district: string) => {
    setIsLoading(true);
    const tehsilList = getTehsils(district);
    setTehsils(tehsilList);
    setVillages([]);
    setIsLoading(false);
  }, []);

  // Load villages when tehsil changes
  const loadVillages = useCallback((tehsil: string) => {
    setIsLoading(true);
    const villageList = getVillages(tehsil);
    setVillages(villageList);
    setIsLoading(false);
  }, []);

  return {
    states,
    districts,
    tehsils,
    villages,
    isLoading,
    loadDistricts,
    loadTehsils,
    loadVillages,
  };
};
