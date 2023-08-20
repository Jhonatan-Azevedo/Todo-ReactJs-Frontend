const useIsConnected = () => {
  return localStorage.getItem(
    `${process.env.REACT_APP_LOCALSTORAGE_MACADDRESS}`
  );
};

export default useIsConnected;
