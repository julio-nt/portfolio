interface IData {
  job: string;
  place: string;
  startDate: string;
  endDate: string;
  subtitle?: string;
  description?: string;
  topics: string[];
}

const data: IData[] = [
  {
    job: "Junior Developer",
    place: "Resolve Consultoria & Softwares",
    startDate: "09/2023",
    endDate: "Current",
    topics: [
      "Desenvolvimento de aplicações web front-end utilizando React.",
      "Desenvolvimento de aplicações móveis com React Native.",
      "Manutenção e aprimoramento de sistemas legados com PHP.",
      "Criação e implementação de APIs utilizando Node.js.",
      "Execução de operações de manipulação e consultas em bancos de dados MySQL e MSSQL.",
      "Elaboração de relatórios gerenciais e analíticos utilizando Power BI e Stimulsoft.",
    ],
  },
  {
    job: "Volunteer Developer",
    place: "Instituto Amazilia",
    startDate: "02/2023",
    endDate: "Current",
    topics: [
      "Responsável pelo desenvolvimento das páginas do website do instituto utilizando ReactJS, MUI e TypeScript, exceto pela página inicial, que já estava implementada.",
      "Refatoração completa do site, migrando a estrutura de ReactJS para Next.js, visando otimização e melhorias de performance.",
      "Implementação da integração com o Firebase para o recebimento e processamento de dados enviados pelos formulários do site, além do desenvolvimento de um script para sincronizar os dados do Firebase com o Google Sheets, organizando as informações de forma eficiente.",
      "Realizei a integração do Firebase para receber dados enviados dos formulários do site e fiz um script para o Google Sheet receber os dados do Firebase e organizar nas planilhas corretamente",
      "Desenvolvimento de um blog de notícias, utilizando o Notion como CMS e Google Drive para o armazenamento e gerenciamento de imagens.",
    ],
  },
];

export { data };
