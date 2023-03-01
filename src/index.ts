export * from './components';
export * from './constants';
export * from './config';
export * from './typings.interface';

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

// make it work with --isolatedModules
export default {};
