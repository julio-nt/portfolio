const useFormat = (type: "number") => {
  const formatPhoneNumber = (phoneNumber: string): string => {
    return phoneNumber.replace(/\D/g, "");
  };

  return { formatPhoneNumber };
};

export default useFormat;
