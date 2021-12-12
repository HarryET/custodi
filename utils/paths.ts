export const paths = {
  login: () => '/login',
  accountSettings: () => '/account',
  overview: () => '/app',
  projectOverview: (projectId: number) => `/app/projects/${projectId}`,
}
