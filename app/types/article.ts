import { Key, ReactNode } from "react";
import {
  NEWS_API_SOURCE,
  NYT_API_SOURCE,
  THE_GUARDIAN_API_SOURCE,
} from "../data/constants";

export interface GuardianArticle {
  section: string;
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  fields: {
    byline: string;
    thumbnail: string;
    trailText: string;
    bodyText: string;
  };
}

export interface NewsAPIArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export interface NYTArticle {
  type_of_material: ReactNode;
  snippet: string;
  _id: Key | null | undefined;
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: Multimedia[];
  short_url: string;
}

type GuardianArticleType = {
  source: typeof THE_GUARDIAN_API_SOURCE;
  articles: GuardianArticle[];
};

type NYTArticleType = {
  source: typeof NYT_API_SOURCE;
  articles: NYTArticle[];
};

type NewsAPIArticleType = {
  source: typeof NEWS_API_SOURCE;
  articles: NewsAPIArticle[];
};

export type ArticleType =
  | GuardianArticleType
  | NYTArticleType
  | NewsAPIArticleType;

export type SelectOptionType = {
  label: string;
  value: string;
};
