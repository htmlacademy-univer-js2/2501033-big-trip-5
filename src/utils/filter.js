export function generateFilterData(points) {
  const now = new Date();
  const everythingCount = points.length;

  const futureCount = points.filter(
    (p) => new Date(p.date_from) > now
  ).length;

  const pastCount = points.filter(
    (p) => new Date(p.date_to) < now
  ).length;

  const presentCount = points.filter(
    (p) => new Date(p.date_from) <= now && new Date(p.date_to) >= now
  ).length;

  return {
    everything: {
      name: 'Everything',
      count: everythingCount,
      isDisabled: (everythingCount === 0)
    },
    future: {
      name: 'Future',
      count: futureCount,
      isDisabled: (futureCount === 0)
    },
    present: {
      name: 'Present',
      count: presentCount,
      isDisabled: (presentCount === 0)
    },
    past: {
      name: 'Past',
      count: pastCount,
      isDisabled: (pastCount === 0)
    }
  };
}
