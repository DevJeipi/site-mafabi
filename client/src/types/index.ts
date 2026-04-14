export type TImage = {
  id: number;
  documentId: number;
  url: string;
  alternativeText: string | null;
};

export type TLink = {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
  isButtonLink: boolean;
  type: string | null;
};

export type TLogoLink = {
  id: number;
  label: string;
  href: string;
  isExternal: boolean;
  image: TImage | null;
};

export type TSocialLink = {
  id: number;
  label: string;
  href: string;
  isExternal: boolean;
  image: TImage | null;
};

export type TBanner = {
  id: number;
  isVisible: boolean;
  description: string;
  link: TLink;
};

export type THeroBlock = {
  heading: string;
  text: string;
  links: TLink[];
  image: TImage[];
  imageAbove: TImage | null;
};

export type TMissionBlock = {
  heading?: string;
  text?: string;
  quote?: string;
};

export type TValueCard = {
  title?: string;
  description?: string;
  icon?: string;
  iconColor?: string;
};

export type TValuesBlock = {
  heading?: string;
  description?: string;
  values?: TValueCard[];
};

export type TLandingPage = {
  titulo: string;
  descricao: string;
  blocks: Array<{ __component: string } & Partial<THeroBlock & TMissionBlock & TValuesBlock>>;
};

export type THeader = {
  id: number;
  logo: TLogoLink;
  Itemsnav: TLogoLink[];
  socialLink?: TLogoLink;
};

export type TFooter = {
  id: number;
  text: string;
  logo: TLogoLink;
  navItems: TLink[];
  socialLinks: TSocialLink[];
};
