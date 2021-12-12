export const paths = {
  login: () => '/login',
  accountSettings: () => '/account',
  overview: () => '/app',
  projectOverview: (projectId: string) => `/app/projects/${projectId}`,
}
