import data from '../../data.json';

const getPopularTags = (data) => {
  const obj = {};

  const output = [];

  for (let i = 0; i < data.length; i++) {
    if (!obj[data[i].attributes?.type]) {
      obj[data[i].attributes?.type] = 1;
    } else {
      obj[data[i].attributes?.type]++;
    }
  }

  for (let key in obj) {
    output.push({ category: key, count: obj[key] });
  }

  return output
    .filter(
      (item) => item.category !== '' && item.category !== 'Protocol DAO, DeFi'
    )
    .sort((a, b) => b.count - a.count)
    .slice(0, 4);
};

export const tags = getPopularTags(data);
