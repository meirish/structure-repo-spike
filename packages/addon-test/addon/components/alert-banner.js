import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/alert-banner';

const messageTypes = {
  info: {
    class: 'is-info',
    glyphClass: 'has-text-info',
    glyph: 'info-circle-fill',
    text: 'Info',
  },
  success: {
    class: 'is-success',
    glyphClass: 'has-text-success',
    glyph: 'check-circle-fill',
    text: 'Success',
  },
  danger: {
    class: 'is-danger',
    glyphClass: 'has-text-danger',
    glyph: 'cancel-square-fill',
    text: 'Error',
  },
  warning: {
    class: 'is-highlight',
    glyphClass: 'has-text-highlight',
    glyph: 'alert-triangle',
    text: 'Warning',
  },
};

/**
 * @module AlertBanner
 * `AlertBanner` components are used to inform users of important messages.
 *
 * @example
 * ```js
 * <AlertBanner @type="danger" @message="{{model.keyId}} is not a valid lease ID"/>
 * ```
 *
 * @param type=null {String} - The banner type. This comes from the message-types helper.
 * @param [message=null {String}] - The message to display within the banner.
 * @param [title=null {String}] - A title to show above the message. If this is not provided, there are default values for each type of alert.
 *
 */

export default Component.extend({
  layout,
  type: 'info',
  message: null,
  title: null,
  yieldWithoutColumn: false,
  classNameBindings: ['containerClass'],

  containerClass: computed('type', function() {
    return 'message ' + messageTypes[this.type].class;
  }),

  alertType: computed('type', function() {
    return messageTypes[this.type];
  }),
});
