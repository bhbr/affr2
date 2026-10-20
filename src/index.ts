

import { BetterObject } from '@bhbr/better-things'
import { vertex, vertexOrigin } from './vertex.js'

export { Transform } from './Transform.js'

export class DummyTransform extends BetterObject {

	angle: number

	// defaults(): object {
	// 	return {
	// 		angle: 0
	// 	}
	// }

}

export {
	vertex,
	vertexArray,
	isVertex,
	isVertexArray,
	vertexX,
	vertexY,
	vertexOrigin,
	vertexDot,
	vertexNorm2,
	vertexNorm,
	vertexIsCloseTo,
	vertexIsZero,
	vertexEquals,
	vertexArrayEquals,
	vertexCopyFrom,
	vertexUpdate,
	vertexCopy,
	vertexImageUnder,
	vertexApply,
	vertexTranslatedBy,
	vertexTranslateBy,
	vertexCentrallyRotatedBy,
	vertexRotatedBy,
	vertexCentrallyRotateBy,
	vertexRotateBy,
	vertexCentrallyScaledBy,
	vertexScaledBy,
	vertexCentrallyScaleBy,
	vertexNormalized,
	vertexNormalize,
	vertexAdd,
	vertexMultiply,
	vertexDivide,
	vertexOpposite,
	vertexSubtract,
	vertexIsNaN,
	vertexInterpolate,
	vertexArrayInterpolate,
	vertexToString,
	vertexInnerProduct,
	vertexOuterProduct,
	vertexArrayImageUnder
} from './vertex.js'
