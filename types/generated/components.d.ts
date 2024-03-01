import type { Schema, Attribute } from '@strapi/strapi';

export interface CollegeHighlightsCollegeHighlights extends Schema.Component {
  collectionName: 'components_college_highlights_college_highlights';
  info: {
    displayName: 'college_highlights';
    description: '';
  };
  attributes: {
    campus_area: Attribute.Integer;
    approved_by: Attribute.String;
    institute_type: Attribute.String;
    accepted_entrance_exams: Attribute.String;
    cutoff: Attribute.String;
    established_year: Attribute.String;
  };
}

export interface FeesAndEligibilityFeesAndEligibility extends Schema.Component {
  collectionName: 'components_fees_and_eligibility_fees_and_eligibilities';
  info: {
    displayName: 'fees_and_eligibility';
  };
  attributes: {
    course: Attribute.String;
    fees: Attribute.Integer;
    eligibility: Attribute.String;
    application_date: Attribute.Date;
    action: Attribute.String;
  };
}

export interface PredictorHighlightsPredictorHighlights
  extends Schema.Component {
  collectionName: 'components_predictor_highlights_predictor_highlights';
  info: {
    displayName: 'predictor_highlights';
  };
  attributes: {
    established_year: Attribute.String;
    campus_area: Attribute.String;
    approved_by: Attribute.String;
    institute_type: Attribute.String;
    cutoff: Attribute.String;
    accepted_entrance_exams: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'college-highlights.college-highlights': CollegeHighlightsCollegeHighlights;
      'fees-and-eligibility.fees-and-eligibility': FeesAndEligibilityFeesAndEligibility;
      'predictor-highlights.predictor-highlights': PredictorHighlightsPredictorHighlights;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
