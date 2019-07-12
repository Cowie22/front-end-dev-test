// Ensures that the each day has the proper color and icon
// Depending on weather data from the API

export const weatherType = {
  Rain: {
    color: 'rgba(0, 91, 234, 0.5)',
    title: 'Raining',
    subtitle: 'Get a cup of coffee',
    icon: 'RainIcon'
  },
  Clear: {
    color: 'rgba(247, 183,	51, 0.5)',
    title: 'Sunny',
    subtitle: 'It is hurting my eyes',
    icon: 'ClearIcon'
  },
  Thunderstorm: {
    color: 'rgba(97, 97, 97, 0.5)',
    title: 'Thunder/Lighting',
    subtitle: 'Because Gods are angry',
    icon: 'ThunderstormIcon'
  },
  Clouds: {
    color: 'rgba(194, 191, 186, 0.5)',
    title: 'Cloudy',
    subtitle: 'Everywhere',
    icon: 'CloudsIcon'
  },
  Snow: {
    color: 'rgba(0, 210, 255, 0.5)',
    title: 'Snowing',
    subtitle: 'Get out and build a snowman for me',
    icon: 'SnowIcon'
  },
  Drizzle: {
    color: 'rgba(7, 101, 133, 0.5)',
    title: 'Drizzle',
    subtitle: 'Partially raining...',
    icon: 'DrizzleIcon'
  },
  Haze: {
    color: 'rgba(102, 166, 255, 0.5)',
    title: 'Hazy',
    subtitle: 'Another name for Partial Raining',
    icon: 'HazeIcon'
  },
  Mist: {
    color: 'rgba(60, 211, 173, 0.5)',
    title: 'Misty',
    subtitle: "Don't roam in forests!",
    icon: 'MistIcon'
  }
};