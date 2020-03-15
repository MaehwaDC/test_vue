// https://github.com/kmamykin/react-media-hoc
import json2mq from 'json2mq';

const createMediaQueries = mediaSpec =>
  Object.keys(mediaSpec).map(key => {
    const stringMediaQuery =
      typeof mediaSpec[key] === 'object'
        ? json2mq(mediaSpec[key])
        : mediaSpec[key];
    const mdl = window.matchMedia(stringMediaQuery);
    return {
      key,
      initialValue: mdl.matches,
      subscribe: onChange => {
        const handler = e => {
          onChange({ [key]: e.matches });
        };
        mdl.addListener(handler);
        return () => mdl.removeListener(handler);
      },
    };
  });

const initialState = queries =>
  queries.reduce((state, query) => {
    const stateInstance = state;
    stateInstance[query.key] = query.initialValue;
    return stateInstance;
  }, {});

const createMediaSubscription = mediaSpec => ({
  subscribe: onMediaChange => {
    const queries = createMediaQueries(mediaSpec);
    onMediaChange(initialState(queries));
    const unsubscribes = queries.map(query => query.subscribe(onMediaChange));
    return () => {
      unsubscribes.forEach(fn => fn());
    };
  },
});

const defaultMediaSpec = { isMobile: { maxWidth: '767px' } };
export default (mediaSpec = defaultMediaSpec) => ({
  data() {
    return {
      unsubscribe() {},
      media: {},
    };
  },
  mounted() {
    const subscription = createMediaSubscription(mediaSpec);
    this.unsubscribe = subscription.subscribe(s => (this.media = s));
  },
  beforeDestroy() {
    this.unsubscribe();
  },
});
