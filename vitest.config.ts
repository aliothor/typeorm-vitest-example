import { defineConfig } from 'vitest/config'
import { swc } from 'rollup-plugin-swc3';

export default defineConfig({
    esbuild: false,
    plugins: [
        swc({
            jsc: {
                // target: 'esnext',
                parser: {
                    syntax: 'typescript',
                    dynamicImport: true,
                    decorators: true,
                },
                transform: {
                    legacyDecorator: true,
                    decoratorMetadata: true,
                },
            },
        }),
    ],
    test: {
        testTimeout: 10 * 60 * 1000,
    },
})