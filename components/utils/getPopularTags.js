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

export let hotTags = ["💰 DeFi", "💹 Investment", "👥 Social"]
export let alltags = [
  "📈 Analytics",

  "🖼️ Art",

  "🏢 City",

  "🕺🏻 Culture",

  "🛠️ DAO Tool",

  "👩‍💻 Developers",

  "📚 Education",

  "🎪 Events / Experiences",

  "🔮 Future Of Work",

  "🎮 Gaming",

  "🌱 Incubator",

  "🏗️ Infrastructure",

  "🪄 Metaverse",

  "🎵 Music",

  "🖼️ NFTs",

  "⛳️ P2E",

  "💜 Public Good Funding",

  "🌎 Real World Asset Purchase",

  "🔬 Research",

  "🧪 Science",

  "⚽️ Sports",

  "🏕️ Sustainability",

  "🗃️ Venture",

  "💲 Grants",];