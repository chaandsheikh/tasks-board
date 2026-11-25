export type Task = { id: number; title: string; owner: string; done: boolean }

export const TASKS: Task[] = [
  { id: 1, title: 'Write the release notes', owner: 'Emma', done: true },
  { id: 2, title: 'Fix the login timeout', owner: 'Jack', done: false },
  { id: 3, title: 'Plan the team retro', owner: 'Olivia', done: false },
]
