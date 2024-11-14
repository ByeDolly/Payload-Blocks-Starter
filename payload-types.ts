/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    pages: Page;
    posts: Post;
    media: Media;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    posts: PostsSelect<false> | PostsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs?: {
    tasks: unknown;
    workflows?: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  pageBlocks?:
    | (
        | AccordionBlock
        | HeroBlock
        | SectionIntroBlock
        | CallToActionBlock
        | CardGridBlock
        | ContentMediaBlock
        | RichTextBlock
      )[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (number | null) | Media;
  };
  slug?: string | null;
  slugLock?: boolean | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AccordionBlock".
 */
export interface AccordionBlock {
  items: {
    heading: string;
    content: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    };
    content_html?: string | null;
    id?: string | null;
  }[];
  marginTop?: number | null;
  marginBottom?: number | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Accordion';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock".
 */
export interface HeroBlock {
  eyebrow?: string | null;
  heading: string;
  subheading?: string | null;
  buttons?:
    | {
        heroButton: {
          text: string;
          url: string;
          newWindow?: boolean | null;
          appearance?: ('link' | 'default' | 'outline') | null;
        };
        id?: string | null;
      }[]
    | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SectionIntroBlock".
 */
export interface SectionIntroBlock {
  heading: string;
  subheading?: string | null;
  text?: string | null;
  alignment?: ('left' | 'center') | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'SectionIntro';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CallToActionBlock".
 */
export interface CallToActionBlock {
  heading: string;
  subheading?: string | null;
  buttons?:
    | {
        ctaButton: {
          text: string;
          url: string;
          newWindow?: boolean | null;
          appearance?: ('link' | 'default' | 'outline') | null;
        };
        id?: string | null;
      }[]
    | null;
  theme?: ('light' | 'dark') | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'CallToAction';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CardGridBlock".
 */
export interface CardGridBlock {
  cards?:
    | {
        image?: (number | null) | Media;
        title: string;
        description?: string | null;
        cardLink?: {
          text?: string | null;
          url?: string | null;
          newWindow?: boolean | null;
          appearance?: ('link' | 'default' | 'outline') | null;
        };
        id?: string | null;
      }[]
    | null;
  columns?: ('2' | '3' | '4') | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'CardGrid';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContentMediaBlock".
 */
export interface ContentMediaBlock {
  image?: (number | null) | Media;
  heading: string;
  body: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  body_html?: string | null;
  buttons?:
    | {
        button: {
          text: string;
          url: string;
          newWindow?: boolean | null;
          appearance?: ('link' | 'default' | 'outline') | null;
        };
        id?: string | null;
      }[]
    | null;
  layout?: ('imageRight' | 'imageLeft') | null;
  theme?: ('light' | 'dark') | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ContentMedia';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichTextBlock".
 */
export interface RichTextBlock {
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  content_html?: string | null;
  width?: ('narrow' | 'default' | 'wide') | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'RichText';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: number;
  title: string;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  content_html?: string | null;
  excerpt?: string | null;
  featuredImage?: (number | null) | Media;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (number | null) | Media;
  };
  publishedAt?: string | null;
  authors?: (number | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  slug?: string | null;
  slugLock?: boolean | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'posts';
        value: number | Post;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  pageBlocks?:
    | T
    | {
        Accordion?:
          | T
          | {
              items?:
                | T
                | {
                    heading?: T;
                    content?: T;
                    content_html?: T;
                    id?: T;
                  };
              marginTop?: T;
              marginBottom?: T;
              id?: T;
              blockName?: T;
            };
        Hero?:
          | T
          | {
              eyebrow?: T;
              heading?: T;
              subheading?: T;
              buttons?:
                | T
                | {
                    heroButton?:
                      | T
                      | {
                          text?: T;
                          url?: T;
                          newWindow?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              marginTop?: T;
              marginBottom?: T;
              id?: T;
              blockName?: T;
            };
        SectionIntro?:
          | T
          | {
              heading?: T;
              subheading?: T;
              text?: T;
              alignment?: T;
              marginTop?: T;
              marginBottom?: T;
              id?: T;
              blockName?: T;
            };
        CallToAction?:
          | T
          | {
              heading?: T;
              subheading?: T;
              buttons?:
                | T
                | {
                    ctaButton?:
                      | T
                      | {
                          text?: T;
                          url?: T;
                          newWindow?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              theme?: T;
              marginTop?: T;
              marginBottom?: T;
              id?: T;
              blockName?: T;
            };
        CardGrid?:
          | T
          | {
              cards?:
                | T
                | {
                    image?: T;
                    title?: T;
                    description?: T;
                    cardLink?:
                      | T
                      | {
                          text?: T;
                          url?: T;
                          newWindow?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              columns?: T;
              marginTop?: T;
              marginBottom?: T;
              id?: T;
              blockName?: T;
            };
        ContentMedia?:
          | T
          | {
              image?: T;
              heading?: T;
              body?: T;
              body_html?: T;
              buttons?:
                | T
                | {
                    button?:
                      | T
                      | {
                          text?: T;
                          url?: T;
                          newWindow?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              layout?: T;
              theme?: T;
              marginTop?: T;
              marginBottom?: T;
              id?: T;
              blockName?: T;
            };
        RichText?:
          | T
          | {
              content?: T;
              content_html?: T;
              width?: T;
              marginTop?: T;
              marginBottom?: T;
              id?: T;
              blockName?: T;
            };
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        preview?: T;
      };
  slug?: T;
  slugLock?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  title?: T;
  content?: T;
  content_html?: T;
  excerpt?: T;
  featuredImage?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        preview?: T;
      };
  publishedAt?: T;
  authors?: T;
  populatedAuthors?:
    | T
    | {
        id?: T;
        name?: T;
      };
  slug?: T;
  slugLock?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}