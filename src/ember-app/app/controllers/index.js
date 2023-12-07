import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba-kursacha.caption'),
          title: i18n.t('forms.application.sitemap.proba-kursacha.title'),
          children: [{
            link: 'i-i-s-proba-kursacha-должность-l',
            caption: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-должность-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proba-kursacha-карты-l',
            caption: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-карты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-карты-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-proba-kursacha-cотрудник-l',
            caption: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-cотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-cотрудник-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proba-kursacha-гость-l',
            caption: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-гость-l.caption'),
            title: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-гость-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-proba-kursacha-форма-регис-вх-l',
            caption: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-форма-регис-вх-l.caption'),
            title: i18n.t('forms.application.sitemap.proba-kursacha.i-i-s-proba-kursacha-форма-регис-вх-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})