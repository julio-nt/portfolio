interface IData {
  title: string;
  subtitle: string;
  topics: ITopic[];
}

interface ITopic {
  description: string;
  icon: string;
}

const data: IData = {
  title: 'Júlio Nunes',
  subtitle: 'Front End Developer - Web | Mobile',
  topics: [
    {
      description: 'React',
      icon: 'logos:react',
    },
    {
      description: 'React Native',
      icon: 'devicon:reactnative-wordmark',
    },
    {
      description: 'TypeScript',
      icon: 'devicon:typescript',
    },
    {
      description: 'Node.js',
      icon: 'devicon:nodejs',
    },
    {
      description: 'Expo',
      icon: 'file-icons:expo',
    },
    {
      description: 'Git Flow',
      icon: 'devicon:git',
    },
    {
      description: 'Tailwind',
      icon: 'devicon:tailwindcss',
    },
    {
      description: 'Responsiviness',
      icon: 'mdi:responsive',
    },
    // {
    //   description: 'Kanban Development',
    //   icon: 'ph:kanban',
    // },
  ],
};

export { data };
