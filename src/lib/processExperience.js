const getHeading = (experience) => {
  const {
    name, location, date, dates, role, team, url,
  } = experience;

  return [name, location, date, role, team, url]
    .concat(dates ? dates.join(' - ') : null)
    .filter(x => x)
    .join(' |\u200B ');
};

const processExperience = (experience) => {
  const { description, roles } = experience;
  const processedRoles = roles ? roles.map(processExperience) : null;

  return {
    description,
    name: getHeading(experience),
    bullets: experience.bullets || null,
    roles: processedRoles,
  };
};

export default processExperience;
