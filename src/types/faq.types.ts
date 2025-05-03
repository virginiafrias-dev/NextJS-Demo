export interface FAQPageType {
  id: number;
  documentId: string;
  title: string;
  body: Body[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug: string;
}

export interface Body {
  type: string;
  children: Child[];
}

export interface Child {
  type: string;
  text: string;
  bold?: boolean;
  italic?: boolean;
}
