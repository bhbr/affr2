import { vertexIsCloseTo, vertexEquals } from '../vertex.js';
import { AssertionTest, BundledTest } from '@bhbr/tsts';
export const vertexTest = new BundledTest({
    name: 'Vertex test',
    subtests: [
        new AssertionTest({
            name: 'A vertex is close to itself',
            function: function () {
                let v = [1, 2];
                return vertexIsCloseTo(v, v);
            }
        }),
        new AssertionTest({
            name: 'A vertex equals itself',
            function: function () {
                let v = [1, 2];
                return vertexEquals(v, v);
            }
        }),
    ]
});
vertexTest.run();
//# sourceMappingURL=affr2_tests.js.map