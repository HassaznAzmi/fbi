export const getMostWanted = async () => {
  const resp = await fetch(
    "https://api.fbi.gov/@wanted?sort_on=modified&sort_order=desc"
  );
  return await resp.json();
};

export const getMostWantedPerson = async (id) => {
  const resp = await fetch(`https://api.fbi.gov/@wanted-person/${id}`);
  return await resp.json();
};

export const getArtCrimes = async () => {
  const resp = await fetch("https://api.fbi.gov/@artcrimes");
  return await resp.json();
};

export const getArtCrime = async (id) => {
  const resp = await fetch(`https://api.fbi.gov/@artcrimes/${id}`);
  return await resp.json();
};
