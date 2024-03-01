'use strict';

/**
 * college-predictor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::college-predictor.college-predictor');
