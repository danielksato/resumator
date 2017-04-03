
const getHeading = (experience) => {
  const {name, location, date, dates, role, team, url} = experience;

  return [name, location, date, role, team, url]
    .concat(dates ? dates.join(' - ') : null)
    .filter((x) => x)
    .join(' |\u200B ')
};

const getBullets = (experience) => {
  return experience.bullets || null;
};

const processExperience = (experience) => {
  const {description} = experience;
  const getRoles = (experience) => {
    return experience.roles ? experience.roles.map(processExperience) : null;
  }

  return {
    description,
    name: getHeading(experience),
    bullets: getBullets(experience),
    roles: getRoles(experience)
  };
};

export default processExperience;
