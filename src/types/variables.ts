export type MapUsers = Record<number, string>

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type MapComments = {
  [key: number]: number
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export type NewPost = {
  id: number
  title: string
  userName: string
  commentsCount: number
}
