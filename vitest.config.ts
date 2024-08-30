import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config.ts'

export default mergeConfig(viteConfig, defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        open: false,
        clearMocks: true,
        coverage:{
            exclude: [
                '**/*.tsx',
                '**/*.js',
                '**/*.d.ts',
                '*.d.ts',
                '**/testHelper.ts',
                '**/lazy.ts',
                '**/*.config.ts',
                '**/constants.ts',
                '**/styles.ts',
                '**/types.ts',
                "**/tests/**/*.spec.[jt]s?(x)",
                "**/tests/*.spec.[jt]s?(x)",
                'src/mock/**'
            ],
            reporter:['cobertura', 'text', 'json', 'html']
        },
        include: [
            "**/tests/**/*.spec.[jt]s?(x)",
            "**/tests/*.spec.[jt]s?(x)",
        ],
        globalSetup: './vitest-setup.js'
    }
}))