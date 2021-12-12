export interface ProjectType {
  id: number
  sort_name: string
  long_name: string
  icon_hash: string
}

export interface PublicUser {
  id?: number
  account_id?: string
  first_name?: string
  avatar_hash?: string
}

export interface User {
  id: number
  account_id: string
  first_name?: string
  last_name?: string
  email: string
  avatar_hash?: string
  created_at: string
}

export interface Organization {
  id: number
  name: string
  timezone: string
  owner_id: number
  created_at: string
  users?: User
}

export interface OrganizationWithProjects extends Organization {
  projects: Project[]
}

export interface Member {
  id: number
  organization_id: number
  user_id: number
  role: 'ADMIN' | 'DEVELOPER'
  joined_at: string
  organizations?: Organization
  users?: User
}

export interface Project {
  id: number
  name: string
  type?: number
  api_key: string
  api_key_generated_at: string
  created_at: string
  organization_id: number
  project_types?: ProjectType
  organizations?: Organization
  event_groups: EventGroup[]
}

export interface Transaction {
  id: number
  project_id: number
  client: Record<string, string>
  meta: Record<string, string>
  assigned_to?: number /* foreign key to users.id */
  received_at: string
  projects?: Project
  users?: User
}

export interface EventGroup {
  id: number
  created_at: string
  updated_at: string
  project_id?: number
  title: string
  trace: string
  type?: Record<string, string>
  meta?: Record<string, string>
  projects?: Project
}

export interface TransactionNode {
  id: number
  transaction_id: number
  node_type: string
  custom_id?: string
  custom_type?: string
  meta: Record<string, string>
  received_at: string
  transactions?: Transaction
}

export interface Event {
  id: number
  created_at: string
  updated_at: string
  event_group_id?: number
  title: string
  trace: string
  type?: string
  meta?: Record<string, string>
  client?: Record<string, string>
  event_groups?: EventGroup
}
