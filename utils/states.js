const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllStates = async () => {
  const res = await fetch(`${baseUrl}/states`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch all states');
  }

  return res.json();
};
