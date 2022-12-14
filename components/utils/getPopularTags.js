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

export let hotTags = ["๐ฐ DeFi", "๐น Investment", "๐ฅ Social"]
export let alltags = [
  "๐ Analytics",

  "๐ผ๏ธ Art",

  "๐ข City",

  "๐บ๐ป Culture",

  "๐ ๏ธ DAO Tool",

  "๐ฉโ๐ป Developers",

  "๐ Education",

  "๐ช Events / Experiences",

  "๐ฎ Future Of Work",

  "๐ฎ Gaming",

  "๐ฑ Incubator",

  "๐๏ธ Infrastructure",

  "๐ช Metaverse",

  "๐ต Music",

  "๐ผ๏ธ NFTs",

  "โณ๏ธ P2E",

  "๐ Public Good Funding",

  "๐ Real World Asset Purchase",

  "๐ฌ Research",

  "๐งช Science",

  "โฝ๏ธ Sports",

  "๐๏ธ Sustainability",

  "๐๏ธ Venture",

  "๐ฒ Grants",];