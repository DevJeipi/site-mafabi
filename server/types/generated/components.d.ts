import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'shared.card-content', true>;
    heading: Schema.Attribute.RichText;
    paragraph: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files', true>;
    imageAbove: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    links: Schema.Attribute.Component<'shared.link', true>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksMission extends Struct.ComponentSchema {
  collectionName: 'components_blocks_missions';
  info: {
    displayName: 'Mission';
  };
  attributes: {
    heading: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksValues extends Struct.ComponentSchema {
  collectionName: 'components_blocks_values';
  info: {
    displayName: 'Values';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    values: Schema.Attribute.Component<'shared.value-card', true>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Itemsnav: Schema.Attribute.Component<'shared.logo-link', true>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    socialLink: Schema.Attribute.Component<'shared.logo-link', false>;
  };
}

export interface SharedCardContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_contents';
  info: {
    displayName: 'Card Content';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeadingSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_heading_sections';
  info: {
    displayName: 'Heading Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedValueCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_value_cards';
  info: {
    displayName: 'ValueCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    iconColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cards': BlocksCards;
      'blocks.hero': BlocksHero;
      'blocks.mission': BlocksMission;
      'blocks.values': BlocksValues;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.card-content': SharedCardContent;
      'shared.heading-section': SharedHeadingSection;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.value-card': SharedValueCard;
    }
  }
}
