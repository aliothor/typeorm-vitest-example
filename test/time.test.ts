import { it } from 'vitest'

it('iterator', () => {
    const iterable1: any = {};

    iterable1[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };

    console.log([...iterable1]);
})


