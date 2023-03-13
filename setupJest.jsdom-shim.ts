import { TextDecoder, TextEncoder } from 'util'

(global as any).TextDecoder = TextDecoder
global.TextEncoder = TextEncoder

Object.defineProperty(global, 'crypto', {
  writable: true,
  configurable: true,
  value: {
    // fairly chosen by die roll... (nobody cares in tests)
    randomUUID: () => '64e90258-a428-495d-842b-22cd3246db1e',
  },
})

// We need the viewport for our <MaxHeightBox> and it is also nice to have a
// viewport for @testing-library/react. Defining it here saves us sensless
// debugging odysseys, because the error Jest throws if you forget setting this
// is most unhelpful (makes you wonder if you forgot to setup useESM for
// ts-jest).
Object.defineProperty(window, 'visualViewport', {
  writable: true,
  configurable: true,
  value: {
    height: 800,
    width: 600,
  },
})
