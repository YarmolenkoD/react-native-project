import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Profile: {
            screens: {
              Profile: 'profile',
            },
          },
          Search: {
            screens: {
              Search: 'search',
            },
          },
        },
      },
      First: 'first',
      FirstSignUp: 'first-sign-up',
      SecondSignUp: 'second-sign-up',
      Login: 'login',
      NotFound: '*',
    },
  },
}
