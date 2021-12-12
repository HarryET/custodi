export const paths = {
  login: () => '/login',
  accountSettings: () => '/account',
  overview: () => '/app',
  projectOverview: (projectId: string | number) => `/app/projects/${projectId}`,
  docs: () => '/docs',
  events: (projectId: string | number) => `/app/projects/${projectId}/events`,
}
